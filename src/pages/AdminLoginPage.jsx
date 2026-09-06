import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Lock, Mail, ArrowRight, AlertCircle, Loader2 } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

export default function AdminLoginPage() {
  const { login } = useAuth();
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      const user = await login({ email, password });
      
      // Verify user has admin/advisor role
      if (user?.role !== 'admin' && user?.role !== 'advisor') {
        setError('Access Denied. Account does not have administrator privileges.');
        setLoading(false);
        return;
      }

      // Successful admin login -> Navigate strictly to /admin/dashboard
      navigate('/admin/dashboard');
    } catch (err) {
      console.error('[Admin Login Error]:', err);
      setError(
        err.response?.data?.message || err.message || 'Invalid administrator credentials.'
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen pt-28 pb-20 bg-[#020B2D] text-[#F8F7F3] flex items-center justify-center px-4 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="w-full max-w-md bg-gradient-to-b from-[#071C48] to-[#020B2D] border border-[#C8A24A]/30 rounded-3xl p-8 shadow-[0_20px_50px_rgba(2,11,45,0.9)] text-left relative overflow-hidden"
      >
        {/* Decorative Top Ambient Light */}
        <div className="absolute -top-24 -left-24 w-48 h-48 bg-[#C8A24A]/20 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-24 -right-24 w-48 h-48 bg-[#071C48] rounded-full blur-3xl pointer-events-none" />

        {/* Emblem */}
        <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-[#C8A24A]/15 border border-[#C8A24A]/40 flex items-center justify-center text-[#E8C878] shadow-[0_0_20px_rgba(200,162,74,0.3)]">
          <ShieldCheck className="w-8 h-8" />
        </div>

        {/* Title */}
        <div className="text-center space-y-2 mb-8">
          <span className="text-[10px] uppercase font-mono tracking-widest text-[#E8C878] px-3 py-1 rounded-full bg-[#C8A24A]/10 border border-[#C8A24A]/30">
            SOLAHANA GOVERNANCE
          </span>
          <h1 className="font-serif-luxury text-3xl font-bold text-white tracking-tight">
            Admin Control Center
          </h1>
          <p className="text-xs text-white/60 font-light">
            Sign in with authorized administrator credentials to manage consultations, users, and platform analytics.
          </p>
        </div>

        {/* Error Alert */}
        {error && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-6 p-4 rounded-xl bg-red-500/10 border border-red-500/30 text-red-300 text-xs flex items-start gap-3"
          >
            <AlertCircle className="w-4 h-4 text-red-400 shrink-0 mt-0.5" />
            <span>{error}</span>
          </motion.div>
        )}

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="block text-xs font-semibold text-white/80 mb-2">
              Admin Email Address
            </label>
            <div className="relative">
              <Mail className="w-4 h-4 text-white/40 absolute left-4 top-1/2 -translate-y-1/2" />
              <input
                type="email"
                required
                placeholder="admin@solahana.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full bg-[#020B2D] border border-white/20 focus:border-[#C8A24A] rounded-xl py-3 pl-11 pr-4 text-white text-xs placeholder-white/30 focus:outline-none transition-colors"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-semibold text-white/80 mb-2">
              Security Password
            </label>
            <div className="relative">
              <Lock className="w-4 h-4 text-white/40 absolute left-4 top-1/2 -translate-y-1/2" />
              <input
                type="password"
                required
                placeholder="••••••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full bg-[#020B2D] border border-white/20 focus:border-[#C8A24A] rounded-xl py-3 pl-11 pr-4 text-white text-xs placeholder-white/30 focus:outline-none transition-colors"
              />
            </div>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full py-3.5 mt-2 rounded-xl gold-glow-button font-bold text-xs text-[#020B2D] flex items-center justify-center gap-2 cursor-pointer shadow-lg disabled:opacity-50 transition-all"
          >
            {loading ? (
              <>
                <Loader2 className="w-4 h-4 animate-spin" />
                <span>Authenticating Administrator...</span>
              </>
            ) : (
              <>
                <span>Access Control Center</span>
                <ArrowRight className="w-4 h-4" />
              </>
            )}
          </button>
        </form>

        <div className="mt-8 text-center border-t border-white/10 pt-4">
          <button
            type="button"
            onClick={() => navigate('/')}
            className="text-xs text-white/50 hover:text-[#E8C878] transition-colors cursor-pointer"
          >
            ← Return to SOLAHANA Client Portal
          </button>
        </div>
      </motion.div>
    </div>
  );
}
