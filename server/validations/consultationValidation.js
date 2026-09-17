import { z } from 'zod';
import { GOAL_ENUM, MODE_ENUM, STATUS_ENUM } from '../models/Consultation.js';

const today = new Date();
today.setHours(0, 0, 0, 0);

export const bookConsultationSchema = z.object({
  fullName: z
    .string({ required_error: 'Full name is required' })
    .min(2, 'Full name must be at least 2 characters'),

  email: z
    .string({ required_error: 'Email address is required' })
    .email('Please provide a valid email address'),

  phone: z
    .string({ required_error: 'Please enter a valid 10-digit Indian mobile number.' })
    .regex(/^[6-9][0-9]{9}$/, 'Please enter a valid 10-digit Indian mobile number.'),

  city: z.string().optional().default(''),

  goal: z.string().optional().default('Financial Planning'),

  consultationMode: z.string().optional().default('Phone Call'),

  preferredDate: z.string().optional().default(() => new Date().toISOString().split('T')[0]),

  preferredTime: z.string().optional().default('Morning (9 AM - 12 PM)'),

  message: z.string().optional().default(''),
});


export const updateStatusSchema = z.object({
  status: z.enum(STATUS_ENUM, {
    required_error: 'Status is required',
    invalid_type_error: 'Invalid consultation status',
  }),
  meetingLink: z.string().optional().default(''),
  notes: z.string().optional().default(''),
});
