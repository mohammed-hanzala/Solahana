import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles, Calculator } from 'lucide-react';

export default function CalculatorsCTA({ onOpenSearch }) {
  return (
    <section className="relative z-10 py-20 bg-gradient-to-b from-[#020B2D] via-[#05184B] to-[#020B2D] border-t border-[#C8A24A]/15 overflow-hidden">
      
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[250px] bg-[#C8A24A]/10 blur-[110px] rounded-full pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-6">
        
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full gold-badge text-xs font-semibold text-[#E8C878] border border-[#C8A24A]/35 shadow-[0_0_15px_rgba(200,162,74,0.2)]"
        >
          <Sparkles className="w-3.5 h-3.5 text-[#E8C878]" />
          <span className="font-sora tracking-wide uppercase text-[10px]">INTERACTIVE PLANNING TOOLS</span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-3xl sm:text-4xl lg:text-5xl font-serif-luxury font-bold text-[#F8F7F3] tracking-tight leading-tight"
        >
          See Where Your Money{' '}
          <span className="gold-gradient-text italic font-serif-luxury">Can Take You</span>.
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-base sm:text-lg text-[#BAC6DA] font-inter max-w-xl mx-auto leading-relaxed"
        >
          Use SOLAHANA's planning tools to understand your next financial milestone and model your target wealth timeline.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="pt-4 flex justify-center"
        >
          <button
            onClick={onOpenSearch}
            className="gold-glow-button px-9 py-4 rounded-full text-sm font-bold text-[#020B2D] tracking-wide flex items-center space-x-3 shadow-[0_10px_35px_rgba(200,162,74,0.45)] group"
          >
            <Calculator className="w-4 h-4" />
            <span>Explore All Calculators</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </motion.div>

      </div>

    </section>
  );
}
