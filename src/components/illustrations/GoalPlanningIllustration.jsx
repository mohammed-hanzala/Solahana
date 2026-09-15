import React from 'react';
import { motion } from 'framer-motion';
import { Target, Flag, Award, Sparkles } from 'lucide-react';

export default function GoalPlanningIllustration() {
  return (
    <div className="relative w-full max-w-[480px] aspect-4/3 flex items-center justify-center select-none">
      <div className="w-full h-full rounded-3xl bg-white/95 border border-[#C89A4B]/30 p-6 shadow-xl backdrop-blur-xl relative overflow-hidden flex flex-col justify-between text-left">
        <div className="absolute top-0 right-0 w-48 h-48 bg-[#C89A4B]/10 rounded-full blur-3xl pointer-events-none" />

        <div className="flex items-center justify-between border-b border-[#C89A4B]/15 pb-4">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 rounded-xl bg-[#C89A4B]/10 border border-[#C89A4B]/30 text-[#9A7326] flex items-center justify-center font-bold">
              <Target className="w-5 h-5" />
            </div>
            <div>
              <div className="text-sm font-serif-luxury font-bold text-[#0F172A]">Goal Blueprint Matrix</div>
              <div className="text-[11px] text-[#64748B]">Target Monitored & Milestone Tracked</div>
            </div>
          </div>
          <span className="px-3 py-1 rounded-full bg-[#C89A4B]/10 border border-[#C89A4B]/30 text-[#9A7326] font-mono text-[10px] font-semibold">
            5 Active Goals
          </span>
        </div>

        {/* Vector SVG Goal Roadmap Graphic with Human Figure */}
        <div className="my-3 w-full flex items-center justify-center">
          <svg className="w-full h-36 drop-shadow-md overflow-visible" viewBox="0 0 340 140" fill="none">
            <path d="M 30 110 L 90 75 L 170 90 L 250 40 L 310 25" stroke="#C89A4B" strokeWidth="2.5" strokeLinecap="round" />
            
            {/* Milestone Flags & Badges */}
            <circle cx="90" cy="75" r="8" fill="#C89A4B" />
            <circle cx="170" cy="90" r="8" fill="#9A7326" />
            <circle cx="250" cy="40" r="8" fill="#D4AF37" />

            {/* Human Hiker Reaching Milestone */}
            <circle cx="250" cy="20" r="7" fill="#FDBA74" />
            <path d="M 245 32 L 255 32 L 253 45 L 247 45 Z" fill="#0F172A" />

            <g transform="translate(60, 30)">
              <rect width="70" height="35" rx="6" fill="#FAF8F5" stroke="#C89A4B" strokeWidth="1" />
              <text x="35" y="16" fill="#0F172A" fontSize="9" fontWeight="bold" textAnchor="middle">Dream Home</text>
              <text x="35" y="27" fill="#9A7326" fontSize="9" textAnchor="middle">₹1.20 Cr</text>
            </g>

            <g transform="translate(140, 45)">
              <rect width="70" height="35" rx="6" fill="#FAF8F5" stroke="#C89A4B" strokeWidth="1" />
              <text x="35" y="16" fill="#0F172A" fontSize="9" fontWeight="bold" textAnchor="middle">Education</text>
              <text x="35" y="27" fill="#9A7326" fontSize="9" textAnchor="middle">₹45 Lakhs</text>
            </g>

            <g transform="translate(230, 60)">
              <rect width="75" height="35" rx="6" fill="#FAF8F5" stroke="#C89A4B" strokeWidth="1" />
              <text x="37.5" y="16" fill="#0F172A" fontSize="9" fontWeight="bold" textAnchor="middle">FIRE Corpus</text>
              <text x="37.5" y="27" fill="#9A7326" fontSize="9" textAnchor="middle">₹4.50 Cr</text>
            </g>
          </svg>
        </div>

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
