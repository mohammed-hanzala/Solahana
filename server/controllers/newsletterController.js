import asyncHandler from '../utils/asyncHandler.js';
import ApiResponse from '../utils/ApiResponse.js';
import ApiError from '../utils/ApiError.js';
import Newsletter from '../models/Newsletter.js';

/**
 * @desc    Subscribe to newsletter
 * @route   POST /api/newsletter/subscribe
 * @access  Public
 */
export const subscribeNewsletter = asyncHandler(async (req, res) => {
  const { email, source } = req.body;

  const existing = await Newsletter.findOne({ email });
  if (existing) {
    if (existing.status === 'subscribed') {
      return res.status(200).json(new ApiResponse(200, existing, 'Email is already subscribed'));
    }
    existing.status = 'subscribed';
    await existing.save();
    return res.status(200).json(new ApiResponse(200, existing, 'Resubscribed to newsletter successfully'));
  }

  const subscription = await Newsletter.create({
    email,
    source: source || 'website_footer',
  });

  res.status(201).json(new ApiResponse(201, subscription, 'Subscribed to Solahana Insights successfully'));
});
