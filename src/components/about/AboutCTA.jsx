import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles, ShieldCheck } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function AboutCTA({ onStartPlanning, onBookConsultation }) {
  return (
    <section className="py-24 md:py-32 relative overflow-hidden bg-[#FAF8F5] border-t border-[#C89A4B]/20">
      
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-[#C89A4B]/10 blur-[140px] pointer-events-none rounded-full" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="p-10 sm:p-14 lg:p-16 rounded-3xl bg-white border border-[#C89A4B]/30 shadow-xl space-y-8"
        >
          {/* Small Top Badge */}
          <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full gold-badge text-[#9A7326] text-xs font-semibold uppercase tracking-widest font-sora">
            <Sparkles className="w-3.5 h-3.5 text-[#C89A4B]" />
            <span>YOUR FINANCIAL ROADMAP</span>
          </div>

          {/* Heading */}
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-serif-luxury font-bold text-[#0F172A] leading-tight tracking-tight">
            Let's Start Planning, <br />
            <span className="gold-gradient-text italic font-serif-luxury">Not Guessing.</span>
          </h2>

          {/* Description */}
          <p className="text-base sm:text-xl text-[#475569] font-inter max-w-2xl mx-auto leading-relaxed">
            Your financial future deserves a strategy designed around your goals. Discover how SOLAHANA brings structure, tax efficiency, and long-term peace of mind.
          </p>

          {/* Dual Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <Link
              to="/contact"
              className="w-full sm:w-auto gold-glow-button px-9 py-4 rounded-full text-xs sm:text-sm font-bold tracking-wide flex items-center justify-center space-x-2.5 group shadow-md"
            >
              <span>Start Your ₹1 Plan</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>

            <Link
              to="/contact"
              className="w-full sm:w-auto px-9 py-4 rounded-full text-xs sm:text-sm font-semibold text-[#0F172A] hover:text-[#C89A4B] bg-[#FAF8F5] hover:bg-white border border-[#C89A4B]/30 hover:border-[#C89A4B] transition-all flex items-center justify-center space-x-2"
            >
              <span>Book Consultation</span>
            </Link>
          </div>

          {/* Bottom Trust Indicators */}
          <div className="pt-8 border-t border-[#C89A4B]/20 flex flex-wrap items-center justify-center gap-6 text-xs text-[#64748B] font-inter">
            <div className="flex items-center space-x-2">
              <ShieldCheck className="w-4 h-4 text-[#C89A4B]" />
              <span>100% Confidential & Secure</span>
            </div>
            <span>•</span>
            <div>Zero Sales Pressure</div>
            <span>•</span>
            <div>SEBI Registered RIA</div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
