import React from 'react';
import { motion } from 'framer-motion';
import { 
  Target, 
  ShieldCheck, 
  GraduationCap, 
  Calculator, 
  PiggyBank, 
  TrendingUp, 
  Award,
  CheckCircle2,
  Clock,
  Zap,
  Sparkles,
  Lock,
  Heart
} from 'lucide-react';

export default function HeroDashboard() {
  return (
    <div className="relative w-full h-[620px] lg:h-[680px] flex items-center justify-center perspective-1000 select-none">
      
      {/* Central Golden Lighting Backdrop Glow */}
      <div className="absolute w-[500px] h-[500px] bg-gradient-to-tr from-[#C8A24A]/20 via-[#E8C878]/10 to-transparent rounded-full blur-[110px] pointer-events-none" />

      {/* ========================================== */}
      {/* CENTRAL MAIN LARGE DASHBOARD CARD          */}
      {/* ========================================== */}
      <motion.div
        initial={{ opacity: 0, y: 30, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.9, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
        className="relative w-[340px] sm:w-[420px] lg:w-[460px] bg-gradient-to-b from-[#071C48]/90 via-[#041344]/95 to-[#020B2D] border-2 border-[#E8C878]/40 rounded-[36px] p-6 sm:p-7 shadow-[0_30px_90px_rgba(2,11,45,0.95),0_0_35px_rgba(200,162,74,0.25)] backdrop-blur-2xl z-20 text-left"
      >
        {/* Dashboard Top Header */}
        <div className="flex items-center justify-between pb-4 mb-5 border-b border-[#C8A24A]/20">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#E8C878] via-[#C8A24A] to-[#B8862B] p-[1px] shadow-[0_0_15px_rgba(200,162,74,0.4)]">
              <div className="w-full h-full bg-[#020B2D] rounded-[11px] flex items-center justify-center text-[#E8C878]">
                <Target className="w-5 h-5" />
              </div>
            </div>
            <div>
              <div className="text-xs font-serif-luxury font-bold text-[#F8F7F3] flex items-center gap-1.5">
                SOLAHANA Life Plan
                <span className="px-2 py-0.5 text-[9px] font-bold rounded-full bg-[#C8A24A]/20 text-[#E8C878] border border-[#C8A24A]/40 font-sora">
                  ACTIVE
                </span>
              </div>
              <div className="text-[10px] text-[#BAC6DA]">Master Financial Roadmap • 2026-2045</div>
            </div>
          </div>

          <div className="text-right">
            <div className="text-[10px] uppercase tracking-wider font-sora text-[#BAC6DA]">Overall Plan Score</div>
            <div className="text-sm font-num font-bold text-[#E8C878] flex items-center gap-1 justify-end">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" /> 74% On Track
            </div>
          </div>
        </div>

        {/* WIDGET 6 (INSIDE): NET WORTH OVERVIEW */}
        <div className="p-4 rounded-2xl bg-[#020B2D]/80 border border-[#C8A24A]/25 mb-5 space-y-1.5 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-[#C8A24A]/10 rounded-full blur-2xl pointer-events-none" />
          
          <div className="flex justify-between items-center text-xs">
            <span className="text-[#BAC6DA] font-sora uppercase text-[10px] tracking-wider">Total Net Worth Overview</span>
            <span className="px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-400 font-num font-bold text-[10px] border border-emerald-400/30">
              +14.2% YoY Growth
            </span>
          </div>

          <div className="text-3xl font-num font-bold text-[#F8F7F3] tracking-tight flex items-baseline gap-1">
            <span className="text-[#C8A24A] text-xl font-normal">₹</span>1,84,50,000
          </div>

          <div className="text-[11px] text-[#BAC6DA] flex items-center justify-between pt-1">
            <span>Goal Allocation: <strong className="text-[#E8C878] font-num">85% Disciplined</strong></span>
            <span className="text-emerald-400 font-num">+₹22.8L Capital Gains</span>
          </div>
        </div>

        {/* WIDGET 1 (INSIDE): RETIREMENT GOAL PROGRESS */}
        <div className="space-y-4">
          <div className="p-3.5 rounded-xl bg-[#071C48]/60 border border-[#C8A24A]/20 space-y-2">
            <div className="flex justify-between items-center text-xs">
              <div className="flex items-center space-x-2">
                <Target className="w-4 h-4 text-[#E8C878]" />
                <span className="font-semibold text-[#F8F7F3]">Early Retirement FIRE (Age 48)</span>
              </div>
              <span className="text-xs font-bold text-[#E8C878] font-num">68%</span>
            </div>

            {/* Circular / Horizontal Progress Bar */}
            <div className="w-full h-2.5 bg-[#020B2D] rounded-full overflow-hidden border border-[#C8A24A]/20">
              <div className="h-full bg-gradient-to-r from-[#E8C878] via-[#C8A24A] to-[#B8862B] rounded-full w-[68%] shadow-[0_0_10px_#C8A24A]" />
            </div>

            <div className="flex justify-between text-[10px] text-[#BAC6DA] font-num">
              <span>Target: ₹10.0 Cr by 2045</span>
              <span className="text-emerald-400 font-semibold">₹6.8 Cr Accumulated</span>
            </div>
          </div>

          {/* WIDGET 3 (INSIDE): CHILD EDUCATION GOAL */}
          <div className="p-3.5 rounded-xl bg-[#071C48]/40 border border-[#BAC6DA]/15 space-y-2">
            <div className="flex justify-between items-center text-xs">
              <div className="flex items-center space-x-2">
                <GraduationCap className="w-4 h-4 text-emerald-400" />
                <span className="font-semibold text-[#F8F7F3]">Child Higher Education Fund</span>
              </div>
              <span className="text-xs font-bold text-emerald-400 font-num">82%</span>
            </div>

            <div className="w-full h-2.5 bg-[#020B2D] rounded-full overflow-hidden">
              <div className="h-full bg-emerald-400 rounded-full w-[82%]" />
            </div>

            <div className="flex justify-between text-[10px] text-[#BAC6DA] font-num">
              <span>University Fund</span>
              <span>₹41.0L / ₹50.0L Target</span>
            </div>
          </div>
        </div>

        {/* Dashboard Footer Badge */}
        <div className="mt-5 pt-3 border-t border-[#C8A24A]/15 flex items-center justify-between text-[11px] text-[#BAC6DA]">
          <span className="flex items-center gap-1">
            <Lock className="w-3.5 h-3.5 text-[#C8A24A]" /> 100% Inflation Protected
          </span>
          <span className="text-[#E8C878] font-semibold font-sora">
            Next Milestone: 2028
          </span>
        </div>
      </motion.div>


      {/* ========================================== */}
      {/* 6 OVERLAPPING FLOATING LUXURY WIDGETS      */}
      {/* ========================================== */}

      {/* FLOATING WIDGET A: Retirement Goal Progress (Top Left) */}
      <motion.div
        animate={{ y: [0, -8, 0] }}
        transition={{ repeat: Infinity, duration: 4, ease: 'easeInOut' }}
        className="absolute -top-6 -left-2 sm:left-2 lg:left-[-35px] glass-card px-4 py-3 rounded-2xl flex items-center space-x-3.5 z-30 shadow-2xl border-l-4 border-l-[#E8C878]"
      >
        <div className="relative w-10 h-10 rounded-full bg-[#C8A24A]/15 border-2 border-[#C8A24A] flex items-center justify-center text-[#E8C878] font-num font-bold text-xs">
          68%
        </div>
        <div>
          <div className="text-[10px] text-[#BAC6DA] font-sora uppercase">Retirement Goal Progress</div>
          <div className="text-xs font-bold text-[#F8F7F3] font-num">
            Target ₹10 Cr <span className="text-[10px] text-emerald-400 font-normal">by 2045</span>
          </div>
        </div>
      </motion.div>

      {/* FLOATING WIDGET B: Emergency Fund (Top Right) */}
      <motion.div
        animate={{ y: [0, -12, 0] }}
        transition={{ repeat: Infinity, duration: 5, ease: 'easeInOut', delay: 1 }}
        className="absolute top-2 -right-2 sm:right-2 lg:right-[-35px] glass-card px-4 py-3 rounded-2xl flex items-center space-x-3.5 z-30 shadow-2xl"
      >
        <div className="w-10 h-10 rounded-xl bg-emerald-500/20 border border-emerald-400/40 flex items-center justify-center text-emerald-400">
          <ShieldCheck className="w-5 h-5" />
        </div>
        <div>
          <div className="text-[10px] text-[#BAC6DA] font-sora uppercase">Emergency Shield Fund</div>
          <div className="text-xs font-bold text-emerald-400 font-num">
            ₹12,00,000 <span className="text-[9px] text-[#BAC6DA] font-normal">• 6 Months Shielded</span>
          </div>
        </div>
      </motion.div>

      {/* FLOATING WIDGET C: Tax Planning Reminder (Middle Right) */}
      <motion.div
        animate={{ y: [0, 9, 0] }}
        transition={{ repeat: Infinity, duration: 4.5, ease: 'easeInOut', delay: 0.5 }}
        className="absolute top-1/2 -right-4 sm:right-0 lg:right-[-45px] -translate-y-1/2 glass-card px-4 py-3 rounded-2xl flex items-center space-x-3.5 z-30 shadow-2xl"
      >
        <div className="w-10 h-10 rounded-xl bg-[#C8A24A]/20 border border-[#C8A24A]/40 flex items-center justify-center text-[#E8C878]">
          <Calculator className="w-5 h-5" />
        </div>
        <div>
          <div className="text-[10px] text-[#BAC6DA] font-sora uppercase">Tax Planning Reminder</div>
          <div className="text-xs font-bold text-[#E8C878] font-num">
            ₹48,500 Tax Saved <span className="text-[9px] text-[#BAC6DA] font-normal">Sec 80C & 80D</span>
          </div>
        </div>
      </motion.div>

      {/* FLOATING WIDGET D: Monthly Savings Progress (Bottom Left) */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 5.5, ease: 'easeInOut', delay: 1.5 }}
        className="absolute bottom-16 -left-4 sm:left-4 lg:left-[-40px] glass-card px-4 py-3 rounded-2xl flex items-center space-x-3.5 z-30 shadow-2xl"
      >
        <div className="relative">
          <div className="w-10 h-10 rounded-xl bg-blue-500/20 border border-blue-400/40 flex items-center justify-center text-blue-400">
            <PiggyBank className="w-5 h-5" />
          </div>
          <span className="absolute -top-1 -right-1 w-3 h-3 bg-emerald-400 rounded-full border-2 border-[#020B2D] animate-ping" />
        </div>
        <div>
          <div className="text-[10px] text-[#BAC6DA] font-sora uppercase">Monthly Savings Progress</div>
          <div className="text-xs font-bold text-[#F8F7F3] font-num">
            ₹50,000/mo <span className="text-[10px] text-[#E8C878]">SIP Compounding</span>
          </div>
        </div>
      </motion.div>

      {/* FLOATING WIDGET E: Goal Completion Percentage (Bottom Center/Right) */}
      <motion.div
        animate={{ y: [0, -7, 0] }}
        transition={{ repeat: Infinity, duration: 4.2, ease: 'easeInOut', delay: 0.8 }}
        className="absolute -bottom-4 right-4 sm:right-10 lg:right-4 glass-card px-5 py-3 rounded-2xl flex items-center space-x-3.5 z-30 shadow-2xl border-t-2 border-t-[#E8C878]"
      >
        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#E8C878] to-[#B8862B] text-[#020B2D] flex items-center justify-center font-bold">
          <Award className="w-5 h-5" />
        </div>
        <div>
          <div className="text-[10px] text-[#BAC6DA] font-sora uppercase">Goal Completion Rate</div>
          <div className="text-xs font-bold text-[#F8F7F3] font-num">
            74% Overall Plan Score <span className="text-[10px] text-emerald-400">On Track</span>
          </div>
        </div>
      </motion.div>

    </div>
  );
}
