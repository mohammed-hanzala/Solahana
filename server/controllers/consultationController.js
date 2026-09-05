import asyncHandler from '../utils/asyncHandler.js';
import ApiResponse from '../utils/ApiResponse.js';
import ApiError from '../utils/ApiError.js';
import Consultation from '../models/Consultation.js';
import {
  sendConsultationBookedEmail,
  sendConsultationConfirmedEmail,
  sendConsultationCancelledEmail,
} from '../services/emailService.js';

/**
 * @desc    Book a new consultation
 * @route   POST /api/consultations
 * @access  Private (Authenticated Users)
 */
export const bookConsultation = asyncHandler(async (req, res) => {
  const {
    fullName,
    email,
    phone,
    city,
    goal,
    consultationMode,
    preferredDate,
    preferredTime,
    message,
  } = req.body;

  const consultation = await Consultation.create({
    user: req.user._id,
    fullName,
    email,
    phone,
    city: city || req.user.city || '',
    goal,
    consultationMode,
    preferredDate: new Date(preferredDate),
    preferredTime,
    message: message || '',
    status: 'Pending',
  });

  // Asynchronously dispatch booking confirmation email
  sendConsultationBookedEmail(consultation).catch((err) =>
    console.error('Failed to send booking email:', err.message)
  );

  res
    .status(201)
    .json(
      new ApiResponse(
        201,
        consultation,
        'Consultation booked successfully. Our advisory team will confirm your session shortly.'
      )
    );
});

/**
 * @desc    Get logged-in user's consultations
 * @route   GET /api/consultations/my
 * @access  Private (Authenticated Users)
 */
export const getMyConsultations = asyncHandler(async (req, res) => {
  const page = parseInt(req.query.page || '1', 10);
  const limit = parseInt(req.query.limit || '10', 10);
  const skip = (page - 1) * limit;

  const query = { user: req.user._id };

  if (req.query.status) {
    query.status = req.query.status;
  }

  const totalBookings = await Consultation.countDocuments(query);
  const consultations = await Consultation.find(query)
    .sort({ createdAt: -1 })
    .skip(skip)
    .limit(limit);

  res.status(200).json(
    new ApiResponse(
      200,
      {
        consultations,
        pagination: {
          totalBookings,
          totalPages: Math.ceil(totalBookings / limit) || 1,
          page,
          limit,
        },
      },
      'User consultations retrieved successfully'
    )
  );
});

/**
 * @desc    Cancel a pending consultation
 * @route   PATCH /api/consultations/:id/cancel
 * @access  Private (Authenticated User - Owner or Admin)
 */
export const cancelConsultation = asyncHandler(async (req, res) => {
  const consultation = await Consultation.findById(req.params.id);

  if (!consultation) {
    throw new ApiError(404, 'Consultation booking not found');
  }

  // Ensure ownership unless admin
  if (
    consultation.user.toString() !== req.user._id.toString() &&
    req.user.role !== 'admin' &&
    req.user.role !== 'advisor'
  ) {
    throw new ApiError(403, 'You are not authorized to cancel this booking');
  }

  if (consultation.status !== 'Pending') {
    throw new ApiError(
      400,
      `Cannot cancel consultation with status "${consultation.status}". Only Pending bookings can be cancelled.`
    );
  }

  consultation.status = 'Cancelled';
  await consultation.save();

  sendConsultationCancelledEmail(consultation).catch((err) =>
    console.error('Failed to send cancellation email:', err.message)
  );

  res
    .status(200)
    .json(new ApiResponse(200, consultation, 'Consultation cancelled successfully'));
});

/**
 * @desc    Get all consultations with search, filters & pagination
 * @route   GET /api/admin/consultations or GET /api/consultations/all
 * @access  Private (Admin / Advisor Only)
 */
export const getAllConsultations = asyncHandler(async (req, res) => {
  const page = parseInt(req.query.page || '1', 10);
  const limit = parseInt(req.query.limit || '10', 10);
  const skip = (page - 1) * limit;

  const query = {};

  // Filters
  if (req.query.status) {
    query.status = req.query.status;
  }
  if (req.query.goal) {
    query.goal = req.query.goal;
  }
  if (req.query.consultationMode) {
    query.consultationMode = req.query.consultationMode;
  }
  if (req.query.city) {
    query.city = { $regex: req.query.city, $options: 'i' };
  }
  if (req.query.date) {
    const searchDate = new Date(req.query.date);
    if (!isNaN(searchDate.getTime())) {
      const nextDate = new Date(searchDate);
      nextDate.setDate(nextDate.getDate() + 1);
      query.preferredDate = { $gte: searchDate, $lt: nextDate };
    }
  }

  // Search by keyword across name, email, phone, city, goal
  if (req.query.search && req.query.search.trim()) {
    const searchRegex = new RegExp(req.query.search.trim(), 'i');
    query.$or = [
      { fullName: searchRegex },
      { email: searchRegex },
      { phone: searchRegex },
      { city: searchRegex },
      { goal: searchRegex },
    ];
  }

  const totalBookings = await Consultation.countDocuments(query);
  const consultations = await Consultation.find(query)
    .populate('user', 'name email phone avatar')
    .sort({ createdAt: -1 })
    .skip(skip)
    .limit(limit);

  res.status(200).json(
    new ApiResponse(
      200,
      {
        consultations,
        pagination: {
          totalBookings,
          totalPages: Math.ceil(totalBookings / limit) || 1,
          page,
          limit,
        },
      },
      'All consultations retrieved successfully'
    )
  );
});

/**
 * @desc    Update consultation status, meeting link & admin notes
 * @route   PATCH /api/admin/consultations/:id/status
 * @access  Private (Admin / Advisor Only)
 */
export const updateConsultationStatus = asyncHandler(async (req, res) => {
  const { status, meetingLink, notes } = req.body;

  const consultation = await Consultation.findById(req.params.id);

  if (!consultation) {
    throw new ApiError(404, 'Consultation booking not found');
  }

  const prevStatus = consultation.status;

  if (status) consultation.status = status;
  if (meetingLink !== undefined) consultation.meetingLink = meetingLink;
  if (notes !== undefined) consultation.notes = notes;

  await consultation.save();

  // Send status update emails
  if (status === 'Confirmed' && prevStatus !== 'Confirmed') {
    sendConsultationConfirmedEmail(consultation).catch((err) =>
      console.error('Failed to send confirmation email:', err.message)
    );
  } else if (status === 'Cancelled' && prevStatus !== 'Cancelled') {
    sendConsultationCancelledEmail(consultation).catch((err) =>
      console.error('Failed to send cancellation email:', err.message)
    );
  }

  res
    .status(200)
    .json(new ApiResponse(200, consultation, 'Consultation updated successfully'));
});

/**
 * @desc    Delete a consultation booking
 * @route   DELETE /api/admin/consultations/:id
 * @access  Private (Admin Only)
 */
export const deleteConsultation = asyncHandler(async (req, res) => {
  const consultation = await Consultation.findById(req.params.id);

  if (!consultation) {
    throw new ApiError(404, 'Consultation booking not found');
  }

  await consultation.deleteOne();

  res
    .status(200)
    .json(new ApiResponse(200, {}, 'Consultation deleted successfully'));
});
