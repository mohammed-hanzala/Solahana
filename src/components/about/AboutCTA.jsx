import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles, ShieldCheck } from 'lucide-react';

export default function AboutCTA({ onStartPlanning, onBookConsultation }) {
  return (
    <section className="py-24 md:py-32 relative overflow-hidden bg-[#020B2D] border-t border-[#C8A24A]/20">
      
      {/* Soft Golden Radial Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-gradient-to-r from-[#C8A24A]/20 via-[#E8C878]/10 to-transparent blur-[140px] pointer-events-none rounded-full" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="p-10 sm:p-14 lg:p-16 rounded-3xl bg-gradient-to-b from-[#071C48]/95 via-[#071C48]/70 to-[#020B2D]/95 border border-[#C8A24A]/40 shadow-[0_25px_60px_rgba(2,11,45,0.9)] backdrop-blur-2xl space-y-8"
        >
          {/* Small Top Badge */}
          <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-[#020B2D] border border-[#C8A24A]/40 text-[#E8C878] text-xs font-semibold uppercase tracking-widest font-sora shadow-[0_0_20px_rgba(200,162,74,0.3)]">
            <Sparkles className="w-3.5 h-3.5 text-[#C8A24A]" />
            <span>YOUR FINANCIAL ROADMAP</span>
          </div>

          {/* Heading */}
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-serif-luxury font-bold text-[#F8F7F3] leading-tight tracking-tight">
            Let's Start Planning, <br />
            <span className="text-gradient-gold">Not Guessing.</span>
          </h2>

          {/* Description */}
          <p className="text-base sm:text-xl text-[#BAC6DA] font-inter max-w-2xl mx-auto leading-relaxed">
            Your financial future deserves a strategy designed around your goals. Discover how SOLAHANA brings structure, tax efficiency, and long-term peace of mind.
          </p>

          {/* Dual Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <button
              onClick={onStartPlanning}
              className="w-full sm:w-auto gold-glow-button px-9 py-4 rounded-full text-xs sm:text-sm font-bold tracking-wide flex items-center justify-center space-x-2.5 group"
            >
              <span>Start Planning</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>

            <button
              onClick={onBookConsultation}
              className="w-full sm:w-auto px-9 py-4 rounded-full text-xs sm:text-sm font-semibold text-[#F8F7F3] hover:text-[#E8C878] bg-[#020B2D]/80 hover:bg-[#071C48] border border-[#C8A24A]/40 hover:border-[#C8A24A]/70 transition-all flex items-center justify-center space-x-2"
            >
              <span>Book Consultation</span>
            </button>
          </div>

          {/* Bottom Trust Indicators */}
          <div className="pt-8 border-t border-[#C8A24A]/15 flex flex-wrap items-center justify-center gap-6 text-xs text-[#BAC6DA] font-inter">
            <div className="flex items-center space-x-2">
              <ShieldCheck className="w-4 h-4 text-[#C8A24A]" />
              <span>100% Confidential & Secure</span>
            </div>
            <span className="hidden sm:inline text-[#C8A24A]/40">•</span>
            <div className="flex items-center space-x-2">
              <span className="text-[#E8C878] font-bold">SEBI Registered</span>
              <span>Advisory Framework</span>
            </div>
            <span className="hidden sm:inline text-[#C8A24A]/40">•</span>
            <div>
              <span>No Obligation Initial Review</span>
            </div>
          </div>

        </motion.div>

      </div>
    </section>
  );
}
