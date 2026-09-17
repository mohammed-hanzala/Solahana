import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Compass, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import FinancialPlanningIllustration from '../illustrations/FinancialPlanningIllustration';

export default function PlanningHero({ onBookConsultation, onExploreGoals }) {
  const benefits = [
    '360° Fiduciary Wealth & Cashflow Architecture',
    'Goal-Aligned Multi-Asset SIP Allocation',
    'Tax Harvesting & Emergency Risk Protection'
  ];

  return (
    <section className="relative pt-24 pb-14 md:pt-32 md:pb-20 overflow-hidden bg-[#FAF8F5]">
      {/* Background Soft Glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[750px] h-[500px] bg-[#C89A4B]/10 blur-[140px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          
          {/* Left Column — Editorial Heading */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-6 space-y-5 text-left"
          >
            {/* Small Gold Pill */}
            <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full gold-badge text-[#9A7326] text-xs font-semibold uppercase tracking-widest font-sora">
              <Compass className="w-3.5 h-3.5 text-[#C89A4B]" />
              <span>FINANCIAL PLANNING</span>
            </div>

            {/* One Hero Heading */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif-luxury font-bold text-[#0F172A] leading-[1.15] tracking-tight">
              A Financial Plan Designed Around <br />
              <span className="gold-gradient-text italic font-serif-luxury">Your Life</span> — Not Someone Else's.
            </h1>

            {/* One Short Description */}
            <p className="text-base sm:text-lg text-[#475569] font-inter leading-relaxed max-w-xl font-normal line-clamp-2">
              Organize your income, investments, risk cover, and tax optimization into one unified strategy built for life goals.
            </p>

            {/* 3 Benefit Bullets */}
            <div className="space-y-2.5 pt-1">
              {benefits.map((b, idx) => (
                <div key={idx} className="flex items-center space-x-2.5 text-xs sm:text-sm text-[#0F172A] font-medium">
                  <CheckCircle2 className="w-4 h-4 text-[#C89A4B] shrink-0" />
                  <span>{b}</span>
                </div>
              ))}
            </div>

            {/* One CTA Button */}
            <div className="pt-3">
              <Link
                to="/contact"
                className="gold-glow-button px-8 py-4 rounded-full text-xs sm:text-sm font-bold tracking-wide inline-flex items-center space-x-2.5 group shadow-md"
              >
                <span>Start Your Financial Plan</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </motion.div>

          {/* Right Column — Large Vector Illustration */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-6 relative flex items-center justify-center"
          >
            <div className="w-full max-w-[480px] sm:max-w-[540px] lg:max-w-[620px] aspect-square relative flex items-center justify-center p-2 rounded-3xl bg-white/70 border border-[#C89A4B]/20 shadow-xl backdrop-blur-xl overflow-hidden">
              <FinancialPlanningIllustration />
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
