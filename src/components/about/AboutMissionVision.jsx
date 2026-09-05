import React from 'react';
import { motion } from 'framer-motion';
import { Target, Eye, Sparkles, Award } from 'lucide-react';

export default function AboutMissionVision() {
  return (
    <section className="py-20 md:py-28 relative overflow-hidden">
      {/* Radial Background Light */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-[#C8A24A]/10 rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto space-y-3 mb-16">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-[#071C48] border border-[#C8A24A]/30 text-[#E8C878] text-xs font-semibold uppercase tracking-widest font-sora">
            <Sparkles className="w-3.5 h-3.5 text-[#C8A24A]" />
            <span>PURPOSE & FUTURE</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-serif-luxury font-bold text-[#F8F7F3]">
            Our Mission & Vision
          </h2>
          <p className="text-sm sm:text-base text-[#BAC6DA] font-inter">
            Guided by unwavering fiduciary values and long-term clarity.
          </p>
        </div>

        {/* Two Luxury Glass Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* Card 1 — MISSION */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            whileHover={{ y: -8 }}
            className="relative p-8 sm:p-10 rounded-3xl bg-gradient-to-b from-[#071C48]/90 to-[#020B2D]/90 border border-[#C8A24A]/35 hover:border-[#E8C878]/70 transition-all duration-300 shadow-[0_15px_40px_rgba(2,11,45,0.8)] backdrop-blur-2xl text-left group"
          >
            {/* Top Icon Pill */}
            <div className="flex items-center justify-between mb-8">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#E8C878] to-[#B8862B] p-[1px] shadow-[0_0_20px_rgba(200,162,74,0.3)] group-hover:shadow-[0_0_30px_rgba(200,162,74,0.6)] transition-all">
                <div className="w-full h-full bg-[#020B2D] rounded-[15px] flex items-center justify-center text-[#E8C878]">
                  <Target className="w-7 h-7" />
                </div>
              </div>

              <span className="text-xs font-sora font-bold text-[#E8C878] uppercase tracking-widest px-3 py-1 rounded-full bg-[#C8A24A]/10 border border-[#C8A24A]/30">
                OUR MISSION
              </span>
            </div>

            <h3 className="text-2xl sm:text-3xl font-serif-luxury font-bold text-[#F8F7F3] mb-4 group-hover:text-[#E8C878] transition-colors">
              Thoughtful Financial Leadership
            </h3>

            <p className="text-base sm:text-lg text-[#F8F7F3]/90 font-inter leading-relaxed mb-6 font-medium">
              "Helping individuals and families make confident financial decisions through thoughtful planning."
            </p>

            <p className="text-sm text-[#BAC6DA] font-inter leading-relaxed">
              We empower our clients to navigate major life transitions with calm certainty, ensuring that every financial choice serves their broader personal values and long-term security.
            </p>

            <div className="mt-8 pt-6 border-t border-[#C8A24A]/15 flex items-center space-x-3 text-xs text-[#E8C878] font-sora">
              <Award className="w-4 h-4 text-[#C8A24A]" />
              <span>Unbiased Advisory • Fiduciary Standards</span>
            </div>
          </motion.div>

          {/* Card 2 — VISION */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            whileHover={{ y: -8 }}
            className="relative p-8 sm:p-10 rounded-3xl bg-gradient-to-b from-[#071C48]/90 to-[#020B2D]/90 border border-[#C8A24A]/35 hover:border-[#E8C878]/70 transition-all duration-300 shadow-[0_15px_40px_rgba(2,11,45,0.8)] backdrop-blur-2xl text-left group"
          >
            {/* Top Icon Pill */}
            <div className="flex items-center justify-between mb-8">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#E8C878] to-[#B8862B] p-[1px] shadow-[0_0_20px_rgba(200,162,74,0.3)] group-hover:shadow-[0_0_30px_rgba(200,162,74,0.6)] transition-all">
                <div className="w-full h-full bg-[#020B2D] rounded-[15px] flex items-center justify-center text-[#E8C878]">
                  <Eye className="w-7 h-7" />
                </div>
              </div>

              <span className="text-xs font-sora font-bold text-[#E8C878] uppercase tracking-widest px-3 py-1 rounded-full bg-[#C8A24A]/10 border border-[#C8A24A]/30">
                OUR VISION
              </span>
            </div>

            <h3 className="text-2xl sm:text-3xl font-serif-luxury font-bold text-[#F8F7F3] mb-4 group-hover:text-[#E8C878] transition-colors">
              India's Most Trusted Advisory Platform
            </h3>

            <p className="text-base sm:text-lg text-[#F8F7F3]/90 font-inter leading-relaxed mb-6 font-medium">
              "To become India's most trusted financial planning platform focused on long-term wealth and life goals."
            </p>

            <p className="text-sm text-[#BAC6DA] font-inter leading-relaxed">
              We aim to redefine financial advisory in India by setting the highest standards for transparency, goal tracking, and holistic wealth management for generations to come.
            </p>

            <div className="mt-8 pt-6 border-t border-[#C8A24A]/15 flex items-center space-x-3 text-xs text-[#E8C878] font-sora">
              <Sparkles className="w-4 h-4 text-[#C8A24A]" />
              <span>Multi-Generational Wealth Creation</span>
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
