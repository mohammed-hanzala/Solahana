import React from 'react';
import { useAuth } from '../context/AuthContext';
import { ShieldCheck, Lock } from 'lucide-react';

export const ProtectedRoute = ({ children, adminOnly = false }) => {
  const { user, isAuthenticated, loading, openAuthModal } = useAuth();

  if (loading) {
    return (
      <div className="min-h-screen bg-[#FCFAF6] flex items-center justify-center text-[#1A1A1A]">
        <div className="flex flex-col items-center gap-4">
          <div className="w-12 h-12 rounded-full border-2 border-[#C89B3C]/20 border-t-[#C89B3C] animate-spin" />
          <span className="text-xs font-mono text-[#C89B3C] font-bold uppercase tracking-wider">
            Authenticating Session...
          </span>
        </div>
      </div>
    );
  }

  if (!isAuthenticated) {
    return (
      <div className="min-h-[70vh] bg-[#FCFAF6] flex items-center justify-center px-6 py-24 text-[#1A1A1A] text-center">
        <div className="max-w-md p-8 rounded-3xl bg-white border border-[#E7D7B5] shadow-2xl space-y-6">
          <div className="w-16 h-16 mx-auto rounded-2xl bg-[#C89B3C]/10 border border-[#E7D7B5] flex items-center justify-center text-[#C89B3C]">
            <Lock className="w-8 h-8" />
          </div>

          <h2 className="font-serif-luxury text-2xl font-bold text-[#1A1A1A]">
            Authentication Required
          </h2>

          <p className="text-[#555555] text-sm font-light leading-relaxed">
            Please log in to your Solahana account to view private wealth planning, saved calculations, and consultations.
          </p>

          <button
            onClick={() => openAuthModal('login')}
            className="w-full gold-glow-button py-3.5 rounded-xl text-sm font-bold text-[#1A1A1A] cursor-pointer shadow-md"
          >
            Log In to Continue
          </button>
        </div>
      </div>
    );
  }

  if (user?.role === 'admin' || user?.role === 'advisor') {
    return (
      <div className="min-h-[75vh] bg-[#FCFAF6] flex items-center justify-center px-6 py-24 text-[#1A1A1A] text-center">
        <div className="max-w-md p-8 rounded-3xl bg-white border border-[#E7D7B5] shadow-2xl space-y-6">
          <div className="w-16 h-16 mx-auto rounded-2xl bg-[#C89B3C]/10 border border-[#E7D7B5] text-[#C89B3C] flex items-center justify-center">
            <ShieldCheck className="w-8 h-8" />
          </div>
          <div className="space-y-2">
            <span className="text-[10px] font-mono tracking-widest text-[#C89B3C] font-bold uppercase px-3 py-1 rounded-full bg-[#C89B3C]/10 border border-[#E7D7B5]">
              ADMINISTRATOR GOVERNANCE
            </span>
            <h2 className="font-serif-luxury text-2xl font-bold text-[#1A1A1A]">
              Admin Session Active
            </h2>
            <p className="text-[#555555] text-xs font-light leading-relaxed">
              Administrator accounts are restricted from accessing client dashboards. Please use the Admin Governance Portal.
            </p>
          </div>
          <button
            onClick={() => window.location.href = '/admin/dashboard'}
            className="w-full gold-glow-button py-3.5 rounded-xl text-xs font-bold text-[#1A1A1A] flex items-center justify-center gap-2 cursor-pointer shadow-lg"
          >
            Go to Admin Control Center
          </button>
        </div>
      </div>
    );
  }

  if (adminOnly && user?.role !== 'admin' && user?.role !== 'advisor') {
    return (
      <div className="min-h-[70vh] bg-[#FCFAF6] flex items-center justify-center px-6 py-24 text-[#1A1A1A] text-center">
        <div className="max-w-md p-8 rounded-3xl bg-white border border-rose-200 shadow-2xl space-y-4">
          <div className="w-14 h-14 mx-auto rounded-xl bg-rose-50 text-rose-600 flex items-center justify-center">
            <ShieldCheck className="w-7 h-7" />
          </div>
          <h2 className="font-serif-luxury text-xl font-bold text-[#1A1A1A]">Access Restricted</h2>
          <p className="text-[#555555] text-xs leading-relaxed">
            You do not have permission to view administrator wealth management dashboards.
          </p>
        </div>
      </div>
    );
  }

  return children;
};

export default ProtectedRoute;
