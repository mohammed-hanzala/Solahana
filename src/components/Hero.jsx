import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Sparkles, ArrowRight, Check, ChevronRight, Calculator } from 'lucide-react';
import HeroDashboard from './HeroDashboard';

export default function Hero({ onOpenSearch }) {
  return (
    <section className="relative min-h-screen pt-28 pb-16 lg:pt-36 lg:pb-24 flex items-center justify-center overflow-hidden z-10">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* ========================================== */}
          {/* LEFT COLUMN: EDITORIAL HEADLINE & COPY     */}
          {/* ========================================== */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-6 text-left space-y-6 lg:pr-4"
          >
            {/* Small Gold Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full gold-badge text-xs font-semibold text-[#E8C878] border border-[#C8A24A]/35 shadow-[0_0_15px_rgba(200,162,74,0.2)]"
            >
              <Sparkles className="w-3.5 h-3.5 text-[#E8C878] animate-pulse" />
              <span className="font-sora tracking-wide uppercase text-[11px]">
                PREMIUM FINANCIAL PLANNING
              </span>
            </motion.div>

            {/* Large Editorial Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-serif-luxury font-bold text-[#F8F7F3] leading-[1.18] tracking-tight mb-6"
            >
              Make Every{' '}
              <span className="gold-gradient-text italic font-serif-luxury">
                Rupee
              </span>{' '}
              Move You Closer to Your Goals.
            </motion.h1>

            {/* Supporting Text */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-base sm:text-lg text-[#BAC6DA] leading-relaxed max-w-2xl font-inter font-normal"
            >
              One thoughtful financial strategy designed around the life you want to build. Organize your income, optimize your taxes, and track your major milestones with complete clarity.
            </motion.p>

            {/* Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex flex-col sm:flex-row items-stretch sm:items-center space-y-3 sm:space-y-0 sm:space-x-4 pt-2"
            >
              {/* Primary Gold Button */}
              <Link
                to="/contact"
                className="gold-glow-button px-8 py-4 rounded-full text-sm font-bold text-[#020B2D] tracking-wide flex items-center justify-center space-x-3 group shadow-[0_10px_30px_rgba(200,162,74,0.4)]"
              >
                <span>Start Planning</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>

              {/* Secondary Outline Button */}
              <button
                onClick={onOpenSearch}
                className="px-7 py-4 rounded-full text-sm font-semibold text-[#F8F7F3] hover:text-[#E8C878] bg-[#071C48]/60 hover:bg-[#071C48] border border-[#C8A24A]/30 hover:border-[#C8A24A]/60 backdrop-blur-xl transition-all flex items-center justify-center space-x-2.5 group"
              >
                <Calculator className="w-4 h-4 text-[#C8A24A] group-hover:rotate-12 transition-transform" />
                <span>Explore Calculators</span>
                <ChevronRight className="w-4 h-4 text-[#BAC6DA] group-hover:translate-x-0.5 transition-transform" />
              </button>
            </motion.div>

            {/* Below Buttons Trust Chips */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="pt-6 border-t border-[#C8A24A]/15 flex flex-wrap items-center gap-x-6 gap-y-3 text-xs sm:text-sm text-[#F8F7F3] font-inter"
            >
              <span className="flex items-center gap-2">
                <span className="w-4 h-4 rounded-full bg-[#C8A24A]/20 text-[#E8C878] flex items-center justify-center font-bold text-[10px] border border-[#C8A24A]/40">✓</span>
                <span className="font-semibold">Goal-Based Planning</span>
              </span>

              <span className="flex items-center gap-2">
                <span className="w-4 h-4 rounded-full bg-[#C8A24A]/20 text-[#E8C878] flex items-center justify-center font-bold text-[10px] border border-[#C8A24A]/40">✓</span>
                <span className="font-semibold">Tax Planning</span>
              </span>

              <span className="flex items-center gap-2">
                <span className="w-4 h-4 rounded-full bg-[#C8A24A]/20 text-[#E8C878] flex items-center justify-center font-bold text-[10px] border border-[#C8A24A]/40">✓</span>
                <span className="font-semibold">Wealth Planning</span>
              </span>
            </motion.div>

          </motion.div>


          {/* ========================================== */}
          {/* RIGHT COLUMN: LUXURY FLOATING DASHBOARD    */}
          {/* ========================================== */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-6 relative flex justify-center items-center"
          >
            <HeroDashboard />
          </motion.div>

        </div>
      </div>

    </section>
  );
}
