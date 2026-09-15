import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles, ShieldCheck } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function PlanningCTA() {
  return (
    <section className="py-24 md:py-32 relative overflow-hidden bg-[#FCFAF6] border-t border-[#E7D7B5]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="p-10 sm:p-14 lg:p-16 rounded-3xl bg-white border border-[#E7D7B5] shadow-xl space-y-8"
        >
          <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-[#C89B3C]/10 border border-[#E7D7B5] text-[#C89B3C] text-xs font-semibold uppercase tracking-widest font-sora">
            <Sparkles className="w-3.5 h-3.5" />
            <span>TAKE THE FIRST STEP</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif-luxury font-bold text-[#1A1A1A] leading-tight">
            Ready to Build Your Comprehensive Wealth Plan?
          </h2>

          <p className="text-base sm:text-lg text-[#555555] font-inter max-w-2xl mx-auto leading-relaxed">
            Schedule a 1-on-1 confidential consultation with a SEBI Registered SOLAHANA Wealth Advisor.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/contact"
              className="gold-glow-button px-9 py-4 rounded-full text-xs sm:text-sm font-bold tracking-wide flex items-center justify-center space-x-2.5 text-[#1A1A1A] shadow-md w-full sm:w-auto"
            >
              <span>Book Financial Advisory Call</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="pt-4 flex items-center justify-center gap-2 text-xs font-semibold text-[#C89B3C]">
            <ShieldCheck className="w-4 h-4 text-emerald-600" />
            <span>Confidential • Zero Commission • SEBI Registered Fiduciary</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
