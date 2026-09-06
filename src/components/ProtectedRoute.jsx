import React from 'react';
import { useAuth } from '../context/AuthContext';
import { ShieldCheck, Lock } from 'lucide-react';

export const ProtectedRoute = ({ children, adminOnly = false }) => {
  const { user, isAuthenticated, loading, openAuthModal } = useAuth();

  if (loading) {
    return (
      <div className="min-h-screen bg-[#020B2D] flex items-center justify-center text-white">
        <div className="flex flex-col items-center gap-4">
          <div className="w-12 h-12 rounded-full border-2 border-[#C8A24A]/20 border-t-[#C8A24A] animate-spin" />
          <span className="text-xs font-mono text-[#E8C878] uppercase tracking-wider">
            Authenticating Session...
          </span>
        </div>
      </div>
    );
  }

  if (!isAuthenticated) {
    return (
      <div className="min-h-[70vh] bg-[#020B2D] flex items-center justify-center px-6 py-24 text-white text-center">
        <div className="max-w-md p-8 rounded-3xl bg-gradient-to-b from-[#071C48] to-[#020B2D] border border-[#C8A24A]/30 shadow-2xl space-y-6">
          <div className="w-16 h-16 mx-auto rounded-2xl bg-[#C8A24A]/15 border border-[#C8A24A]/40 flex items-center justify-center text-[#E8C878]">
            <Lock className="w-8 h-8" />
          </div>

          <h2 className="font-playfair text-2xl font-bold text-white">
            Authentication Required
          </h2>

          <p className="text-white/70 text-sm font-light leading-relaxed">
            Please log in to your Solahana account to view private wealth planning, saved calculations, and consultations.
          </p>

          <button
            onClick={() => openAuthModal('login')}
            className="w-full gold-glow-button py-3.5 rounded-xl text-sm font-bold text-[#020B2D]"
          >
            Log In to Continue
          </button>
        </div>
      </div>
    );
  }

  if (user?.role === 'admin' || user?.role === 'advisor') {
    return (
      <div className="min-h-[75vh] bg-[#020B2D] flex items-center justify-center px-6 py-24 text-white text-center">
        <div className="max-w-md p-8 rounded-3xl bg-[#071C48]/80 border border-[#C8A24A]/40 shadow-2xl space-y-6">
          <div className="w-16 h-16 mx-auto rounded-2xl bg-[#C8A24A]/20 border border-[#C8A24A]/40 text-[#E8C878] flex items-center justify-center">
            <ShieldCheck className="w-8 h-8" />
          </div>
          <div className="space-y-2">
            <span className="text-[10px] font-mono tracking-widest text-[#E8C878] uppercase px-3 py-1 rounded-full bg-[#C8A24A]/10 border border-[#C8A24A]/30">
              ADMINISTRATOR GOVERNANCE
            </span>
            <h2 className="font-serif-luxury text-2xl font-bold text-white">
              Admin Session Active
            </h2>
            <p className="text-white/70 text-xs font-light leading-relaxed">
              Administrator accounts are restricted from accessing client dashboards. Please use the Admin Governance Portal.
            </p>
          </div>
          <button
            onClick={() => window.location.href = '/admin/dashboard'}
            className="w-full gold-glow-button py-3.5 rounded-xl text-xs font-bold text-[#020B2D] flex items-center justify-center gap-2 cursor-pointer shadow-lg"
          >
            Go to Admin Control Center
          </button>
        </div>
      </div>
    );
  }

  if (adminOnly && user?.role !== 'admin' && user?.role !== 'advisor') {
    return (
      <div className="min-h-[70vh] bg-[#020B2D] flex items-center justify-center px-6 py-24 text-white text-center">
        <div className="max-w-md p-8 rounded-3xl bg-[#071C48]/80 border border-red-500/30 shadow-2xl space-y-4">
          <div className="w-14 h-14 mx-auto rounded-xl bg-red-500/20 text-red-400 flex items-center justify-center">
            <ShieldCheck className="w-7 h-7" />
          </div>
          <h2 className="font-playfair text-xl font-bold text-white">Access Restricted</h2>
          <p className="text-white/60 text-xs leading-relaxed">
            You do not have permission to view administrator wealth management dashboards.
          </p>
        </div>
      </div>
    );
  }

  return children;
};

export default ProtectedRoute;
