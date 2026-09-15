import React from 'react';
import { motion } from 'framer-motion';
import { Calculator, ShieldCheck, FileText } from 'lucide-react';

export default function TaxPlanningIllustration() {
  return (
    <div className="relative w-full max-w-[480px] aspect-4/3 flex items-center justify-center select-none">
      <div className="w-full h-full rounded-3xl bg-white/95 border border-[#C89A4B]/30 p-6 shadow-xl backdrop-blur-xl relative overflow-hidden flex flex-col justify-between text-left">
        {/* Soft Background Gold Glow */}
        <div className="absolute top-0 right-0 w-48 h-48 bg-[#C89A4B]/10 rounded-full blur-3xl pointer-events-none" />

        {/* Top Header */}
        <div className="flex items-center justify-between border-b border-[#C89A4B]/15 pb-4">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 rounded-xl bg-[#C89A4B]/10 border border-[#C89A4B]/30 text-[#9A7326] flex items-center justify-center font-bold">
              <Calculator className="w-5 h-5" />
            </div>
            <div>
              <div className="text-sm font-serif-luxury font-bold text-[#0F172A]">Tax Harvesting & Advisory</div>
              <div className="text-[11px] text-[#64748B]">Section 80C, 80D, NPS & LTCG Structuring</div>
            </div>
          </div>
          <span className="px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-700 font-mono text-[10px] font-semibold">
            Tax Optimized
          </span>
        </div>

        {/* Central Vector SVG Graphic — Advisor Helping Client with Tax Planning */}
        <div className="my-3 w-full flex items-center justify-center">
          <svg className="w-full h-36 drop-shadow-md overflow-visible" viewBox="0 0 340 140" fill="none">
            {/* Tax Strategy Sheet Document */}
            <rect x="110" y="10" width="120" height="120" rx="10" fill="#FAF8F5" stroke="#C89A4B" strokeWidth="1.5" />
            <line x1="125" y1="28" x2="200" y2="28" stroke="#9A7326" strokeWidth="3" strokeLinecap="round" />
            <line x1="125" y1="42" x2="190" y2="42" stroke="#94A3B8" strokeWidth="2" strokeLinecap="round" />
            <line x1="125" y1="56" x2="180" y2="56" stroke="#94A3B8" strokeWidth="2" strokeLinecap="round" />
            <line x1="125" y1="70" x2="195" y2="70" stroke="#94A3B8" strokeWidth="2" strokeLinecap="round" />

            {/* Approved Stamp */}
            <circle cx="195" cy="95" r="14" fill="#10B981" opacity="0.15" />
            <path d="M 189 95 L 193 99 L 201 91" stroke="#10B981" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />

            {/* Left Human Figure (Financial Advisor presenting document) */}
            <circle cx="65" cy="40" r="11" fill="#FDBA74" />
            <path d="M 55 40 C 55 28, 75 28, 75 40 Z" fill="#0F172A" />
            <path d="M 52 55 L 78 55 L 75 100 L 55 100 Z" fill="#0F172A" />
            <path d="M 68 62 Q 95 55 115 50" stroke="#0F172A" strokeWidth="4" strokeLinecap="round" fill="none" />

            {/* Right Human Figure (Client reviewing tax strategy) */}
            <circle cx="275" cy="40" r="11" fill="#FDBA74" />
            <path d="M 265 40 C 265 28, 285 28, 285 40 Z" fill="#9A7326" />
            <path d="M 262 55 L 288 55 L 285 100 L 265 100 Z" fill="#9A7326" />
            <path d="M 270 62 Q 245 55 225 50" stroke="#9A7326" strokeWidth="4" strokeLinecap="round" fill="none" />

            {/* Floating Tax Savings Badge */}
            <rect x="15" y="85" width="95" height="42" rx="8" fill="#FFFFFF" stroke="#C89A4B" strokeWidth="1.5" />
            <text x="25" y="100" fill="#9A7326" fontSize="9" fontFamily="sans-serif" fontWeight="bold">TAX SAVED</text>
            <text x="25" y="118" fill="#0F172A" fontSize="13" fontFamily="sans-serif" fontWeight="bold">₹1,50,000/yr</text>
          </svg>
        </div>

        {/* Footer Metrics */}
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
            <div className="text-xs font-bold text-emerald-700 font-sora">₹50,000</div>
          </div>
        </div>
      </div>
    </div>
  );
}
