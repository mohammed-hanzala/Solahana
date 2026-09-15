import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Heart, Umbrella, Users } from 'lucide-react';

export default function InsuranceProtectionIllustration() {
  return (
    <div className="relative w-full max-w-[480px] aspect-4/3 flex items-center justify-center select-none">
      <div className="w-full h-full rounded-3xl bg-white/95 border border-[#C89A4B]/30 p-6 shadow-xl backdrop-blur-xl relative overflow-hidden flex flex-col justify-between text-left">
        <div className="absolute top-0 right-0 w-48 h-48 bg-[#C89A4B]/10 rounded-full blur-3xl pointer-events-none" />

        <div className="flex items-center justify-between border-b border-[#C89A4B]/15 pb-4">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 rounded-xl bg-[#C89A4B]/10 border border-[#C89A4B]/30 text-[#9A7326] flex items-center justify-center font-bold">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <div className="text-sm font-serif-luxury font-bold text-[#0F172A]">Family Risk Shield</div>
              <div className="text-[11px] text-[#64748B]">Term Insurance + Super Top-up Health Cover</div>
            </div>
          </div>
          <span className="px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-700 font-mono text-[10px] font-semibold">
            Fully Ring-Fenced
          </span>
        </div>

        {/* Vector SVG Family Shield Graphic */}
        <div className="my-3 w-full flex items-center justify-center">
          <svg className="w-full h-36 drop-shadow-md overflow-visible" viewBox="0 0 340 140" fill="none">
            {/* Center Shield Outline */}
            <path d="M 170 15 L 230 35 V 75 C 230 110 170 130 170 130 C 170 130 110 110 110 75 V 35 Z" fill="#FAF8F5" stroke="#C89A4B" strokeWidth="2" />

            {/* Family Figures Under Shield */}
            <circle cx="155" cy="55" r="9" fill="#FDBA74" />
            <path d="M 148 68 L 162 68 L 160 90 L 150 90 Z" fill="#0F172A" />

            <circle cx="185" cy="60" r="8" fill="#FDBA74" />
            <path d="M 179 72 L 191 72 L 189 90 L 181 90 Z" fill="#9A7326" />

            <circle cx="170" cy="75" r="6" fill="#FDBA74" />
            <path d="M 165 84 L 175 84 L 174 95 L 166 95 Z" fill="#C89A4B" />

            {/* Left Term Life Cover */}
            <rect x="15" y="40" width="85" height="55" rx="8" fill="#FAF8F5" stroke="#C89A4B" strokeWidth="1.5" />
            <text x="25" y="60" fill="#64748B" fontSize="9">Term Cover</text>
            <text x="25" y="80" fill="#0F172A" fontSize="13" fontWeight="bold">₹2.0 Cr</text>

            {/* Right Health Cover */}
            <rect x="240" y="40" width="85" height="55" rx="8" fill="#FAF8F5" stroke="#C89A4B" strokeWidth="1.5" />
            <text x="250" y="60" fill="#64748B" fontSize="9">Health Cover</text>
            <text x="250" y="80" fill="#0F172A" fontSize="13" fontWeight="bold">₹1.0 Cr</text>
          </svg>
        </div>

        <div className="grid grid-cols-3 gap-2">
          <div className="p-2.5 rounded-xl bg-[#FAF8F5] border border-[#C89A4B]/20 text-center">
            <div className="text-[10px] text-[#64748B]">Pure Term Cover</div>
            <div className="text-xs font-bold text-[#0F172A] font-sora">Zero ULIP Drag</div>
          </div>
          <div className="p-2.5 rounded-xl bg-[#FAF8F5] border border-[#C89A4B]/20 text-center">
            <div className="text-[10px] text-[#64748B]">Emergency Reserve</div>
            <div className="text-xs font-bold text-[#9A7326] font-sora">6 Months Liquid</div>
          </div>
          <div className="p-2.5 rounded-xl bg-[#FAF8F5] border border-[#C89A4B]/20 text-center">
            <div className="text-[10px] text-[#64748B]">Claim Ratio</div>
            <div className="text-xs font-bold text-emerald-700 font-sora">99.1% Approved</div>
          </div>
        </div>
      </div>
    </div>
  );
}
