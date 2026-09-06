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
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import consultationService from '../services/consultationService';
import calculationService from '../services/calculationService';
import { BookmarkPlus, TrendingUp, ArrowRight, Sparkles } from 'lucide-react';
import { formatINR } from '../utils/calculatorEngine';

export default function DashboardPage() {
  const { user } = useAuth();
  const navigate = useNavigate();

  // STEP 2: Initialize safely - Never initialize with undefined
  const [consultations, setConsultations] = useState([]);
  const [recentCalculations, setRecentCalculations] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [cancellingId, setCancellingId] = useState(null);
  const [statusFilter, setStatusFilter] = useState('');

  const fetchRecentCalculations = async () => {
    try {
      const data = await calculationService.getMyCalculations({ sort: 'newest' });
      setRecentCalculations(Array.isArray(data) ? data.slice(0, 3) : []);
    } catch (err) {
      console.warn('[Dashboard recent calculations error]:', err);
      setRecentCalculations([]);
    }
  };

  const fetchConsultations = async () => {
    setLoading(true);
    setError('');
    try {
      // STEP 1 & 2: Call GET /api/consultations/my and receive response.data.data array directly
      const consultationList = await consultationService.getMyConsultations({
        status: statusFilter || undefined,
      });

      // STEP 2 & 6: Guarantee array state, fallback to empty array on any abnormality
      setConsultations(Array.isArray(consultationList) ? consultationList : []);
    } catch (err) {
      console.error('[Dashboard fetch error]:', err);
      setError(err.response?.data?.message || err.message || 'Unable to load consultations.');
      setConsultations([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchConsultations();
    fetchRecentCalculations();
  }, [statusFilter]);

  // STEP 5: Cancel Flow - Re-fetch GET /api/consultations/my after cancel
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

  // STEP 3: Safe Rendering Array Guard - Never call .map() on undefined
  const validConsultations = Array.isArray(consultations) ? consultations : [];

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
              className="p-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-white/70 hover:text-white transition-colors cursor-pointer"
              title="Refresh Consultations"
            >
              <RefreshCw className={`w-4 h-4 ${loading ? 'animate-spin' : ''}`} />
            </button>
            <button
              onClick={() => navigate('/contact')}
              className="gold-glow-button px-5 py-3 rounded-xl text-xs font-bold text-[#020B2D] flex items-center gap-2 cursor-pointer"
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
              {validConsultations.length}
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

        {/* STEP 4 & 6: Loading, Error & Empty States */}
        {loading ? (
          /* STEP 6: Skeleton Loader */
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[1, 2].map((i) => (
              <div key={i} className="p-6 rounded-2xl bg-[#071C48]/40 border border-white/10 animate-pulse space-y-4">
                <div className="flex justify-between items-center">
                  <div className="h-5 bg-white/10 rounded w-1/3" />
                  <div className="h-6 bg-[#C8A24A]/20 rounded-full w-20" />
                </div>
                <div className="grid grid-cols-2 gap-3 py-3 border-y border-white/5">
                  <div className="h-4 bg-white/10 rounded w-2/3" />
                  <div className="h-4 bg-white/10 rounded w-1/2" />
                </div>
                <div className="h-4 bg-white/5 rounded w-full" />
              </div>
            ))}
          </div>
        ) : error ? (
          /* STEP 6: API Failure Retry State */
          <div className="p-8 rounded-3xl bg-red-500/10 border border-red-500/30 text-red-300 text-sm flex flex-col items-center justify-center gap-4 text-center">
            <div className="flex items-center gap-2 text-red-400 font-semibold">
              <AlertCircle className="w-5 h-5" />
              <span>Unable to load consultations.</span>
            </div>
            <p className="text-xs text-white/60 max-w-md">{error}</p>
            <button
              onClick={fetchConsultations}
              className="px-6 py-2.5 rounded-xl bg-red-500/20 hover:bg-red-500/30 border border-red-500/40 text-red-200 font-bold text-xs flex items-center gap-2 transition-colors cursor-pointer"
            >
              <RefreshCw className="w-4 h-4" />
              <span>Retry</span>
            </button>
          </div>
        ) : validConsultations.length === 0 ? (
          /* STEP 4: Empty State Card */
          <div className="py-16 px-6 text-center rounded-3xl bg-[#071C48]/40 border border-white/10 space-y-4">
            <div className="w-16 h-16 mx-auto rounded-full bg-[#C8A24A]/10 border border-[#C8A24A]/30 flex items-center justify-center text-[#C8A24A]">
              <Calendar className="w-8 h-8" />
            </div>
            <h3 className="font-serif-luxury text-xl font-bold text-white">No consultations booked yet.</h3>
            <p className="text-white/60 text-xs max-w-md mx-auto">
              You haven't booked any advisory sessions yet. Connect with our certified wealth team to structure your goals.
            </p>
            <button
              onClick={() => navigate('/contact')}
              className="px-6 py-2.5 rounded-xl bg-[#C8A24A] text-[#020B2D] font-bold text-xs shadow-lg hover:bg-[#E8C878] transition-colors cursor-pointer"
            >
              Book Your First Consultation
            </button>
          </div>
        ) : (
          /* STEP 3: Safe Map Rendering */
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {(Array.isArray(consultations) ? consultations : []).map((item) => (
              <motion.div
                key={item._id || item.id || Math.random()}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                className="p-6 rounded-2xl bg-[#071C48]/80 border border-[#C8A24A]/25 shadow-xl flex flex-col justify-between space-y-4 hover:border-[#C8A24A]/50 transition-all"
              >
                <div>
                  <div className="flex items-start justify-between gap-3 mb-3">
                    <h3 className="font-serif-luxury text-lg font-bold text-white">
                      {item.goal || 'Financial Planning'}
                    </h3>
                    {getStatusBadge(item.status)}
                  </div>

                  <div className="grid grid-cols-2 gap-3 py-3 border-y border-white/10 text-xs">
                    <div className="flex items-center gap-2 text-white/80">
                      <Calendar className="w-4 h-4 text-[#C8A24A]" />
                      <span>
                        {item.preferredDate
                          ? new Date(item.preferredDate).toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' })
                          : 'TBD'}
                      </span>
                    </div>

                    <div className="flex items-center gap-2 text-white/80">
                      <Clock className="w-4 h-4 text-[#C8A24A]" />
                      <span>{item.preferredTime || 'TBD'}</span>
                    </div>

                    <div className="flex items-center gap-2 text-white/80">
                      {getModeIcon(item.consultationMode)}
                      <span>{item.consultationMode || 'Video Call'}</span>
                    </div>

                    <div className="flex items-center gap-2 text-white/80">
                      <User className="w-4 h-4 text-[#C8A24A]" />
                      <span>{item.fullName || user?.name || 'Client'}</span>
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
                    {item.createdAt ? `Booked on ${new Date(item.createdAt).toLocaleDateString('en-IN')}` : ''}
                  </span>

                  {item.status === 'Pending' && (
                    <button
                      onClick={() => handleCancelBooking(item._id)}
                      disabled={cancellingId === item._id}
                      className="px-3.5 py-1.5 rounded-lg bg-rose-500/10 hover:bg-rose-500/20 text-rose-300 border border-rose-500/30 text-xs font-medium transition-colors disabled:opacity-50 flex items-center gap-1 cursor-pointer"
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

        {/* Recent Calculations Section */}
        <div className="pt-8 border-t border-[#C8A24A]/20 space-y-4 text-left">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="font-serif-luxury text-xl font-bold text-white flex items-center gap-2">
                <BookmarkPlus className="w-5 h-5 text-[#E8C878]" />
                <span>Recent Calculations</span>
              </h2>
              <p className="text-xs text-white/60 font-light">
                Your last 3 saved financial compounding plans.
              </p>
            </div>

            <button
              onClick={() => navigate('/dashboard/calculations')}
              className="px-4 py-2 rounded-xl bg-[#071C48] hover:bg-[#071C48]/80 border border-[#C8A24A]/30 text-xs font-bold text-[#E8C878] hover:text-white transition-all flex items-center gap-1.5 cursor-pointer shadow"
            >
              <span>View All Calculations</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {recentCalculations.length === 0 ? (
            <div className="p-6 rounded-2xl bg-[#071C48]/50 border border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="space-y-1">
                <div className="text-sm font-semibold text-white">No saved calculations yet</div>
                <div className="text-xs text-white/60">Use our financial calculators to compute wealth targets and save them to your account.</div>
              </div>
              <button
                onClick={() => navigate('/calculators')}
                className="gold-glow-button px-4 py-2 rounded-xl text-xs font-bold text-[#020B2D] shrink-0 cursor-pointer shadow"
              >
                Explore Calculators
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {recentCalculations.map((calc) => (
                <div
                  key={calc._id}
                  className="p-5 rounded-2xl bg-gradient-to-b from-[#071C48] to-[#020B2D] border border-[#C8A24A]/30 hover:border-[#C8A24A]/60 transition-all space-y-3"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] uppercase font-mono font-bold text-[#E8C878] px-2 py-0.5 rounded bg-[#C8A24A]/10 border border-[#C8A24A]/25">
                      {calc.calculatorType}
                    </span>
                    <span className="text-[10px] text-white/40 font-mono">
                      {new Date(calc.createdAt).toLocaleDateString('en-IN', { day: 'numeric', month: 'short' })}
                    </span>
                  </div>

                  <div className="font-semibold text-sm text-white truncate">
                    {calc.calculationName || calc.title}
                  </div>

                  <button
                    onClick={() => {
                      const typeUpper = (calc.calculatorType || 'SIP').toUpperCase();
                      const routeMap = {
                        'SIP': '/calculators/sip',
                        'EMI': '/calculators/emi',
                        'RETIREMENT': '/calculators/retirement',
                        'GOAL_PLANNER': '/calculators/goal-planner',
                        'LUMPSUM': '/calculators/lumpsum',
                        'FD': '/calculators/fd',
                        'INFLATION': '/calculators/inflation',
                      };
                      navigate(routeMap[typeUpper] || '/calculators/sip', { state: { prefill: calc.inputs } });
                    }}
                    className="w-full py-2 rounded-xl bg-white/5 hover:bg-[#C8A24A]/20 border border-white/10 hover:border-[#C8A24A]/30 text-xs text-[#E8C878] font-bold flex items-center justify-center gap-1.5 transition-colors cursor-pointer"
                  >
                    <span>Recalculate</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>

      </div>
    </div>
  );
}
