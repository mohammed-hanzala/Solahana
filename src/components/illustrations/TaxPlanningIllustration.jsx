import React from 'react';
import { motion } from 'framer-motion';
import { FileText, Calculator, ShieldCheck, CheckCircle2 } from 'lucide-react';

export default function TaxPlanningIllustration() {
  return (
    <div className="relative w-full max-w-[480px] aspect-4/3 flex items-center justify-center select-none">
      <div className="w-full h-full rounded-3xl bg-white/95 border border-[#C89A4B]/30 p-6 shadow-xl backdrop-blur-xl relative overflow-hidden flex flex-col justify-between text-left">
        {/* Glow */}
        <div className="absolute top-0 right-0 w-48 h-48 bg-[#C89A4B]/10 rounded-full blur-3xl pointer-events-none" />

        {/* Top Bar */}
        <div className="flex items-center justify-between border-b border-[#C89A4B]/15 pb-4">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 rounded-xl bg-[#C89A4B]/10 border border-[#C89A4B]/30 text-[#9A7326] flex items-center justify-center font-bold">
              <Calculator className="w-5 h-5" />
            </div>
            <div>
              <div className="text-sm font-serif-luxury font-bold text-[#0F172A]">Tax Harvesting Engine</div>
              <div className="text-[11px] text-[#64748B]">Section 80C, 80D, NPS & LTCG Optimization</div>
            </div>
          </div>
          <span className="px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-700 font-mono text-[10px] font-semibold">
            Tax Optimized
          </span>
        </div>

        {/* Central Vector SVG Graphic */}
        <div className="my-3 w-full flex items-center justify-center">
          <svg className="w-full h-36 drop-shadow-md overflow-visible" viewBox="0 0 340 140" fill="none">
            {/* Tax Document Sheet */}
            <rect x="20" y="10" width="130" height="120" rx="8" fill="#FAF8F5" stroke="#C89A4B" strokeWidth="2" />
            <line x1="35" y1="30" x2="120" y2="30" stroke="#9A7326" strokeWidth="3" strokeLinecap="round" />
            <line x1="35" y1="45" x2="105" y2="45" stroke="#94A3B8" strokeWidth="2" strokeLinecap="round" />
            <line x1="35" y1="60" x2="115" y2="60" stroke="#94A3B8" strokeWidth="2" strokeLinecap="round" />
            <line x1="35" y1="75" x2="95" y2="75" stroke="#94A3B8" strokeWidth="2" strokeLinecap="round" />
            <circle cx="115" cy="100" r="14" fill="#10B981" opacity="0.15" />
            <path d="M 109 100 L 113 104 L 121 96" stroke="#10B981" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />

            {/* Human Figure (Tax Advisor Auditing Returns) */}
            <circle cx="175" cy="45" r="10" fill="#FDBA74" />
            <path d="M 168 60 L 182 60 L 180 95 L 170 95 Z" fill="#0F172A" />

            {/* Connecting Flow Arrow */}
            <path d="M 155 70 Q 180 50 205 70" stroke="#C89A4B" strokeWidth="2" strokeDasharray="4 4" fill="none" />

            {/* Tax Savings Badge Card */}
            <rect x="210" y="20" width="115" height="100" rx="10" fill="#FAF8F5" stroke="#C89A4B" strokeWidth="1.5" />
            <text x="225" y="45" fill="#9A7326" fontSize="10" fontFamily="sans-serif" fontWeight="bold">SAVINGS IMPACT</text>
            <text x="225" y="70" fill="#0F172A" fontSize="18" fontFamily="sans-serif" fontWeight="bold">₹1,50,000</text>
            <text x="225" y="90" fill="#10B981" fontSize="10" fontFamily="sans-serif">Max Tax Harvested</text>
          </svg>
        </div>

        {/* Floating Badges */}
        <div className="grid grid-cols-3 gap-2">
          <div className="p-2.5 rounded-xl bg-[#FAF8F5] border border-[#C89A4B]/20 text-center">
            <div className="text-[10px] text-[#64748B]">Sec 80C</div>
            <div className="text-xs font-bold text-[#9A7326] font-sora">₹1.5 Lakh</div>
          </div>
          <div className="p-2.5 rounded-xl bg-[#FAF8F5] border border-[#C89A4B]/20 text-center">
            <div className="text-[10px] text-[#64748B]">Sec 80D</div>
            <div className="text-xs font-bold text-[#9A7326] font-sora">₹75,000</div>
          </div>
          <div className="p-2.5 rounded-xl bg-[#FAF8F5] border border-[#C89A4B]/20 text-center">
            <div className="text-[10px] text-[#64748B]">NPS Sec 80CCD</div>
            <div className="text-xs font-bold text-[#9A7326] font-sora">₹50,000</div>
          </div>
        </div>
      </div>
    </div>
  );
}
