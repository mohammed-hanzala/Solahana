import React from 'react';
import { useAuth } from '../context/AuthContext';
import { ShieldAlert, Lock, ArrowLeft } from 'lucide-react';

export default function AdminProtectedRoute({ children, onNavigate }) {
  const { user, isAuthenticated, loading } = useAuth();

  if (loading) {
    return (
      <div className="min-h-screen bg-[#020B2D] flex items-center justify-center text-white">
        <div className="flex flex-col items-center gap-4">
          <div className="w-12 h-12 rounded-full border-2 border-[#C8A24A]/20 border-t-[#C8A24A] animate-spin" />
          <span className="text-xs font-mono text-[#E8C878] uppercase tracking-wider">
            Verifying Admin Authority...
          </span>
        </div>
      </div>
    );
  }

  // Not logged in -> Redirect / prompt to Admin Login
  if (!isAuthenticated) {
    return (
      <div className="min-h-[75vh] bg-[#020B2D] flex items-center justify-center px-6 py-24 text-white text-center">
        <div className="max-w-md p-8 rounded-3xl bg-gradient-to-b from-[#071C48] to-[#020B2D] border border-[#C8A24A]/30 shadow-2xl space-y-6">
          <div className="w-16 h-16 mx-auto rounded-2xl bg-[#C8A24A]/15 border border-[#C8A24A]/40 flex items-center justify-center text-[#E8C878]">
            <Lock className="w-8 h-8" />
          </div>

          <div className="space-y-2">
            <h2 className="font-serif-luxury text-2xl font-bold text-white">
              Administrator Login Required
            </h2>
            <p className="text-white/70 text-xs font-light leading-relaxed">
              You must sign in with administrator credentials to access the SOLAHANA Control Center.
            </p>
          </div>

          <button
            onClick={() => {
              if (onNavigate) onNavigate('admin-login');
              else window.location.hash = '#admin-login';
            }}
            className="w-full gold-glow-button py-3.5 rounded-xl text-xs font-bold text-[#020B2D] cursor-pointer"
          >
            Proceed to Admin Login
          </button>
        </div>
      </div>
    );
  }

  // Logged in but not admin -> 403 Unauthorized
  if (user?.role !== 'admin' && user?.role !== 'advisor') {
    return (
      <div className="min-h-[75vh] bg-[#020B2D] flex items-center justify-center px-6 py-24 text-white text-center">
        <div className="max-w-md p-8 rounded-3xl bg-[#071C48]/80 border border-red-500/40 shadow-2xl space-y-6">
          <div className="w-16 h-16 mx-auto rounded-2xl bg-red-500/20 border border-red-500/40 text-red-400 flex items-center justify-center">
            <ShieldAlert className="w-8 h-8" />
          </div>

          <div className="space-y-2">
            <span className="text-[10px] font-mono tracking-widest text-red-400 uppercase px-3 py-1 rounded-full bg-red-500/10 border border-red-500/30">
              HTTP 403 UNAUTHORIZED
            </span>
            <h2 className="font-serif-luxury text-2xl font-bold text-white">
              Access Restricted
            </h2>
            <p className="text-white/70 text-xs font-light leading-relaxed">
              Your account <strong>({user?.email})</strong> is registered as a standard user and does not possess administrator privileges.
            </p>
          </div>

          <div className="flex flex-col gap-3 pt-2">
            <button
              onClick={() => {
                if (onNavigate) onNavigate('admin-login');
                else window.location.hash = '#admin-login';
              }}
              className="w-full py-3 rounded-xl bg-red-500/20 hover:bg-red-500/30 border border-red-500/40 text-red-200 font-bold text-xs cursor-pointer transition-colors"
            >
              Sign In with Admin Account
            </button>
            <button
              onClick={() => {
                if (onNavigate) onNavigate('home');
                else window.location.hash = '#home';
              }}
              className="w-full py-3 rounded-xl bg-white/5 hover:bg-white/10 text-white/70 font-semibold text-xs flex items-center justify-center gap-2 cursor-pointer transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Back to Client Homepage</span>
            </button>
          </div>
        </div>
      </div>
    );
  }

  return children;
}
