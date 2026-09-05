import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  Calendar, 
  Clock, 
  Video, 
  PhoneCall, 
  Building, 
  AlertCircle, 
  CheckCircle2, 
  XCircle, 
  ExternalLink,
  Loader2,
  RefreshCw,
  User,
  ShieldCheck,
  Briefcase
} from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import consultationService from '../services/consultationService';

export default function DashboardPage({ onNavigate }) {
  const { user } = useAuth();

  const [consultations, setConsultations] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [cancellingId, setCancellingId] = useState(null);
  const [statusFilter, setStatusFilter] = useState('');

  const fetchConsultations = async () => {
    setLoading(true);
    setError('');
    try {
      const res = await consultationService.getMyConsultations({
        status: statusFilter || undefined,
      });
      setConsultations(res.data?.consultations || []);
    } catch (err) {
      setError(err.response?.data?.message || err.message || 'Failed to fetch consultations');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchConsultations();
  }, [statusFilter]);

  const handleCancelBooking = async (id) => {
    if (!window.confirm('Are you sure you want to cancel this pending consultation?')) return;
    setCancellingId(id);
    try {
      await consultationService.cancelConsultation(id);
      await fetchConsultations();
    } catch (err) {
      alert(err.response?.data?.message || 'Failed to cancel consultation');
    } finally {
      setCancellingId(null);
    }
  };

  const getStatusBadge = (status) => {
    switch (status) {
      case 'Pending':
        return (
          <span className="px-3 py-1 rounded-full text-xs font-semibold bg-[#C8A24A]/20 text-[#E8C878] border border-[#C8A24A]/40 flex items-center gap-1.5 w-fit">
            <Clock className="w-3 h-3" />
            Pending
          </span>
        );
      case 'Confirmed':
        return (
          <span className="px-3 py-1 rounded-full text-xs font-semibold bg-blue-500/20 text-blue-300 border border-blue-500/40 flex items-center gap-1.5 w-fit">
            <CheckCircle2 className="w-3 h-3" />
            Confirmed
          </span>
        );
      case 'Completed':
        return (
          <span className="px-3 py-1 rounded-full text-xs font-semibold bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 flex items-center gap-1.5 w-fit">
            <CheckCircle2 className="w-3 h-3" />
            Completed
          </span>
        );
      case 'Cancelled':
        return (
          <span className="px-3 py-1 rounded-full text-xs font-semibold bg-rose-500/20 text-rose-300 border border-rose-500/40 flex items-center gap-1.5 w-fit">
            <XCircle className="w-3 h-3" />
            Cancelled
          </span>
        );
      default:
        return null;
    }
  };

  const getModeIcon = (mode) => {
    if (mode === 'Video Call') return <Video className="w-4 h-4 text-[#C8A24A]" />;
    if (mode === 'Phone Call') return <PhoneCall className="w-4 h-4 text-[#C8A24A]" />;
    return <Building className="w-4 h-4 text-[#C8A24A]" />;
  };

  return (
    <div className="pt-28 pb-20 min-h-screen bg-[#020B2D] text-[#F8F7F3]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Profile Summary */}
        <div className="mb-10 p-8 rounded-3xl bg-gradient-to-r from-[#071C48] via-[#041235] to-[#071C48] border border-[#C8A24A]/30 shadow-2xl flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#C8A24A]/10 border border-[#C8A24A]/30 text-xs font-semibold text-[#E8C878] mb-3">
              <ShieldCheck className="w-3.5 h-3.5" />
              SOLAHANA CLIENT DASHBOARD
            </div>
            <h1 className="font-serif-luxury text-3xl md:text-4xl font-bold text-white">
              Welcome back, <span className="text-[#E8C878]">{user?.name}</span>
            </h1>
            <p className="text-white/60 text-sm mt-1">
              Manage your private 1-on-1 financial advisory consultations and milestone planning sessions.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={fetchConsultations}
              className="p-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-white/70 hover:text-white transition-colors"
              title="Refresh Consultations"
            >
              <RefreshCw className={`w-4 h-4 ${loading ? 'animate-spin' : ''}`} />
            </button>
            <button
              onClick={() => onNavigate && onNavigate('contact')}
              className="gold-glow-button px-5 py-3 rounded-xl text-xs font-bold text-[#020B2D] flex items-center gap-2"
            >
              <Briefcase className="w-4 h-4" />
              <span>Book New Session</span>
            </button>
          </div>
        </div>

        {/* Section Heading & Filter */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
          <h2 className="font-serif-luxury text-2xl font-bold text-white flex items-center gap-2">
            My Consultations
            <span className="text-xs font-sans px-2.5 py-0.5 rounded-full bg-[#071C48] border border-[#C8A24A]/30 text-[#E8C878]">
              {consultations.length}
            </span>
          </h2>

          <div className="flex items-center gap-2 text-xs">
            <span className="text-white/50">Filter Status:</span>
            <select
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value)}
              className="bg-[#071C48] border border-white/15 rounded-xl px-3 py-1.5 text-white focus:outline-none cursor-pointer"
            >
              <option value="">All Statuses</option>
              <option value="Pending">Pending</option>
              <option value="Confirmed">Confirmed</option>
              <option value="Completed">Completed</option>
              <option value="Cancelled">Cancelled</option>
            </select>
          </div>
        </div>

        {/* Consultation List */}
        {loading ? (
          <div className="py-20 text-center">
            <Loader2 className="w-8 h-8 animate-spin mx-auto text-[#C8A24A]" />
            <p className="text-xs text-white/60 mt-3">Loading your consultation bookings...</p>
          </div>
        ) : error ? (
          <div className="p-6 rounded-2xl bg-red-500/10 border border-red-500/30 text-red-300 text-sm flex items-center gap-3">
            <AlertCircle className="w-5 h-5 shrink-0" />
            <span>{error}</span>
          </div>
        ) : consultations.length === 0 ? (
          <div className="py-16 px-6 text-center rounded-3xl bg-[#071C48]/40 border border-white/10 space-y-4">
            <div className="w-16 h-16 mx-auto rounded-full bg-[#C8A24A]/10 border border-[#C8A24A]/30 flex items-center justify-center text-[#C8A24A]">
              <Calendar className="w-8 h-8" />
            </div>
            <h3 className="font-serif-luxury text-xl font-bold text-white">No Consultations Scheduled</h3>
            <p className="text-white/60 text-xs max-w-md mx-auto">
              You haven't booked any advisory sessions yet. Connect with our certified wealth team to structure your goals.
            </p>
            <button
              onClick={() => onNavigate && onNavigate('contact')}
              className="px-6 py-2.5 rounded-xl bg-[#C8A24A] text-[#020B2D] font-bold text-xs shadow-lg hover:bg-[#E8C878] transition-colors"
            >
              Schedule First Consultation
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {consultations.map((item) => (
              <motion.div
                key={item._id}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                className="p-6 rounded-2xl bg-[#071C48]/80 border border-[#C8A24A]/25 shadow-xl flex flex-col justify-between space-y-4 hover:border-[#C8A24A]/50 transition-all"
              >
                <div>
                  <div className="flex items-start justify-between gap-3 mb-3">
                    <h3 className="font-serif-luxury text-lg font-bold text-white">
                      {item.goal}
                    </h3>
                    {getStatusBadge(item.status)}
                  </div>

                  <div className="grid grid-cols-2 gap-3 py-3 border-y border-white/10 text-xs">
                    <div className="flex items-center gap-2 text-white/80">
                      <Calendar className="w-4 h-4 text-[#C8A24A]" />
                      <span>{new Date(item.preferredDate).toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' })}</span>
                    </div>

                    <div className="flex items-center gap-2 text-white/80">
                      <Clock className="w-4 h-4 text-[#C8A24A]" />
                      <span>{item.preferredTime}</span>
                    </div>

                    <div className="flex items-center gap-2 text-white/80">
                      {getModeIcon(item.consultationMode)}
                      <span>{item.consultationMode}</span>
                    </div>

                    <div className="flex items-center gap-2 text-white/80">
                      <User className="w-4 h-4 text-[#C8A24A]" />
                      <span>{item.fullName}</span>
                    </div>
                  </div>

                  {item.message && (
                    <p className="text-xs text-white/60 line-clamp-2 mt-3 italic bg-[#020B2D]/50 p-2.5 rounded-lg border border-white/5">
                      "{item.message}"
                    </p>
                  )}

                  {item.status === 'Confirmed' && item.meetingLink && (
                    <div className="mt-3 p-3 rounded-xl bg-blue-500/10 border border-blue-500/30 flex items-center justify-between text-xs text-blue-300">
                      <span className="truncate">Meeting Link: {item.meetingLink}</span>
                      <a
                        href={item.meetingLink}
                        target="_blank"
                        rel="noreferrer"
                        className="px-3 py-1 rounded-lg bg-blue-500 text-white font-bold flex items-center gap-1 hover:bg-blue-600 transition-colors"
                      >
                        Join <ExternalLink className="w-3 h-3" />
                      </a>
                    </div>
                  )}
                </div>

                <div className="flex items-center justify-between pt-2">
                  <span className="text-[11px] text-white/40">
                    Booked on {new Date(item.createdAt).toLocaleDateString('en-IN')}
                  </span>

                  {item.status === 'Pending' && (
                    <button
                      onClick={() => handleCancelBooking(item._id)}
                      disabled={cancellingId === item._id}
                      className="px-3.5 py-1.5 rounded-lg bg-rose-500/10 hover:bg-rose-500/20 text-rose-300 border border-rose-500/30 text-xs font-medium transition-colors disabled:opacity-50 flex items-center gap-1"
                    >
                      {cancellingId === item._id ? (
                        <Loader2 className="w-3 h-3 animate-spin" />
                      ) : (
                        <XCircle className="w-3 h-3" />
                      )}
                      <span>Cancel Request</span>
                    </button>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        )}

      </div>
    </div>
  );
}
