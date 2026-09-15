import React from 'react';
import { motion } from 'framer-motion';
import { Target, GraduationCap, Building2, HeartHandshake, CheckCircle2 } from 'lucide-react';

export default function GoalPlanningIllustration() {
  return (
    <div className="relative w-full max-w-[480px] aspect-4/3 flex items-center justify-center select-none">
      <div className="w-full h-full rounded-3xl bg-gradient-to-br from-[#0F172A] via-[#041235] to-[#020B2D] border border-[#C8A24A]/35 p-6 shadow-2xl backdrop-blur-xl relative overflow-hidden flex flex-col justify-between text-left">
        {/* Glow */}
        <div className="absolute top-0 right-0 w-48 h-48 bg-[#818CF8]/15 rounded-full blur-3xl pointer-events-none" />

        {/* Top Header */}
        <div className="flex items-center justify-between border-b border-white/10 pb-4">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 rounded-xl bg-[#818CF8]/20 border border-[#818CF8]/40 text-[#818CF8] flex items-center justify-center font-bold">
              <Target className="w-5 h-5" />
            </div>
            <div>
              <div className="text-sm font-serif-luxury font-bold text-white">Life Goals Milestone Tracker</div>
              <div className="text-[11px] text-white/60">Education, Dream Home & Family Future</div>
            </div>
          </div>
          <span className="px-3 py-1 rounded-full bg-[#818CF8]/15 border border-[#818CF8]/30 text-[#818CF8] font-mono text-[10px] font-semibold">
            100% Tracked
          </span>
        </div>

        {/* Central Vector Goal Cards Graphic */}
        <div className="my-3 w-full grid grid-cols-3 gap-3">
          {/* Card 1: Education */}
          <div className="p-3 rounded-2xl bg-[#020B2D] border border-[#C8A24A]/30 flex flex-col justify-between space-y-2">
            <div className="w-8 h-8 rounded-xl bg-[#C8A24A]/20 text-[#E8C878] flex items-center justify-center">
              <GraduationCap className="w-4 h-4" />
            </div>
            <div>
              <div className="text-[10px] text-white/60">Child Education</div>
              <div className="text-xs font-bold text-white font-sora mt-0.5">₹45 Lakhs</div>
              <div className="w-full bg-white/10 h-1.5 rounded-full mt-2 overflow-hidden">
                <div className="bg-[#C8A24A] h-full w-3/4 rounded-full" />
              </div>
            </div>
          </div>

          {/* Card 2: Dream Home */}
          <div className="p-3 rounded-2xl bg-[#020B2D] border border-[#38BDF8]/30 flex flex-col justify-between space-y-2">
            <div className="w-8 h-8 rounded-xl bg-[#38BDF8]/20 text-[#38BDF8] flex items-center justify-center">
              <Building2 className="w-4 h-4" />
            </div>
            <div>
              <div className="text-[10px] text-white/60">Dream Home</div>
              <div className="text-xs font-bold text-white font-sora mt-0.5">₹1.20 Cr</div>
              <div className="w-full bg-white/10 h-1.5 rounded-full mt-2 overflow-hidden">
                <div className="bg-[#38BDF8] h-full w-1/2 rounded-full" />
              </div>
            </div>
          </div>

          {/* Card 3: Family Goal */}
          <div className="p-3 rounded-2xl bg-[#020B2D] border border-[#34D399]/30 flex flex-col justify-between space-y-2">
            <div className="w-8 h-8 rounded-xl bg-[#34D399]/20 text-[#34D399] flex items-center justify-center">
              <HeartHandshake className="w-4 h-4" />
            </div>
            <div>
              <div className="text-[10px] text-white/60">Family Corpus</div>
              <div className="text-xs font-bold text-white font-sora mt-0.5">₹75 Lakhs</div>
              <div className="w-full bg-white/10 h-1.5 rounded-full mt-2 overflow-hidden">
                <div className="bg-[#34D399] h-full w-4/5 rounded-full" />
              </div>
            </div>
          </div>
        </div>

        {/* Footer info */}
        <div className="p-3 rounded-xl bg-white/5 border border-white/10 flex items-center justify-between text-xs text-white/80">
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-[#E8C878]" />
            <span>SIP Strategy Aligned To Inflation-Adjusted Milestones</span>
          </div>
        </div>
      </div>
    </div>
  );
}
