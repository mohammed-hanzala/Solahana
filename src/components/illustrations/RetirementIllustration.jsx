import React from 'react';
import { motion } from 'framer-motion';
import { Umbrella, ShieldCheck, Flame, Sparkles } from 'lucide-react';

export default function RetirementIllustration() {
  return (
    <div className="relative w-full max-w-[480px] aspect-4/3 flex items-center justify-center select-none">
      <div className="w-full h-full rounded-3xl bg-white/95 border border-[#C89A4B]/30 p-6 shadow-xl backdrop-blur-xl relative overflow-hidden flex flex-col justify-between text-left">
        {/* Glow */}
        <div className="absolute top-0 right-0 w-48 h-48 bg-[#C89A4B]/10 rounded-full blur-3xl pointer-events-none" />

        {/* Top Header */}
        <div className="flex items-center justify-between border-b border-[#C89A4B]/15 pb-4">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 rounded-xl bg-[#C89A4B]/10 border border-[#C89A4B]/30 text-[#9A7326] flex items-center justify-center font-bold">
              <Umbrella className="w-5 h-5" />
            </div>
            <div>
              <div className="text-sm font-serif-luxury font-bold text-[#0F172A]">FIRE Retirement Roadmap</div>
              <div className="text-[11px] text-[#64748B]">Inflation-Adjusted Target Corpus & Monthly Cashflow</div>
            </div>
          </div>
          <span className="px-3 py-1 rounded-full bg-[#C89A4B]/10 border border-[#C89A4B]/30 text-[#9A7326] font-mono text-[10px] font-semibold flex items-center gap-1">
            <Flame className="w-3 h-3 text-[#C89A4B]" />
            FIRE Ready
          </span>
        </div>

        {/* Vector SVG FIRE Nest Egg Graphic */}
        <div className="my-3 w-full flex items-center justify-center">
          <svg className="w-full h-36 drop-shadow-md overflow-visible" viewBox="0 0 340 140" fill="none">
            {/* Concentric Retirement Target Circles */}
            <circle cx="170" cy="70" r="55" fill="#FAF8F5" stroke="#C89A4B" strokeWidth="2" />
            <circle cx="170" cy="70" r="42" fill="#FFFFFF" stroke="#9A7326" strokeWidth="1.5" strokeDasharray="4 4" />
            <circle cx="170" cy="70" r="28" fill="#C89A4B" opacity="0.15" />

            {/* Shield Icon in Center */}
            <path d="M 170 55 L 180 62 V 75 C 180 82 170 88 170 88 C 170 88 160 82 160 75 V 62 Z" fill="#C89A4B" stroke="#FFFFFF" strokeWidth="1.5" />

            {/* Human Senior / Retiree Figure Enjoying Freedom */}
            <circle cx="170" cy="40" r="8" fill="#FDBA74" />
            <path d="M 164 52 L 176 52 L 174 65 L 166 65 Z" fill="#0F172A" />

            {/* Left & Right Wealth Indicators */}
            <rect x="25" y="40" width="95" height="60" rx="8" fill="#FAF8F5" stroke="#C89A4B" strokeWidth="1.5" />
            <text x="35" y="60" fill="#64748B" fontSize="9" fontFamily="sans-serif">Target Corpus</text>
            <text x="35" y="80" fill="#0F172A" fontSize="14" fontFamily="sans-serif" fontWeight="bold">₹4.50 Cr</text>

            <rect x="220" y="40" width="95" height="60" rx="8" fill="#FAF8F5" stroke="#10B981" strokeWidth="1.5" />
            <text x="230" y="60" fill="#64748B" fontSize="9" fontFamily="sans-serif">Passive Income</text>
            <text x="230" y="80" fill="#0F172A" fontSize="14" fontFamily="sans-serif" fontWeight="bold">₹2.2 Lakhs/m</text>
          </svg>
        </div>

        {/* Footer Metrics */}
        <div className="grid grid-cols-3 gap-2">
          <div className="p-2.5 rounded-xl bg-[#FAF8F5] border border-[#C89A4B]/20 text-center">
            <div className="text-[10px] text-[#64748B]">Current Age</div>
            <div className="text-xs font-bold text-[#0F172A] font-sora">32 Years</div>
          </div>
          <div className="p-2.5 rounded-xl bg-[#FAF8F5] border border-[#C89A4B]/20 text-center">
            <div className="text-[10px] text-[#64748B]">Target FIRE Age</div>
            <div className="text-xs font-bold text-[#9A7326] font-sora">55 Years</div>
          </div>
          <div className="p-2.5 rounded-xl bg-[#FAF8F5] border border-[#C89A4B]/20 text-center">
            <div className="text-[10px] text-[#64748B]">Inflation Guard</div>
            <div className="text-xs font-bold text-emerald-700 font-sora">6.0% Adjusted</div>
          </div>
        </div>
      </div>
    </div>
  );
}
