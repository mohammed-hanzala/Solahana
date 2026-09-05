import ApiError from '../utils/ApiError.js';

/**
 * Handle 404 Not Found Routes
 */
export const notFound = (req, res, next) => {
  const error = new ApiError(404, `API Route Not Found - ${req.originalUrl}`);
  next(error);
};

/**
 * Global Error Handler Middleware
 */
export const errorHandler = (err, req, res, next) => {
  let error = err;

  if (!(error instanceof ApiError)) {
    const statusCode = error.statusCode || (res.statusCode === 200 ? 500 : res.statusCode);
    const message = error.message || 'Internal Server Error';
    error = new ApiError(statusCode, message, [], err.stack);
  }

  const response = {
    statusCode: error.statusCode,
    success: false,
    message: error.message,
    errors: error.errors,
    ...(process.env.NODE_ENV === 'development' && { stack: error.stack }),
  };

  res.status(error.statusCode).json(response);
};
