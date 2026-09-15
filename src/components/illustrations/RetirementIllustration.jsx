import React from 'react';
import { motion } from 'framer-motion';
import { Umbrella, ShieldCheck, Flame, Sparkles } from 'lucide-react';

export default function RetirementIllustration() {
  return (
    <div className="relative w-full max-w-[480px] aspect-4/3 flex items-center justify-center select-none">
      <div className="w-full h-full rounded-3xl bg-gradient-to-br from-[#0F172A] via-[#041235] to-[#020B2D] border border-[#C8A24A]/35 p-6 shadow-2xl backdrop-blur-xl relative overflow-hidden flex flex-col justify-between text-left">
        {/* Glow */}
        <div className="absolute top-0 right-0 w-48 h-48 bg-[#E5C158]/15 rounded-full blur-3xl pointer-events-none" />

        {/* Top Header */}
        <div className="flex items-center justify-between border-b border-white/10 pb-4">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 rounded-xl bg-[#E5C158]/20 border border-[#E5C158]/40 text-[#E8C878] flex items-center justify-center font-bold">
              <Umbrella className="w-5 h-5" />
            </div>
            <div>
              <div className="text-sm font-serif-luxury font-bold text-white">FIRE Retirement Planner</div>
              <div className="text-[11px] text-white/60">Inflation-Adjusted Target Corpus & Monthly Cashflow</div>
            </div>
          </div>
          <span className="px-3 py-1 rounded-full bg-[#E5C158]/15 border border-[#E5C158]/30 text-[#E8C878] font-mono text-[10px] font-semibold flex items-center gap-1">
            <Flame className="w-3 h-3 text-[#E8C878]" />
            FIRE Ready
          </span>
        </div>

        {/* Vector SVG FIRE Nest Egg Graphic */}
        <div className="my-3 w-full flex items-center justify-center">
          <svg className="w-full h-36 drop-shadow-lg overflow-visible" viewBox="0 0 340 140" fill="none">
            {/* Concentric Retirement Target Circles */}
            <circle cx="170" cy="70" r="55" fill="#0F172A" stroke="#C8A24A" strokeWidth="2" />
            <circle cx="170" cy="70" r="42" fill="#041235" stroke="#E5C158" strokeWidth="1.5" strokeDasharray="4 4" />
            <circle cx="170" cy="70" r="28" fill="#C8A24A" opacity="0.2" />

            {/* Shield Icon in Center */}
            <path d="M 170 55 L 180 62 V 75 C 180 82 170 88 170 88 C 170 88 160 82 160 75 V 62 Z" fill="#E8C878" stroke="#FFFFFF" strokeWidth="1.5" />

            {/* Left & Right Wealth Indicators */}
            <rect x="25" y="40" width="90" height="60" rx="8" fill="#0F172A" stroke="#38BDF8" strokeWidth="1.5" />
            <text x="35" y="60" fill="#38BDF8" fontSize="9" fontFamily="sans-serif">Target Corpus</text>
            <text x="35" y="80" fill="#FFFFFF" fontSize="14" fontFamily="sans-serif" fontWeight="bold">₹4.50 Cr</text>

            <rect x="225" y="40" width="90" height="60" rx="8" fill="#0F172A" stroke="#34D399" strokeWidth="1.5" />
            <text x="235" y="60" fill="#34D399" fontSize="9" fontFamily="sans-serif">Passive Income</text>
            <text x="235" y="80" fill="#FFFFFF" fontSize="14" fontFamily="sans-serif" fontWeight="bold">₹2.2 Lakhs/m</text>
          </svg>
        </div>

        {/* Footer Metrics */}
        <div className="grid grid-cols-3 gap-2">
          <div className="p-2.5 rounded-xl bg-white/5 border border-white/10 text-center">
            <div className="text-[10px] text-white/60">Current Age</div>
            <div className="text-xs font-bold text-white font-sora">32 Years</div>
          </div>
          <div className="p-2.5 rounded-xl bg-white/5 border border-white/10 text-center">
            <div className="text-[10px] text-white/60">Target FIRE Age</div>
            <div className="text-xs font-bold text-[#E8C878] font-sora">55 Years</div>
          </div>
          <div className="p-2.5 rounded-xl bg-white/5 border border-white/10 text-center">
            <div className="text-[10px] text-white/60">Inflation Guard</div>
            <div className="text-xs font-bold text-emerald-400 font-sora">6.0% Adjusted</div>
          </div>
        </div>
      </div>
    </div>
  );
}
