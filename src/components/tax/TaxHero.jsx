import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Compass, Calculator, ShieldCheck, Sparkles, Receipt, FileText, CheckCircle2 } from 'lucide-react';

export default function TaxHero({ onStartTaxPlanning, onBookConsultation }) {
  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-[#020B2D]">
      {/* Golden Radial Background Glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[750px] h-[500px] bg-gradient-to-br from-[#C8A24A]/20 via-[#071C48]/40 to-transparent blur-[140px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column — Editorial Heading */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-7 space-y-6 text-left"
          >
            {/* Small Gold Pill */}
            <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-[#071C48]/80 border border-[#C8A24A]/40 text-[#E8C878] text-xs font-semibold uppercase tracking-widest font-sora shadow-[0_0_15px_rgba(200,162,74,0.2)]">
              <Compass className="w-3.5 h-3.5 text-[#C8A24A]" />
              <span>TAX PLANNING</span>
            </div>

            {/* Main Editorial Heading */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif-luxury font-bold text-[#F8F7F3] leading-[1.15] tracking-tight">
              <span className="text-gradient-gold">Keep More</span> of What You Earn.
            </h1>

            {/* Supporting Copy */}
            <p className="text-lg sm:text-xl text-[#BAC6DA] font-inter leading-relaxed max-w-2xl font-normal">
              Tax planning is about organizing your finances thoughtfully throughout the year—not just scrambling before filing taxes in March.
            </p>

            {/* Action Buttons */}
            <div className="pt-4 flex flex-wrap items-center gap-4">
              <button
                onClick={onStartTaxPlanning}
                className="gold-glow-button px-8 py-4 rounded-full text-xs sm:text-sm font-bold tracking-wide flex items-center space-x-2.5 group"
              >
                <span>Start Tax Planning</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                onClick={onBookConsultation}
                className="px-7 py-4 rounded-full text-xs sm:text-sm font-semibold text-[#F8F7F3] hover:text-[#E8C878] bg-[#071C48]/60 hover:bg-[#071C48] border border-[#C8A24A]/30 hover:border-[#C8A24A]/60 transition-all flex items-center space-x-2"
              >
                <span>Book Consultation</span>
              </button>
            </div>

            {/* Trust Metrics */}
            <div className="pt-6 grid grid-cols-3 gap-4 border-t border-[#C8A24A]/15 max-w-xl">
              <div>
                <p className="text-xl font-bold font-sora text-[#E8C878]">₹48,500+</p>
                <p className="text-xs text-[#BAC6DA] mt-0.5">Avg Tax Saved / Yr</p>
              </div>
              <div>
                <p className="text-xl font-bold font-sora text-[#F8F7F3]">Sec 80C/80D</p>
                <p className="text-xs text-[#BAC6DA] mt-0.5">Full Optimization</p>
              </div>
              <div>
                <p className="text-xl font-bold font-sora text-[#E8C878]">₹1 Lakh</p>
                <p className="text-xs text-[#BAC6DA] mt-0.5">Tax-Free LTCG Harvested</p>
              </div>
            </div>
          </motion.div>

          {/* Right Column — Luxury Tax Planning Dashboard Graphic */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.2 }}
            className="lg:col-span-5 relative"
          >
            {/* Dashboard Container Glass Card */}
            <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-b from-[#071C48]/95 via-[#071C48]/70 to-[#020B2D]/95 border border-[#C8A24A]/35 shadow-[0_20px_60px_rgba(2,11,45,0.9)] backdrop-blur-2xl text-left space-y-6">
              
              {/* Header Bar */}
              <div className="flex items-center justify-between pb-4 border-b border-[#C8A24A]/15">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#E8C878] to-[#B8862B] p-[1px]">
                    <div className="w-full h-full bg-[#020B2D] rounded-[11px] flex items-center justify-center text-[#E8C878]">
                      <Calculator className="w-5 h-5" />
                    </div>
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-[#F8F7F3] font-serif-luxury">Tax Shield Dashboard</h4>
                    <p className="text-[10px] text-[#E8C878] font-sora">FY 2025-26 Overview</p>
                  </div>
                </div>

                <span className="text-[10px] font-mono text-emerald-400 bg-emerald-950/40 border border-emerald-500/30 px-2.5 py-1 rounded-full">
                  OPTIMIZED
                </span>
              </div>

              {/* Top Metric: Estimated Tax Saved */}
              <div className="p-4 rounded-2xl bg-[#020B2D]/80 border border-[#C8A24A]/25 flex items-center justify-between">
                <div>
                  <span className="text-[10px] text-[#BAC6DA] uppercase tracking-wider font-sora">Estimated Annual Tax Saved</span>
                  <p className="text-2xl font-bold font-sora text-[#E8C878] mt-0.5">₹48,500</p>
                </div>
                <div className="p-3 rounded-xl bg-[#C8A24A]/15 text-[#E8C878]">
                  <Receipt className="w-6 h-6" />
                </div>
              </div>

              {/* Grid Widgets: Tax Saving Progress & Eligible Deductions */}
              <div className="grid grid-cols-2 gap-4">
                
                {/* Sec 80C Progress */}
                <div className="p-4 rounded-2xl bg-[#020B2D]/80 border border-[#C8A24A]/20 space-y-2">
                  <div className="flex items-center justify-between text-[11px] text-[#BAC6DA]">
                    <span>Section 80C Limit</span>
                    <span className="text-[#E8C878] font-bold">₹1.5L / ₹1.5L</span>
                  </div>
                  <p className="text-xs font-bold text-[#F8F7F3] font-sora">100% Utilized</p>
                  <div className="w-full h-1.5 rounded-full bg-[#071C48] overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-[#E8C878] to-[#B8862B] w-full" />
                  </div>
                </div>

                {/* Sec 80D Health */}
                <div className="p-4 rounded-2xl bg-[#020B2D]/80 border border-[#C8A24A]/20 space-y-2">
                  <div className="flex items-center justify-between text-[11px] text-[#BAC6DA]">
                    <span>Section 80D Health</span>
                    <span className="text-[#E8C878] font-bold">₹50,000 Saved</span>
                  </div>
                  <p className="text-xs font-bold text-[#F8F7F3] font-sora">Self + Parents Cover</p>
                  <div className="w-full h-1.5 rounded-full bg-[#071C48] overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-[#E8C878] to-[#B8862B] w-full" />
                  </div>
                </div>

              </div>

              {/* Eligible Deductions List */}
              <div className="p-4 rounded-2xl bg-[#020B2D]/80 border border-[#C8A24A]/20 space-y-3">
                <div className="flex items-center justify-between text-xs">
                  <span className="text-[#F8F7F3] font-semibold flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#C8A24A]" />
                    Eligible Deduction Summary
                  </span>
                  <span className="text-[#E8C878] text-[11px] font-sora">Old vs New Regime</span>
                </div>

                <div className="grid grid-cols-3 gap-2 text-center text-[10px] font-sora">
                  <div className="p-2 rounded-lg bg-[#071C48] border border-[#C8A24A]/20">
                    <p className="text-[#BAC6DA]">NPS 80CCD</p>
                    <p className="text-[#E8C878] font-bold mt-0.5">₹50,000</p>
                  </div>
                  <div className="p-2 rounded-lg bg-[#071C48] border border-[#C8A24A]/20">
                    <p className="text-[#BAC6DA]">Home Loan 24b</p>
                    <p className="text-[#E8C878] font-bold mt-0.5">₹2.0 Lakhs</p>
                  </div>
                  <div className="p-2 rounded-lg bg-[#071C48] border border-[#C8A24A]/20">
                    <p className="text-[#BAC6DA]">LTCG Harvest</p>
                    <p className="text-[#E8C878] font-bold mt-0.5">₹1.0 Lakh</p>
                  </div>
                </div>
              </div>

              {/* Footer Bar */}
              <div className="pt-3 border-t border-[#C8A24A]/15 flex items-center justify-between text-[11px] text-[#BAC6DA]">
                <span>Status: Year-Round Tax Plan Active</span>
                <span className="text-[#E8C878] font-semibold font-sora">Compliant</span>
              </div>

            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
