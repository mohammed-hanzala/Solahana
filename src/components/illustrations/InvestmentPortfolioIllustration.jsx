import React from 'react';
import { motion } from 'framer-motion';
import { PieChart, TrendingUp, ShieldCheck } from 'lucide-react';

export default function InvestmentPortfolioIllustration() {
  return (
    <div className="relative w-full max-w-[480px] aspect-4/3 flex items-center justify-center select-none">
      <div className="w-full h-full rounded-3xl bg-white/95 border border-[#C89B3C]/30 p-6 shadow-xl backdrop-blur-xl relative overflow-hidden flex flex-col justify-between text-left">
        {/* Soft Background Gold Glow */}
        <div className="absolute top-0 right-0 w-48 h-48 bg-[#C89B3C]/10 rounded-full blur-3xl pointer-events-none" />

        {/* Top Header */}
        <div className="flex items-center justify-between border-b border-[#C89B3C]/15 pb-4">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 rounded-xl bg-[#C89B3C]/10 border border-[#C89B3C]/30 text-[#9A7326] flex items-center justify-center font-bold">
              <TrendingUp className="w-5 h-5" />
            </div>
            <div>
              <div className="text-sm font-serif-luxury font-bold text-[#0F172A]">Wealth Growth Dashboard</div>
              <div className="text-[11px] text-[#64748B]">Multi-Asset Direct Mutual Funds & Equity SIPs</div>
            </div>
          </div>
          <span className="px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-700 font-mono text-[10px] font-semibold">
            +14.8% Compounded
          </span>
        </div>

        {/* Central Vector SVG Graphic — Human Reviewing Wealth Growth Dashboard */}
        <div className="my-3 w-full flex items-center justify-center">
          <svg className="w-full h-36 drop-shadow-md overflow-visible" viewBox="0 0 340 140" fill="none">
            {/* Dashboard Display Glass Card */}
            <rect x="25" y="10" width="180" height="120" rx="10" fill="#FAF8F5" stroke="#C89B3C" strokeWidth="1.5" />
            
            {/* Top Dashboard Header Line */}
            <line x1="35" y1="28" x2="110" y2="28" stroke="#9A7326" strokeWidth="2.5" strokeLinecap="round" />
            <circle cx="190" cy="28" r="4" fill="#10B981" />

            {/* Growth Curve Chart */}
            <path d="M 35 110 L 65 95 L 95 100 L 135 65 L 165 72 L 190 35" stroke="#10B981" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M 35 110 L 65 95 L 95 100 L 135 65 L 165 72 L 190 35 L 190 115 L 35 115 Z" fill="#10B981" opacity="0.1" />

            {/* Glowing Data Point Nodes */}
            <circle cx="135" cy="65" r="4" fill="#C89B3C" />
            <circle cx="190" cy="35" r="5" fill="#10B981" />

            {/* Donut Asset Allocation Mini Ring */}
            <circle cx="65" cy="55" r="16" fill="none" stroke="#C89B3C" strokeWidth="6" strokeDasharray="65 100" />
            <circle cx="65" cy="55" r="16" fill="none" stroke="#9A7326" strokeWidth="6" strokeDasharray="35 100" strokeDashoffset="-65" />

            {/* Human Investor Vector Figure (Reviewing Investments on Digital Screen) */}
            <circle cx="255" cy="35" r="11" fill="#FDBA74" />
            {/* Hair */}
            <path d="M 245 35 C 245 22, 265 22, 265 35 Z" fill="#0F172A" />
            {/* Torso in Smart Executive Navy Blazer */}
            <path d="M 242 50 L 268 50 L 265 95 L 245 95 Z" fill="#0F172A" />
            {/* Arm pointing to the rising graph */}
            <path d="M 245 60 Q 220 50 195 42" stroke="#0F172A" strokeWidth="4" strokeLinecap="round" fill="none" />
            <circle cx="195" cy="42" r="3" fill="#FDBA74" />

            {/* Floating Portfolio Value Card */}
            <rect x="220" y="85" width="105" height="42" rx="8" fill="#FFFFFF" stroke="#C89B3C" strokeWidth="1.5" />
            <text x="230" y="100" fill="#64748B" fontSize="9" fontFamily="sans-serif">Total Net Worth</text>
            <text x="230" y="118" fill="#0F172A" fontSize="13" fontFamily="sans-serif" fontWeight="bold">₹2.45 Crore</text>
          </svg>
        </div>

        {/* Footer Metrics */}
        <div className="grid grid-cols-3 gap-2">
          <div className="p-2.5 rounded-xl bg-[#FAF8F5] border border-[#C89A4B]/20 text-center">
            <div className="text-[10px] text-[#64748B]">Zero Commission</div>
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
