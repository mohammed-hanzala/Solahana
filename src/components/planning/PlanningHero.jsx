import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Compass, PhoneCall, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import FinancialPlanningHeroIllustration from '../illustrations/FinancialPlanningHeroIllustration';

export default function PlanningHero({ onBookConsultation }) {
  const highlights = [
    '360° Fiduciary Wealth & Cashflow Architecture',
    'Goal-Aligned Multi-Asset SIP Allocation',
    'Tax Harvesting & Emergency Risk Protection'
  ];

  const scrollToCallback = () => {
    const el = document.getElementById('global-consultation-section') || document.getElementById('callback-section');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    } else if (onBookConsultation) {
      onBookConsultation();
    }
  };

  return (
    <section className="relative pt-24 pb-16 md:pt-32 md:pb-24 overflow-hidden bg-[#FAF8F5]">
      {/* Soft Ambient Background Glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[850px] h-[550px] bg-[#C89A4B]/8 blur-[160px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column — Editorial Text */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-6 space-y-6 text-left"
          >
            {/* Gold Pill */}
            <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full gold-badge text-[#9A7326] text-xs font-semibold uppercase tracking-widest font-sora">
              <Compass className="w-3.5 h-3.5 text-[#C89A4B]" />
              <span>FINANCIAL PLANNING</span>
            </div>

            {/* Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif-luxury font-bold text-[#0F172A] leading-[1.15] tracking-tight">
              A Financial Plan Designed Around <br className="hidden sm:inline" />
              <span className="gold-gradient-text italic font-serif-luxury">Your Life</span> — Not Someone Else's.
            </h1>

            {/* Short 2-Line Description */}
            <p className="text-base sm:text-lg text-[#475569] font-inter leading-relaxed max-w-xl font-normal line-clamp-2">
              Organize your income, investments, risk cover, and tax optimization into one unified strategy built for life goals.
            </p>

            {/* Highlight Bullets */}
            <div className="space-y-2.5 pt-1">
              {highlights.map((h, idx) => (
                <div key={idx} className="flex items-center space-x-2.5 text-xs sm:text-sm text-[#0F172A] font-medium">
                  <CheckCircle2 className="w-4 h-4 text-[#C89A4B] shrink-0" />
                  <span>{h}</span>
                </div>
              ))}
            </div>

            {/* Dual CTA Buttons */}
            <div className="pt-4 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <Link
                to="/contact"
                className="gold-glow-button px-8 py-4 rounded-full text-xs sm:text-sm font-bold tracking-wide inline-flex items-center justify-center space-x-2.5 group shadow-md"
              >
                <span>Start Your Financial Planning</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>

              <button
                type="button"
                onClick={scrollToCallback}
                className="px-7 py-4 rounded-full text-xs sm:text-sm font-semibold text-[#0F172A] hover:text-[#C89A4B] bg-white border border-[#E7D7B5] hover:border-[#C89A4B] transition-all inline-flex items-center justify-center space-x-2 shadow-sm cursor-pointer"
              >
                <PhoneCall className="w-4 h-4 text-[#C89A4B]" />
                <span>Request a Callback</span>
              </button>
            </div>
          </motion.div>

          {/* Right Column — Large Human Vector Illustration */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-6 relative flex items-center justify-center"
          >
            <div className="w-full max-w-[500px] sm:max-w-[560px] lg:max-w-[620px] aspect-[4/3] relative flex items-center justify-center p-3 rounded-3xl bg-white/80 border border-[#C89A4B]/20 shadow-xl backdrop-blur-xl overflow-hidden">
              <FinancialPlanningHeroIllustration />
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
