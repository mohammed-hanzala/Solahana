import React from 'react';
import { motion } from 'framer-motion';
import { FileText, Calculator, ShieldCheck, CheckCircle2, TrendingDown } from 'lucide-react';

export default function TaxPlanningIllustration() {
  return (
    <div className="relative w-full max-w-[480px] aspect-4/3 flex items-center justify-center select-none">
      <div className="w-full h-full rounded-3xl bg-gradient-to-br from-[#0F172A] via-[#041235] to-[#020B2D] border border-[#C8A24A]/35 p-6 shadow-2xl backdrop-blur-xl relative overflow-hidden flex flex-col justify-between text-left">
        {/* Glow */}
        <div className="absolute top-0 right-0 w-48 h-48 bg-[#C8A24A]/15 rounded-full blur-3xl pointer-events-none" />

        {/* Top Bar */}
        <div className="flex items-center justify-between border-b border-white/10 pb-4">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 rounded-xl bg-[#C8A24A]/20 border border-[#C8A24A]/40 text-[#E8C878] flex items-center justify-center font-bold">
              <Calculator className="w-5 h-5" />
            </div>
            <div>
              <div className="text-sm font-serif-luxury font-bold text-white">Tax Harvesting Engine</div>
              <div className="text-[11px] text-white/60">Section 80C, 80D, NPS & LTCG Optimization</div>
            </div>
          </div>
          <span className="px-3 py-1 rounded-full bg-emerald-500/15 border border-emerald-500/30 text-emerald-300 font-mono text-[10px] font-semibold">
            Tax Optimized
          </span>
        </div>

        {/* Central Vector SVG Graphic */}
        <div className="my-3 w-full flex items-center justify-center">
          <svg className="w-full h-36 drop-shadow-lg overflow-visible" viewBox="0 0 340 140" fill="none">
            {/* Tax Document Sheet */}
            <rect x="20" y="10" width="130" height="120" rx="8" fill="#0F172A" stroke="#C8A24A" strokeWidth="2" />
            <line x1="35" y1="30" x2="120" y2="30" stroke="#E8C878" strokeWidth="3" strokeLinecap="round" />
            <line x1="35" y1="45" x2="105" y2="45" stroke="#94A3B8" strokeWidth="2" strokeLinecap="round" />
            <line x1="35" y1="60" x2="115" y2="60" stroke="#94A3B8" strokeWidth="2" strokeLinecap="round" />
            <line x1="35" y1="75" x2="95" y2="75" stroke="#94A3B8" strokeWidth="2" strokeLinecap="round" />
            <circle cx="115" cy="100" r="14" fill="#10B981" opacity="0.2" />
            <path d="M 109 100 L 113 104 L 121 96" stroke="#34D399" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />

            {/* Connecting Flow Arrow */}
            <path d="M 160 70 Q 180 50 200 70" stroke="#C8A24A" strokeWidth="2" strokeDasharray="4 4" fill="none" />

            {/* Tax Savings Badge Card */}
            <rect x="210" y="20" width="115" height="100" rx="10" fill="#041235" stroke="#38BDF8" strokeWidth="1.5" />
            <text x="225" y="45" fill="#38BDF8" fontSize="10" fontFamily="sans-serif" fontWeight="bold">SAVINGS IMPACT</text>
            <text x="225" y="70" fill="#FFFFFF" fontSize="18" fontFamily="sans-serif" fontWeight="bold">₹1,50,000</text>
            <text x="225" y="90" fill="#34D399" fontSize="10" fontFamily="sans-serif">Max Tax Harvested</text>
          </svg>
        </div>

        {/* Floating Badges */}
        <div className="grid grid-cols-3 gap-2">
          <div className="p-2.5 rounded-xl bg-white/5 border border-white/10 text-center">
            <div className="text-[10px] text-white/60">Sec 80C</div>
            <div className="text-xs font-bold text-[#E8C878] font-sora">₹1.5 Lakh</div>
          </div>
          <div className="p-2.5 rounded-xl bg-white/5 border border-white/10 text-center">
            <div className="text-[10px] text-white/60">Sec 80D</div>
            <div className="text-xs font-bold text-[#E8C878] font-sora">₹75,000</div>
          </div>
          <div className="p-2.5 rounded-xl bg-white/5 border border-white/10 text-center">
            <div className="text-[10px] text-white/60">NPS Sec 80CCD</div>
            <div className="text-xs font-bold text-[#E8C878] font-sora">₹50,000</div>
          </div>
        </div>
      </div>
    </div>
  );
}
