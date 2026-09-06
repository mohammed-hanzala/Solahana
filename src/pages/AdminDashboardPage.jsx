import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  LayoutDashboard,
  Calendar,
  Users as UsersIcon,
  BookOpen,
  Mail,
  LogOut,
  Search,
  Trash2,
  Edit3,
  CheckCircle2,
  XCircle,
  Clock,
  Award,
  RefreshCw,
  ShieldCheck,
  UserCheck,
  UserX,
  X,
  AlertCircle,
  Loader2,
  ChevronLeft,
  ChevronRight,
  ExternalLink,
  Sparkles,
  Plus,
  Download,
  Eye,
  FileText,
  Check
} from 'lucide-react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import adminService from '../services/adminService';
import blogService from '../services/blogService';
import newsletterService from '../services/newsletterService';

const GOAL_OPTIONS = [
  'Dream Home',
  'Retirement Planning',
  'Tax Planning',
  'Investment Planning',
  'Emergency Fund',
  'Wealth Creation',
  'Child Education',
  'General Financial Planning',
];

const MODE_OPTIONS = ['Video Call', 'Phone Call', 'Office Visit'];

const BLOG_CATEGORIES = [
  'SIP & Mutual Funds',
  'Retirement Planning',
  'Tax Planning',
  'Wealth Creation',
  'Insurance',
  'Financial Literacy',
  'Market Insights',
];

export default function AdminDashboardPage() {
  const { user: currentUser, logout } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  const getTabFromPath = () => {
    if (location.pathname.includes('/admin/consultations')) return 'consultations';
    if (location.pathname.includes('/admin/users')) return 'users';
    if (location.pathname.includes('/admin/blogs')) return 'blogs';
    if (location.pathname.includes('/admin/newsletters') || location.pathname.includes('/admin/newsletter')) return 'newsletter';
    return 'dashboard';
  };

  const activeTab = getTabFromPath();

  const handleTabChange = (tab) => {
    if (tab === 'dashboard') navigate('/admin/dashboard');
    else if (tab === 'consultations') navigate('/admin/consultations');
    else if (tab === 'users') navigate('/admin/users');
    else if (tab === 'blogs') navigate('/admin/blogs');
    else if (tab === 'newsletter') navigate('/admin/newsletters');
    else navigate(`/admin/${tab}`);
  };

  // Stats State
  const [stats, setStats] = useState({
    totalUsers: 0,
    totalConsultations: 0,
    pendingConsultations: 0,
    confirmedConsultations: 0,
    completedConsultations: 0,
    cancelledConsultations: 0,
    totalBlogs: 0,
    totalSubscribers: 0,
  });
  const [statsLoading, setStatsLoading] = useState(true);

  // Consultations State
  const [bookings, setBookings] = useState([]);
  const [consultationPagination, setConsultationPagination] = useState({ page: 1, limit: 10, totalPages: 1, totalBookings: 0 });
  const [consultationsLoading, setConsultationsLoading] = useState(false);
  const [consultationError, setConsultationError] = useState('');
  const [consultationSearch, setConsultationSearch] = useState('');
  const [statusFilter, setStatusFilter] = useState('');
  const [goalFilter, setGoalFilter] = useState('');
  const [modeFilter, setModeFilter] = useState('');
  const [consultationPage, setConsultationPage] = useState(1);

  // Consultation Modal State
  const [selectedBooking, setSelectedBooking] = useState(null);
  const [updateStatus, setUpdateStatus] = useState('Confirmed');
  const [meetingLink, setMeetingLink] = useState('');
  const [notes, setNotes] = useState('');
  const [actionLoading, setActionLoading] = useState(false);

  // Users State
  const [usersList, setUsersList] = useState([]);
  const [userPagination, setUserPagination] = useState({ page: 1, limit: 10, totalPages: 1, totalUsers: 0 });
  const [usersLoading, setUsersLoading] = useState(false);
  const [userError, setUserError] = useState('');
  const [userSearch, setUserSearch] = useState('');
  const [roleFilter, setRoleFilter] = useState('');
  const [userPage, setUserPage] = useState(1);

  // Blogs CMS State
  const [blogsList, setBlogsList] = useState([]);
  const [blogPagination, setBlogPagination] = useState({ currentPage: 1, totalPages: 1, totalBlogs: 0 });
  const [blogsLoading, setBlogsLoading] = useState(false);
  const [blogError, setBlogError] = useState('');
  const [blogSearch, setBlogSearch] = useState('');
  const [blogCategoryFilter, setBlogCategoryFilter] = useState('');
  const [blogStatusFilter, setBlogStatusFilter] = useState('');
  const [blogPage, setBlogPage] = useState(1);

  // Blog Modal State (Create / Edit)
  const [blogModalOpen, setBlogModalOpen] = useState(false);
  const [editingBlogId, setEditingBlogId] = useState(null);
  const [blogFormData, setBlogFormData] = useState({
    title: '',
    slug: '',
    excerpt: '',
    content: '',
    category: 'SIP & Mutual Funds',
    author: 'SOLAHANA Advisory Team',
    featuredImage: 'https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?q=80&w=1200',
    readTime: '5 min read',
    status: 'published',
  });

  // Newsletter State
  const [subscribersList, setSubscribersList] = useState([]);
  const [subscriberPagination, setSubscriberPagination] = useState({ currentPage: 1, totalPages: 1, totalSubscribers: 0 });
  const [subscribersLoading, setSubscribersLoading] = useState(false);
  const [subscriberError, setSubscriberError] = useState('');
  const [subscriberSearch, setSubscriberSearch] = useState('');
  const [subscriberPage, setSubscriberPage] = useState(1);

  // Fetch Dashboard Analytics Stats
  const fetchStats = async () => {
    setStatsLoading(true);
    try {
      const data = await adminService.getStats();
      setStats({
        totalUsers: data?.totalUsers || 0,
        totalConsultations: data?.totalConsultations || 0,
        pendingConsultations: data?.pendingConsultations || 0,
        confirmedConsultations: data?.confirmedConsultations || 0,
        completedConsultations: data?.completedConsultations || 0,
        cancelledConsultations: data?.cancelledConsultations || 0,
        totalBlogs: data?.totalBlogs || 0,
        totalSubscribers: data?.totalSubscribers || 0,
      });
    } catch (err) {
      console.error('[Fetch Stats Error]:', err);
    } finally {
      setStatsLoading(false);
    }
  };

  // Fetch Consultations
  const fetchConsultations = async () => {
    setConsultationsLoading(true);
    setConsultationError('');
    try {
      const res = await adminService.getAllConsultations({
        page: consultationPage,
        limit: 10,
        search: consultationSearch || undefined,
        status: statusFilter || undefined,
        goal: goalFilter || undefined,
        consultationMode: modeFilter || undefined,
      });
      const consArray = Array.isArray(res?.consultations)
        ? res.consultations
        : Array.isArray(res?.data?.consultations)
        ? res.data.consultations
        : Array.isArray(res)
        ? res
        : [];
      setBookings(consArray);
      setConsultationPagination(res?.pagination || res?.data?.pagination || { page: 1, limit: 10, totalPages: 1, totalBookings: consArray.length });
    } catch (err) {
      console.error('[Fetch Consultations Error]:', err);
      setConsultationError(err.response?.data?.message || err.message || 'Failed to fetch consultations');
      setBookings([]);
    } finally {
      setConsultationsLoading(false);
    }
  };

  // Fetch Users
  const fetchUsers = async () => {
    setUsersLoading(true);
    setUserError('');
    try {
      const res = await adminService.getAllUsers({
        page: userPage,
        limit: 10,
        search: userSearch || undefined,
        role: roleFilter || undefined,
      });
      const usersArray = Array.isArray(res?.users)
        ? res.users
        : Array.isArray(res?.data?.users)
        ? res.data.users
        : Array.isArray(res)
        ? res
        : [];
      setUsersList(usersArray);
      setUserPagination(res?.pagination || res?.data?.pagination || { page: 1, limit: 10, totalPages: 1, totalUsers: usersArray.length });
    } catch (err) {
      console.error('[Fetch Users Error]:', err);
      setUserError(err.response?.data?.message || err.message || 'Failed to fetch users');
      setUsersList([]);
    } finally {
      setUsersLoading(false);
    }
  };

  // Fetch Blogs (BUG 1 & BUG 4 Fix)
  const fetchBlogs = async () => {
    setBlogsLoading(true);
    setBlogError('');
    try {
      const res = await blogService.getBlogs({
        page: blogPage,
        limit: 10,
        status: blogStatusFilter || 'all',
        category: blogCategoryFilter || undefined,
        search: blogSearch || undefined,
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

      setBlogsList(Array.isArray(blogsArray) ? blogsArray : []);
      setBlogPagination({
        currentPage: res?.currentPage || res?.data?.currentPage || 1,
        totalPages: res?.totalPages || res?.data?.totalPages || 1,
        totalBlogs: res?.totalBlogs || res?.count || res?.data?.totalBlogs || blogsArray.length,
      });
    } catch (err) {
      console.error('[Fetch Blogs Error]:', err);
      setBlogError(err.response?.data?.message || err.message || 'Failed to fetch blog posts');
      setBlogsList([]);
    } finally {
      setBlogsLoading(false);
    }
  };

  // Fetch Subscribers (BUG 2 & BUG 4 Fix)
  const fetchSubscribers = async () => {
    setSubscribersLoading(true);
    setSubscriberError('');
    try {
      const res = await newsletterService.getSubscribers({
        page: subscriberPage,
        limit: 10,
        search: subscriberSearch || undefined,
      });

      let subArray = [];
      if (Array.isArray(res)) {
        subArray = res;
      } else if (Array.isArray(res?.subscribers)) {
        subArray = res.subscribers;
      } else if (Array.isArray(res?.data?.subscribers)) {
        subArray = res.data.subscribers;
      } else if (Array.isArray(res?.data)) {
        subArray = res.data;
      }

      setSubscribersList(Array.isArray(subArray) ? subArray : []);
      setSubscriberPagination({
        currentPage: res?.currentPage || res?.data?.currentPage || 1,
        totalPages: res?.totalPages || res?.data?.totalPages || 1,
        totalSubscribers: res?.totalSubscribers || res?.count || res?.data?.totalSubscribers || subArray.length,
      });
    } catch (err) {
      console.error('[Fetch Subscribers Error]:', err);
      setSubscriberError(err.response?.data?.message || err.message || 'Failed to fetch subscribers');
      setSubscribersList([]);
    } finally {
      setSubscribersLoading(false);
    }
  };

  // Initial Load
  useEffect(() => {
    fetchStats();
  }, []);

  useEffect(() => {
    if (activeTab === 'consultations' || activeTab === 'dashboard') {
      fetchConsultations();
    }
    if (activeTab === 'users' || activeTab === 'dashboard') {
      fetchUsers();
    }
    if (activeTab === 'blogs') {
      fetchBlogs();
    }
    if (activeTab === 'newsletter') {
      fetchSubscribers();
    }
  }, [
    activeTab,
    consultationPage,
    statusFilter,
    goalFilter,
    modeFilter,
    userPage,
    roleFilter,
    blogPage,
    blogCategoryFilter,
    blogStatusFilter,
    subscriberPage,
  ]);

  // Handle Consultation Quick Actions
  const handleQuickStatusChange = async (bookingId, newStatus) => {
    setActionLoading(true);
    try {
      await adminService.updateConsultationStatus(bookingId, { status: newStatus });
      await fetchConsultations();
      await fetchStats();
    } catch (err) {
      alert(err.response?.data?.message || 'Failed to update consultation status');
    } finally {
      setActionLoading(false);
    }
  };

  // Handle Consultation Delete
  const handleDeleteBooking = async (id, clientName) => {
    if (!window.confirm(`Are you sure you want to delete the consultation booking for "${clientName}"?`)) return;
    setActionLoading(true);
    try {
      await adminService.deleteConsultation(id);
      await fetchConsultations();
      await fetchStats();
    } catch (err) {
      alert(err.response?.data?.message || 'Failed to delete consultation');
    } finally {
      setActionLoading(false);
    }
  };

  // Save Modal Status Update
  const handleSaveModalStatus = async (e) => {
    e.preventDefault();
    if (!selectedBooking) return;
    setActionLoading(true);
    try {
      await adminService.updateConsultationStatus(selectedBooking._id, {
        status: updateStatus,
        meetingLink,
        notes,
      });
      setSelectedBooking(null);
      await fetchConsultations();
      await fetchStats();
    } catch (err) {
      alert(err.response?.data?.message || 'Failed to update consultation');
    } finally {
      setActionLoading(false);
    }
  };

  // User Role Toggle (user <-> admin)
  const handleToggleUserRole = async (targetUser) => {
    const newRole = targetUser.role === 'admin' ? 'user' : 'admin';
    if (!window.confirm(`Change role for ${targetUser.name} (${targetUser.email}) from "${targetUser.role}" to "${newRole}"?`)) return;
    
    setActionLoading(true);
    try {
      await adminService.updateUserRole(targetUser._id, newRole);
      await fetchUsers();
      await fetchStats();
    } catch (err) {
      alert(err.response?.data?.message || 'Failed to update user role');
    } finally {
      setActionLoading(false);
    }
  };

  // Delete User
  const handleDeleteUser = async (targetUser) => {
    if (!window.confirm(`Are you sure you want to permanently delete user account "${targetUser.name}" (${targetUser.email})?`)) return;
    
    setActionLoading(true);
    try {
      await adminService.deleteUser(targetUser._id);
      await fetchUsers();
      await fetchStats();
    } catch (err) {
      alert(err.response?.data?.message || 'Failed to delete user account');
    } finally {
      setActionLoading(false);
    }
  };

  // Blog CRUD Handlers
  const handleOpenCreateBlog = () => {
    setEditingBlogId(null);
    setBlogFormData({
      title: '',
      slug: '',
      excerpt: '',
      content: '',
      category: 'SIP & Mutual Funds',
      author: 'SOLAHANA Advisory Team',
      featuredImage: 'https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?q=80&w=1200',
      readTime: '5 min read',
      status: 'published',
    });
    setBlogModalOpen(true);
  };

  const handleOpenEditBlog = (blog) => {
    setEditingBlogId(blog._id);
    setBlogFormData({
      title: blog.title || '',
      slug: blog.slug || '',
      excerpt: blog.excerpt || blog.summary || '',
      content: blog.content || '',
      category: blog.category || 'SIP & Mutual Funds',
      author: blog.author || 'SOLAHANA Advisory Team',
      featuredImage: blog.featuredImage || blog.coverImage || '',
      readTime: blog.readTime || '5 min read',
      status: blog.status || (blog.isPublished ? 'published' : 'draft'),
    });
    setBlogModalOpen(true);
  };

  const handleSaveBlogSubmit = async (e) => {
    e.preventDefault();
    if (!blogFormData.title || !blogFormData.content) {
      alert('Title and Content are required fields.');
      return;
    }
    setActionLoading(true);
    try {
      if (editingBlogId) {
        await blogService.updateBlog(editingBlogId, blogFormData);
      } else {
        await blogService.createBlog(blogFormData);
      }
      setBlogModalOpen(false);
      await fetchBlogs();
      await fetchStats();
    } catch (err) {
      alert(err.response?.data?.message || 'Failed to save blog post');
    } finally {
      setActionLoading(false);
    }
  };

  const handleToggleBlogStatus = async (blog) => {
    const newStatus = blog.status === 'published' ? 'draft' : 'published';
    setActionLoading(true);
    try {
      await blogService.updateBlog(blog._id, { status: newStatus });
      await fetchBlogs();
    } catch (err) {
      alert('Failed to update blog status');
    } finally {
      setActionLoading(false);
    }
  };

  const handleDeleteBlog = async (blog) => {
    if (!window.confirm(`Are you sure you want to delete article "${blog.title}"?`)) return;
    setActionLoading(true);
    try {
      await blogService.deleteBlog(blog._id);
      await fetchBlogs();
      await fetchStats();
    } catch (err) {
      alert('Failed to delete blog post');
    } finally {
      setActionLoading(false);
    }
  };

  // Newsletter Handlers
  const handleDeleteSubscriber = async (sub) => {
    if (!window.confirm(`Delete subscriber "${sub.email}"?`)) return;
    setActionLoading(true);
    try {
      await newsletterService.deleteSubscriber(sub._id);
      await fetchSubscribers();
      await fetchStats();
    } catch (err) {
      alert('Failed to remove subscriber');
    } finally {
      setActionLoading(false);
    }
  };

  const handleExportCSV = () => {
    if (subscribersList.length === 0) {
      alert('No subscribers to export.');
      return;
    }
    const headers = ['Email', 'Status', 'Source', 'Subscribed Date'];
    const rows = subscribersList.map((sub) => [
      `"${sub.email}"`,
      `"${sub.status}"`,
      `"${sub.source || 'website'}"`,
      `"${new Date(sub.createdAt).toLocaleDateString('en-IN')}"`,
    ]);
    const csvContent = 'data:text/csv;charset=utf-8,' + [headers.join(','), ...rows.map((r) => r.join(','))].join('\n');
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement('a');
    link.setAttribute('href', encodedUri);
    link.setAttribute('download', `solahana_newsletter_subscribers_${Date.now()}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  // Logout Handler
  const handleLogout = async () => {
    await logout();
    navigate('/admin/login');
  };

  const getStatusBadge = (status) => {
    switch (status) {
      case 'Pending':
        return <span className="px-2.5 py-1 rounded-full text-xs font-semibold bg-[#C8A24A]/20 text-[#E8C878] border border-[#C8A24A]/40">Pending</span>;
      case 'Confirmed':
        return <span className="px-2.5 py-1 rounded-full text-xs font-semibold bg-blue-500/20 text-blue-300 border border-blue-500/40">Confirmed</span>;
      case 'Completed':
        return <span className="px-2.5 py-1 rounded-full text-xs font-semibold bg-emerald-500/20 text-emerald-300 border border-emerald-500/40">Completed</span>;
      case 'Cancelled':
        return <span className="px-2.5 py-1 rounded-full text-xs font-semibold bg-rose-500/20 text-rose-300 border border-rose-500/40">Cancelled</span>;
      default:
        return null;
    }
  };

  return (
    <div className="pt-24 pb-20 min-h-screen bg-[#020B2D] text-[#F8F7F3] flex flex-col md:flex-row">
      {/* Sidebar Layout */}
      <aside className="w-full md:w-64 bg-[#071C48]/60 border-r border-[#C8A24A]/20 p-6 flex flex-col justify-between shrink-0">
        <div className="space-y-6">
          {/* Admin Info */}
          <div className="p-4 rounded-2xl bg-[#020B2D] border border-[#C8A24A]/30 flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#C8A24A]/20 border border-[#C8A24A]/40 flex items-center justify-center text-[#E8C878] font-bold">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div className="overflow-hidden">
              <div className="text-xs font-bold text-white truncate">{currentUser?.name || 'Administrator'}</div>
              <div className="text-[10px] text-[#E8C878] uppercase font-mono tracking-wider">
                {currentUser?.role || 'Admin'}
              </div>
            </div>
          </div>

          {/* Navigation Links */}
          <nav className="space-y-1 text-xs font-semibold">
            <button
              onClick={() => handleTabChange('dashboard')}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all cursor-pointer ${
                activeTab === 'dashboard'
                  ? 'bg-[#C8A24A] text-[#020B2D] font-bold shadow-lg'
                  : 'text-white/70 hover:text-white hover:bg-white/5'
              }`}
            >
              <LayoutDashboard className="w-4 h-4" />
              <span>Dashboard</span>
            </button>

            <button
              onClick={() => handleTabChange('consultations')}
              className={`w-full flex items-center justify-between px-4 py-3 rounded-xl transition-all cursor-pointer ${
                activeTab === 'consultations'
                  ? 'bg-[#C8A24A] text-[#020B2D] font-bold shadow-lg'
                  : 'text-white/70 hover:text-white hover:bg-white/5'
              }`}
            >
              <div className="flex items-center gap-3">
                <Calendar className="w-4 h-4" />
                <span>Consultations</span>
              </div>
              {stats.pendingConsultations > 0 && (
                <span className="px-2 py-0.5 rounded-full text-[10px] bg-amber-500/30 text-amber-200 border border-amber-500/40 font-mono">
                  {stats.pendingConsultations}
                </span>
              )}
            </button>

            <button
              onClick={() => handleTabChange('users')}
              className={`w-full flex items-center justify-between px-4 py-3 rounded-xl transition-all cursor-pointer ${
                activeTab === 'users'
                  ? 'bg-[#C8A24A] text-[#020B2D] font-bold shadow-lg'
                  : 'text-white/70 hover:text-white hover:bg-white/5'
              }`}
            >
              <div className="flex items-center gap-3">
                <UsersIcon className="w-4 h-4" />
                <span>Users</span>
              </div>
              <span className="text-[10px] text-white/40 font-mono">{stats.totalUsers}</span>
            </button>

            <button
              onClick={() => handleTabChange('blogs')}
              className={`w-full flex items-center justify-between px-4 py-3 rounded-xl transition-all cursor-pointer ${
                activeTab === 'blogs'
                  ? 'bg-[#C8A24A] text-[#020B2D] font-bold shadow-lg'
                  : 'text-white/70 hover:text-white hover:bg-white/5'
              }`}
            >
              <div className="flex items-center gap-3">
                <BookOpen className="w-4 h-4" />
                <span>Blog CMS</span>
              </div>
              <span className="text-[10px] text-white/40 font-mono">{stats.totalBlogs}</span>
            </button>

            <button
              onClick={() => handleTabChange('newsletter')}
              className={`w-full flex items-center justify-between px-4 py-3 rounded-xl transition-all cursor-pointer ${
                activeTab === 'newsletter'
                  ? 'bg-[#C8A24A] text-[#020B2D] font-bold shadow-lg'
                  : 'text-white/70 hover:text-white hover:bg-white/5'
              }`}
            >
              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4" />
                <span>Newsletters</span>
              </div>
              <span className="text-[10px] text-white/40 font-mono">{stats.totalSubscribers}</span>
            </button>
          </nav>
        </div>

        {/* Logout */}
        <div className="pt-6 border-t border-white/10">
          <button
            onClick={handleLogout}
            className="w-full flex items-center gap-3 px-4 py-3 rounded-xl bg-red-500/10 hover:bg-red-500/20 border border-red-500/30 text-red-300 text-xs font-semibold transition-colors cursor-pointer"
          >
            <LogOut className="w-4 h-4" />
            <span>Logout</span>
          </button>
        </div>
      </aside>

      {/* Main Content View */}
      <main className="flex-1 p-6 md:p-10 max-w-7xl overflow-x-hidden">
        
        {/* ================= TAB 1: ANALYTICS DASHBOARD ================= */}
        {activeTab === 'dashboard' && (
          <div className="space-y-8">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-6 rounded-3xl bg-gradient-to-r from-[#071C48] via-[#041235] to-[#071C48] border border-[#C8A24A]/30 shadow-2xl">
              <div>
                <span className="text-[10px] uppercase font-mono text-[#E8C878] tracking-widest px-3 py-1 rounded-full bg-[#C8A24A]/10 border border-[#C8A24A]/30">
                  REALTIME OVERVIEW
                </span>
                <h1 className="font-serif-luxury text-3xl font-bold text-white mt-2">
                  Admin Analytics Desk
                </h1>
                <p className="text-xs text-white/60 mt-1">
                  Live MongoDB statistics across users, advisory consultations, blogs, and newsletter subscribers.
                </p>
              </div>

              <button
                onClick={() => { fetchStats(); fetchConsultations(); fetchUsers(); fetchBlogs(); fetchSubscribers(); }}
                className="p-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-white/70 hover:text-white transition-colors cursor-pointer self-start sm:self-auto flex items-center gap-2 text-xs"
              >
                <RefreshCw className={`w-4 h-4 ${statsLoading ? 'animate-spin' : ''}`} />
                <span>Refresh Counts</span>
              </button>
            </div>

            {/* Metric Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {/* Card 1: Total Users */}
              <div className="p-6 rounded-2xl bg-[#071C48]/70 border border-[#C8A24A]/30 shadow-xl flex items-center justify-between">
                <div>
                  <p className="text-xs font-semibold text-white/60">Registered Users</p>
                  <h3 className="font-serif-luxury text-3xl font-bold text-white mt-2">
                    {statsLoading ? '...' : stats.totalUsers}
                  </h3>
                  <span className="text-[10px] text-[#E8C878] mt-1 block">Active Platform Accounts</span>
                </div>
                <div className="w-12 h-12 rounded-xl bg-[#C8A24A]/20 border border-[#C8A24A]/40 flex items-center justify-center text-[#E8C878]">
                  <UsersIcon className="w-6 h-6" />
                </div>
              </div>

              {/* Card 2: Total Consultations */}
              <div className="p-6 rounded-2xl bg-[#071C48]/70 border border-[#C8A24A]/30 shadow-xl flex items-center justify-between">
                <div>
                  <p className="text-xs font-semibold text-white/60">Total Consultations</p>
                  <h3 className="font-serif-luxury text-3xl font-bold text-white mt-2">
                    {statsLoading ? '...' : stats.totalConsultations}
                  </h3>
                  <span className="text-[10px] text-white/50 mt-1 block">All Time Requests</span>
                </div>
                <div className="w-12 h-12 rounded-xl bg-blue-500/20 border border-blue-500/40 flex items-center justify-center text-blue-300">
                  <Calendar className="w-6 h-6" />
                </div>
              </div>

              {/* Card 3: Total Published Blogs */}
              <div className="p-6 rounded-2xl bg-[#071C48]/70 border border-[#C8A24A]/30 shadow-xl flex items-center justify-between">
                <div>
                  <p className="text-xs font-semibold text-white/60">Blog Articles</p>
                  <h3 className="font-serif-luxury text-3xl font-bold text-white mt-2">
                    {statsLoading ? '...' : stats.totalBlogs}
                  </h3>
                  <span className="text-[10px] text-emerald-400 mt-1 block">Published Insights</span>
                </div>
                <div className="w-12 h-12 rounded-xl bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center text-emerald-300">
                  <BookOpen className="w-6 h-6" />
                </div>
              </div>

              {/* Card 4: Newsletter Subscribers */}
              <div className="p-6 rounded-2xl bg-[#071C48]/70 border border-[#C8A24A]/30 shadow-xl flex items-center justify-between">
                <div>
                  <p className="text-xs font-semibold text-white/60">Subscribers</p>
                  <h3 className="font-serif-luxury text-3xl font-bold text-amber-300 mt-2">
                    {statsLoading ? '...' : stats.totalSubscribers}
                  </h3>
                  <span className="text-[10px] text-amber-300/80 mt-1 block">Active Readers</span>
                </div>
                <div className="w-12 h-12 rounded-xl bg-amber-500/20 border border-amber-500/40 flex items-center justify-center text-amber-300">
                  <Mail className="w-6 h-6" />
                </div>
              </div>
            </div>

            {/* Quick Action Shortcuts */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4">
              <div className="p-6 rounded-3xl bg-[#071C48]/50 border border-[#C8A24A]/20 flex flex-col justify-between space-y-4">
                <div>
                  <h4 className="font-serif-luxury text-lg font-bold text-white flex items-center gap-2">
                    <Calendar className="w-5 h-5 text-[#E8C878]" />
                    <span>Client Consultations</span>
                  </h4>
                  <p className="text-xs text-white/60 mt-1">
                    Confirm pending bookings, add meeting links, or manage advisory sessions.
                  </p>
                </div>
                <button
                  onClick={() => handleTabChange('consultations')}
                  className="px-5 py-2.5 rounded-xl bg-[#C8A24A] text-[#020B2D] font-bold text-xs self-start hover:bg-[#E8C878] transition-colors cursor-pointer"
                >
                  Consultation CRM →
                </button>
              </div>

              <div className="p-6 rounded-3xl bg-[#071C48]/50 border border-[#C8A24A]/20 flex flex-col justify-between space-y-4">
                <div>
                  <h4 className="font-serif-luxury text-lg font-bold text-white flex items-center gap-2">
                    <BookOpen className="w-5 h-5 text-[#E8C878]" />
                    <span>Blog CMS Manager</span>
                  </h4>
                  <p className="text-xs text-white/60 mt-1">
                    Publish new financial articles, edit existing guides, toggle draft statuses.
                  </p>
                </div>
                <button
                  onClick={() => handleTabChange('blogs')}
                  className="px-5 py-2.5 rounded-xl bg-[#C8A24A] text-[#020B2D] font-bold text-xs self-start hover:bg-[#E8C878] transition-colors cursor-pointer"
                >
                  Manage Blog Posts →
                </button>
              </div>

              <div className="p-6 rounded-3xl bg-[#071C48]/50 border border-[#C8A24A]/20 flex flex-col justify-between space-y-4">
                <div>
                  <h4 className="font-serif-luxury text-lg font-bold text-white flex items-center gap-2">
                    <Mail className="w-5 h-5 text-[#E8C878]" />
                    <span>Newsletter Subscribers</span>
                  </h4>
                  <p className="text-xs text-white/60 mt-1">
                    View active subscriber emails, export subscriber CSV, delete entries.
                  </p>
                </div>
                <button
                  onClick={() => handleTabChange('newsletter')}
                  className="px-5 py-2.5 rounded-xl bg-[#C8A24A] text-[#020B2D] font-bold text-xs self-start hover:bg-[#E8C878] transition-colors cursor-pointer"
                >
                  View Subscribers →
                </button>
              </div>
            </div>
          </div>
        )}

        {/* ================= TAB 2: CONSULTATIONS CRM ================= */}
        {activeTab === 'consultations' && (
          <div className="space-y-6">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 p-6 rounded-3xl bg-[#071C48] border border-[#C8A24A]/30">
              <div>
                <span className="text-[10px] uppercase font-mono text-[#E8C878] tracking-widest px-3 py-1 rounded-full bg-[#C8A24A]/10 border border-[#C8A24A]/30">
                  CONSULTATION CRM
                </span>
                <h2 className="font-serif-luxury text-2xl font-bold text-white mt-2">
                  Client Booking Desk
                </h2>
                <p className="text-xs text-white/60 mt-1">
                  Manage, confirm, complete, cancel or remove advisory appointments instantly.
                </p>
              </div>

              <button
                onClick={fetchConsultations}
                className="p-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-white/70 hover:text-white cursor-pointer"
              >
                <RefreshCw className={`w-4 h-4 ${consultationsLoading ? 'animate-spin' : ''}`} />
              </button>
            </div>

            {/* Search & Filter Bar */}
            <div className="p-5 rounded-2xl bg-[#071C48]/70 border border-[#C8A24A]/20 space-y-4">
              <form
                onSubmit={(e) => { e.preventDefault(); setConsultationPage(1); fetchConsultations(); }}
                className="flex items-center gap-3"
              >
                <div className="relative flex-1">
                  <Search className="w-4 h-4 text-white/40 absolute left-4 top-1/2 -translate-y-1/2" />
                  <input
                    type="text"
                    placeholder="Search by client name, email, phone, city or goal..."
                    value={consultationSearch}
                    onChange={(e) => setConsultationSearch(e.target.value)}
                    className="w-full bg-[#020B2D] border border-white/15 focus:border-[#C8A24A] rounded-xl py-2.5 pl-11 pr-4 text-white text-xs placeholder-white/30 focus:outline-none transition-colors"
                  />
                </div>
                <button
                  type="submit"
                  className="px-5 py-2.5 rounded-xl bg-[#C8A24A] text-[#020B2D] font-bold text-xs shadow hover:bg-[#E8C878] transition-colors cursor-pointer"
                >
                  Search
                </button>
              </form>
            </div>

            {/* Consultations Table */}
            {consultationsLoading ? (
              <div className="py-20 text-center rounded-2xl bg-[#071C48]/40 border border-white/10">
                <Loader2 className="w-8 h-8 animate-spin mx-auto text-[#C8A24A]" />
                <p className="text-xs text-white/60 mt-3 font-mono">Fetching consultation records...</p>
              </div>
            ) : consultationError ? (
              <div className="p-8 rounded-2xl bg-red-500/10 border border-red-500/30 text-red-300 text-xs text-center space-y-3">
                <p className="font-semibold">{consultationError}</p>
                <button
                  onClick={fetchConsultations}
                  className="px-4 py-2 rounded-xl bg-red-500/20 hover:bg-red-500/30 text-white font-bold cursor-pointer"
                >
                  Retry
                </button>
              </div>
            ) : bookings.length === 0 ? (
              <div className="py-16 text-center rounded-2xl bg-[#071C48]/40 border border-white/10">
                <p className="text-white/60 text-xs">No consultations matching the criteria.</p>
              </div>
            ) : (
              <div className="overflow-x-auto rounded-2xl border border-[#C8A24A]/25 shadow-2xl bg-[#071C48]/90">
                <table className="w-full text-left text-xs text-white/80">
                  <thead className="bg-[#020B2D] text-white uppercase text-[10px] tracking-wider border-b border-[#C8A24A]/20">
                    <tr>
                      <th className="py-4 px-4 font-bold">Client Name</th>
                      <th className="py-4 px-4 font-bold">Email</th>
                      <th className="py-4 px-4 font-bold">Phone</th>
                      <th className="py-4 px-4 font-bold">Goal</th>
                      <th className="py-4 px-4 font-bold">Mode</th>
                      <th className="py-4 px-4 font-bold">Date</th>
                      <th className="py-4 px-4 font-bold">Status</th>
                      <th className="py-4 px-4 font-bold text-right">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-white/10">
                    {bookings.map((booking) => (
                      <tr key={booking._id} className="hover:bg-white/5 transition-colors">
                        <td className="py-4 px-4 font-semibold text-white">{booking.fullName}</td>
                        <td className="py-4 px-4 text-white/70">{booking.email}</td>
                        <td className="py-4 px-4 text-white/70">{booking.phone || 'N/A'}</td>
                        <td className="py-4 px-4 text-[#E8C878] font-medium">{booking.goal}</td>
                        <td className="py-4 px-4">{booking.consultationMode}</td>
                        <td className="py-4 px-4">
                          {booking.preferredDate ? new Date(booking.preferredDate).toLocaleDateString('en-IN') : 'TBD'}
                        </td>
                        <td className="py-4 px-4">{getStatusBadge(booking.status)}</td>
                        <td className="py-4 px-4 text-right">
                          <div className="flex items-center justify-end gap-1.5">
                            {booking.status !== 'Confirmed' && (
                              <button
                                onClick={() => handleQuickStatusChange(booking._id, 'Confirmed')}
                                className="px-2 py-1 rounded bg-blue-500/20 text-blue-300 text-[10px] font-semibold cursor-pointer"
                              >
                                Confirm
                              </button>
                            )}
                            <button
                              onClick={() => {
                                setSelectedBooking(booking);
                                setUpdateStatus(booking.status);
                                setMeetingLink(booking.meetingLink || '');
                                setNotes(booking.notes || '');
                              }}
                              className="p-1 rounded bg-white/10 text-white/80 cursor-pointer"
                            >
                              <Edit3 className="w-3.5 h-3.5" />
                            </button>
                            <button
                              onClick={() => handleDeleteBooking(booking._id, booking.fullName)}
                              className="p-1 rounded bg-rose-500/20 text-rose-300 cursor-pointer"
                            >
                              <Trash2 className="w-3.5 h-3.5" />
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>
        )}

        {/* ================= TAB 3: USER MANAGEMENT ================= */}
        {activeTab === 'users' && (
          <div className="space-y-6">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 p-6 rounded-3xl bg-[#071C48] border border-[#C8A24A]/30">
              <div>
                <span className="text-[10px] uppercase font-mono text-[#E8C878] tracking-widest px-3 py-1 rounded-full bg-[#C8A24A]/10 border border-[#C8A24A]/30">
                  USER CONTROL DESK
                </span>
                <h2 className="font-serif-luxury text-2xl font-bold text-white mt-2">
                  Registered Platform Users
                </h2>
                <p className="text-xs text-white/60 mt-1">
                  Search users, update role privileges (User ↔ Admin), or manage account permissions.
                </p>
              </div>

              <button
                onClick={fetchUsers}
                className="p-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-white/70 hover:text-white cursor-pointer"
              >
                <RefreshCw className={`w-4 h-4 ${usersLoading ? 'animate-spin' : ''}`} />
              </button>
            </div>

            {/* Users Table */}
            {usersLoading ? (
              <div className="py-20 text-center rounded-2xl bg-[#071C48]/40 border border-white/10">
                <Loader2 className="w-8 h-8 animate-spin mx-auto text-[#C8A24A]" />
                <p className="text-xs text-white/60 mt-3 font-mono">Loading user directory...</p>
              </div>
            ) : (
              <div className="overflow-x-auto rounded-2xl border border-[#C8A24A]/25 shadow-2xl bg-[#071C48]/90">
                <table className="w-full text-left text-xs text-white/80">
                  <thead className="bg-[#020B2D] text-white uppercase text-[10px] tracking-wider border-b border-[#C8A24A]/20">
                    <tr>
                      <th className="py-4 px-4 font-bold">User Name</th>
                      <th className="py-4 px-4 font-bold">Email</th>
                      <th className="py-4 px-4 font-bold">Role</th>
                      <th className="py-4 px-4 font-bold text-right">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-white/10">
                    {usersList.map((usr) => (
                      <tr key={usr._id} className="hover:bg-white/5 transition-colors">
                        <td className="py-4 px-4 font-semibold text-white">{usr.name}</td>
                        <td className="py-4 px-4 text-white/70">{usr.email}</td>
                        <td className="py-4 px-4 uppercase font-mono text-[10px] text-[#E8C878]">{usr.role}</td>
                        <td className="py-4 px-4 text-right">
                          <div className="flex items-center justify-end gap-2">
                            <button
                              onClick={() => handleToggleUserRole(usr)}
                              disabled={usr._id === currentUser?._id}
                              className="px-2.5 py-1 rounded bg-[#C8A24A]/20 text-[#E8C878] text-[10px] font-bold disabled:opacity-40 cursor-pointer"
                            >
                              {usr.role === 'admin' ? 'Demote to User' : 'Promote to Admin'}
                            </button>
                            <button
                              onClick={() => handleDeleteUser(usr)}
                              disabled={usr._id === currentUser?._id}
                              className="p-1 rounded bg-rose-500/20 text-rose-300 disabled:opacity-40 cursor-pointer"
                            >
                              <Trash2 className="w-3.5 h-3.5" />
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>
        )}

        {/* ================= TAB 4: BLOG CONTENT CMS ================= */}
        {activeTab === 'blogs' && (
          <div className="space-y-6">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 p-6 rounded-3xl bg-[#071C48] border border-[#C8A24A]/30">
              <div>
                <span className="text-[10px] uppercase font-mono text-[#E8C878] tracking-widest px-3 py-1 rounded-full bg-[#C8A24A]/10 border border-[#C8A24A]/30">
                  CONTENT MANAGEMENT SYSTEM
                </span>
                <h2 className="font-serif-luxury text-2xl font-bold text-white mt-2">
                  Financial Blog Editor Desk
                </h2>
                <p className="text-xs text-white/60 mt-1">
                  Create, edit, publish, schedule or delete articles visible on the public SOLAHANA blog.
                </p>
              </div>

              <div className="flex items-center gap-3">
                <button
                  onClick={fetchBlogs}
                  className="p-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-white/70 hover:text-white cursor-pointer"
                >
                  <RefreshCw className={`w-4 h-4 ${blogsLoading ? 'animate-spin' : ''}`} />
                </button>
                <button
                  onClick={handleOpenCreateBlog}
                  className="gold-glow-button px-5 py-3 rounded-xl text-xs font-bold text-[#020B2D] flex items-center gap-2 cursor-pointer shadow-lg"
                >
                  <Plus className="w-4 h-4" />
                  <span>Create New Blog</span>
                </button>
              </div>
            </div>

            {/* Filter & Search Bar */}
            <div className="p-5 rounded-2xl bg-[#071C48]/70 border border-[#C8A24A]/20 flex flex-col sm:flex-row items-center gap-4">
              <form
                onSubmit={(e) => { e.preventDefault(); setBlogPage(1); fetchBlogs(); }}
                className="flex items-center gap-3 flex-1 w-full"
              >
                <div className="relative flex-1">
                  <Search className="w-4 h-4 text-white/40 absolute left-4 top-1/2 -translate-y-1/2" />
                  <input
                    type="text"
                    placeholder="Search blogs by title, excerpt, content, author..."
                    value={blogSearch}
                    onChange={(e) => setBlogSearch(e.target.value)}
                    className="w-full bg-[#020B2D] border border-white/15 focus:border-[#C8A24A] rounded-xl py-2.5 pl-11 pr-4 text-white text-xs placeholder-white/30 focus:outline-none"
                  />
                </div>
                <button
                  type="submit"
                  className="px-5 py-2.5 rounded-xl bg-[#C8A24A] text-[#020B2D] font-bold text-xs shadow hover:bg-[#E8C878] cursor-pointer"
                >
                  Search
                </button>
              </form>

              <div className="flex items-center gap-3 w-full sm:w-auto">
                <select
                  value={blogCategoryFilter}
                  onChange={(e) => { setBlogCategoryFilter(e.target.value); setBlogPage(1); }}
                  className="bg-[#020B2D] border border-white/15 rounded-xl px-3 py-2.5 text-white text-xs focus:outline-none cursor-pointer"
                >
                  <option value="">All Categories</option>
                  {BLOG_CATEGORIES.map((cat) => (
                    <option key={cat} value={cat}>{cat}</option>
                  ))}
                </select>

                <select
                  value={blogStatusFilter}
                  onChange={(e) => { setBlogStatusFilter(e.target.value); setBlogPage(1); }}
                  className="bg-[#020B2D] border border-white/15 rounded-xl px-3 py-2.5 text-white text-xs focus:outline-none cursor-pointer"
                >
                  <option value="">All Statuses</option>
                  <option value="published">Published Only</option>
                  <option value="draft">Drafts Only</option>
                </select>
              </div>
            </div>

            {/* Blogs Table */}
            {blogsLoading ? (
              <div className="py-20 text-center rounded-2xl bg-[#071C48]/40 border border-white/10">
                <Loader2 className="w-8 h-8 animate-spin mx-auto text-[#C8A24A]" />
                <p className="text-xs text-white/60 mt-3 font-mono">Fetching blog articles...</p>
              </div>
            ) : blogError ? (
              <div className="p-8 rounded-2xl bg-red-500/10 border border-red-500/30 text-red-300 text-xs text-center space-y-3">
                <p className="font-semibold">{blogError}</p>
                <button
                  onClick={fetchBlogs}
                  className="px-4 py-2 rounded-xl bg-red-500/20 text-white font-bold cursor-pointer"
                >
                  Retry
                </button>
              </div>
            ) : blogsList.length === 0 ? (
              <div className="py-16 text-center rounded-2xl bg-[#071C48]/40 border border-white/10 space-y-3">
                <p className="text-white/60 text-xs">No articles published yet.</p>
                <button
                  onClick={handleOpenCreateBlog}
                  className="px-4 py-2 rounded-xl bg-[#C8A24A] text-[#020B2D] text-xs font-bold cursor-pointer"
                >
                  Create First Article
                </button>
              </div>
            ) : (
              <div className="overflow-x-auto rounded-2xl border border-[#C8A24A]/25 shadow-2xl bg-[#071C48]/90">
                <table className="w-full text-left text-xs text-white/80">
                  <thead className="bg-[#020B2D] text-white uppercase text-[10px] tracking-wider border-b border-[#C8A24A]/20">
                    <tr>
                      <th className="py-4 px-4 font-bold">Article Title</th>
                      <th className="py-4 px-4 font-bold">Category</th>
                      <th className="py-4 px-4 font-bold">Author</th>
                      <th className="py-4 px-4 font-bold">Read Time</th>
                      <th className="py-4 px-4 font-bold">Status</th>
                      <th className="py-4 px-4 font-bold">Published Date</th>
                      <th className="py-4 px-4 font-bold text-right">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-white/10">
                    {blogsList.map((blog) => (
                      <tr key={blog._id} className="hover:bg-white/5 transition-colors">
                        <td className="py-4 px-4 font-semibold text-white max-w-xs truncate">
                          <div className="flex items-center gap-3">
                            {blog.featuredImage && (
                              <img
                                src={blog.featuredImage}
                                alt={blog.title}
                                className="w-9 h-9 rounded-lg object-cover border border-[#C8A24A]/30 shrink-0"
                              />
                            )}
                            <div className="truncate">
                              <div className="truncate font-bold">{blog.title}</div>
                              <div className="text-[10px] text-white/50 truncate font-mono">/blogs/{blog.slug}</div>
                            </div>
                          </div>
                        </td>
                        <td className="py-4 px-4 text-[#E8C878] font-medium">{blog.category}</td>
                        <td className="py-4 px-4 text-white/70">{blog.author}</td>
                        <td className="py-4 px-4 text-white/60">{blog.readTime}</td>
                        <td className="py-4 px-4">
                          <span
                            className={`px-2.5 py-1 rounded-full text-[10px] font-bold border uppercase font-mono ${
                              blog.status === 'published' || blog.isPublished
                                ? 'bg-emerald-500/20 text-emerald-300 border-emerald-500/40'
                                : 'bg-amber-500/20 text-amber-300 border-amber-500/40'
                            }`}
                          >
                            {blog.status || (blog.isPublished ? 'published' : 'draft')}
                          </span>
                        </td>
                        <td className="py-4 px-4 text-white/50">
                          {blog.publishedAt ? new Date(blog.publishedAt).toLocaleDateString('en-IN') : 'Draft'}
                        </td>
                        <td className="py-4 px-4 text-right">
                          <div className="flex items-center justify-end gap-2">
                            {/* Toggle Publish Status */}
                            <button
                              onClick={() => handleToggleBlogStatus(blog)}
                              disabled={actionLoading}
                              className={`px-2 py-1 rounded text-[10px] font-bold border cursor-pointer ${
                                blog.status === 'published'
                                  ? 'bg-amber-500/20 text-amber-300 border-amber-500/40 hover:bg-amber-500/30'
                                  : 'bg-emerald-500/20 text-emerald-300 border-emerald-500/40 hover:bg-emerald-500/30'
                              }`}
                              title="Toggle Publish / Draft"
                            >
                              {blog.status === 'published' ? 'Unpublish' : 'Publish'}
                            </button>

                            {/* View Public Article */}
                            <button
                              onClick={() => window.open(`/blogs/${blog.slug}`, '_blank')}
                              className="p-1 rounded bg-white/10 hover:bg-white/20 text-white/80 cursor-pointer"
                              title="View Public Article"
                            >
                              <Eye className="w-3.5 h-3.5" />
                            </button>

                            {/* Edit Article */}
                            <button
                              onClick={() => handleOpenEditBlog(blog)}
                              className="p-1 rounded bg-[#C8A24A]/20 hover:bg-[#C8A24A]/40 text-[#E8C878] cursor-pointer"
                              title="Edit Article"
                            >
                              <Edit3 className="w-3.5 h-3.5" />
                            </button>

                            {/* Delete Article */}
                            <button
                              onClick={() => handleDeleteBlog(blog)}
                              disabled={actionLoading}
                              className="p-1 rounded bg-rose-500/20 hover:bg-rose-500/40 text-rose-300 cursor-pointer"
                              title="Delete Article"
                            >
                              <Trash2 className="w-3.5 h-3.5" />
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>
        )}

        {/* ================= TAB 5: NEWSLETTER MANAGER ================= */}
        {activeTab === 'newsletter' && (
          <div className="space-y-6">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 p-6 rounded-3xl bg-[#071C48] border border-[#C8A24A]/30">
              <div>
                <span className="text-[10px] uppercase font-mono text-[#E8C878] tracking-widest px-3 py-1 rounded-full bg-[#C8A24A]/10 border border-[#C8A24A]/30">
                  SUBSCRIBER MANAGEMENT
                </span>
                <h2 className="font-serif-luxury text-2xl font-bold text-white mt-2">
                  Newsletter Subscribers
                </h2>
                <p className="text-xs text-white/60 mt-1">
                  Manage active email subscribers, monitor landing page conversions, and export mailing lists.
                </p>
              </div>

              <div className="flex items-center gap-3">
                <button
                  onClick={fetchSubscribers}
                  className="p-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-white/70 hover:text-white cursor-pointer"
                >
                  <RefreshCw className={`w-4 h-4 ${subscribersLoading ? 'animate-spin' : ''}`} />
                </button>
                <button
                  onClick={handleExportCSV}
                  className="gold-glow-button px-5 py-3 rounded-xl text-xs font-bold text-[#020B2D] flex items-center gap-2 cursor-pointer shadow-lg"
                >
                  <Download className="w-4 h-4" />
                  <span>Export CSV</span>
                </button>
              </div>
            </div>

            {/* Search Bar */}
            <div className="p-5 rounded-2xl bg-[#071C48]/70 border border-[#C8A24A]/20">
              <form
                onSubmit={(e) => { e.preventDefault(); setSubscriberPage(1); fetchSubscribers(); }}
                className="flex items-center gap-3"
              >
                <div className="relative flex-1">
                  <Search className="w-4 h-4 text-white/40 absolute left-4 top-1/2 -translate-y-1/2" />
                  <input
                    type="text"
                    placeholder="Search subscriber by email..."
                    value={subscriberSearch}
                    onChange={(e) => setSubscriberSearch(e.target.value)}
                    className="w-full bg-[#020B2D] border border-white/15 focus:border-[#C8A24A] rounded-xl py-2.5 pl-11 pr-4 text-white text-xs placeholder-white/30 focus:outline-none"
                  />
                </div>
                <button
                  type="submit"
                  className="px-5 py-2.5 rounded-xl bg-[#C8A24A] text-[#020B2D] font-bold text-xs shadow hover:bg-[#E8C878] cursor-pointer"
                >
                  Search
                </button>
              </form>
            </div>

            {/* Subscribers Table */}
            {subscribersLoading ? (
              <div className="py-20 text-center rounded-2xl bg-[#071C48]/40 border border-white/10">
                <Loader2 className="w-8 h-8 animate-spin mx-auto text-[#C8A24A]" />
                <p className="text-xs text-white/60 mt-3 font-mono">Fetching subscriber list...</p>
              </div>
            ) : subscriberError ? (
              <div className="p-8 rounded-2xl bg-red-500/10 border border-red-500/30 text-red-300 text-xs text-center space-y-3">
                <p className="font-semibold">{subscriberError}</p>
                <button
                  onClick={fetchSubscribers}
                  className="px-4 py-2 rounded-xl bg-red-500/20 text-white font-bold cursor-pointer"
                >
                  Retry
                </button>
              </div>
            ) : subscribersList.length === 0 ? (
              <div className="py-16 text-center rounded-2xl bg-[#071C48]/40 border border-white/10">
                <p className="text-white/60 text-xs">No subscribers yet.</p>
              </div>
            ) : (
              <div className="overflow-x-auto rounded-2xl border border-[#C8A24A]/25 shadow-2xl bg-[#071C48]/90">
                <table className="w-full text-left text-xs text-white/80">
                  <thead className="bg-[#020B2D] text-white uppercase text-[10px] tracking-wider border-b border-[#C8A24A]/20">
                    <tr>
                      <th className="py-4 px-4 font-bold">Email Address</th>
                      <th className="py-4 px-4 font-bold">Subscription Source</th>
                      <th className="py-4 px-4 font-bold">Status</th>
                      <th className="py-4 px-4 font-bold">Subscribed Date</th>
                      <th className="py-4 px-4 font-bold text-right">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-white/10">
                    {subscribersList.map((sub) => (
                      <tr key={sub._id} className="hover:bg-white/5 transition-colors">
                        <td className="py-4 px-4 font-semibold text-white flex items-center gap-2">
                          <Mail className="w-4 h-4 text-[#E8C878]" />
                          <span>{sub.email}</span>
                        </td>
                        <td className="py-4 px-4 text-white/70 font-mono text-[11px]">{sub.source || 'website_footer'}</td>
                        <td className="py-4 px-4">
                          <span className="px-2.5 py-1 rounded-full text-[10px] font-bold bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 uppercase font-mono">
                            {sub.status || 'subscribed'}
                          </span>
                        </td>
                        <td className="py-4 px-4 text-white/50">
                          {sub.createdAt ? new Date(sub.createdAt).toLocaleDateString('en-IN') : 'N/A'}
                        </td>
                        <td className="py-4 px-4 text-right">
                          <button
                            onClick={() => handleDeleteSubscriber(sub)}
                            disabled={actionLoading}
                            className="p-1 rounded bg-rose-500/20 hover:bg-rose-500/40 text-rose-300 cursor-pointer"
                            title="Delete Subscriber"
                          >
                            <Trash2 className="w-3.5 h-3.5" />
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>
        )}
      </main>

      {/* Consultation Update Modal */}
      <AnimatePresence>
        {selectedBooking && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="w-full max-w-lg rounded-3xl bg-[#071C48] border border-[#C8A24A]/40 p-6 shadow-2xl text-left space-y-4"
            >
              <div className="flex items-center justify-between border-b border-white/10 pb-3">
                <div>
                  <h3 className="font-serif-luxury text-lg font-bold text-white">
                    Update Booking & Meeting Link
                  </h3>
                  <p className="text-xs text-[#E8C878]">{selectedBooking.fullName} · {selectedBooking.goal}</p>
                </div>
                <button
                  onClick={() => setSelectedBooking(null)}
                  className="p-1 rounded-lg text-white/60 hover:text-white cursor-pointer"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <form onSubmit={handleSaveModalStatus} className="space-y-4 text-xs">
                <div>
                  <label className="block text-white/70 mb-1 font-semibold">Status *</label>
                  <select
                    value={updateStatus}
                    onChange={(e) => setUpdateStatus(e.target.value)}
                    className="w-full bg-[#020B2D] border border-white/20 rounded-xl p-3 text-white focus:outline-none cursor-pointer"
                  >
                    <option value="Pending">Pending</option>
                    <option value="Confirmed">Confirmed</option>
                    <option value="Completed">Completed</option>
                    <option value="Cancelled">Cancelled</option>
                  </select>
                </div>

                <div>
                  <label className="block text-white/70 mb-1 font-semibold font-mono">Video Call Link</label>
                  <input
                    type="url"
                    placeholder="https://meet.google.com/xyz-abc-def"
                    value={meetingLink}
                    onChange={(e) => setMeetingLink(e.target.value)}
                    className="w-full bg-[#020B2D] border border-white/20 rounded-xl p-3 text-white focus:outline-none placeholder-white/30"
                  />
                </div>

                <div>
                  <label className="block text-white/70 mb-1 font-semibold">Advisor Notes</label>
                  <textarea
                    rows={3}
                    placeholder="Internal notes..."
                    value={notes}
                    onChange={(e) => setNotes(e.target.value)}
                    className="w-full bg-[#020B2D] border border-white/20 rounded-xl p-3 text-white focus:outline-none placeholder-white/30"
                  />
                </div>

                <div className="pt-3 flex items-center justify-end gap-3 border-t border-white/10">
                  <button
                    type="button"
                    onClick={() => setSelectedBooking(null)}
                    className="px-4 py-2.5 rounded-xl bg-white/10 text-white font-medium hover:bg-white/20 cursor-pointer"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    disabled={actionLoading}
                    className="px-6 py-2.5 rounded-xl bg-[#C8A24A] text-[#020B2D] font-bold shadow hover:bg-[#E8C878] disabled:opacity-50 flex items-center gap-2 cursor-pointer"
                  >
                    {actionLoading && <Loader2 className="w-4 h-4 animate-spin" />}
                    <span>Save Update</span>
                  </button>
                </div>
              </form>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* CREATE / EDIT BLOG MODAL */}
      <AnimatePresence>
        {blogModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md overflow-y-auto">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="w-full max-w-3xl my-8 rounded-3xl bg-[#071C48] border border-[#C8A24A]/40 p-6 sm:p-8 shadow-2xl text-left space-y-6 max-h-[90vh] overflow-y-auto"
            >
              <div className="flex items-center justify-between border-b border-white/10 pb-4">
                <div>
                  <h3 className="font-serif-luxury text-xl font-bold text-white flex items-center gap-2">
                    <BookOpen className="w-5 h-5 text-[#E8C878]" />
                    <span>{editingBlogId ? 'Edit Financial Article' : 'Create New Financial Article'}</span>
                  </h3>
                  <p className="text-xs text-[#E8C878]">SOLAHANA Blog CMS Manager</p>
                </div>
                <button
                  onClick={() => setBlogModalOpen(false)}
                  className="p-1 rounded-lg text-white/60 hover:text-white cursor-pointer"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <form onSubmit={handleSaveBlogSubmit} className="space-y-4 text-xs">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="sm:col-span-2">
                    <label className="block text-white/80 mb-1 font-semibold">Article Title *</label>
                    <input
                      type="text"
                      required
                      placeholder="Mastering Systematic Investment Plans (SIP)..."
                      value={blogFormData.title}
                      onChange={(e) => setBlogFormData({ ...blogFormData, title: e.target.value })}
                      className="w-full bg-[#020B2D] border border-white/20 rounded-xl p-3 text-white focus:outline-none focus:border-[#C8A24A]"
                    />
                  </div>

                  <div>
                    <label className="block text-white/80 mb-1 font-semibold">Category *</label>
                    <select
                      value={blogFormData.category}
                      onChange={(e) => setBlogFormData({ ...blogFormData, category: e.target.value })}
                      className="w-full bg-[#020B2D] border border-white/20 rounded-xl p-3 text-white focus:outline-none cursor-pointer"
                    >
                      {BLOG_CATEGORIES.map((cat) => (
                        <option key={cat} value={cat}>{cat}</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-white/80 mb-1 font-semibold">Status *</label>
                    <select
                      value={blogFormData.status}
                      onChange={(e) => setBlogFormData({ ...blogFormData, status: e.target.value })}
                      className="w-full bg-[#020B2D] border border-white/20 rounded-xl p-3 text-white focus:outline-none cursor-pointer"
                    >
                      <option value="published">Published</option>
                      <option value="draft">Draft</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-white/80 mb-1 font-semibold">Author</label>
                    <input
                      type="text"
                      placeholder="Rohan Sharma, Chief Investment Strategist"
                      value={blogFormData.author}
                      onChange={(e) => setBlogFormData({ ...blogFormData, author: e.target.value })}
                      className="w-full bg-[#020B2D] border border-white/20 rounded-xl p-3 text-white focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-white/80 mb-1 font-semibold">Read Time</label>
                    <input
                      type="text"
                      placeholder="6 min read"
                      value={blogFormData.readTime}
                      onChange={(e) => setBlogFormData({ ...blogFormData, readTime: e.target.value })}
                      className="w-full bg-[#020B2D] border border-white/20 rounded-xl p-3 text-white focus:outline-none"
                    />
                  </div>

                  <div className="sm:col-span-2">
                    <label className="block text-white/80 mb-1 font-semibold">Featured Image URL</label>
                    <input
                      type="url"
                      placeholder="https://images.unsplash.com/photo-..."
                      value={blogFormData.featuredImage}
                      onChange={(e) => setBlogFormData({ ...blogFormData, featuredImage: e.target.value })}
                      className="w-full bg-[#020B2D] border border-white/20 rounded-xl p-3 text-white focus:outline-none font-mono text-[11px]"
                    />
                  </div>

                  <div className="sm:col-span-2">
                    <label className="block text-white/80 mb-1 font-semibold">Excerpt / Summary *</label>
                    <textarea
                      rows={2}
                      required
                      placeholder="Brief overview of the article shown on cards..."
                      value={blogFormData.excerpt}
                      onChange={(e) => setBlogFormData({ ...blogFormData, excerpt: e.target.value })}
                      className="w-full bg-[#020B2D] border border-white/20 rounded-xl p-3 text-white focus:outline-none"
                    />
                  </div>

                  <div className="sm:col-span-2">
                    <label className="block text-white/80 mb-1 font-semibold">Article Content (Markdown supported) *</label>
                    <textarea
                      rows={10}
                      required
                      placeholder="# Heading\n\nArticle body paragraph text..."
                      value={blogFormData.content}
                      onChange={(e) => setBlogFormData({ ...blogFormData, content: e.target.value })}
                      className="w-full bg-[#020B2D] border border-white/20 rounded-xl p-3 text-white focus:outline-none font-mono text-[11px]"
                    />
                  </div>
                </div>

                <div className="pt-4 flex items-center justify-end gap-3 border-t border-white/10">
                  <button
                    type="button"
                    onClick={() => setBlogModalOpen(false)}
                    className="px-5 py-2.5 rounded-xl bg-white/10 text-white font-medium hover:bg-white/20 cursor-pointer"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    disabled={actionLoading}
                    className="gold-glow-button px-6 py-2.5 rounded-xl text-xs font-bold text-[#020B2D] flex items-center gap-2 cursor-pointer disabled:opacity-50"
                  >
                    {actionLoading ? <Loader2 className="w-4 h-4 animate-spin" /> : <Check className="w-4 h-4" />}
                    <span>{editingBlogId ? 'Update Article' : 'Publish Article'}</span>
                  </button>
                </div>
              </form>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
