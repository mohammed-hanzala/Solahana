import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import helmet from 'helmet';
import cookieParser from 'cookie-parser';
import morgan from 'morgan';
import rateLimit from 'express-rate-limit';

import { notFound, errorHandler } from './middleware/errorMiddleware.js';

// Route Imports
import healthRoutes from './routes/healthRoutes.js';
import authRoutes from './routes/authRoutes.js';
import consultationRoutes from './routes/consultationRoutes.js';
import adminRoutes from './routes/adminRoutes.js';
import calculationRoutes from './routes/calculationRoutes.js';
import blogRoutes from './routes/blogRoutes.js';
import newsletterRoutes from './routes/newsletterRoutes.js';
import userRoutes from './routes/userRoutes.js';

dotenv.config();

const app = express();

// 1. Helmet Security Headers
app.use(helmet());

// 2. CORS Configuration
const allowedOrigins = [
  process.env.CLIENT_URL || 'http://localhost:5173',
  'http://localhost:5173',
  'http://127.0.0.1:5173',
];

app.use(
  cors({
    origin: (origin, callback) => {
      if (!origin || allowedOrigins.includes(origin)) {
        callback(null, true);
      } else {
        callback(null, true);
      }
    },
    credentials: true,
    methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization', 'X-Requested-With'],
  })
);

// 3. JSON & Body Parsers
app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ extended: true, limit: '10mb' }));

// 4. Cookie Parser
app.use(cookieParser());

// 5. Morgan Logger
if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
} else {
  app.use(morgan('combined'));
}

// Global Rate Limiter
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 300,
  standardHeaders: true,
  legacyHeaders: false,
  message: {
    status: 429,
    success: false,
    message: 'Too many requests from this IP, please try again after 15 minutes',
  },
});
app.use('/api', limiter);

// Root Endpoint
app.get('/', (req, res) => {
  res.json({
    message: 'Welcome to SOLAHANA Financial Advisory API',
    health: '/api/health',
    auth: '/api/auth',
  });
});

// 6. API Routes
app.use('/api/health', healthRoutes);
app.use('/api/auth', authRoutes);
app.use('/api/consultations', consultationRoutes);
app.use('/api/admin', adminRoutes);
app.use('/api/calculations', calculationRoutes);
app.use('/api/calculators', calculationRoutes);
app.use('/api/blog', blogRoutes);
app.use('/api/blogs', blogRoutes);
app.use('/api/newsletter', newsletterRoutes);
app.use('/api/newsletters', newsletterRoutes);
app.use('/api/users', userRoutes);

// 7. 404 & Global Error Middleware
app.use(notFound);
app.use(errorHandler);

export default app;
