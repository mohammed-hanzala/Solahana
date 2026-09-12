import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  Search, 
  BookOpen, 
  Clock, 
  Calendar, 
  User, 
  ArrowRight, 
  Sparkles, 
  Mail, 
  CheckCircle2, 
  Loader2,
  TrendingUp,
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import blogService from '../../services/blogService';
import newsletterService from '../../services/newsletterService';

const CATEGORIES = [
  'All',
  'SIP & Mutual Funds',
  'Retirement Planning',
  'Tax Planning',
  'Wealth Creation',
  'Insurance',
  'Financial Literacy',
  'Market Insights',
];

export default function BlogsLandingPage() {
  const navigate = useNavigate();

  // State
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [activeCategory, setActiveCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  // Newsletter State
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);
  const [subscribing, setSubscribing] = useState(false);
  const [newsletterMsg, setNewsletterMsg] = useState('');

  // Fetch blogs
  const fetchBlogs = async () => {
    setLoading(true);
    setError('');
    try {
      const res = await blogService.getBlogs({
        category: activeCategory !== 'All' ? activeCategory : undefined,
        search: searchQuery || undefined,
        limit: 20,
      });

      if (res && res.blogs) {
        setBlogs(res.blogs);
      } else if (Array.isArray(res)) {
        setBlogs(res);
      } else {
        setBlogs([]);
      }
    } catch (err) {
      console.error('[Fetch Blogs Error]:', err);
      setError('Failed to load articles. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchBlogs();
  }, [activeCategory]);

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    fetchBlogs();
  };

  const handleNewsletterSubscribe = async (e) => {
    e.preventDefault();
    if (!newsletterEmail || !newsletterEmail.includes('@')) {
      setNewsletterMsg('Please enter a valid email address.');
      return;
    }
    setSubscribing(true);
    setNewsletterMsg('');
    try {
      await newsletterService.subscribe(newsletterEmail, 'blog_landing');
      setSubscribed(true);
      setNewsletterEmail('');
      setNewsletterMsg('Thank you for subscribing to SOLAHANA Wealth Insights!');
    } catch (err) {
      console.error('[Newsletter Error]:', err);
      setNewsletterMsg(err.response?.data?.message || 'Failed to subscribe. Please try again.');
    } finally {
      setSubscribing(false);
    }
  };

  const featuredBlog = blogs.find((b) => b.isFeatured) || blogs[0];
  const regularBlogs = blogs.filter((b) => b !== featuredBlog);

  return (
    <div className="min-h-screen pt-28 pb-24 bg-[#FAF8F5] text-[#0F172A] relative overflow-hidden text-left font-inter">
      {/* Background Soft Glow */}
      <div className="absolute top-10 left-1/3 w-[600px] h-[600px] bg-[#C89A4B]/10 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-12">
        
        {/* HEADER SECTION */}
        <div className="text-center space-y-4 max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full gold-badge text-xs font-sora font-semibold text-[#9A7326] uppercase tracking-widest"
          >
            <BookOpen className="w-3.5 h-3.5 text-[#C89A4B]" />
            <span>SOLAHANA JOURNAL</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="font-serif-luxury text-3xl sm:text-5xl font-bold tracking-tight text-[#0F172A] leading-tight"
          >
            Wealth & Financial Insights
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-base sm:text-lg text-[#475569] font-inter leading-relaxed"
          >
            Practical guides on goal planning, tax optimization, FIRE retirement structuring, and zero-commission investing in India.
          </motion.p>

          {/* SEARCH BAR */}
          <form onSubmit={handleSearchSubmit} className="max-w-xl mx-auto pt-4 flex items-center gap-3">
            <div className="relative flex-1">
              <Search className="w-4 h-4 text-[#94A3B8] absolute left-4 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Search articles on SIP, Tax, FIRE retirement..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-white border border-[#C89A4B]/30 focus:border-[#C89A4B] rounded-2xl py-3.5 pl-11 pr-4 text-sm text-[#0F172A] placeholder-[#94A3B8] focus:outline-none shadow-sm transition-colors"
              />
            </div>
            <button
              type="submit"
              className="gold-glow-button px-6 py-3.5 rounded-2xl text-xs font-bold text-white flex items-center gap-2 shrink-0 cursor-pointer shadow-md"
            >
              <span>Search</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </form>
        </div>

        {/* CATEGORY FILTER PILLS */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 pt-2 no-scrollbar justify-start sm:justify-center">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-xl text-xs font-semibold whitespace-nowrap transition-all cursor-pointer ${
                activeCategory === cat
                  ? 'bg-[#0F172A] text-white font-bold shadow-md'
                  : 'bg-white text-[#475569] hover:text-[#C89A4B] hover:bg-[#FAF8F5] border border-[#C89A4B]/20'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* FEATURED HERO ARTICLE */}
        {!loading && featuredBlog && activeCategory === 'All' && !searchQuery && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="group relative rounded-3xl bg-white border border-[#C89A4B]/30 p-6 sm:p-10 shadow-xl overflow-hidden grid grid-cols-1 lg:grid-cols-12 gap-8 items-center"
          >
            <div className="lg:col-span-7 space-y-5 text-left">
              <div className="flex items-center gap-3">
                <span className="px-3.5 py-1 rounded-full text-xs font-bold bg-[#C89A4B]/15 text-[#9A7326] border border-[#C89A4B]/30 font-sora">
                  FEATURED ARTICLE
                </span>
                <span className="px-3 py-1 rounded-full text-xs font-semibold bg-[#FAF8F5] text-[#64748B] border border-[#C89A4B]/20">
                  {featuredBlog.category}
                </span>
              </div>

              <h2
                onClick={() => navigate(`/blogs/${featuredBlog.slug}`)}
                className="text-2xl sm:text-4xl font-serif-luxury font-bold text-[#0F172A] group-hover:text-[#C89A4B] transition-colors cursor-pointer leading-tight"
              >
                {featuredBlog.title}
              </h2>

              <p className="text-sm sm:text-base text-[#475569] line-clamp-3 leading-relaxed font-inter">
                {featuredBlog.excerpt}
              </p>

              <div className="flex flex-wrap items-center gap-5 text-xs text-[#64748B] pt-2 font-inter">
                <span className="flex items-center gap-1.5">
                  <User className="w-3.5 h-3.5 text-[#C89A4B]" />
                  <span>{featuredBlog.authorName || 'SOLAHANA Editorial'}</span>
                </span>
                <span className="flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5 text-[#C89A4B]" />
                  <span>{featuredBlog.readTime || '5 min read'}</span>
                </span>
                <span className="flex items-center gap-1.5">
                  <Calendar className="w-3.5 h-3.5 text-[#C89A4B]" />
                  <span>{new Date(featuredBlog.publishedAt || featuredBlog.createdAt).toLocaleDateString()}</span>
                </span>
              </div>

              <button
                onClick={() => navigate(`/blogs/${featuredBlog.slug}`)}
                className="gold-glow-button px-6 py-3 rounded-full text-xs font-bold text-white inline-flex items-center gap-2 shadow-sm"
              >
                <span>Read Full Article</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

            <div className="lg:col-span-5 h-64 sm:h-80 rounded-2xl overflow-hidden shadow-md">
              <img
                src={featuredBlog.coverImage || 'https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?q=80&w=800'}
                alt={featuredBlog.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
          </motion.div>
        )}

        {/* LOADING STATE */}
        {loading && (
          <div className="py-20 text-center flex flex-col items-center justify-center space-y-3">
            <Loader2 className="w-8 h-8 text-[#C89A4B] animate-spin" />
            <p className="text-sm text-[#64748B]">Loading articles...</p>
          </div>
        )}

        {/* ERROR STATE */}
        {error && (
          <div className="py-12 text-center text-red-600 text-sm bg-red-50 p-4 rounded-xl border border-red-200">
            {error}
          </div>
        )}

        {/* REGULAR ARTICLES GRID */}
        {!loading && !error && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {(activeCategory === 'All' && !searchQuery ? regularBlogs : blogs).map((blog, idx) => (
              <motion.div
                key={blog._id || idx}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.05 }}
                whileHover={{ y: -6 }}
                onClick={() => navigate(`/blogs/${blog.slug}`)}
                className="group rounded-3xl bg-white border border-[#C89A4B]/20 hover:border-[#C89A4B] shadow-sm hover:shadow-xl transition-all cursor-pointer overflow-hidden flex flex-col justify-between"
              >
                <div>
                  <div className="h-48 overflow-hidden relative">
                    <img
                      src={blog.coverImage || 'https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?q=80&w=600'}
                      alt={blog.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <span className="absolute top-4 left-4 px-3 py-1 rounded-full text-[10px] font-bold bg-[#0F172A] text-white">
                      {blog.category}
                    </span>
                  </div>

                  <div className="p-6 space-y-3">
                    <h3 className="text-xl font-serif-luxury font-bold text-[#0F172A] group-hover:text-[#C89A4B] transition-colors leading-snug line-clamp-2">
                      {blog.title}
                    </h3>
                    <p className="text-xs text-[#475569] leading-relaxed line-clamp-3">
                      {blog.excerpt}
                    </p>
                  </div>
                </div>

                <div className="px-6 pb-6 pt-4 border-t border-[#C89A4B]/15 flex items-center justify-between text-xs text-[#64748B]">
                  <span className="flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5 text-[#C89A4B]" /> {blog.readTime || '4 min read'}
                  </span>
                  <span className="font-semibold text-[#0F172A] group-hover:text-[#C89A4B] flex items-center gap-1">
                    Read <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        )}

      </div>
    </div>
  );
}
