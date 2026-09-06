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
  Sparkles
} from 'lucide-react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import adminService from '../services/adminService';

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

export default function AdminDashboardPage() {
  const { user: currentUser, logout } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  const getTabFromPath = () => {
    if (location.pathname.includes('/admin/consultations')) return 'consultations';
    if (location.pathname.includes('/admin/users')) return 'users';
    if (location.pathname.includes('/admin/blogs')) return 'blogs';
    if (location.pathname.includes('/admin/newsletter')) return 'newsletter';
    return 'dashboard';
  };

  const activeTab = getTabFromPath();

  const handleTabChange = (tab) => {
    if (tab === 'dashboard') navigate('/admin/dashboard');
    else if (tab === 'consultations') navigate('/admin/consultations');
    else if (tab === 'users') navigate('/admin/users');
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

  // Fetch Dashboard Analytics Stats
  const fetchStats = async () => {
    setStatsLoading(true);
    try {
      const data = await adminService.getStats();
      setStats(data);
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
      setBookings(res.consultations || []);
      setConsultationPagination(res.pagination || { page: 1, limit: 10, totalPages: 1, totalBookings: 0 });
    } catch (err) {
      console.error('[Fetch Consultations Error]:', err);
      setConsultationError(err.response?.data?.message || err.message || 'Failed to fetch consultations');
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
      setUsersList(res.users || []);
      setUserPagination(res.pagination || { page: 1, limit: 10, totalPages: 1, totalUsers: 0 });
    } catch (err) {
      console.error('[Fetch Users Error]:', err);
      setUserError(err.response?.data?.message || err.message || 'Failed to fetch users');
    } finally {
      setUsersLoading(false);
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
  }, [activeTab, consultationPage, statusFilter, goalFilter, modeFilter, userPage, roleFilter]);

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
                  : 'text-white/40 hover:text-white/60 hover:bg-white/5'
              }`}
            >
              <div className="flex items-center gap-3">
                <BookOpen className="w-4 h-4" />
                <span>Blogs</span>
              </div>
              <span className="text-[9px] px-2 py-0.5 rounded bg-white/10 text-white/50">Soon</span>
            </button>

            <button
              onClick={() => handleTabChange('newsletter')}
              className={`w-full flex items-center justify-between px-4 py-3 rounded-xl transition-all cursor-pointer ${
                activeTab === 'newsletter'
                  ? 'bg-[#C8A24A] text-[#020B2D] font-bold shadow-lg'
                  : 'text-white/40 hover:text-white/60 hover:bg-white/5'
              }`}
            >
              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4" />
                <span>Newsletter</span>
              </div>
              <span className="text-[9px] px-2 py-0.5 rounded bg-white/10 text-white/50">Soon</span>
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
                  Live MongoDB statistics across users, advisory consultations, and scheduling statuses.
                </p>
              </div>

              <button
                onClick={() => { fetchStats(); fetchConsultations(); fetchUsers(); }}
                className="p-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-white/70 hover:text-white transition-colors cursor-pointer self-start sm:self-auto flex items-center gap-2 text-xs"
              >
                <RefreshCw className={`w-4 h-4 ${statsLoading ? 'animate-spin' : ''}`} />
                <span>Refresh Counts</span>
              </button>
            </div>

            {/* 6 Metric Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {/* Card 1: Total Users */}
              <div className="p-6 rounded-2xl bg-[#071C48]/70 border border-[#C8A24A]/30 shadow-xl flex items-center justify-between">
                <div>
                  <p className="text-xs font-semibold text-white/60">Total Registered Users</p>
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

              {/* Card 3: Pending Consultations */}
              <div className="p-6 rounded-2xl bg-[#071C48]/70 border border-amber-500/30 shadow-xl flex items-center justify-between">
                <div>
                  <p className="text-xs font-semibold text-white/60">Pending Consultations</p>
                  <h3 className="font-serif-luxury text-3xl font-bold text-amber-300 mt-2">
                    {statsLoading ? '...' : stats.pendingConsultations}
                  </h3>
                  <span className="text-[10px] text-amber-300/80 mt-1 block">Awaiting Confirmation</span>
                </div>
                <div className="w-12 h-12 rounded-xl bg-amber-500/20 border border-amber-500/40 flex items-center justify-center text-amber-300">
                  <Clock className="w-6 h-6" />
                </div>
              </div>

              {/* Card 4: Confirmed Consultations */}
              <div className="p-6 rounded-2xl bg-[#071C48]/70 border border-blue-500/30 shadow-xl flex items-center justify-between">
                <div>
                  <p className="text-xs font-semibold text-white/60">Confirmed Consultations</p>
                  <h3 className="font-serif-luxury text-3xl font-bold text-blue-300 mt-2">
                    {statsLoading ? '...' : stats.confirmedConsultations}
                  </h3>
                  <span className="text-[10px] text-blue-300/80 mt-1 block">Scheduled Advisory Sessions</span>
                </div>
                <div className="w-12 h-12 rounded-xl bg-blue-500/20 border border-blue-500/40 flex items-center justify-center text-blue-300">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
              </div>

              {/* Card 5: Completed Consultations */}
              <div className="p-6 rounded-2xl bg-[#071C48]/70 border border-emerald-500/30 shadow-xl flex items-center justify-between">
                <div>
                  <p className="text-xs font-semibold text-white/60">Completed Consultations</p>
                  <h3 className="font-serif-luxury text-3xl font-bold text-emerald-300 mt-2">
                    {statsLoading ? '...' : stats.completedConsultations}
                  </h3>
                  <span className="text-[10px] text-emerald-300/80 mt-1 block">Successfully Conducted</span>
                </div>
                <div className="w-12 h-12 rounded-xl bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center text-emerald-300">
                  <Award className="w-6 h-6" />
                </div>
              </div>

              {/* Card 6: Cancelled Consultations */}
              <div className="p-6 rounded-2xl bg-[#071C48]/70 border border-rose-500/30 shadow-xl flex items-center justify-between">
                <div>
                  <p className="text-xs font-semibold text-white/60">Cancelled Consultations</p>
                  <h3 className="font-serif-luxury text-3xl font-bold text-rose-300 mt-2">
                    {statsLoading ? '...' : stats.cancelledConsultations}
                  </h3>
                  <span className="text-[10px] text-rose-300/80 mt-1 block">Cancelled Bookings</span>
                </div>
                <div className="w-12 h-12 rounded-xl bg-rose-500/20 border border-rose-500/40 flex items-center justify-center text-rose-300">
                  <XCircle className="w-6 h-6" />
                </div>
              </div>
            </div>

            {/* Quick Action Shortcuts */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4">
              <div className="p-6 rounded-3xl bg-[#071C48]/50 border border-[#C8A24A]/20 flex flex-col justify-between space-y-4">
                <div>
                  <h4 className="font-serif-luxury text-lg font-bold text-white flex items-center gap-2">
                    <Calendar className="w-5 h-5 text-[#E8C878]" />
                    <span>Manage Client Consultations</span>
                  </h4>
                  <p className="text-xs text-white/60 mt-1">
                    Confirm pending bookings, add video call links, complete sessions, or delete requests.
                  </p>
                </div>
                <button
                  onClick={() => setActiveTab('consultations')}
                  className="px-5 py-2.5 rounded-xl bg-[#C8A24A] text-[#020B2D] font-bold text-xs self-start hover:bg-[#E8C878] transition-colors cursor-pointer"
                >
                  Open Consultations Table →
                </button>
              </div>

              <div className="p-6 rounded-3xl bg-[#071C48]/50 border border-[#C8A24A]/20 flex flex-col justify-between space-y-4">
                <div>
                  <h4 className="font-serif-luxury text-lg font-bold text-white flex items-center gap-2">
                    <UsersIcon className="w-5 h-5 text-[#E8C878]" />
                    <span>User Management & Roles</span>
                  </h4>
                  <p className="text-xs text-white/60 mt-1">
                    Search registered clients, filter roles, grant administrator privileges, or manage users.
                  </p>
                </div>
                <button
                  onClick={() => setActiveTab('users')}
                  className="px-5 py-2.5 rounded-xl bg-[#C8A24A] text-[#020B2D] font-bold text-xs self-start hover:bg-[#E8C878] transition-colors cursor-pointer"
                >
                  Open User Management →
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

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
                <div>
                  <label className="block text-[11px] text-white/50 mb-1">Status Filter</label>
                  <select
                    value={statusFilter}
                    onChange={(e) => { setStatusFilter(e.target.value); setConsultationPage(1); }}
                    className="w-full bg-[#020B2D] border border-white/15 rounded-xl px-3 py-2 text-white focus:outline-none cursor-pointer"
                  >
                    <option value="">All Statuses</option>
                    <option value="Pending">Pending</option>
                    <option value="Confirmed">Confirmed</option>
                    <option value="Completed">Completed</option>
                    <option value="Cancelled">Cancelled</option>
                  </select>
                </div>

                <div>
                  <label className="block text-[11px] text-white/50 mb-1">Goal Filter</label>
                  <select
                    value={goalFilter}
                    onChange={(e) => { setGoalFilter(e.target.value); setConsultationPage(1); }}
                    className="w-full bg-[#020B2D] border border-white/15 rounded-xl px-3 py-2 text-white focus:outline-none cursor-pointer"
                  >
                    <option value="">All Financial Goals</option>
                    {GOAL_OPTIONS.map((g) => (
                      <option key={g} value={g}>{g}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-[11px] text-white/50 mb-1">Mode Filter</label>
                  <select
                    value={modeFilter}
                    onChange={(e) => { setModeFilter(e.target.value); setConsultationPage(1); }}
                    className="w-full bg-[#020B2D] border border-white/15 rounded-xl px-3 py-2 text-white focus:outline-none cursor-pointer"
                  >
                    <option value="">All Modes</option>
                    {MODE_OPTIONS.map((m) => (
                      <option key={m} value={m}>{m}</option>
                    ))}
                  </select>
                </div>
              </div>
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
                      <th className="py-4 px-4 font-bold">City</th>
                      <th className="py-4 px-4 font-bold">Goal</th>
                      <th className="py-4 px-4 font-bold">Mode</th>
                      <th className="py-4 px-4 font-bold">Date & Time</th>
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
                        <td className="py-4 px-4 text-white/60">{booking.city || 'N/A'}</td>
                        <td className="py-4 px-4 text-[#E8C878] font-medium">{booking.goal}</td>
                        <td className="py-4 px-4">{booking.consultationMode}</td>
                        <td className="py-4 px-4">
                          <div>{booking.preferredDate ? new Date(booking.preferredDate).toLocaleDateString('en-IN') : 'TBD'}</div>
                          <div className="text-[10px] text-white/50">{booking.preferredTime}</div>
                        </td>
                        <td className="py-4 px-4">{getStatusBadge(booking.status)}</td>
                        <td className="py-4 px-4 text-right">
                          <div className="flex items-center justify-end gap-1.5">
                            {/* Action: Confirm */}
                            {booking.status !== 'Confirmed' && (
                              <button
                                onClick={() => handleQuickStatusChange(booking._id, 'Confirmed')}
                                disabled={actionLoading}
                                className="px-2 py-1 rounded bg-blue-500/20 hover:bg-blue-500/40 text-blue-300 text-[10px] font-semibold border border-blue-500/30 transition-colors cursor-pointer"
                                title="Confirm Consultation"
                              >
                                Confirm
                              </button>
                            )}

                            {/* Action: Complete */}
                            {booking.status !== 'Completed' && (
                              <button
                                onClick={() => handleQuickStatusChange(booking._id, 'Completed')}
                                disabled={actionLoading}
                                className="px-2 py-1 rounded bg-emerald-500/20 hover:bg-emerald-500/40 text-emerald-300 text-[10px] font-semibold border border-emerald-500/30 transition-colors cursor-pointer"
                                title="Mark Completed"
                              >
                                Complete
                              </button>
                            )}

                            {/* Action: Cancel */}
                            {booking.status !== 'Cancelled' && (
                              <button
                                onClick={() => handleQuickStatusChange(booking._id, 'Cancelled')}
                                disabled={actionLoading}
                                className="px-2 py-1 rounded bg-amber-500/20 hover:bg-amber-500/40 text-amber-300 text-[10px] font-semibold border border-amber-500/30 transition-colors cursor-pointer"
                                title="Cancel Consultation"
                              >
                                Cancel
                              </button>
                            )}

                            {/* Action: Edit Details / Meeting Link */}
                            <button
                              onClick={() => {
                                setSelectedBooking(booking);
                                setUpdateStatus(booking.status);
                                setMeetingLink(booking.meetingLink || '');
                                setNotes(booking.notes || '');
                              }}
                              className="p-1 rounded.5 bg-white/10 hover:bg-white/20 text-white/80 transition-colors cursor-pointer"
                              title="Edit Meeting Link / Notes"
                            >
                              <Edit3 className="w-3.5 h-3.5" />
                            </button>

                            {/* Action: Delete */}
                            <button
                              onClick={() => handleDeleteBooking(booking._id, booking.fullName)}
                              disabled={actionLoading}
                              className="p-1 rounded.5 bg-rose-500/20 hover:bg-rose-500/40 text-rose-300 transition-colors cursor-pointer"
                              title="Delete Record"
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

            {/* Pagination Bar */}
            {consultationPagination.totalPages > 1 && (
              <div className="mt-4 flex items-center justify-between text-xs text-white/60">
                <span>
                  Page <strong>{consultationPagination.page}</strong> of <strong>{consultationPagination.totalPages}</strong> ({consultationPagination.totalBookings} total)
                </span>
                <div className="flex items-center gap-2">
                  <button
                    disabled={consultationPage <= 1}
                    onClick={() => setConsultationPage((p) => Math.max(p - 1, 1))}
                    className="p-2 rounded-lg bg-[#071C48] border border-white/10 disabled:opacity-30 hover:bg-white/10 cursor-pointer"
                  >
                    <ChevronLeft className="w-4 h-4" />
                  </button>
                  <button
                    disabled={consultationPage >= consultationPagination.totalPages}
                    onClick={() => setConsultationPage((p) => Math.min(p + 1, consultationPagination.totalPages))}
                    className="p-2 rounded-lg bg-[#071C48] border border-white/10 disabled:opacity-30 hover:bg-white/10 cursor-pointer"
                  >
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
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

            {/* Search & Role Filter Bar */}
            <div className="p-5 rounded-2xl bg-[#071C48]/70 border border-[#C8A24A]/20 flex flex-col sm:flex-row items-center gap-4">
              <form
                onSubmit={(e) => { e.preventDefault(); setUserPage(1); fetchUsers(); }}
                className="flex items-center gap-3 flex-1 w-full"
              >
                <div className="relative flex-1">
                  <Search className="w-4 h-4 text-white/40 absolute left-4 top-1/2 -translate-y-1/2" />
                  <input
                    type="text"
                    placeholder="Search users by name, email, phone..."
                    value={userSearch}
                    onChange={(e) => setUserSearch(e.target.value)}
                    className="w-full bg-[#020B2D] border border-white/15 focus:border-[#C8A24A] rounded-xl py-2.5 pl-11 pr-4 text-white text-xs placeholder-white/30 focus:outline-none transition-colors"
                  />
                </div>
                <button
                  type="submit"
                  className="px-5 py-2.5 rounded-xl bg-[#C8A24A] text-[#020B2D] font-bold text-xs shadow hover:bg-[#E8C878] transition-colors cursor-pointer shrink-0"
                >
                  Search
                </button>
              </form>

              <div className="w-full sm:w-48 shrink-0">
                <select
                  value={roleFilter}
                  onChange={(e) => { setRoleFilter(e.target.value); setUserPage(1); }}
                  className="w-full bg-[#020B2D] border border-white/15 rounded-xl px-3 py-2.5 text-white text-xs focus:outline-none cursor-pointer"
                >
                  <option value="">All Roles</option>
                  <option value="user">User</option>
                  <option value="admin">Admin</option>
                  <option value="advisor">Advisor</option>
                </select>
              </div>
            </div>

            {/* Users Table */}
            {usersLoading ? (
              <div className="py-20 text-center rounded-2xl bg-[#071C48]/40 border border-white/10">
                <Loader2 className="w-8 h-8 animate-spin mx-auto text-[#C8A24A]" />
                <p className="text-xs text-white/60 mt-3 font-mono">Loading user directory...</p>
              </div>
            ) : userError ? (
              <div className="p-8 rounded-2xl bg-red-500/10 border border-red-500/30 text-red-300 text-xs text-center space-y-3">
                <p className="font-semibold">{userError}</p>
                <button
                  onClick={fetchUsers}
                  className="px-4 py-2 rounded-xl bg-red-500/20 hover:bg-red-500/30 text-white font-bold cursor-pointer"
                >
                  Retry
                </button>
              </div>
            ) : usersList.length === 0 ? (
              <div className="py-16 text-center rounded-2xl bg-[#071C48]/40 border border-white/10">
                <p className="text-white/60 text-xs">No user accounts found matching criteria.</p>
              </div>
            ) : (
              <div className="overflow-x-auto rounded-2xl border border-[#C8A24A]/25 shadow-2xl bg-[#071C48]/90">
                <table className="w-full text-left text-xs text-white/80">
                  <thead className="bg-[#020B2D] text-white uppercase text-[10px] tracking-wider border-b border-[#C8A24A]/20">
                    <tr>
                      <th className="py-4 px-4 font-bold">User Name</th>
                      <th className="py-4 px-4 font-bold">Email</th>
                      <th className="py-4 px-4 font-bold">Phone</th>
                      <th className="py-4 px-4 font-bold">City</th>
                      <th className="py-4 px-4 font-bold">Current Role</th>
                      <th className="py-4 px-4 font-bold">Registered Date</th>
                      <th className="py-4 px-4 font-bold text-right">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-white/10">
                    {usersList.map((usr) => (
                      <tr key={usr._id} className="hover:bg-white/5 transition-colors">
                        <td className="py-4 px-4 font-semibold text-white flex items-center gap-2">
                          <div className="w-7 h-7 rounded-full bg-[#C8A24A]/20 text-[#E8C878] flex items-center justify-center font-bold text-xs uppercase">
                            {usr.name.charAt(0)}
                          </div>
                          <span>{usr.name}</span>
                        </td>
                        <td className="py-4 px-4 text-white/70">{usr.email}</td>
                        <td className="py-4 px-4 text-white/70">{usr.phone || 'N/A'}</td>
                        <td className="py-4 px-4 text-white/60">{usr.city || 'N/A'}</td>
                        <td className="py-4 px-4">
                          <span
                            className={`px-2.5 py-1 rounded-full text-[10px] font-bold border uppercase font-mono ${
                              usr.role === 'admin'
                                ? 'bg-purple-500/20 text-purple-300 border-purple-500/40'
                                : usr.role === 'advisor'
                                ? 'bg-blue-500/20 text-blue-300 border-blue-500/40'
                                : 'bg-white/10 text-white/70 border-white/20'
                            }`}
                          >
                            {usr.role}
                          </span>
                        </td>
                        <td className="py-4 px-4 text-white/50">
                          {usr.createdAt ? new Date(usr.createdAt).toLocaleDateString('en-IN') : 'N/A'}
                        </td>
                        <td className="py-4 px-4 text-right">
                          <div className="flex items-center justify-end gap-2">
                            {/* Toggle Role Button */}
                            <button
                              onClick={() => handleToggleUserRole(usr)}
                              disabled={actionLoading || usr._id === currentUser?._id}
                              className="px-2.5 py-1 rounded bg-[#C8A24A]/20 hover:bg-[#C8A24A]/40 text-[#E8C878] border border-[#C8A24A]/30 text-[10px] font-bold disabled:opacity-40 transition-colors cursor-pointer"
                              title={`Change role to ${usr.role === 'admin' ? 'User' : 'Admin'}`}
                            >
                              {usr.role === 'admin' ? 'Demote to User' : 'Promote to Admin'}
                            </button>

                            {/* Delete User Button */}
                            <button
                              onClick={() => handleDeleteUser(usr)}
                              disabled={actionLoading || usr._id === currentUser?._id}
                              className="p-1 rounded bg-rose-500/20 hover:bg-rose-500/40 text-rose-300 disabled:opacity-40 transition-colors cursor-pointer"
                              title="Delete User Account"
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

            {/* User Pagination Bar */}
            {userPagination.totalPages > 1 && (
              <div className="mt-4 flex items-center justify-between text-xs text-white/60">
                <span>
                  Page <strong>{userPagination.page}</strong> of <strong>{userPagination.totalPages}</strong> ({userPagination.totalUsers} users)
                </span>
                <div className="flex items-center gap-2">
                  <button
                    disabled={userPage <= 1}
                    onClick={() => setUserPage((p) => Math.max(p - 1, 1))}
                    className="p-2 rounded-lg bg-[#071C48] border border-white/10 disabled:opacity-30 hover:bg-white/10 cursor-pointer"
                  >
                    <ChevronLeft className="w-4 h-4" />
                  </button>
                  <button
                    disabled={userPage >= userPagination.totalPages}
                    onClick={() => setUserPage((p) => Math.min(p + 1, userPagination.totalPages))}
                    className="p-2 rounded-lg bg-[#071C48] border border-white/10 disabled:opacity-30 hover:bg-white/10 cursor-pointer"
                  >
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            )}
          </div>
        )}

        {/* ================= TAB 4: BLOGS (COMING SOON) ================= */}
        {activeTab === 'blogs' && (
          <div className="py-20 text-center rounded-3xl bg-[#071C48]/50 border border-[#C8A24A]/30 p-8 space-y-4">
            <div className="w-16 h-16 mx-auto rounded-2xl bg-[#C8A24A]/15 text-[#E8C878] border border-[#C8A24A]/30 flex items-center justify-center">
              <BookOpen className="w-8 h-8" />
            </div>
            <h3 className="font-serif-luxury text-2xl font-bold text-white">
              Blog Content CMS (Coming Soon)
            </h3>
            <p className="text-xs text-white/60 max-w-md mx-auto leading-relaxed">
              The SOLAHANA Editorial CMS is currently under development. Soon you will be able to publish, edit, and schedule financial insights, tax guides, and market commentary directly from this control panel.
            </p>
          </div>
        )}

        {/* ================= TAB 5: NEWSLETTER (COMING SOON) ================= */}
        {activeTab === 'newsletter' && (
          <div className="py-20 text-center rounded-3xl bg-[#071C48]/50 border border-[#C8A24A]/30 p-8 space-y-4">
            <div className="w-16 h-16 mx-auto rounded-2xl bg-[#C8A24A]/15 text-[#E8C878] border border-[#C8A24A]/30 flex items-center justify-center">
              <Mail className="w-8 h-8" />
            </div>
            <h3 className="font-serif-luxury text-2xl font-bold text-white">
              Newsletter Broadcast Engine (Coming Soon)
            </h3>
            <p className="text-xs text-white/60 max-w-md mx-auto leading-relaxed">
              The SOLAHANA Newsletter Distribution Engine is coming soon. You will be able to manage subscriber lists, compose rich HTML emails, and view campaign analytics.
            </p>
          </div>
        )}
      </main>

      {/* Status Update Modal */}
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
                  <label className="block text-white/70 mb-1 font-semibold">Video Call Link / Office Address</label>
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
                    placeholder="Internal notes about client portfolio or preparation..."
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
    </div>
  );
}
