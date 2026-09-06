import express from 'express';
import {
  getBlogs,
  getBlogBySlug,
  createBlog,
  updateBlog,
  deleteBlog,
} from '../controllers/blogController.js';
import { protect } from '../middleware/authMiddleware.js';
import { admin } from '../middleware/adminMiddleware.js';

const router = express.Router();

// Public Routes
router.get('/', getBlogs);
router.get('/:slug', getBlogBySlug);

// Admin Protected Routes
router.post('/', protect, admin, createBlog);
router.put('/:id', protect, admin, updateBlog);
router.delete('/:id', protect, admin, deleteBlog);

export default router;
