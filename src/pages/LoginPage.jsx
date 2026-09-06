import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Lock, Mail, ArrowRight, AlertCircle, Loader2, ShieldCheck } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

export default function LoginPage() {
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
      const res = await login({ email, password, isAdminLogin: false });

      if (!res.success) {
        setError(res.message || 'Login failed.');
        setLoading(false);
        return;
      }

      // Ensure user login page NEVER redirects to admin dashboard
      if (res.user?.role === 'admin' || res.user?.role === 'advisor') {
        setError('Administrator accounts must sign in from the Admin Portal.');
        setLoading(false);
        return;
      }

      // Successful normal user login -> Navigate strictly to user dashboard
      navigate('/dashboard');
    } catch (err) {
      console.error('[User Login Error]:', err);
      setError(
        err.response?.data?.message || err.message || 'Invalid email or password.'
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
        {/* Ambient Decorative Lighting */}
        <div className="absolute -top-24 -left-24 w-48 h-48 bg-[#C8A24A]/10 rounded-full blur-3xl pointer-events-none" />

        {/* Emblem */}
        <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-[#C8A24A]/15 border border-[#C8A24A]/40 flex items-center justify-center text-[#E8C878] shadow-[0_0_20px_rgba(200,162,74,0.3)]">
          <ShieldCheck className="w-8 h-8" />
        </div>

        {/* Title */}
        <div className="text-center space-y-2 mb-8">
          <span className="text-[10px] uppercase font-mono tracking-widest text-[#E8C878] px-3 py-1 rounded-full bg-[#C8A24A]/10 border border-[#C8A24A]/30">
            SOLAHANA CLIENT PORTAL
          </span>
          <h1 className="font-serif-luxury text-3xl font-bold text-white tracking-tight">
            Client Login
          </h1>
          <p className="text-xs text-white/60 font-light">
            Sign in to access your personalized wealth planning dashboard, saved calculations, and consultation history.
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
              Email Address
            </label>
            <div className="relative">
              <Mail className="w-4 h-4 text-white/40 absolute left-4 top-1/2 -translate-y-1/2" />
              <input
                type="email"
                required
                placeholder="name@domain.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full bg-[#020B2D] border border-white/20 focus:border-[#C8A24A] rounded-xl py-3 pl-11 pr-4 text-white text-xs placeholder-white/30 focus:outline-none transition-colors"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-semibold text-white/80 mb-2">
              Password
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
                <span>Authenticating Client...</span>
              </>
            ) : (
              <>
                <span>Log In to Client Dashboard</span>
                <ArrowRight className="w-4 h-4" />
              </>
            )}
          </button>
        </form>

        <div className="mt-8 text-center border-t border-white/10 pt-4 space-y-2">
          <p className="text-[11px] text-white/50">
            Are you an administrator?{' '}
            <button
              type="button"
              onClick={() => navigate('/admin/login')}
              className="text-[#E8C878] font-semibold hover:underline cursor-pointer"
            >
              Go to Admin Portal →
            </button>
          </p>
        </div>
      </motion.div>
    </div>
  );
}
