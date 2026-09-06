import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Search, 
  Trash2, 
  Edit3, 
  Loader2, 
  ChevronLeft, 
  ChevronRight, 
  RefreshCw,
  ShieldCheck,
  X,
  AlertCircle
} from 'lucide-react';
import consultationService from '../services/consultationService';

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
  const [bookings, setBookings] = useState([]);
  const [pagination, setPagination] = useState({ page: 1, limit: 10, totalPages: 1, totalBookings: 0 });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  // Search & Filter State
  const [search, setSearch] = useState('');
  const [statusFilter, setStatusFilter] = useState('');
  const [goalFilter, setGoalFilter] = useState('');
  const [modeFilter, setModeFilter] = useState('');
  const [page, setPage] = useState(1);

  // Selected Booking Modal State for Status Updates
  const [selectedBooking, setSelectedBooking] = useState(null);
  const [updateStatus, setUpdateStatus] = useState('Confirmed');
  const [meetingLink, setMeetingLink] = useState('');
  const [notes, setNotes] = useState('');
  const [updating, setUpdating] = useState(false);

  const fetchAdminBookings = async () => {
    setLoading(true);
    setError('');
    try {
      const res = await consultationService.getAllConsultations({
        page,
        limit: 10,
        search: search || undefined,
        status: statusFilter || undefined,
        goal: goalFilter || undefined,
        consultationMode: modeFilter || undefined,
      });

      const list = Array.isArray(res?.data?.consultations)
        ? res.data.consultations
        : Array.isArray(res?.data)
        ? res.data
        : Array.isArray(res?.consultations)
        ? res.consultations
        : Array.isArray(res)
        ? res
        : [];

      setBookings(list);
      setPagination(res?.data?.pagination || { page: 1, limit: 10, totalPages: 1, totalBookings: list.length });
    } catch (err) {
      console.error('[Admin fetch error]:', err);
      setError(err.response?.data?.message || err.message || 'Failed to fetch admin bookings');
      setBookings([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchAdminBookings();
  }, [page, statusFilter, goalFilter, modeFilter]);

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    setPage(1);
    fetchAdminBookings();
  };

  const handleOpenUpdateModal = (booking) => {
    setSelectedBooking(booking);
    setUpdateStatus(booking.status);
    setMeetingLink(booking.meetingLink || '');
    setNotes(booking.notes || '');
  };

  const handleSaveStatusUpdate = async (e) => {
    e.preventDefault();
    if (!selectedBooking) return;
    setUpdating(true);
    try {
      await consultationService.updateConsultationStatus(selectedBooking._id, {
        status: updateStatus,
        meetingLink,
        notes,
      });
      setSelectedBooking(null);
      await fetchAdminBookings();
    } catch (err) {
      alert(err.response?.data?.message || 'Failed to update consultation status');
    } finally {
      setUpdating(false);
    }
  };

  const handleDeleteBooking = async (id, clientName) => {
    if (!window.confirm(`Are you sure you want to delete the booking for "${clientName}"?`)) return;
    try {
      await consultationService.deleteConsultation(id);
      await fetchAdminBookings();
    } catch (err) {
      alert(err.response?.data?.message || 'Failed to delete consultation');
    }
  };

  const bookingList = Array.isArray(bookings) ? bookings : [];

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
    <div className="pt-28 pb-20 min-h-screen bg-[#020B2D] text-[#F8F7F3]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="mb-8 p-6 rounded-3xl bg-gradient-to-r from-[#071C48] via-[#041235] to-[#071C48] border border-[#C8A24A]/30 shadow-2xl flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#C8A24A]/10 border border-[#C8A24A]/30 text-xs font-semibold text-[#E8C878] mb-2">
              <ShieldCheck className="w-3.5 h-3.5" />
              ADMIN CONSULTATION MANAGEMENT CRM
            </div>
            <h1 className="font-serif-luxury text-3xl font-bold text-white">
              Consultation Desk
            </h1>
            <p className="text-xs text-white/60 mt-1">
              Review client requests, confirm schedules, assign meeting links, and manage advisory appointments.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={fetchAdminBookings}
              className="p-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-white/70 hover:text-white transition-colors cursor-pointer"
              title="Refresh List"
            >
              <RefreshCw className={`w-4 h-4 ${loading ? 'animate-spin' : ''}`} />
            </button>
          </div>
        </div>

        {/* Search Bar & Filters */}
        <div className="p-5 rounded-2xl bg-[#071C48]/70 border border-[#C8A24A]/20 mb-8 space-y-4">
          <form onSubmit={handleSearchSubmit} className="flex items-center gap-3">
            <div className="relative flex-1">
              <Search className="w-4 h-4 text-white/40 absolute left-4 top-1/2 -translate-y-1/2 pointer-events-none" />
              <input
                type="text"
                placeholder="Search by client name, email, phone, city or goal..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
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
                onChange={(e) => { setStatusFilter(e.target.value); setPage(1); }}
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
                onChange={(e) => { setGoalFilter(e.target.value); setPage(1); }}
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
                onChange={(e) => { setModeFilter(e.target.value); setPage(1); }}
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

        {/* Table Content */}
        {loading ? (
          <div className="py-20 text-center rounded-2xl bg-[#071C48]/40 border border-white/10">
            <Loader2 className="w-8 h-8 animate-spin mx-auto text-[#C8A24A]" />
            <p className="text-xs text-white/60 mt-3 font-mono">Loading consultations database...</p>
          </div>
        ) : error ? (
          <div className="p-8 rounded-2xl bg-red-500/10 border border-red-500/30 text-red-300 text-sm flex flex-col items-center justify-center gap-4 text-center">
            <div className="flex items-center gap-2 text-red-400 font-semibold">
              <AlertCircle className="w-5 h-5" />
              <span>Failed to fetch consultations.</span>
            </div>
            <p className="text-xs text-white/60 max-w-md">{error}</p>
            <button
              onClick={fetchAdminBookings}
              className="px-6 py-2.5 rounded-xl bg-red-500/20 hover:bg-red-500/30 border border-red-500/40 text-red-200 font-bold text-xs flex items-center gap-2 transition-colors cursor-pointer"
            >
              <RefreshCw className="w-4 h-4" />
              <span>Retry</span>
            </button>
          </div>
        ) : bookingList.length === 0 ? (
          <div className="py-16 text-center rounded-2xl bg-[#071C48]/40 border border-white/10">
            <p className="text-white/60 text-sm">No consultation bookings matching the search criteria.</p>
          </div>
        ) : (
          <div className="overflow-x-auto rounded-2xl border border-[#C8A24A]/25 shadow-2xl bg-[#071C48]/90">
            <table className="w-full text-left text-xs text-white/80">
              <thead className="bg-[#020B2D] text-white uppercase text-[10px] tracking-wider border-b border-[#C8A24A]/20">
                <tr>
                  <th className="py-4 px-4 font-bold">Client Name</th>
                  <th className="py-4 px-4 font-bold">Goal</th>
                  <th className="py-4 px-4 font-bold">Mode</th>
                  <th className="py-4 px-4 font-bold">Date & Time</th>
                  <th className="py-4 px-4 font-bold">City</th>
                  <th className="py-4 px-4 font-bold">Status</th>
                  <th className="py-4 px-4 font-bold text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/10">
                {bookingList.map((booking) => (
                  <tr key={booking._id || Math.random()} className="hover:bg-white/5 transition-colors">
                    <td className="py-4 px-4 font-semibold text-white">
                      <div>{booking.fullName}</div>
                      <div className="text-[10px] text-white/50">{booking.email} · {booking.phone}</div>
                    </td>
                    <td className="py-4 px-4 font-medium text-[#E8C878]">{booking.goal}</td>
                    <td className="py-4 px-4">{booking.consultationMode}</td>
                    <td className="py-4 px-4">
                      <div>{booking.preferredDate ? new Date(booking.preferredDate).toLocaleDateString('en-IN') : 'TBD'}</div>
                      <div className="text-[10px] text-white/50">{booking.preferredTime}</div>
                    </td>
                    <td className="py-4 px-4 text-white/60">{booking.city || 'N/A'}</td>
                    <td className="py-4 px-4">{getStatusBadge(booking.status)}</td>
                    <td className="py-4 px-4 text-right space-x-2">
                      <button
                        onClick={() => handleOpenUpdateModal(booking)}
                        className="p-1.5 rounded-lg bg-[#C8A24A]/15 hover:bg-[#C8A24A]/30 text-[#E8C878] border border-[#C8A24A]/30 transition-colors cursor-pointer"
                        title="Edit Status & Links"
                      >
                        <Edit3 className="w-3.5 h-3.5" />
                      </button>
                      <button
                        onClick={() => handleDeleteBooking(booking._id, booking.fullName)}
                        className="p-1.5 rounded-lg bg-rose-500/15 hover:bg-rose-500/30 text-rose-300 border border-rose-500/30 transition-colors cursor-pointer"
                        title="Delete Booking"
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

        {/* Pagination Bar */}
        {pagination.totalPages > 1 && (
          <div className="mt-6 flex items-center justify-between text-xs text-white/60">
            <span>
              Showing Page <strong>{pagination.page}</strong> of <strong>{pagination.totalPages}</strong> ({pagination.totalBookings} total bookings)
            </span>
            <div className="flex items-center gap-2">
              <button
                disabled={page <= 1}
                onClick={() => setPage((prev) => Math.max(prev - 1, 1))}
                className="p-2 rounded-lg bg-[#071C48] border border-white/10 disabled:opacity-30 hover:bg-white/10 cursor-pointer"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                disabled={page >= pagination.totalPages}
                onClick={() => setPage((prev) => Math.min(prev + 1, pagination.totalPages))}
                className="p-2 rounded-lg bg-[#071C48] border border-white/10 disabled:opacity-30 hover:bg-white/10 cursor-pointer"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        )}

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
                      Update Booking Status
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

                <form onSubmit={handleSaveStatusUpdate} className="space-y-4 text-xs">
                  <div>
                    <label className="block text-white/70 mb-1 font-semibold">Change Status *</label>
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
                    <label className="block text-white/70 mb-1 font-semibold">Video Call / Location Link</label>
                    <input
                      type="url"
                      placeholder="https://meet.google.com/xyz-abc-def"
                      value={meetingLink}
                      onChange={(e) => setMeetingLink(e.target.value)}
                      className="w-full bg-[#020B2D] border border-white/20 rounded-xl p-3 text-white focus:outline-none placeholder-white/30"
                    />
                  </div>

                  <div>
                    <label className="block text-white/70 mb-1 font-semibold">Internal Advisor Notes</label>
                    <textarea
                      rows={3}
                      placeholder="Internal notes about client's portfolio or meeting preparation..."
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
                      disabled={updating}
                      className="px-6 py-2.5 rounded-xl bg-[#C8A24A] text-[#020B2D] font-bold shadow hover:bg-[#E8C878] disabled:opacity-50 flex items-center gap-2 cursor-pointer"
                    >
                      {updating && <Loader2 className="w-4 h-4 animate-spin" />}
                      <span>Save & Notify Client</span>
                    </button>
                  </div>
                </form>
              </motion.div>
            </div>
          )}
        </AnimatePresence>

      </div>
    </div>
  );
}
