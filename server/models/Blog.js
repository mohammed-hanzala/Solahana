import mongoose from 'mongoose';

const blogSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, 'Please provide a blog title'],
      trim: true,
    },
    slug: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
    },
    summary: {
      type: String,
      required: [true, 'Please provide a summary'],
      trim: true,
    },
    content: {
      type: String,
      required: [true, 'Please provide content'],
    },
    category: {
      type: String,
      enum: ['Financial Planning', 'Tax Strategy', 'Retirement', 'Investments', 'Goal Planning'],
      default: 'Financial Planning',
    },
    author: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
    },
    coverImage: {
      type: String,
      default: '',
    },
    readTime: {
      type: String,
      default: '5 min read',
    },
    isPublished: {
      type: Boolean,
      default: true,
    },
    publishedAt: {
      type: Date,
      default: Date.now,
    },
  },
  {
    timestamps: true,
  }
);

const Blog = mongoose.model('Blog', blogSchema);
export default Blog;
