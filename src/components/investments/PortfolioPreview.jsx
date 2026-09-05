import React from 'react';
import { motion } from 'framer-motion';
import { PieChart, TrendingUp, ShieldCheck, Target, Sparkles, Layers } from 'lucide-react';

export default function PortfolioPreview() {
  return (
    <section className="py-20 md:py-28 relative overflow-hidden bg-[#020B2D]">
      {/* Background Lighting */}
      <div className="absolute top-1/3 left-1/3 w-[650px] h-[400px] bg-[#C8A24A]/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-[#071C48] border border-[#C8A24A]/30 text-[#E8C878] text-xs font-semibold uppercase tracking-widest font-sora">
            <Sparkles className="w-3.5 h-3.5 text-[#C8A24A]" />
            <span>BALANCED ARCHITECTURE</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif-luxury font-bold text-[#F8F7F3] tracking-tight">
            A Diversified Portfolio Designed Around You.
          </h2>

          <p className="text-base sm:text-lg text-[#BAC6DA] font-inter">
            Custom-tailored multi-asset allocation engineered to maximize goal success while shielding capital.
          </p>
        </div>

        {/* Master Portfolio Preview Mockup Frame */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="p-6 sm:p-10 rounded-3xl bg-gradient-to-b from-[#071C48]/95 via-[#071C48]/75 to-[#020B2D]/95 border border-[#C8A24A]/40 shadow-[0_25px_60px_rgba(2,11,45,0.9)] backdrop-blur-2xl text-left space-y-8"
        >
          
          {/* Top Bar Header */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-6 border-b border-[#C8A24A]/20">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#E8C878] to-[#B8862B] p-[1px]">
                <div className="w-full h-full bg-[#020B2D] rounded-[15px] flex items-center justify-center text-[#E8C878]">
                  <Layers className="w-6 h-6" />
                </div>
              </div>
              <div>
                <h3 className="text-lg font-bold font-serif-luxury text-[#F8F7F3]">SOLAHANA Multi-Asset Blueprint</h3>
                <p className="text-xs text-[#BAC6DA]">Zero-Commission Direct • Fiduciary Model</p>
              </div>
            </div>

            <div className="flex items-center space-x-3">
              <div className="px-3.5 py-1.5 rounded-full bg-[#020B2D] border border-[#C8A24A]/30 text-[#E8C878] text-xs font-sora font-semibold flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span>Target CAGR: 12.4% Projected</span>
              </div>
            </div>
          </div>

          {/* Grid Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left Column: Asset Allocation Donut Visual */}
            <div className="lg:col-span-5 p-6 rounded-2xl bg-[#020B2D]/85 border border-[#C8A24A]/25 space-y-6">
              <div className="flex items-center justify-between">
                <h4 className="text-sm font-bold font-serif-luxury text-[#F8F7F3] flex items-center gap-2">
                  <PieChart className="w-4 h-4 text-[#C8A24A]" />
                  Asset Class Mix
                </h4>
                <span className="text-[10px] font-sora text-[#E8C878]">100% Allocated</span>
              </div>

              {/* Donut Visual */}
              <div className="flex items-center justify-center relative py-4">
                <div className="relative w-36 h-36 flex items-center justify-center">
                  <svg className="w-full h-full rotate-[-90deg]" viewBox="0 0 36 36">
                    <path className="text-[#E8C878]" strokeDasharray="60, 100" strokeWidth="4" stroke="currentColor" fill="none" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" />
                    <path className="text-emerald-400" strokeDasharray="25, 100" strokeDashoffset="-60" strokeWidth="4" stroke="currentColor" fill="none" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" />
                    <path className="text-amber-600" strokeDasharray="10, 100" strokeDashoffset="-85" strokeWidth="4" stroke="currentColor" fill="none" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" />
                    <path className="text-sky-400" strokeDasharray="5, 100" strokeDashoffset="-95" strokeWidth="4" stroke="currentColor" fill="none" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" />
                  </svg>
                  <div className="absolute text-center">
                    <p className="text-xs font-bold font-sora text-[#F8F7F3]">MULTI</p>
                    <p className="text-[9px] text-[#E8C878]">ASSET</p>
                  </div>
                </div>
              </div>

              {/* Asset Class Breakdown List */}
              <div className="grid grid-cols-2 gap-3 text-xs font-sora">
                <div className="p-2.5 rounded-xl bg-[#071C48] border border-[#C8A24A]/20 flex items-center justify-between">
                  <span className="flex items-center gap-1.5 text-[#BAC6DA]"><span className="w-2 h-2 rounded-full bg-[#E8C878]" /> Equity MFs</span>
                  <span className="font-bold text-[#E8C878]">60%</span>
                </div>
                <div className="p-2.5 rounded-xl bg-[#071C48] border border-[#C8A24A]/20 flex items-center justify-between">
                  <span className="flex items-center gap-1.5 text-[#BAC6DA]"><span className="w-2 h-2 rounded-full bg-emerald-400" /> AAA Debt</span>
                  <span className="font-bold text-[#E8C878]">25%</span>
                </div>
                <div className="p-2.5 rounded-xl bg-[#071C48] border border-[#C8A24A]/20 flex items-center justify-between">
                  <span className="flex items-center gap-1.5 text-[#BAC6DA]"><span className="w-2 h-2 rounded-full bg-amber-600" /> Gold/SGB</span>
                  <span className="font-bold text-[#E8C878]">10%</span>
                </div>
                <div className="p-2.5 rounded-xl bg-[#071C48] border border-[#C8A24A]/20 flex items-center justify-between">
                  <span className="flex items-center gap-1.5 text-[#BAC6DA]"><span className="w-2 h-2 rounded-full bg-sky-400" /> Liquid Buffer</span>
                  <span className="font-bold text-[#E8C878]">5%</span>
                </div>
              </div>
            </div>

            {/* Right Column: SIP Contribution Curve & Metrics */}
            <div className="lg:col-span-7 space-y-6">
              
              {/* SIP Trajectory Visual Graph Box */}
              <div className="p-6 rounded-2xl bg-[#020B2D]/85 border border-[#C8A24A]/25 space-y-4">
                <div className="flex items-center justify-between text-xs">
                  <span className="text-[#F8F7F3] font-semibold flex items-center gap-1.5">
                    <TrendingUp className="w-4 h-4 text-[#C8A24A]" />
                    15-Year Projected Wealth Trajectory
                  </span>
                  <span className="text-[#E8C878] font-sora font-bold">₹75,000/mo SIP (10% Step-Up)</span>
                </div>

                {/* SVG Curve Illustration */}
                <div className="h-32 w-full pt-4 relative">
                  <svg className="w-full h-full" viewBox="0 0 400 100" preserveAspectRatio="none">
                    <defs>
                      <linearGradient id="wealthGrad" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="#E8C878" stopOpacity="0.4" />
                        <stop offset="100%" stopColor="#C8A24A" stopOpacity="0" />
                      </linearGradient>
                    </defs>
                    <path d="M 0 90 Q 100 85 200 55 T 400 10 L 400 100 L 0 100 Z" fill="url(#wealthGrad)" />
                    <path d="M 0 90 Q 100 85 200 55 T 400 10" fill="none" stroke="#E8C878" strokeWidth="3" />
                  </svg>
                  
                  {/* Timeline Points */}
                  <div className="flex justify-between text-[10px] text-[#BAC6DA] font-sora mt-2">
                    <span>Year 1: ₹9 Lakhs</span>
                    <span>Year 5: ₹58 Lakhs</span>
                    <span>Year 10: ₹1.45 Cr</span>
                    <span className="text-[#E8C878] font-bold">Year 15: ₹2.50 Cr</span>
                  </div>
                </div>
              </div>

              {/* 2 Sub-Widgets: Risk Meter & Target FIRE Age */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-4 rounded-2xl bg-[#020B2D]/85 border border-[#C8A24A]/25 space-y-1">
                  <span className="text-[11px] text-[#BAC6DA]">Risk Meter Alignment</span>
                  <p className="text-base font-bold text-[#F8F7F3] font-sora flex items-center gap-2">
                    <ShieldCheck className="w-4 h-4 text-emerald-400" />
                    Moderate Growth Shield
                  </p>
                  <p className="text-[10px] text-[#BAC6DA] pt-1">Stress-tested against 2008 & 2020 market crashes</p>
                </div>

                <div className="p-4 rounded-2xl bg-[#020B2D]/85 border border-[#C8A24A]/25 space-y-1">
                  <span className="text-[11px] text-[#BAC6DA]">Target FIRE Timeline</span>
                  <p className="text-base font-bold text-[#E8C878] font-sora flex items-center gap-2">
                    <Target className="w-4 h-4 text-[#C8A24A]" />
                    Retirement Age 48
                  </p>
                  <p className="text-[10px] text-emerald-400 pt-1">Projected Passive Income: ₹1.80 Lakhs/mo</p>
                </div>
              </div>

            </div>

          </div>

          {/* Footer Note */}
          <div className="pt-4 border-t border-[#C8A24A]/15 flex items-center justify-between text-xs text-[#BAC6DA]">
            <span>Methodology: SEBI Registered Investment Advisory</span>
            <span className="text-[#E8C878] font-semibold font-sora">Annual Tax-Loss Harvesting Included</span>
          </div>

        </motion.div>

      </div>
    </section>
  );
}
