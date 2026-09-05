import jwt from 'jsonwebtoken';
import asyncHandler from '../utils/asyncHandler.js';
import ApiError from '../utils/ApiError.js';
import User from '../models/User.js';

export const protect = asyncHandler(async (req, res, next) => {
  let token;

  if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
    token = req.headers.authorization.split(' ')[1];
  } else if (req.cookies && req.cookies.jwt) {
    token = req.cookies.jwt;
  }

  if (!token) {
    throw new ApiError(401, 'Authentication token missing. Please log in.');
  }

  try {
    const secret = process.env.JWT_SECRET || 'solahana_super_secret_jwt_key_2026_production';
    const decoded = jwt.verify(token, secret);

    const user = await User.findById(decoded.id).select('-password');

    if (!user) {
      throw new ApiError(401, 'User associated with this token no longer exists.');
    }

    if (user.isActive === false) {
      throw new ApiError(403, 'Your account has been deactivated. Please contact support.');
    }

    req.user = user;
    next();
  } catch (error) {
    if (error instanceof ApiError) throw error;
    throw new ApiError(401, 'Invalid or expired token. Please log in again.');
  }
});
