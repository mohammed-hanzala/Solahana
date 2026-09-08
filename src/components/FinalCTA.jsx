import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles, Calendar, ShieldCheck, Lock } from 'lucide-react';

export default function FinalCTA({ onOpenSearch }) {
  return (
    <section className="relative z-10 py-28 bg-[#020B2D] border-t border-[#C8A24A]/20 overflow-hidden">
      
      {/* Background Large Soft Gold Radial Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[350px] bg-[#C8A24A]/14 blur-[140px] rounded-full pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="rounded-[40px] p-8 sm:p-16 bg-gradient-to-r from-[#071C48] via-[#0A2763] to-[#071C48] border-2 border-[#C8A24A]/40 backdrop-blur-2xl text-center space-y-6 shadow-[0_30px_90px_rgba(2,11,45,0.95),0_0_45px_rgba(200,162,74,0.3)] relative overflow-hidden"
        >
          {/* Badge */}
          <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full gold-badge text-xs font-semibold text-[#E8C878] border border-[#C8A24A]/30">
            <Sparkles className="w-3.5 h-3.5 text-[#E8C878] animate-pulse" />
            <span className="font-sora tracking-wide uppercase text-[10px]">START YOUR ROADMAP</span>
          </div>

          {/* Heading */}
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif-luxury font-bold text-[#F8F7F3] tracking-tight leading-tight">
            Let's Build Your Financial Future — Together.
          </h2>

          {/* Description */}
          <p className="text-base sm:text-lg text-[#BAC6DA] font-inter max-w-2xl mx-auto leading-relaxed">
            Whether your goal is buying a home, planning retirement, saving taxes or building wealth, SOLAHANA helps you take the next step with complete confidence.
          </p>

          {/* Dual Buttons */}
          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/contact"
              className="gold-glow-button px-9 py-4 rounded-full text-sm font-bold text-[#020B2D] tracking-wide flex items-center justify-center space-x-3 shadow-[0_10px_35px_rgba(200,162,74,0.45)] group w-full sm:w-auto"
            >
              <span>Start Planning Today</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>

            <Link
              to="/contact"
              className="px-7 py-4 rounded-full text-sm font-semibold text-[#F8F7F3] hover:text-[#E8C878] bg-[#020B2D]/80 hover:bg-[#020B2D] border border-[#C8A24A]/35 hover:border-[#C8A24A]/60 backdrop-blur-xl transition-all flex items-center justify-center space-x-2 w-full sm:w-auto"
            >
              <Calendar className="w-4 h-4 text-[#C8A24A]" />
              <span>Book a Consultation</span>
            </Link>
          </div>

          {/* Security Subtext */}
          <div className="pt-6 border-t border-[#C8A24A]/15 flex flex-wrap items-center justify-center gap-6 text-xs text-[#BAC6DA]">
            <span className="flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-emerald-400" /> SEBI Registered RIA #INA000018241
            </span>
            <span>•</span>
            <span className="flex items-center gap-1.5">
              <Lock className="w-4 h-4 text-[#E8C878]" /> Bank-Grade 256-Bit SSL
            </span>
            <span>•</span>
            <span>Zero Sales Pressure</span>
          </div>

        </motion.div>
      </div>

    </section>
  );
}
