import React from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, PieChart, Layers, ArrowUpRight } from 'lucide-react';

export default function InvestmentPortfolioIllustration() {
  return (
    <div className="relative w-full max-w-[480px] aspect-4/3 flex items-center justify-center select-none">
      <div className="w-full h-full rounded-3xl bg-gradient-to-br from-[#0F172A] via-[#041235] to-[#020B2D] border border-[#C8A24A]/35 p-6 shadow-2xl backdrop-blur-xl relative overflow-hidden flex flex-col justify-between text-left">
        {/* Glow */}
        <div className="absolute top-0 left-0 w-48 h-48 bg-[#38BDF8]/15 rounded-full blur-3xl pointer-events-none" />

        {/* Top Header */}
        <div className="flex items-center justify-between border-b border-white/10 pb-4">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 rounded-xl bg-[#38BDF8]/20 border border-[#38BDF8]/40 text-[#38BDF8] flex items-center justify-center font-bold">
              <TrendingUp className="w-5 h-5" />
            </div>
            <div>
              <div className="text-sm font-serif-luxury font-bold text-white">Direct Mutual Funds SIP</div>
              <div className="text-[11px] text-white/60">Zero Commission & Compound Growth</div>
            </div>
          </div>
          <span className="px-3 py-1 rounded-full bg-[#C8A24A]/20 border border-[#C8A24A]/40 text-[#E8C878] font-mono text-[10px] font-semibold flex items-center gap-1">
            <ArrowUpRight className="w-3 h-3" />
            14.2% CAGR
          </span>
        </div>

        {/* Vector SVG Chart Graphic */}
        <div className="my-3 w-full flex items-center justify-center">
          <svg className="w-full h-36 drop-shadow-lg overflow-visible" viewBox="0 0 340 140" fill="none">
            {/* Grid Lines */}
            <line x1="30" y1="120" x2="310" y2="120" stroke="#334155" strokeWidth="1" />
            <line x1="30" y1="80" x2="310" y2="80" stroke="#334155" strokeWidth="1" strokeDasharray="3 3" />
            <line x1="30" y1="40" x2="310" y2="40" stroke="#334155" strokeWidth="1" strokeDasharray="3 3" />

            {/* Gradient Fill under Curve */}
            <path d="M 30 115 Q 100 100 170 75 T 310 25 L 310 120 L 30 120 Z" fill="url(#investGrad)" />
            
            {/* Smooth Growth Curve */}
            <path d="M 30 115 Q 100 100 170 75 T 310 25" stroke="#C8A24A" strokeWidth="3.5" strokeLinecap="round" fill="none" />

            {/* Pulsing Nodes on Curve */}
            <circle cx="170" cy="75" r="5" fill="#E8C878" />
            <circle cx="310" cy="25" r="6" fill="#38BDF8" stroke="#FFFFFF" strokeWidth="2" />

            <defs>
              <linearGradient id="investGrad" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#C8A24A" stopOpacity="0.4" />
                <stop offset="100%" stopColor="#C8A24A" stopOpacity="0" />
              </linearGradient>
            </defs>
          </svg>
        </div>

        {/* Asset Allocation Badges */}
        <div className="grid grid-cols-3 gap-2">
          <div className="p-2.5 rounded-xl bg-white/5 border border-white/10 text-center">
            <div className="text-[10px] text-white/60">Large Cap Equity</div>
            <div className="text-xs font-bold text-white font-sora">50% Allocation</div>
          </div>
          <div className="p-2.5 rounded-xl bg-white/5 border border-white/10 text-center">
            <div className="text-[10px] text-white/60">Flexi & Mid Cap</div>
            <div className="text-xs font-bold text-white font-sora">35% Allocation</div>
          </div>
          <div className="p-2.5 rounded-xl bg-white/5 border border-white/10 text-center">
            <div className="text-[10px] text-white/60">Debt & Buffer</div>
            <div className="text-xs font-bold text-white font-sora">15% Allocation</div>
          </div>
        </div>
      </div>
    </div>
  );
}
