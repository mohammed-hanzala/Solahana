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
    .string({ required_error: 'Phone number is required' })
    .min(10, 'Phone number must be at least 10 digits'),

  city: z.string().optional().default(''),

  goal: z.enum(GOAL_ENUM, {
    required_error: 'Financial goal selection is required',
    invalid_type_error: 'Invalid financial goal selected',
  }),

  consultationMode: z.enum(MODE_ENUM, {
    required_error: 'Consultation mode selection is required',
    invalid_type_error: 'Invalid consultation mode selected',
  }),

  preferredDate: z.string({ required_error: 'Preferred date is required' }).refine(
    (val) => {
      const selected = new Date(val);
      return !isNaN(selected.getTime()) && selected >= today;
    },
    { message: 'Preferred date must be today or a future date' }
  ),

  preferredTime: z
    .string({ required_error: 'Preferred time slot is required' })
    .min(1, 'Please select a preferred time slot'),

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
