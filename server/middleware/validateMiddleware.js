import ApiError from '../utils/ApiError.js';

/**
 * Middleware wrapper for Zod validation schemas
 */
export const validate = (schema) => (req, res, next) => {
  try {
    const result = schema.safeParse(req.body);
    if (!result.success) {
      const formattedErrors = result.error.errors.map((err) => `${err.path.join('.')}: ${err.message}`);
      throw new ApiError(400, 'Validation Error', formattedErrors);
    }
    req.body = result.data;
    next();
  } catch (error) {
    next(error);
  }
};
