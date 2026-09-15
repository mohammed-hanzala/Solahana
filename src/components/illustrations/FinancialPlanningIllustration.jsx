import React from 'react';
import { motion } from 'framer-motion';
import { Target, Compass, ShieldCheck, TrendingUp } from 'lucide-react';

export default function FinancialPlanningIllustration() {
  return (
    <div className="relative w-full max-w-[420px] aspect-4/3 flex items-center justify-center select-none">
      {/* Soft Glow */}
      <div className="absolute inset-0 bg-gradient-to-tr from-[#C89A4B]/15 via-[#FAF7F2] to-transparent rounded-3xl blur-2xl" />

      {/* Main Glass Card Visual */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="relative z-10 w-full p-6 rounded-3xl bg-white/95 border border-[#C89A4B]/30 shadow-xl backdrop-blur-xl flex flex-col justify-between space-y-4"
      >
        <div className="flex items-center justify-between border-b border-[#C89A4B]/15 pb-4">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 rounded-2xl bg-[#C89A4B]/10 border border-[#C89A4B]/30 text-[#9A7326] flex items-center justify-center">
              <Compass className="w-5 h-5" />
            </div>
            <div>
              <div className="text-xs font-bold text-[#0F172A] font-sora">360° Financial Roadmap</div>
              <div className="text-[10px] text-[#64748B]">Integrated Fiduciary Architecture</div>
            </div>
          </div>
          <span className="text-[10px] font-bold text-[#9A7326] bg-[#C89A4B]/10 px-2.5 py-1 rounded-full border border-[#C89A4B]/20">
            Active
          </span>
        </div>

        {/* Vector SVG Human Figure Planning */}
        <div className="h-44 w-full flex items-center justify-center relative">
          <svg className="w-full h-full" viewBox="0 0 300 160" fill="none">
            {/* Background Dashboard Board */}
            <rect x="20" y="20" width="260" height="120" rx="16" fill="#FAF7F2" stroke="#C89A4B" strokeWidth="1.5" strokeDasharray="4 4" />
            
            {/* Growth Curve */}
            <path d="M 40 110 C 90 100, 130 70, 180 50 C 220 35, 250 30, 260 25" stroke="#C89A4B" strokeWidth="3" strokeLinecap="round" />
            <circle cx="260" cy="25" r="5" fill="#9A7326" />

            {/* Human Figure (Fiduciary Advisor with Tablet) */}
            <circle cx="90" cy="55" r="14" fill="#FDBA74" />
            <path d="M 78 52 C 78 40, 102 40, 102 52 Z" fill="#0F172A" />
            <path d="M 75 75 L 105 75 L 100 120 L 80 120 Z" fill="#0F172A" />
            <path d="M 85 75 L 115 85 L 105 92 Z" fill="#C89A4B" />

            {/* Target Milestone Nodes */}
            <g transform="translate(140, 75)">
              <circle cx="0" cy="0" r="16" fill="#FFFFFF" stroke="#C89A4B" strokeWidth="2" />
              <text x="0" y="4" fill="#9A7326" fontSize="10" fontWeight="bold" textAnchor="middle">₹10Cr</text>
            </g>
            <g transform="translate(210, 45)">
              <circle cx="0" cy="0" r="16" fill="#FFFFFF" stroke="#C89A4B" strokeWidth="2" />
              <text x="0" y="4" fill="#9A7326" fontSize="10" fontWeight="bold" textAnchor="middle">FIRE</text>
            </g>
          </svg>
        </div>

        <div className="grid grid-cols-2 gap-3 pt-2">
          <div className="p-2.5 rounded-xl bg-[#FAF8F5] border border-[#C89A4B]/20">
            <div className="text-[10px] text-[#64748B]">Emergency Buffer</div>
            <div className="text-xs font-bold text-[#0F172A] font-sora">100% Shielded</div>
          </div>
          <div className="p-2.5 rounded-xl bg-[#FAF8F5] border border-[#C89A4B]/20">
            <div className="text-[10px] text-[#64748B]">Tax Drag Saved</div>
            <div className="text-xs font-bold text-[#9A7326] font-sora">₹1.5L / Year</div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
