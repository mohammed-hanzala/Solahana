import React from 'react';
import { motion } from 'framer-motion';
import { 
  PiggyBank, 
  Target, 
  ShieldCheck, 
  PieChart, 
  Sparkles, 
  CheckCircle2, 
  Lock,
  Award
} from 'lucide-react';

export default function FinancialSnapshot() {
  return (
    <section className="relative z-10 py-24 bg-[#020B2D] border-t border-[#C8A24A]/15 overflow-hidden">
      
      {/* Background Radial Lights */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[300px] bg-[#C8A24A]/10 blur-[130px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center space-y-4 max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full gold-badge text-xs font-semibold text-[#E8C878] border border-[#C8A24A]/35 shadow-[0_0_15px_rgba(200,162,74,0.2)]"
          >
            <Sparkles className="w-3.5 h-3.5 text-[#E8C878]" />
            <span className="font-sora tracking-wide uppercase text-[11px]">FINANCIAL PLAN SNAPSHOT</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-serif-luxury font-bold text-[#F8F7F3] tracking-tight leading-tight"
          >
            Your Financial Snapshot{' '}
            <span className="gold-gradient-text italic font-serif-luxury">at a Glance</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-base sm:text-lg text-[#BAC6DA] font-inter leading-relaxed"
          >
            A unified view of your savings progress, retirement target, emergency shield, and net worth allocation.
          </motion.p>
        </div>


        {/* LARGE MASTER DASHBOARD CARD */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="rounded-[36px] p-7 sm:p-10 bg-gradient-to-b from-[#071C48]/90 via-[#041344]/95 to-[#020B2D] border-2 border-[#C8A24A]/35 backdrop-blur-2xl shadow-[0_30px_90px_rgba(2,11,45,0.95),0_0_35px_rgba(200,162,74,0.25)] relative overflow-hidden"
        >
          {/* Top Dashboard Header Bar */}
          <div className="pb-6 mb-8 border-b border-[#C8A24A]/20 flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#E8C878] via-[#C8A24A] to-[#B8862B] p-[1px] shadow-[0_0_15px_rgba(200,162,74,0.4)]">
                <div className="w-full h-full bg-[#020B2D] rounded-[15px] flex items-center justify-center text-[#E8C878]">
                  <PieChart className="w-6 h-6" />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-serif-luxury font-bold text-[#F8F7F3]">SOLAHANA Financial Blueprint</h3>
                <div className="text-xs text-[#BAC6DA] flex items-center gap-2 mt-0.5">
                  <span>Client ID: #SLH-98412</span>
                  <span>•</span>
                  <span className="text-[#E8C878]">SEBI Regulated Advisory</span>
                </div>
              </div>
            </div>

            <div className="flex items-center space-x-3">
              <div className="px-3.5 py-1.5 rounded-full bg-[#020B2D] border border-[#C8A24A]/30 text-xs text-[#E8C878] font-num font-semibold flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>Overall Plan Health: 74% On Track</span>
              </div>
            </div>
          </div>


          {/* 4 DASHBOARD WIDGETS GRID */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            
            {/* WIDGET 1: MONTHLY SAVINGS PROGRESS */}
            <div className="p-5 rounded-2xl bg-[#020B2D]/80 border border-[#C8A24A]/20 flex flex-col justify-between space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-[10px] text-[#BAC6DA] uppercase font-sora font-semibold tracking-wider">Monthly Savings Target</span>
                <PiggyBank className="w-4 h-4 text-[#E8C878]" />
              </div>

              {/* Circular Progress Visual */}
              <div className="flex items-center space-x-4">
                <div className="relative w-14 h-14 rounded-full bg-[#C8A24A]/15 border-4 border-[#C8A24A] flex items-center justify-center text-[#E8C878] font-num font-bold text-xs shrink-0 shadow-[0_0_12px_rgba(200,162,74,0.3)]">
                  100%
                </div>
                <div>
                  <div className="text-lg font-num font-bold text-[#F8F7F3]">₹50,000/mo</div>
                  <div className="text-[10px] text-emerald-400 font-num">Target Achieved</div>
                </div>
              </div>

              <div className="text-[11px] text-[#BAC6DA] border-t border-[#C8A24A]/15 pt-2">
                Automated monthly SIP compounding active.
              </div>
            </div>


            {/* WIDGET 2: RETIREMENT GOAL TRACKER */}
            <div className="p-5 rounded-2xl bg-[#020B2D]/80 border border-[#C8A24A]/20 flex flex-col justify-between space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-[10px] text-[#BAC6DA] uppercase font-sora font-semibold tracking-wider">Retirement Goal Tracker</span>
                <Target className="w-4 h-4 text-emerald-400" />
              </div>

              <div>
                <div className="flex justify-between text-xs font-num text-[#F8F7F3] mb-1">
                  <span>FIRE Corpus</span>
                  <span className="text-[#E8C878] font-bold">68% Complete</span>
                </div>
                <div className="w-full h-2.5 bg-[#071C48] rounded-full overflow-hidden border border-[#C8A24A]/20">
                  <div className="h-full bg-gradient-to-r from-[#E8C878] via-[#C8A24A] to-[#B8862B] w-[68%]" />
                </div>
                <div className="text-base font-num font-bold text-[#F8F7F3] mt-2">
                  ₹6.8 Cr / ₹10.0 Cr
                </div>
              </div>

              <div className="text-[11px] text-[#BAC6DA] border-t border-[#C8A24A]/15 pt-2 flex justify-between">
                <span>19 Yrs Remaining</span>
                <span className="text-emerald-400">+2 Yrs Ahead</span>
              </div>
            </div>


            {/* WIDGET 3: EMERGENCY FUND HEALTH */}
            <div className="p-5 rounded-2xl bg-[#020B2D]/80 border border-[#C8A24A]/20 flex flex-col justify-between space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-[10px] text-[#BAC6DA] uppercase font-sora font-semibold tracking-wider">Emergency Shield Fund</span>
                <ShieldCheck className="w-4 h-4 text-blue-400" />
              </div>

              <div>
                <div className="text-lg font-num font-bold text-emerald-400 flex items-center gap-1">
                  ₹12,00,000 <CheckCircle2 className="w-4 h-4" />
                </div>
                <div className="text-xs text-[#BAC6DA] mt-1 font-num">
                  6 Months Expenses Shielded
                </div>
              </div>

              <div className="text-[11px] text-[#BAC6DA] border-t border-[#C8A24A]/15 pt-2">
                100% Liquid • Overnight Safe Custody.
              </div>
            </div>


            {/* WIDGET 4: NET WORTH ALLOCATION */}
            <div className="p-5 rounded-2xl bg-[#020B2D]/80 border border-[#C8A24A]/20 flex flex-col justify-between space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-[10px] text-[#BAC6DA] uppercase font-sora font-semibold tracking-wider">Net Worth Allocation</span>
                <Award className="w-4 h-4 text-[#E8C878]" />
              </div>

              {/* Minimal Color Allocation Chips */}
              <div className="space-y-1.5 text-[11px] font-num">
                <div className="flex justify-between items-center">
                  <span className="flex items-center gap-1.5 text-[#F8F7F3]"><span className="w-2 h-2 rounded-full bg-[#E8C878]" /> Equities</span>
                  <span className="font-bold text-[#E8C878]">55%</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="flex items-center gap-1.5 text-[#F8F7F3]"><span className="w-2 h-2 rounded-full bg-blue-400" /> Fixed Income</span>
                  <span className="font-bold text-blue-300">20%</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="flex items-center gap-1.5 text-[#F8F7F3]"><span className="w-2 h-2 rounded-full bg-purple-400" /> Real Estate</span>
                  <span className="font-bold text-purple-300">15%</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="flex items-center gap-1.5 text-[#F8F7F3]"><span className="w-2 h-2 rounded-full bg-emerald-400" /> Gold (SGB)</span>
                  <span className="font-bold text-emerald-300">10%</span>
                </div>
              </div>

              <div className="text-[11px] text-[#BAC6DA] border-t border-[#C8A24A]/15 pt-2 text-right font-num font-bold text-[#E8C878]">
                Total: ₹1.84 Cr
              </div>
            </div>

          </div>

        </motion.div>

      </div>

    </section>
  );
}
