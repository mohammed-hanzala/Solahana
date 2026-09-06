import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Clock, 
  Calendar, 
  User, 
  ArrowLeft, 
  Share2, 
  Copy, 
  Check, 
  BookOpen, 
  Loader2, 
  ArrowRight,
  Sparkles,
  MessageCircle
} from 'lucide-react';
import blogService from '../../services/blogService';

export default function BlogDetailsPage() {
  const { slug } = useParams();
  const navigate = useNavigate();

  const [blog, setBlog] = useState(null);
  const [relatedBlogs, setRelatedBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const fetchArticle = async () => {
      setLoading(true);
      setError('');
      try {
        const article = await blogService.getBlogBySlug(slug);
        setBlog(article);

        // Fetch related articles
        if (article) {
          const allRes = await blogService.getBlogs({ category: article.category, limit: 4 });
          const blogsList = Array.isArray(allRes?.blogs)
            ? allRes.blogs
            : Array.isArray(allRes?.data?.blogs)
            ? allRes.data.blogs
            : Array.isArray(allRes)
            ? allRes
            : [];
          const filtered = blogsList.filter((b) => b?.slug !== slug);
          setRelatedBlogs(filtered.slice(0, 3));
        }
      } catch (err) {
        console.error('[Fetch Article Error]:', err);
        setError('Article not found or moved.');
      } finally {
        setLoading(false);
      }
    };

    if (slug) {
      fetchArticle();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [slug]);

  const handleCopyLink = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 3000);
  };

  const handleShareWhatsApp = () => {
    if (!blog) return;
    const text = encodeURIComponent(`Read this article on SOLAHANA: ${blog.title}\n${window.location.href}`);
    window.open(`https://api.whatsapp.com/send?text=${text}`, '_blank');
  };

  const handleShareLinkedIn = () => {
    if (!blog) return;
    const url = encodeURIComponent(window.location.href);
    window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${url}`, '_blank');
  };

  const handleShareTwitter = () => {
    if (!blog) return;
    const text = encodeURIComponent(`"${blog.title}" via @solahana_wealth`);
    const url = encodeURIComponent(window.location.href);
    window.open(`https://twitter.com/intent/tweet?text=${text}&url=${url}`, '_blank');
  };

  // Helper to parse simple markdown to clean HTML structures
  const renderFormattedContent = (content) => {
    if (!content) return null;

    const paragraphs = content.split('\n\n');
    return paragraphs.map((block, index) => {
      const trimmed = block.trim();

      // Heading 1 (# title)
      if (trimmed.startsWith('# ')) {
        return (
          <h2 key={index} className="text-2xl sm:text-3xl font-serif-luxury font-bold text-[#F8F7F3] mt-8 mb-4">
            {trimmed.replace('# ', '')}
          </h2>
        );
      }

      // Heading 2 (## title)
      if (trimmed.startsWith('## ')) {
        return (
          <h3 key={index} className="text-xl sm:text-2xl font-serif-luxury font-bold text-[#E8C878] mt-8 mb-4 border-b border-[#C8A24A]/20 pb-2">
            {trimmed.replace('## ', '')}
          </h3>
        );
      }

      // Heading 3 (### title)
      if (trimmed.startsWith('### ')) {
        return (
          <h4 key={index} className="text-lg font-serif-luxury font-bold text-white mt-6 mb-3">
            {trimmed.replace('### ', '')}
          </h4>
        );
      }

      // Blockquote (> quote)
      if (trimmed.startsWith('> ')) {
        return (
          <blockquote key={index} className="my-6 p-5 rounded-2xl bg-[#071C48]/80 border-l-4 border-[#C8A24A] text-sm text-[#E8C878] italic font-serif-luxury shadow-lg">
            {trimmed.replace('> ', '')}
          </blockquote>
        );
      }

      // Bullet points
      if (trimmed.startsWith('- ') || trimmed.startsWith('1. ')) {
        const items = trimmed.split('\n').map((item) => item.replace(/^[-*]|\d+\.\s*/, '').trim());
        return (
          <ul key={index} className="my-4 space-y-2 text-sm sm:text-base text-[#BAC6DA] list-disc list-inside font-inter">
            {items.map((item, i) => (
              <li key={i} className="leading-relaxed">
                <span className="text-[#F8F7F3]">{item}</span>
              </li>
            ))}
          </ul>
        );
      }

      // Standard paragraph
      return (
        <p key={index} className="my-4 text-sm sm:text-base text-[#BAC6DA] font-inter leading-relaxed">
          {trimmed}
        </p>
      );
    });
  };

  if (loading) {
    return (
      <div className="pt-32 pb-24 min-h-screen bg-[#020B2D] text-[#F8F7F3] flex flex-col items-center justify-center space-y-3">
        <Loader2 className="w-10 h-10 animate-spin text-[#C8A24A]" />
        <p className="text-xs text-[#BAC6DA] font-mono">Loading financial article...</p>
      </div>
    );
  }

  if (error || !blog) {
    return (
      <div className="pt-32 pb-24 min-h-screen bg-[#020B2D] text-[#F8F7F3] flex flex-col items-center justify-center space-y-4 px-4 text-center">
        <div className="p-8 rounded-3xl bg-[#071C48]/60 border border-[#C8A24A]/30 max-w-md space-y-4">
          <h2 className="text-xl font-bold text-white">Article Not Found</h2>
          <p className="text-xs text-[#BAC6DA]">{error || 'The requested article could not be retrieved.'}</p>
          <button
            onClick={() => navigate('/blogs')}
            className="gold-glow-button px-5 py-2.5 rounded-xl text-xs font-bold text-[#020B2D] inline-flex items-center gap-2 cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Return to Blogs</span>
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-28 pb-24 min-h-screen bg-[#020B2D] text-[#F8F7F3] relative overflow-x-hidden">
      {/* Glow Orbs */}
      <div className="absolute top-20 right-10 w-[500px] h-[500px] bg-[#C8A24A]/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-10">
        
        {/* BACK BUTTON */}
        <div>
          <button
            onClick={() => navigate('/blogs')}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-[#071C48]/60 hover:bg-[#071C48] border border-[#C8A24A]/30 text-xs font-semibold text-[#E8C878] transition-colors cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to All Blogs</span>
          </button>
        </div>

        {/* ARTICLE HEADER & METADATA */}
        <div className="space-y-5 text-left">
          <div className="flex flex-wrap items-center gap-3">
            <span className="px-3 py-1 rounded-full text-xs font-bold bg-[#C8A24A]/20 text-[#E8C878] border border-[#C8A24A]/40 font-sora">
              {blog.category}
            </span>
            <span className="text-xs text-[#BAC6DA]/80 flex items-center gap-1.5 font-num">
              <Clock className="w-3.5 h-3.5 text-[#E8C878]" /> {blog.readTime}
            </span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-serif-luxury font-bold text-white leading-tight">
            {blog.title}
          </h1>

          <div className="flex flex-wrap items-center justify-between gap-4 py-4 border-y border-[#C8A24A]/20 text-xs text-[#BAC6DA]">
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-[#C8A24A]/20 border border-[#C8A24A]/40 flex items-center justify-center text-[#E8C878] font-bold text-xs">
                  <User className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-semibold text-white">{blog.author}</div>
                  <div className="text-[10px] text-[#E8C878]">Fiduciary Wealth Advisor</div>
                </div>
              </div>

              <div className="hidden sm:block text-white/20">|</div>

              <div className="hidden sm:flex items-center gap-1.5 font-num">
                <Calendar className="w-3.5 h-3.5 text-[#E8C878]" />
                <span>
                  {new Date(blog.publishedAt || blog.createdAt).toLocaleDateString('en-IN', {
                    day: 'numeric',
                    month: 'long',
                    year: 'numeric',
                  })}
                </span>
              </div>
            </div>

            {/* SHARE BUTTONS */}
            <div className="flex items-center gap-2">
              <span className="text-[10px] uppercase font-mono text-white/50 mr-1">Share:</span>
              <button
                onClick={handleShareWhatsApp}
                title="Share on WhatsApp"
                className="p-2 rounded-xl bg-emerald-500/15 hover:bg-emerald-500/30 text-emerald-400 border border-emerald-500/30 transition-colors cursor-pointer"
              >
                <MessageCircle className="w-4 h-4" />
              </button>
              <button
                onClick={handleShareLinkedIn}
                title="Share on LinkedIn"
                className="p-2 rounded-xl bg-blue-500/15 hover:bg-blue-500/30 text-blue-400 border border-blue-500/30 transition-colors cursor-pointer"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/>
                </svg>
              </button>
              <button
                onClick={handleShareTwitter}
                title="Share on X"
                className="p-2 rounded-xl bg-slate-500/15 hover:bg-slate-500/30 text-slate-300 border border-slate-500/30 transition-colors cursor-pointer"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </button>
              <button
                onClick={handleCopyLink}
                title="Copy Article Link"
                className="p-2 rounded-xl bg-[#C8A24A]/15 hover:bg-[#C8A24A]/30 text-[#E8C878] border border-[#C8A24A]/30 transition-colors cursor-pointer"
              >
                {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
              </button>
            </div>
          </div>
        </div>

        {/* HERO FEATURED COVER IMAGE */}
        {blog.featuredImage && (
          <div className="relative h-72 sm:h-96 rounded-3xl overflow-hidden border border-[#C8A24A]/30 shadow-2xl">
            <img
              src={blog.featuredImage || blog.coverImage}
              alt={blog.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#020B2D] via-transparent to-transparent opacity-40" />
          </div>
        )}

        {/* EXCERPT CALLOUT */}
        {blog.excerpt && (
          <div className="p-6 rounded-2xl bg-[#071C48]/70 border border-[#C8A24A]/30 text-sm sm:text-base text-[#E8C878] font-serif-luxury italic leading-relaxed shadow-lg">
            "{blog.excerpt}"
          </div>
        )}

        {/* ARTICLE BODY CONTENT */}
        <div className="prose prose-invert max-w-none text-left pt-2">
          {renderFormattedContent(blog.content)}
        </div>

        {/* CONSULTATION ADVISORY BANNER */}
        <div className="p-8 rounded-3xl bg-gradient-to-r from-[#071C48] via-[#041235] to-[#071C48] border border-[#C8A24A]/40 shadow-2xl flex flex-col sm:flex-row items-center justify-between gap-6 text-left">
          <div className="space-y-2">
            <span className="text-[10px] uppercase font-mono text-[#E8C878] tracking-widest px-3 py-1 rounded-full bg-[#C8A24A]/10 border border-[#C8A24A]/30">
              SEBI REGISTERED FIDUCIARY
            </span>
            <h3 className="font-serif-luxury text-xl font-bold text-white">
              Need Personalized Guidance on This Topic?
            </h3>
            <p className="text-xs text-[#BAC6DA]">
              Schedule a 1-on-1 confidential consultation with SOLAHANA's fee-only financial planners.
            </p>
          </div>
          <button
            onClick={() => navigate('/contact')}
            className="gold-glow-button px-6 py-3 rounded-xl text-xs font-bold text-[#020B2D] shrink-0 cursor-pointer shadow-lg"
          >
            Book Advisor Session →
          </button>
        </div>

        {/* RELATED ARTICLES */}
        {relatedBlogs.length > 0 && (
          <div className="pt-12 space-y-6 text-left border-t border-[#C8A24A]/20">
            <h3 className="font-serif-luxury text-2xl font-bold text-white flex items-center gap-2">
              <BookOpen className="w-5 h-5 text-[#E8C878]" />
              <span>Related Financial Guides</span>
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {relatedBlogs.map((rel) => (
                <div
                  key={rel._id}
                  onClick={() => navigate(`/blogs/${rel.slug}`)}
                  className="p-5 rounded-2xl bg-[#071C48]/60 hover:bg-[#071C48] border border-[#C8A24A]/20 hover:border-[#C8A24A]/50 transition-all cursor-pointer space-y-3 shadow-lg flex flex-col justify-between"
                >
                  <div className="space-y-2">
                    <span className="text-[10px] px-2.5 py-0.5 rounded-full bg-[#C8A24A]/15 text-[#E8C878] font-bold">
                      {rel.category}
                    </span>
                    <h4 className="text-sm font-serif-luxury font-bold text-white line-clamp-2 hover:text-[#E8C878] transition-colors">
                      {rel.title}
                    </h4>
                  </div>
                  <div className="flex items-center justify-between text-[10px] text-[#BAC6DA]/70 pt-2 border-t border-white/10">
                    <span>{rel.readTime}</span>
                    <span className="text-[#E8C878] font-bold flex items-center gap-1">
                      Read <ArrowRight className="w-3 h-3" />
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

      </div>
    </div>
  );
}
