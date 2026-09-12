import React from 'react';
import { motion } from 'framer-motion';
import { Target, Eye, Sparkles } from 'lucide-react';

export default function AboutMissionVision() {
  return (
    <section className="py-20 md:py-28 relative overflow-hidden bg-[#FAF8F5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto space-y-3 mb-16">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full gold-badge text-[#9A7326] text-xs font-semibold uppercase tracking-widest font-sora">
            <Sparkles className="w-3.5 h-3.5 text-[#C89A4B]" />
            <span>PURPOSE & FUTURE</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-serif-luxury font-bold text-[#0F172A]">
            Our Mission & Vision
          </h2>
          <p className="text-sm sm:text-base text-[#475569] font-inter">
            Guided by unwavering fiduciary values and long-term clarity.
          </p>
        </div>

        {/* Two Luxury Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* Card 1 — MISSION */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            whileHover={{ y: -6 }}
            className="p-8 sm:p-10 rounded-3xl bg-white border border-[#C89A4B]/30 hover:border-[#C89A4B] transition-all duration-300 shadow-lg text-left group"
          >
            <div className="flex items-center justify-between mb-8">
              <div className="w-14 h-14 rounded-2xl bg-[#C89A4B]/10 border border-[#C89A4B]/30 text-[#C89A4B] flex items-center justify-center">
                <Target className="w-7 h-7" />
              </div>

              <span className="text-xs font-sora font-bold text-[#9A7326] uppercase tracking-widest px-3 py-1 rounded-full bg-[#FAF8F5] border border-[#C89A4B]/30">
                OUR MISSION
              </span>
            </div>

            <h3 className="text-2xl sm:text-3xl font-serif-luxury font-bold text-[#0F172A] mb-4 group-hover:text-[#C89A4B] transition-colors">
              Thoughtful Financial Leadership
            </h3>

            <p className="text-base sm:text-lg text-[#0F172A] font-serif-luxury italic leading-relaxed mb-6 font-medium">
              "Helping individuals and families make confident financial decisions through thoughtful planning."
            </p>

            <p className="text-sm text-[#475569] font-inter leading-relaxed">
              We replace guesswork with structured planning. Every recommendation is built around your individual risk profile, cashflow surplus, tax optimization, and long-term goal horizons.
            </p>
          </motion.div>

          {/* Card 2 — VISION */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            whileHover={{ y: -6 }}
            className="p-8 sm:p-10 rounded-3xl bg-white border border-[#C89A4B]/30 hover:border-[#C89A4B] transition-all duration-300 shadow-lg text-left group"
          >
            <div className="flex items-center justify-between mb-8">
              <div className="w-14 h-14 rounded-2xl bg-[#C89A4B]/10 border border-[#C89A4B]/30 text-[#C89A4B] flex items-center justify-center">
                <Eye className="w-7 h-7" />
              </div>

              <span className="text-xs font-sora font-bold text-[#9A7326] uppercase tracking-widest px-3 py-1 rounded-full bg-[#FAF8F5] border border-[#C89A4B]/30">
                OUR VISION
              </span>
            </div>

            <h3 className="text-2xl sm:text-3xl font-serif-luxury font-bold text-[#0F172A] mb-4 group-hover:text-[#C89A4B] transition-colors">
              India's Benchmark Fiduciary Advisory
            </h3>

            <p className="text-base sm:text-lg text-[#0F172A] font-serif-luxury italic leading-relaxed mb-6 font-medium">
              "To become India's most trusted goal-first financial planning platform — where fiduciary integrity comes first."
            </p>

            <p className="text-sm text-[#475569] font-inter leading-relaxed">
              We envision a future where every Indian family accesses transparent, zero-commission financial planning, ensuring their hard-earned money works efficiently towards lifelong security.
            </p>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
