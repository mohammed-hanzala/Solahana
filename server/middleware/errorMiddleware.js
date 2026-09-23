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

  // Handle Mongoose Validation Errors
  if (err.name === 'ValidationError') {
    const message = Object.values(err.errors).map((val) => val.message).join(', ');
    error = new ApiError(400, message || 'Validation Error');
  }

  // Handle Mongoose Cast Errors (invalid ObjectIds)
  if (err.name === 'CastError') {
    error = new ApiError(400, `Invalid ID format: ${err.value}`);
  }

  if (!(error instanceof ApiError)) {
    const statusCode = error.statusCode && error.statusCode !== 200 ? error.statusCode : 500;
    const message = error.message || 'Internal Server Error';
    error = new ApiError(statusCode, message, [], err.stack);
  }

  const response = {
    statusCode: error.statusCode || 500,
    success: false,
    message: error.message || 'An error occurred',
    errors: error.errors || [],
    ...(process.env.NODE_ENV === 'development' && { stack: error.stack }),
  };

  res.status(error.statusCode || 500).json(response);
};
