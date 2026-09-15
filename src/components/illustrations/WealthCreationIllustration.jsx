import React from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, PieChart, ShieldCheck } from 'lucide-react';

export default function WealthCreationIllustration() {
  return (
    <div className="relative w-full max-w-[420px] aspect-4/3 flex items-center justify-center select-none">
      <div className="absolute inset-0 bg-gradient-to-tr from-[#C89A4B]/15 via-[#FAF7F2] to-transparent rounded-3xl blur-2xl" />

      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="relative z-10 w-full p-6 rounded-3xl bg-white/95 border border-[#C89A4B]/30 shadow-xl backdrop-blur-xl flex flex-col justify-between space-y-4"
      >
        <div className="flex items-center justify-between border-b border-[#C89A4B]/15 pb-4">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 rounded-2xl bg-[#C89A4B]/10 border border-[#C89A4B]/30 text-[#9A7326] flex items-center justify-center">
              <TrendingUp className="w-5 h-5" />
            </div>
            <div>
              <div className="text-xs font-bold text-[#0F172A] font-sora">Wealth Compounding Engine</div>
              <div className="text-[10px] text-[#64748B]">Multi-Asset Equity + Gold + Debt</div>
            </div>
          </div>
          <span className="text-[10px] font-bold text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-200">
            +14.2% CAGR
          </span>
        </div>

        {/* Vector SVG Human Figure with Wealth Chart */}
        <div className="h-44 w-full flex items-center justify-center relative">
          <svg className="w-full h-full" viewBox="0 0 300 160" fill="none">
            {/* Background Grid */}
            <rect x="20" y="20" width="260" height="120" rx="16" fill="#FAF7F2" stroke="#C89A4B" strokeWidth="1" strokeDasharray="3 3" />
            
            {/* Bars */}
            <rect x="45" y="90" width="22" height="40" rx="4" fill="#C89A4B" opacity="0.3" />
            <rect x="85" y="75" width="22" height="55" rx="4" fill="#C89A4B" opacity="0.5" />
            <rect x="125" y="55" width="22" height="75" rx="4" fill="#C89A4B" opacity="0.7" />
            <rect x="165" y="35" width="22" height="95" rx="4" fill="#9A7326" />

            {/* Human Investor Planting Seed / Tree of Wealth */}
            <circle cx="230" cy="65" r="14" fill="#FDBA74" />
            <path d="M 218 62 C 218 50, 242 50, 242 62 Z" fill="#0F172A" />
            <path d="M 215 85 L 245 85 L 240 130 L 220 130 Z" fill="#0F172A" />

            <path d="M 205 100 Q 215 90 225 105" stroke="#9A7326" strokeWidth="2" strokeLinecap="round" />
            <circle cx="202" cy="98" r="4" fill="#D4AF37" />
          </svg>
        </div>

        <div className="grid grid-cols-2 gap-3 pt-2">
          <div className="p-2.5 rounded-xl bg-[#FAF8F5] border border-[#C89A4B]/20">
            <div className="text-[10px] text-[#64748B]">Projected Corpus</div>
            <div className="text-xs font-bold text-[#9A7326] font-sora">₹1.84 Cr</div>
          </div>
          <div className="p-2.5 rounded-xl bg-[#FAF8F5] border border-[#C89A4B]/20">
            <div className="text-[10px] text-[#64748B]">Commission Saved</div>
            <div className="text-xs font-bold text-emerald-700 font-sora">Zero Brokerage</div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
