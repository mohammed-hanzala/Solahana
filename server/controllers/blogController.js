import asyncHandler from '../utils/asyncHandler.js';
import ApiResponse from '../utils/ApiResponse.js';
import ApiError from '../utils/ApiError.js';
import Blog from '../models/Blog.js';

/**
 * @desc    Get all published blogs
 * @route   GET /api/blog
 * @access  Public
 */
export const getBlogs = asyncHandler(async (req, res) => {
  const blogs = await Blog.find({ isPublished: true }).sort({ publishedAt: -1 });
  res.status(200).json(new ApiResponse(200, { count: blogs.length, blogs }, 'Blogs retrieved successfully'));
});

/**
 * @desc    Get single blog by slug
 * @route   GET /api/blog/:slug
 * @access  Public
 */
export const getBlogBySlug = asyncHandler(async (req, res) => {
  const blog = await Blog.findOne({ slug: req.params.slug, isPublished: true });
  if (!blog) {
    throw new ApiError(404, 'Blog post not found');
  }
  res.status(200).json(new ApiResponse(200, blog, 'Blog post retrieved'));
});
