import React from 'react';
import { motion } from 'framer-motion';
import { Umbrella, Heart, Flame } from 'lucide-react';

export default function RetirementCoupleIllustration() {
  return (
    <div className="relative w-full max-w-[480px] aspect-4/3 flex items-center justify-center select-none">
      <div className="w-full h-full rounded-[24px] bg-white border border-[#E7D7B5] p-6 shadow-[0_10px_30px_rgba(200,155,60,0.08)] backdrop-blur-xl relative overflow-hidden flex flex-col justify-between text-left">
        <div className="flex items-center justify-between border-b border-[#E7D7B5] pb-4">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 rounded-xl bg-[#F8F5EF] border border-[#E7D7B5] text-[#C89B3C] flex items-center justify-center font-bold">
              <Umbrella className="w-5 h-5" />
            </div>
            <div>
              <div className="text-sm font-serif-luxury font-bold text-[#1A1A1A]">FIRE Retirement Couple Plan</div>
              <div className="text-[11px] text-[#666666]">Life-long Financial Freedom & Monthly SWP</div>
            </div>
          </div>
          <span className="px-3 py-1 rounded-full bg-[#F8F5EF] border border-[#E7D7B5] text-[#B8860B] font-mono text-[10px] font-semibold flex items-center gap-1">
            <Flame className="w-3 h-3 text-[#C89B3C]" />
            FIRE Freedom
          </span>
        </div>

        {/* Vector SVG Human Retirement Couple Figure */}
        <div className="my-2 w-full flex items-center justify-center">
          <svg className="w-full h-36" viewBox="0 0 320 140" fill="none">
            {/* Background Sun & Horizon */}
            <circle cx="160" cy="70" r="45" fill="#F8F5EF" stroke="#E7D7B5" strokeWidth="1.5" />
            <path d="M 40 105 H 280" stroke="#E7D7B5" strokeWidth="2" />

            {/* Husband (Senior Figure) */}
            <circle cx="140" cy="45" r="9" fill="#FDBA74" />
            <path d="M 132 42 C 132 35, 148 35, 148 42 Z" fill="#E7D7B5" />
            <path d="M 130 58 L 150 58 L 146 100 L 134 100 Z" fill="#1A1A1A" />

            {/* Wife (Senior Figure) */}
            <circle cx="180" cy="48" r="8.5" fill="#FDBA74" />
            <path d="M 172 45 C 172 38, 188 38, 188 45 Z" fill="#C89B3C" />
            <path d="M 172 60 L 188 60 L 192 100 L 168 100 Z" fill="#B8860B" />

            {/* Holding Hands Heart */}
            <circle cx="160" cy="65" r="4" fill="#C89B3C" />

            {/* Left & Right Wealth Stat Cards */}
            <rect x="20" y="45" width="90" height="50" rx="8" fill="#FFFFFF" stroke="#E7D7B5" strokeWidth="1.5" />
            <text x="30" y="63" fill="#666666" fontSize="9">Corpus Built</text>
            <text x="30" y="81" fill="#1A1A1A" fontSize="13" fontWeight="bold">₹5.20 Cr</text>

            <rect x="210" y="45" width="90" height="50" rx="8" fill="#FFFFFF" stroke="#E7D7B5" strokeWidth="1.5" />
            <text x="220" y="63" fill="#666666" fontSize="9">SWP Payout</text>
            <text x="220" y="81" fill="#1A1A1A" fontSize="13" fontWeight="bold">₹2.5L / mo</text>
          </svg>
        </div>

        <div className="grid grid-cols-3 gap-2">
          <div className="p-2.5 rounded-xl bg-[#F8F5EF] border border-[#E7D7B5] text-center">
            <div className="text-[10px] text-[#666666]">Retirement Age</div>
            <div className="text-xs font-bold text-[#1A1A1A] font-sora">55 Years</div>
          </div>
          <div className="p-2.5 rounded-xl bg-[#F8F5EF] border border-[#E7D7B5] text-center">
            <div className="text-[10px] text-[#666666]">Monthly SWP</div>
            <div className="text-xs font-bold text-[#B8860B] font-sora">₹2,50,000</div>
          </div>
          <div className="p-2.5 rounded-xl bg-[#F8F5EF] border border-[#E7D7B5] text-center">
            <div className="text-[10px] text-[#666666]">Corpus Guard</div>
            <div className="text-xs font-bold text-emerald-700 font-sora">100% Inflation Shielded</div>
          </div>
        </div>
      </div>
    </div>
  );
}
