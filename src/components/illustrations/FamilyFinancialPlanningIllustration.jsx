import React from 'react';
import { motion } from 'framer-motion';
import { Users, ShieldCheck, Heart } from 'lucide-react';

export default function FamilyFinancialPlanningIllustration() {
  return (
    <div className="relative w-full max-w-[480px] aspect-4/3 flex items-center justify-center select-none">
      <div className="w-full h-full rounded-[24px] bg-white border border-[#E7D7B5] p-6 shadow-[0_10px_30px_rgba(200,155,60,0.08)] backdrop-blur-xl relative overflow-hidden flex flex-col justify-between text-left">
        <div className="flex items-center justify-between border-b border-[#E7D7B5] pb-4">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 rounded-xl bg-[#F8F5EF] border border-[#E7D7B5] text-[#C89B3C] flex items-center justify-center font-bold">
              <Users className="w-5 h-5" />
            </div>
            <div>
              <div className="text-sm font-serif-luxury font-bold text-[#1A1A1A]">Family Wealth Architecture</div>
              <div className="text-[11px] text-[#666666]">Integrated Protection & Life Goals</div>
            </div>
          </div>
          <span className="px-3 py-1 rounded-full bg-[#F8F5EF] border border-[#E7D7B5] text-[#B8860B] font-mono text-[10px] font-semibold">
            Family Protected
          </span>
        </div>

        {/* Vector SVG Family Illustration */}
        <div className="my-2 w-full flex items-center justify-center">
          <svg className="w-full h-36" viewBox="0 0 320 140" fill="none">
            {/* Protective Shield Outline */}
            <path d="M 160 10 L 220 30 V 70 C 220 100 160 125 160 125 C 160 125 100 100 100 70 V 30 Z" fill="#F8F5EF" stroke="#E7D7B5" strokeWidth="1.5" />

            {/* Father */}
            <circle cx="135" cy="50" r="9" fill="#FDBA74" />
            <path d="M 127 62 L 143 62 L 140 90 L 130 90 Z" fill="#1A1A1A" />

            {/* Mother */}
            <circle cx="185" cy="52" r="8.5" fill="#FDBA74" />
            <path d="M 177 64 L 193 64 L 191 90 L 179 90 Z" fill="#B8860B" />

            {/* Child */}
            <circle cx="160" cy="65" r="6" fill="#FDBA74" />
            <path d="M 155 74 L 165 74 L 164 92 L 156 92 Z" fill="#C89B3C" />

            {/* Left & Right Goal Bubbles */}
            <g transform="translate(15, 40)">
              <rect width="75" height="40" rx="6" fill="#FFFFFF" stroke="#E7D7B5" strokeWidth="1.5" />
              <text x="37.5" y="16" fill="#666666" fontSize="8" textAnchor="middle">Term Cover</text>
              <text x="37.5" y="29" fill="#1A1A1A" fontSize="11" fontWeight="bold" textAnchor="middle">₹2.0 Cr</text>
            </g>

            <g transform="translate(230, 40)">
              <rect width="75" height="40" rx="6" fill="#FFFFFF" stroke="#E7D7B5" strokeWidth="1.5" />
              <text x="37.5" y="16" fill="#666666" fontSize="8" textAnchor="middle">Health Cover</text>
              <text x="37.5" y="29" fill="#1A1A1A" fontSize="11" fontWeight="bold" textAnchor="middle">₹1.0 Cr</text>
            </g>
          </svg>
        </div>

        <div className="grid grid-cols-3 gap-2">
          <div className="p-2.5 rounded-xl bg-[#F8F5EF] border border-[#E7D7B5] text-center">
            <div className="text-[10px] text-[#666666]">Life Risk Buffer</div>
            <div className="text-xs font-bold text-[#1A1A1A] font-sora">15x Income</div>
          </div>
          <div className="p-2.5 rounded-xl bg-[#F8F5EF] border border-[#E7D7B5] text-center">
            <div className="text-[10px] text-[#666666]">Emergency FDs</div>
            <div className="text-xs font-bold text-[#B8860B] font-sora">6 Mos Liquid</div>
          </div>
          <div className="p-2.5 rounded-xl bg-[#F8F5EF] border border-[#E7D7B5] text-center">
            <div className="text-[10px] text-[#666666]">Health Cover</div>
            <div className="text-xs font-bold text-emerald-700 font-sora">Floater + Top-up</div>
          </div>
        </div>
      </div>
    </div>
  );
}
