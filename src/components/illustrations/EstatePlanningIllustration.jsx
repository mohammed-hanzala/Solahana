import React from 'react';
import { motion } from 'framer-motion';
import { Building2, Scroll, ShieldCheck, Landmark } from 'lucide-react';

export default function EstatePlanningIllustration() {
  return (
    <div className="relative w-full max-w-[480px] aspect-4/3 flex items-center justify-center select-none">
      <div className="w-full h-full rounded-[24px] bg-white border border-[#E7D7B5] p-6 shadow-[0_10px_30px_rgba(200,155,60,0.08)] backdrop-blur-xl relative overflow-hidden flex flex-col justify-between text-left">
        
        {/* Card Top Header */}
        <div className="flex items-center justify-between border-b border-[#E7D7B5] pb-4">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 rounded-xl bg-[#F8F5EF] border border-[#E7D7B5] text-[#C89B3C] flex items-center justify-center font-bold">
              <Building2 className="w-5 h-5" />
            </div>
            <div>
              <div className="text-sm font-serif-luxury font-bold text-[#1A1A1A]">Estate & Legacy Planning</div>
              <div className="text-[11px] text-[#666666]">Wills, Private Trusts & Succession</div>
            </div>
          </div>
          <span className="px-3 py-1 rounded-full bg-[#F8F5EF] border border-[#E7D7B5] text-[#B8860B] font-mono text-[10px] font-semibold">
            Legacy Secured
          </span>
        </div>

        {/* Vector SVG Estate & House Graphic */}
        <div className="my-2 w-full flex items-center justify-center">
          <svg className="w-full h-36" viewBox="0 0 320 140" fill="none">
            {/* Background Shield Outline */}
            <path d="M 160 10 L 220 30 V 70 C 220 100 160 125 160 125 C 160 125 100 100 100 70 V 30 Z" fill="#F8F5EF" stroke="#E7D7B5" strokeWidth="1.5" />

            {/* Estate Manor House Silhouette */}
            <path d="M 130 55 L 160 30 L 190 55 V 95 H 130 Z" fill="#FFFFFF" stroke="#C89B3C" strokeWidth="2" />
            <path d="M 152 75 H 168 V 95 H 152 Z" fill="#B8860B" />
            <rect x="140" y="60" width="12" height="12" rx="2" fill="#F8F5EF" stroke="#E7D7B5" strokeWidth="1" />
            <rect x="168" y="60" width="12" height="12" rx="2" fill="#F8F5EF" stroke="#E7D7B5" strokeWidth="1" />

            {/* Left Badge: Will & Succession */}
            <g transform="translate(12, 40)">
              <rect width="78" height="42" rx="6" fill="#FFFFFF" stroke="#E7D7B5" strokeWidth="1.5" />
              <text x="39" y="16" fill="#666666" fontSize="8" textAnchor="middle">Will & Succession</text>
              <text x="39" y="30" fill="#1A1A1A" fontSize="11" fontWeight="bold" textAnchor="middle">100% Legal</text>
            </g>

            {/* Right Badge: Family Trust */}
            <g transform="translate(230, 40)">
              <rect width="78" height="42" rx="6" fill="#FFFFFF" stroke="#E7D7B5" strokeWidth="1.5" />
              <text x="39" y="16" fill="#666666" fontSize="8" textAnchor="middle">Family Trust</text>
              <text x="39" y="30" fill="#1A1A1A" fontSize="11" fontWeight="bold" textAnchor="middle">Protected</text>
            </g>
          </svg>
        </div>

        {/* Bottom Feature Badges */}
        <div className="grid grid-cols-3 gap-2">
          <div className="p-2.5 rounded-xl bg-[#F8F5EF] border border-[#E7D7B5] text-center">
            <div className="text-[10px] text-[#666666]">Asset Protection</div>
            <div className="text-xs font-bold text-[#1A1A1A] font-sora">Seamless</div>
          </div>
          <div className="p-2.5 rounded-xl bg-[#F8F5EF] border border-[#E7D7B5] text-center">
            <div className="text-[10px] text-[#666666]">Succession</div>
            <div className="text-xs font-bold text-[#1A1A1A] font-sora">Zero Dispute</div>
          </div>
          <div className="p-2.5 rounded-xl bg-[#F8F5EF] border border-[#E7D7B5] text-center">
            <div className="text-[10px] text-[#666666]">Family Legacy</div>
            <div className="text-xs font-bold text-[#1A1A1A] font-sora">Generation+</div>
          </div>
        </div>

      </div>
    </div>
  );
}
