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
  Filter,
  Loader2,
  TrendingUp,
  ShieldCheck,
  Award
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

      let blogsArray = [];
      if (Array.isArray(res)) {
        blogsArray = res;
      } else if (Array.isArray(res?.blogs)) {
        blogsArray = res.blogs;
      } else if (Array.isArray(res?.data?.blogs)) {
        blogsArray = res.data.blogs;
      } else if (Array.isArray(res?.data)) {
        blogsArray = res.data;
      }

      setBlogs(Array.isArray(blogsArray) ? blogsArray : []);
    } catch (err) {
      console.error('[Fetch Blogs Error]:', err);
      setError('Unable to load financial articles. Please check back shortly.');
      setBlogs([]);
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

  const handleSubscribe = async (e) => {
    e.preventDefault();
    if (!newsletterEmail || !newsletterEmail.includes('@')) return;
    setSubscribing(true);
    setNewsletterMsg('');
    try {
      const res = await newsletterService.subscribe(newsletterEmail, 'blog_landing');
      setSubscribed(true);
      setNewsletterMsg(res.message || 'Subscribed successfully!');
      setNewsletterEmail('');
    } catch (err) {
      setNewsletterMsg(err.response?.data?.message || 'Subscription failed. Try again.');
    } finally {
      setSubscribing(false);
    }
  };

  const featuredBlog = blogs.length > 0 ? blogs[0] : null;
  const regularBlogs = blogs.length > 1 ? blogs.slice(1) : blogs;

  return (
    <div className="pt-28 pb-24 min-h-screen bg-[#020B2D] text-[#F8F7F3]">
      
      {/* Background Decorative Blur Orbs */}
      <div className="absolute top-20 left-1/4 w-[600px] h-[600px] bg-[#C8A24A]/10 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute top-96 right-10 w-[500px] h-[500px] bg-[#071C48]/60 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-16">
        
        {/* HEADER SECTION */}
        <div className="text-center space-y-5 max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full gold-badge text-xs font-semibold text-[#E8C878] border border-[#C8A24A]/35 shadow-[0_0_15px_rgba(200,162,74,0.2)]"
          >
            <Sparkles className="w-3.5 h-3.5 text-[#E8C878]" />
            <span className="font-sora tracking-wide uppercase text-[11px]">SOLAHANA FINANCIAL INSIGHTS</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-5xl font-serif-luxury font-bold text-[#F8F7F3] tracking-tight leading-tight"
          >
            Empower Your Future with <br />
            <span className="gold-gradient-text italic font-serif-luxury">Fiduciary Financial Intelligence</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-base sm:text-lg text-[#BAC6DA] font-inter leading-relaxed"
          >
            Expert strategies on SIP compounding, tax optimization, retirement planning, and wealth preservation curated by SEBI registered advisors.
          </motion.p>

          {/* SEARCH BAR */}
          <form onSubmit={handleSearchSubmit} className="max-w-xl mx-auto pt-4 flex items-center gap-3">
            <div className="relative flex-1">
              <Search className="w-4 h-4 text-white/40 absolute left-4 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Search articles on SIP, Tax, FIRE retirement..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-[#071C48]/80 border border-[#C8A24A]/30 focus:border-[#C8A24A] rounded-2xl py-3.5 pl-11 pr-4 text-sm text-white placeholder-white/40 focus:outline-none backdrop-blur-md transition-colors"
              />
            </div>
            <button
              type="submit"
              className="gold-glow-button px-6 py-3.5 rounded-2xl text-xs font-bold text-[#020B2D] flex items-center gap-2 shrink-0 cursor-pointer shadow-lg"
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
                  ? 'bg-[#C8A24A] text-[#020B2D] font-bold shadow-[0_0_15px_rgba(200,162,74,0.4)] scale-105'
                  : 'bg-[#071C48]/60 text-[#BAC6DA] hover:text-white hover:bg-[#071C48] border border-[#C8A24A]/20'
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
            className="group relative rounded-3xl bg-gradient-to-br from-[#071C48]/90 via-[#041235]/90 to-[#071C48]/90 border border-[#C8A24A]/40 p-6 sm:p-10 shadow-2xl backdrop-blur-xl overflow-hidden grid grid-cols-1 lg:grid-cols-12 gap-8 items-center"
          >
            <div className="lg:col-span-7 space-y-5 text-left">
              <div className="flex items-center gap-3">
                <span className="px-3.5 py-1 rounded-full text-xs font-bold bg-[#C8A24A]/20 text-[#E8C878] border border-[#C8A24A]/40 font-sora">
                  FEATURED ARTICLE
                </span>
                <span className="px-3 py-1 rounded-full text-xs font-semibold bg-white/10 text-white/80 border border-white/15">
                  {featuredBlog.category}
                </span>
              </div>

              <h2
                onClick={() => navigate(`/blogs/${featuredBlog.slug}`)}
                className="text-2xl sm:text-4xl font-serif-luxury font-bold text-white group-hover:text-[#E8C878] transition-colors cursor-pointer leading-tight"
              >
                {featuredBlog.title}
              </h2>

              <p className="text-sm sm:text-base text-[#BAC6DA] line-clamp-3 leading-relaxed font-inter">
                {featuredBlog.excerpt}
              </p>

              <div className="flex flex-wrap items-center gap-5 text-xs text-[#BAC6DA]/80 pt-2 font-inter">
                <span className="flex items-center gap-1.5">
                  <User className="w-3.5 h-3.5 text-[#E8C878]" />
                  {featuredBlog.author || 'SOLAHANA Advisory Team'}
                </span>
                <span className="flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5 text-[#E8C878]" />
                  {featuredBlog.readTime}
                </span>
                <span className="flex items-center gap-1.5">
                  <Calendar className="w-3.5 h-3.5 text-[#E8C878]" />
                  {new Date(featuredBlog.publishedAt || featuredBlog.createdAt).toLocaleDateString('en-IN', {
                    day: 'numeric',
                    month: 'short',
                    year: 'numeric',
                  })}
                </span>
              </div>

              <div className="pt-4">
                <button
                  onClick={() => navigate(`/blogs/${featuredBlog.slug}`)}
                  className="gold-glow-button px-6 py-3 rounded-xl text-xs font-bold text-[#020B2D] flex items-center gap-2 cursor-pointer shadow-lg"
                >
                  <span>Read Full Article</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            <div className="lg:col-span-5 relative h-64 sm:h-80 rounded-2xl overflow-hidden border border-[#C8A24A]/30 shadow-xl">
              <img
                src={featuredBlog.featuredImage || featuredBlog.coverImage}
                alt={featuredBlog.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#020B2D] via-transparent to-transparent opacity-60" />
            </div>
          </motion.div>
        )}

        {/* LOADING STATE */}
        {loading && (
          <div className="py-24 text-center space-y-3">
            <Loader2 className="w-10 h-10 animate-spin mx-auto text-[#C8A24A]" />
            <p className="text-xs text-[#BAC6DA] font-mono">Retrieving latest financial articles...</p>
          </div>
        )}

        {/* ERROR STATE */}
        {error && (
          <div className="p-8 rounded-2xl bg-red-500/10 border border-red-500/30 text-red-300 text-center space-y-3 max-w-md mx-auto">
            <p className="text-sm font-semibold">{error}</p>
            <button
              onClick={fetchBlogs}
              className="px-5 py-2 rounded-xl bg-red-500/20 hover:bg-red-500/30 text-white text-xs font-bold cursor-pointer"
            >
              Retry
            </button>
          </div>
        )}

        {/* BLOGS GRID */}
        {!loading && !error && (
          <div className="space-y-8">
            <div className="flex items-center justify-between border-b border-[#C8A24A]/20 pb-4">
              <h3 className="font-serif-luxury text-2xl font-bold text-white flex items-center gap-2">
                <BookOpen className="w-5 h-5 text-[#E8C878]" />
                <span>
                  {activeCategory === 'All' ? 'All Published Insights' : `${activeCategory} Articles`}
                </span>
              </h3>
              <span className="text-xs text-[#BAC6DA] font-mono">
                Showing {blogs.length} article{blogs.length !== 1 ? 's' : ''}
              </span>
            </div>

            {blogs.length === 0 ? (
              <div className="py-20 text-center rounded-3xl bg-[#071C48]/40 border border-white/10 p-8 space-y-3">
                <p className="text-sm text-[#BAC6DA]">No articles published yet.</p>
                <button
                  onClick={() => { setActiveCategory('All'); setSearchQuery(''); }}
                  className="px-4 py-2 rounded-xl bg-[#C8A24A]/20 text-[#E8C878] text-xs font-bold cursor-pointer"
                >
                  Clear Category & Search Filter
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {blogs.map((blog, idx) => (
                  <motion.div
                    key={blog._id || idx}
                    initial={{ opacity: 0, y: 25 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: idx * 0.08 }}
                    whileHover={{ y: -6 }}
                    className="group rounded-3xl bg-[#071C48]/60 hover:bg-[#071C48]/95 border border-[#C8A24A]/25 hover:border-[#C8A24A]/60 backdrop-blur-xl transition-all duration-300 shadow-xl overflow-hidden flex flex-col justify-between"
                  >
                    {/* Thumbnail Image */}
                    <div className="relative h-48 overflow-hidden bg-[#020B2D] border-b border-[#C8A24A]/20">
                      <img
                        src={blog.featuredImage || blog.coverImage}
                        alt={blog.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute top-4 left-4">
                        <span className="px-3 py-1 rounded-full text-[10px] font-bold bg-[#020B2D]/80 text-[#E8C878] border border-[#C8A24A]/40 backdrop-blur-md">
                          {blog.category}
                        </span>
                      </div>
                      <div className="absolute bottom-3 right-3">
                        <span className="px-2.5 py-1 rounded-full text-[10px] font-medium bg-black/70 text-white/80 flex items-center gap-1 backdrop-blur-md">
                          <Clock className="w-3 h-3 text-[#E8C878]" /> {blog.readTime}
                        </span>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-6 space-y-3 flex-1 flex flex-col justify-between text-left">
                      <div>
                        <h4
                          onClick={() => navigate(`/blogs/${blog.slug}`)}
                          className="text-lg font-serif-luxury font-bold text-white group-hover:text-[#E8C878] transition-colors cursor-pointer line-clamp-2 leading-snug"
                        >
                          {blog.title}
                        </h4>
                        <p className="text-xs text-[#BAC6DA] line-clamp-3 mt-2 font-inter leading-relaxed">
                          {blog.excerpt}
                        </p>
                      </div>

                      {/* Footer Info & Read More Button */}
                      <div className="pt-4 border-t border-[#C8A24A]/15 flex items-center justify-between text-[11px] text-[#BAC6DA]/70">
                        <div className="flex items-center gap-1.5 truncate pr-2">
                          <User className="w-3 h-3 text-[#E8C878] shrink-0" />
                          <span className="truncate">{blog.author}</span>
                        </div>
                        <button
                          onClick={() => navigate(`/blogs/${blog.slug}`)}
                          className="text-xs font-bold text-[#E8C878] group-hover:text-white flex items-center gap-1 shrink-0 cursor-pointer"
                        >
                          <span>Read More</span>
                          <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                        </button>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            )}
          </div>
        )}

        {/* NEWSLETTER BANNER SECTION */}
        <div className="rounded-3xl bg-gradient-to-r from-[#071C48] via-[#041235] to-[#071C48] border border-[#C8A24A]/40 p-8 sm:p-12 shadow-2xl relative overflow-hidden text-center space-y-6">
          <div className="w-14 h-14 mx-auto rounded-2xl bg-[#C8A24A]/20 border border-[#C8A24A]/40 flex items-center justify-center text-[#E8C878]">
            <Mail className="w-7 h-7" />
          </div>

          <div className="max-w-2xl mx-auto space-y-2">
            <h3 className="font-serif-luxury text-2xl sm:text-3xl font-bold text-white">
              Subscribe to SOLAHANA Sunday Insights
            </h3>
            <p className="text-xs sm:text-sm text-[#BAC6DA] font-inter">
              Get institutional financial intelligence, market commentary, and tax-saving algorithms delivered directly to your inbox every weekend. No spam, zero fee.
            </p>
          </div>

          <form onSubmit={handleSubscribe} className="max-w-md mx-auto flex items-center gap-2">
            <input
              type="email"
              placeholder="Enter your email address..."
              value={newsletterEmail}
              onChange={(e) => setNewsletterEmail(e.target.value)}
              className="flex-1 bg-[#020B2D] border border-white/20 focus:border-[#C8A24A] rounded-xl px-4 py-3 text-xs text-white placeholder-white/40 focus:outline-none"
            />
            <button
              type="submit"
              disabled={subscribing}
              className="gold-glow-button px-5 py-3 rounded-xl text-xs font-bold text-[#020B2D] flex items-center gap-2 shrink-0 cursor-pointer disabled:opacity-50"
            >
              {subscribing ? <Loader2 className="w-4 h-4 animate-spin" /> : <span>Subscribe</span>}
            </button>
          </form>

          {newsletterMsg && (
            <p className={`text-xs font-semibold ${subscribed ? 'text-emerald-400' : 'text-amber-300'}`}>
              {newsletterMsg}
            </p>
          )}
        </div>

      </div>
    </div>
  );
}
