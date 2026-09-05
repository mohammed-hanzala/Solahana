import jwt from 'jsonwebtoken';

/**
 * Generate JWT Token & configure secure HTTP-Only Cookie
 */
const generateToken = (res, userId) => {
  const secret = process.env.JWT_SECRET || 'solahana_super_secret_jwt_key_2026_production';
  const expiresIn = process.env.JWT_EXPIRES_IN || '7d';

  const token = jwt.sign({ id: userId }, secret, {
    expiresIn,
  });

  const cookieDays = parseInt(process.env.JWT_COOKIE_EXPIRES_IN || '7', 10);
  const cookieOptions = {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: process.env.NODE_ENV === 'production' ? 'none' : 'lax',
    maxAge: cookieDays * 24 * 60 * 60 * 1000,
  };

  if (res) {
    res.cookie('jwt', token, cookieOptions);
  }

  return token;
};

export default generateToken;
