import express from 'express';
import { subscribeNewsletter } from '../controllers/newsletterController.js';
import { validate } from '../middleware/validateMiddleware.js';
import { validateNewsletter } from '../validations/newsletterValidation.js';

const router = express.Router();

router.post('/subscribe', validate(validateNewsletter), subscribeNewsletter);

export default router;
