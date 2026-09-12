import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Compass, Calculator, ShieldCheck } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function TaxHero({ onStartTaxPlanning, onBookConsultation }) {
  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-[#FAF8F5]">
      {/* Background Soft Glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[750px] h-[500px] bg-[#C89A4B]/10 blur-[140px] pointer-events-none rounded-full" />

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
            <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full gold-badge text-[#9A7326] text-xs font-semibold uppercase tracking-widest font-sora">
              <Compass className="w-3.5 h-3.5 text-[#C89A4B]" />
              <span>TAX PLANNING</span>
            </div>

            {/* Main Editorial Heading */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif-luxury font-bold text-[#0F172A] leading-[1.15] tracking-tight">
              <span className="gold-gradient-text italic font-serif-luxury">Keep More</span> of What You Earn.
            </h1>

            {/* Supporting Copy */}
            <p className="text-lg sm:text-xl text-[#475569] font-inter leading-relaxed max-w-2xl font-normal">
              Tax planning is about organizing your finances thoughtfully throughout the year—not just scrambling before filing taxes in March.
            </p>

            {/* Action Buttons */}
            <div className="pt-4 flex flex-wrap items-center gap-4">
              <Link
                to="/contact"
                className="gold-glow-button px-8 py-4 rounded-full text-xs sm:text-sm font-bold tracking-wide flex items-center space-x-2.5 group shadow-md"
              >
                <span>Start Your ₹1 Plan</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>

              <Link
                to="/contact"
                className="px-7 py-4 rounded-full text-xs sm:text-sm font-semibold text-[#0F172A] hover:text-[#C89A4B] bg-white border border-[#C89A4B]/30 hover:border-[#C89A4B] transition-all flex items-center space-x-2 shadow-sm"
              >
                <span>Book Tax Advisory</span>
              </Link>
            </div>

            {/* Trust Metrics */}
            <div className="pt-6 grid grid-cols-3 gap-4 border-t border-[#C89A4B]/20 max-w-xl">
              <div>
                <p className="text-2xl font-bold font-sora text-[#C89A4B]">₹48,500+</p>
                <p className="text-xs text-[#64748B] mt-0.5">Avg Tax Saved / Yr</p>
              </div>
              <div>
                <p className="text-2xl font-bold font-sora text-[#C89A4B]">Sec 80C & 80D</p>
                <p className="text-xs text-[#64748B] mt-0.5">Fully Optimized</p>
              </div>
              <div>
                <p className="text-2xl font-bold font-sora text-[#C89A4B]">LTCG</p>
                <p className="text-xs text-[#64748B] mt-0.5">Tax Loss Harvesting</p>
              </div>
            </div>
          </motion.div>

          {/* Right Column — Tax Dashboard Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-5 relative"
          >
            <div className="rounded-3xl p-8 bg-white border border-[#C89A4B]/30 shadow-xl space-y-6">
              <div className="w-12 h-12 rounded-2xl bg-[#C89A4B]/10 border border-[#C89A4B]/30 text-[#C89A4B] flex items-center justify-center">
                <Calculator className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-serif-luxury font-bold text-[#0F172A]">
                Tax-Efficient Wealth Structuring
              </h3>
              <p className="text-sm text-[#475569] font-inter leading-relaxed">
                Smart allocation across ELSS mutual funds, NPS Tier 1, health insurance deductions, and annual capital gains harvesting to legally minimize your tax drag.
              </p>
              <div className="p-4 rounded-xl bg-[#FAF8F5] border border-[#C89A4B]/20 text-xs text-[#9A7326] font-sora font-semibold flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-emerald-600" />
                <span>Section 80C, 80D, 80CCD(1B) Compliant</span>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
