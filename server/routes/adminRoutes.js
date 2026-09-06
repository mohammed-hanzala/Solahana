import express from 'express';
import {
  getAllConsultations,
  updateConsultationStatus,
  deleteConsultation,
} from '../controllers/consultationController.js';
import {
  getAdminStats,
  getAllUsersAdmin,
  updateUserRole,
  deleteUserAdmin,
} from '../controllers/adminController.js';
import { protect } from '../middleware/authMiddleware.js';
import { admin } from '../middleware/adminMiddleware.js';
import { validate } from '../middleware/validateMiddleware.js';
import { updateStatusSchema } from '../validations/consultationValidation.js';

const router = express.Router();

// All routes here require authentication & Admin/Advisor role
router.use(protect, admin);

// Analytics Stats Endpoint
router.get('/stats', getAdminStats);

// Consultation Management Endpoints
router.get('/consultations', getAllConsultations);
router.patch('/consultations/:id/status', validate(updateStatusSchema), updateConsultationStatus);
router.delete('/consultations/:id', deleteConsultation);

// User Management Endpoints
router.get('/users', getAllUsersAdmin);
router.patch('/users/:id/role', updateUserRole);
router.delete('/users/:id', deleteUserAdmin);

export default router;
