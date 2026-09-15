import React from 'react';
import { motion } from 'framer-motion';
import { Target, Home, GraduationCap, Award } from 'lucide-react';

export default function GoalPlanningIllustration() {
  return (
    <div className="relative w-full max-w-[480px] aspect-4/3 flex items-center justify-center select-none">
      <div className="w-full h-full rounded-3xl bg-white/95 border border-[#C89A4B]/30 p-6 shadow-xl backdrop-blur-xl relative overflow-hidden flex flex-col justify-between text-left">
        {/* Soft Background Gold Glow */}
        <div className="absolute top-0 right-0 w-48 h-48 bg-[#C89A4B]/10 rounded-full blur-3xl pointer-events-none" />

        {/* Top Header */}
        <div className="flex items-center justify-between border-b border-[#C89A4B]/15 pb-4">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 rounded-xl bg-[#C89A4B]/10 border border-[#C89A4B]/30 text-[#9A7326] flex items-center justify-center font-bold">
              <Target className="w-5 h-5" />
            </div>
            <div>
              <div className="text-sm font-serif-luxury font-bold text-[#0F172A]">Family Life Goals Blueprint</div>
              <div className="text-[11px] text-[#64748B]">Home Purchase, Education Fund & Milestone Planning</div>
            </div>
          </div>
          <span className="px-3 py-1 rounded-full bg-[#C89A4B]/10 border border-[#C89A4B]/30 text-[#9A7326] font-mono text-[10px] font-semibold">
            5 Active Goals
          </span>
        </div>

        {/* Central Vector SVG Graphic — Family Planning Life Goals */}
        <div className="my-3 w-full flex items-center justify-center">
          <svg className="w-full h-36 drop-shadow-md overflow-visible" viewBox="0 0 340 140" fill="none">
            {/* Goal Timeline Curve */}
            <path d="M 30 105 L 110 75 L 190 85 L 270 45" stroke="#C89A4B" strokeWidth="2.5" strokeLinecap="round" strokeDasharray="4 4" />

            {/* Father Figure (Left) */}
            <circle cx="50" cy="40" r="10" fill="#FDBA74" />
            <path d="M 40 40 C 40 28, 60 28, 60 40 Z" fill="#0F172A" />
            <path d="M 40 52 L 60 52 L 58 95 L 42 95 Z" fill="#0F172A" />

            {/* Mother Figure (Middle Left) */}
            <circle cx="80" cy="45" r="9" fill="#FDBA74" />
            <path d="M 72 43 C 72 32, 88 32, 88 43 Z" fill="#9A7326" />
            <path d="M 72 56 L 88 56 L 86 95 L 74 95 Z" fill="#9A7326" />

            {/* Child Figure (Center) */}
            <circle cx="65" cy="65" r="6" fill="#FDBA74" />
            <path d="M 60 74 L 70 74 L 69 95 L 61 95 Z" fill="#C89A4B" />

            {/* Goal Cards on Roadmap */}
            <g transform="translate(120, 25)">
              <rect width="90" height="38" rx="6" fill="#FAF8F5" stroke="#C89A4B" strokeWidth="1.5" />
              <text x="45" y="17" fill="#0F172A" fontSize="9" fontWeight="bold" textAnchor="middle">Dream Home</text>
              <text x="45" y="30" fill="#9A7326" fontSize="9" textAnchor="middle">₹1.20 Cr • 5 Yrs</text>
            </g>

            <g transform="translate(225, 35)">
              <rect width="95" height="38" rx="6" fill="#FAF8F5" stroke="#10B981" strokeWidth="1.5" />
              <text x="47.5" y="17" fill="#0F172A" fontSize="9" fontWeight="bold" textAnchor="middle">Child Education</text>
              <text x="47.5" y="30" fill="#10B981" fontSize="9" textAnchor="middle">₹45 Lakhs • 12 Yrs</text>
            </g>
          </svg>
        </div>

        {/* Footer Metrics */}
        <div className="grid grid-cols-3 gap-2">
          <div className="p-2.5 rounded-xl bg-[#FAF8F5] border border-[#C89A4B]/20 text-center">
            <div className="text-[10px] text-[#64748B]">Near-Term</div>
            <div className="text-xs font-bold text-[#0F172A] font-sora">1-3 Yrs</div>
          </div>
          <div className="p-2.5 rounded-xl bg-[#FAF8F5] border border-[#C89A4B]/20 text-center">
            <div className="text-[10px] text-[#64748B]">Medium-Term</div>
            <div className="text-xs font-bold text-[#9A7326] font-sora">3-7 Yrs</div>
          </div>
          <div className="p-2.5 rounded-xl bg-[#FAF8F5] border border-[#C89A4B]/20 text-center">
            <div className="text-[10px] text-[#64748B]">Long-Term</div>
            <div className="text-xs font-bold text-emerald-700 font-sora">7+ Yrs</div>
          </div>
        </div>
      </div>
    </div>
  );
}
