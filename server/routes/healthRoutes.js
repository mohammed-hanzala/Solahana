import express from 'express';

const router = express.Router();

/**
 * @route   GET /api/health
 * @desc    Health Check Endpoint
 * @access  Public
 */
router.get('/', (req, res) => {
  res.status(200).json({
    status: 'healthy',
    environment: process.env.NODE_ENV || 'development',
    timestamp: new Date().toISOString(),
    version: '1.0.0',
    service: 'SOLAHANA Financial Advisory Backend Engine',
  });
});

export default router;
