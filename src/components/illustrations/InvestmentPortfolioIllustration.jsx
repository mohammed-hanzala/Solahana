import React from 'react';
import { motion } from 'framer-motion';
import { PieChart, TrendingUp, ShieldCheck } from 'lucide-react';

export default function InvestmentPortfolioIllustration() {
  return (
    <div className="relative w-full max-w-[480px] aspect-4/3 flex items-center justify-center select-none">
      <div className="w-full h-full rounded-3xl bg-white/95 border border-[#C89A4B]/30 p-6 shadow-xl backdrop-blur-xl relative overflow-hidden flex flex-col justify-between text-left">
        <div className="absolute top-0 right-0 w-48 h-48 bg-[#C89A4B]/10 rounded-full blur-3xl pointer-events-none" />

        <div className="flex items-center justify-between border-b border-[#C89A4B]/15 pb-4">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 rounded-xl bg-[#C89A4B]/10 border border-[#C89A4B]/30 text-[#9A7326] flex items-center justify-center font-bold">
              <PieChart className="w-5 h-5" />
            </div>
            <div>
              <div className="text-sm font-serif-luxury font-bold text-[#0F172A]">Direct Mutual Fund Matrix</div>
              <div className="text-[11px] text-[#64748B]">Zero Commission & Direct Growth Clean NAV</div>
            </div>
          </div>
          <span className="px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-700 font-mono text-[10px] font-semibold">
            Direct Funds
          </span>
        </div>

        {/* Vector SVG Multi-Asset Allocation Graphic */}
        <div className="my-3 w-full flex items-center justify-center">
          <svg className="w-full h-36 drop-shadow-md overflow-visible" viewBox="0 0 340 140" fill="none">
            {/* Donut Chart Ring */}
            <circle cx="90" cy="70" r="45" fill="none" stroke="#FAF8F5" strokeWidth="18" />
            <circle cx="90" cy="70" r="45" fill="none" stroke="#C89A4B" strokeWidth="18" strokeDasharray="180 300" />
            <circle cx="90" cy="70" r="45" fill="none" stroke="#9A7326" strokeWidth="18" strokeDasharray="80 300" strokeDashoffset="-180" />
            <circle cx="90" cy="70" r="45" fill="none" stroke="#D4AF37" strokeWidth="18" strokeDasharray="40 300" strokeDashoffset="-260" />

            {/* Center Label */}
            <text x="90" y="66" fill="#0F172A" fontSize="12" fontWeight="bold" textAnchor="middle">₹1.84 Cr</text>
            <text x="90" y="80" fill="#64748B" fontSize="9" textAnchor="middle">Portfolio</text>

            {/* Asset Class Breakdown Lines */}
            <g transform="translate(170, 30)">
              <rect x="0" y="0" width="12" height="12" rx="3" fill="#C89A4B" />
              <text x="20" y="10" fill="#0F172A" fontSize="11" fontWeight="bold">Equity Growth (65%)</text>
              <text x="20" y="24" fill="#64748B" fontSize="9">Large, Flexi & Mid Cap Direct</text>
            </g>

            <g transform="translate(170, 65)">
              <rect x="0" y="0" width="12" height="12" rx="3" fill="#9A7326" />
              <text x="20" y="10" fill="#0F172A" fontSize="11" fontWeight="bold">Debt Reserves (25%)</text>
              <text x="20" y="24" fill="#64748B" fontSize="9">Arbitrage & Liquid Shield</text>
            </g>

            <g transform="translate(170, 100)">
              <rect x="0" y="0" width="12" height="12" rx="3" fill="#D4AF37" />
              <text x="20" y="10" fill="#0F172A" fontSize="11" fontWeight="bold">Gold Hedge (10%)</text>
              <text x="20" y="24" fill="#64748B" fontSize="9">Sovereign Gold Bonds</text>
            </g>
          </svg>
        </div>

        <div className="grid grid-cols-3 gap-2">
          <div className="p-2.5 rounded-xl bg-[#FAF8F5] border border-[#C89A4B]/20 text-center">
            <div className="text-[10px] text-[#64748B]">Zero Brokerage</div>
            <div className="text-xs font-bold text-emerald-700 font-sora">100% Direct</div>
          </div>
          <div className="p-2.5 rounded-xl bg-[#FAF8F5] border border-[#C89A4B]/20 text-center">
            <div className="text-[10px] text-[#64748B]">TER Savings</div>
            <div className="text-xs font-bold text-[#9A7326] font-sora">+1.5% p.a.</div>
          </div>
          <div className="p-2.5 rounded-xl bg-[#FAF8F5] border border-[#C89A4B]/20 text-center">
            <div className="text-[10px] text-[#64748B]">Rebalancing</div>
            <div className="text-xs font-bold text-[#0F172A] font-sora">Annual Audit</div>
          </div>
        </div>
      </div>
    </div>
  );
}
