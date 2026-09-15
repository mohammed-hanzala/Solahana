import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Heart, Umbrella, Lock, CheckCircle2 } from 'lucide-react';

export default function InsuranceProtectionIllustration() {
  return (
    <div className="relative w-full max-w-[480px] aspect-4/3 flex items-center justify-center select-none">
      <div className="w-full h-full rounded-3xl bg-gradient-to-br from-[#0F172A] via-[#041235] to-[#020B2D] border border-[#C8A24A]/35 p-6 shadow-2xl backdrop-blur-xl relative overflow-hidden flex flex-col justify-between text-left">
        {/* Glow */}
        <div className="absolute top-0 right-0 w-48 h-48 bg-emerald-500/15 rounded-full blur-3xl pointer-events-none" />

        {/* Top Header */}
        <div className="flex items-center justify-between border-b border-white/10 pb-4">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 rounded-xl bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 flex items-center justify-center font-bold">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <div className="text-sm font-serif-luxury font-bold text-white">Family Risk Protection</div>
              <div className="text-[11px] text-white/60">Term Life, Super Top-Up Health & Emergency Buffer</div>
            </div>
          </div>
          <span className="px-3 py-1 rounded-full bg-emerald-500/15 border border-emerald-500/30 text-emerald-300 font-mono text-[10px] font-semibold">
            100% Covered
          </span>
        </div>

        {/* Shield Vector SVG Graphic */}
        <div className="my-3 w-full flex items-center justify-center">
          <svg className="w-full h-36 drop-shadow-lg overflow-visible" viewBox="0 0 340 140" fill="none">
            {/* Center Shield Graphic */}
            <path d="M 170 15 L 230 40 V 80 C 230 115 170 135 170 135 C 170 135 110 115 110 80 V 40 Z" fill="#041235" stroke="#C8A24A" strokeWidth="2.5" />
            <path d="M 170 25 L 220 47 V 80 C 220 108 170 125 170 125 C 170 125 120 108 120 80 V 47 Z" fill="#0F172A" />

            {/* Shield Checkmark */}
            <path d="M 152 75 L 164 87 L 190 60" stroke="#10B981" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" fill="none" />

            {/* Left Box: Term Life */}
            <rect x="20" y="45" width="75" height="50" rx="8" fill="#0F172A" stroke="#38BDF8" strokeWidth="1.5" />
            <text x="30" y="65" fill="#38BDF8" fontSize="9" fontFamily="sans-serif">Term Life</text>
            <text x="30" y="82" fill="#FFFFFF" fontSize="13" fontFamily="sans-serif" fontWeight="bold">₹2.5 Cr</text>

            {/* Right Box: Health Cover */}
            <rect x="245" y="45" width="75" height="50" rx="8" fill="#0F172A" stroke="#E8C878" strokeWidth="1.5" />
            <text x="255" y="65" fill="#E8C878" fontSize="9" fontFamily="sans-serif">Health Cover</text>
            <text x="255" y="82" fill="#FFFFFF" fontSize="13" fontFamily="sans-serif" fontWeight="bold">₹1.0 Cr</text>
          </svg>
        </div>

        {/* Footer Metrics */}
        <div className="grid grid-cols-3 gap-2">
          <div className="p-2.5 rounded-xl bg-white/5 border border-white/10 text-center">
            <div className="text-[10px] text-white/60">Income Replacement</div>
            <div className="text-xs font-bold text-emerald-400 font-sora">15x Cover</div>
          </div>
          <div className="p-2.5 rounded-xl bg-white/5 border border-white/10 text-center">
            <div className="text-[10px] text-white/60">Super Top-up</div>
            <div className="text-xs font-bold text-white font-sora">Active</div>
          </div>
          <div className="p-2.5 rounded-xl bg-white/5 border border-white/10 text-center">
            <div className="text-[10px] text-white/60">Emergency Fund</div>
            <div className="text-xs font-bold text-[#E8C878] font-sora">6 Months</div>
          </div>
        </div>
      </div>
    </div>
  );
}
