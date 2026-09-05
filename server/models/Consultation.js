import mongoose from 'mongoose';

export const GOAL_ENUM = [
  'Dream Home',
  'Retirement Planning',
  'Tax Planning',
  'Investment Planning',
  'Emergency Fund',
  'Wealth Creation',
  'Child Education',
  'General Financial Planning',
];

export const MODE_ENUM = ['Video Call', 'Phone Call', 'Office Visit'];

export const STATUS_ENUM = ['Pending', 'Confirmed', 'Completed', 'Cancelled'];

const consultationSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: [true, 'User ID is required for consultation booking'],
    },
    fullName: {
      type: String,
      required: [true, 'Full name is required'],
      trim: true,
    },
    email: {
      type: String,
      required: [true, 'Email address is required'],
      lowercase: true,
      trim: true,
    },
    phone: {
      type: String,
      required: [true, 'Phone number is required'],
      trim: true,
    },
    city: {
      type: String,
      trim: true,
      default: '',
    },
    goal: {
      type: String,
      required: [true, 'Financial goal is required'],
      enum: {
        values: GOAL_ENUM,
        message: '{VALUE} is not a supported financial goal',
      },
    },
    consultationMode: {
      type: String,
      required: [true, 'Consultation mode is required'],
      enum: {
        values: MODE_ENUM,
        message: '{VALUE} is not a supported consultation mode',
      },
    },
    preferredDate: {
      type: Date,
      required: [true, 'Preferred date is required'],
    },
    preferredTime: {
      type: String,
      required: [true, 'Preferred time slot is required'],
      trim: true,
    },
    message: {
      type: String,
      trim: true,
      default: '',
    },
    status: {
      type: String,
      enum: {
        values: STATUS_ENUM,
        message: '{VALUE} is not a valid status',
      },
      default: 'Pending',
    },
    meetingLink: {
      type: String,
      trim: true,
      default: '',
    },
    notes: {
      type: String,
      trim: true,
      default: '',
    },
  },
  {
    timestamps: true,
  }
);

// Indexes for fast searching and sorting
consultationSchema.index({ user: 1, createdAt: -1 });
consultationSchema.index({ status: 1, createdAt: -1 });

const Consultation = mongoose.model('Consultation', consultationSchema);
export default Consultation;
