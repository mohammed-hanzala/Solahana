import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Compass, ShieldCheck, Target, TrendingUp, Sparkles } from 'lucide-react';

export default function AboutHero({ onExplorePhilosophy, onOpenSearch }) {
  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
      {/* Ambient Radial Lighting */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-gradient-to-br from-[#C8A24A]/15 via-[#071C48]/40 to-transparent blur-[120px] pointer-events-none rounded-full" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column — Editorial Heading & Copy */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="lg:col-span-7 space-y-6 text-left"
          >
            {/* Small Gold Pill Badge */}
            <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-[#071C48]/80 border border-[#C8A24A]/40 text-[#E8C878] text-xs font-semibold uppercase tracking-widest font-sora shadow-[0_0_15px_rgba(200,162,74,0.2)]">
              <Compass className="w-3.5 h-3.5 text-[#C8A24A]" />
              <span>ABOUT SOLAHANA</span>
            </div>

            {/* Main Editorial Title */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif-luxury font-bold text-[#F8F7F3] leading-[1.15] tracking-tight">
              Helping You Build a <br />
              <span className="text-gradient-gold">Better Financial Future.</span>
            </h1>

            {/* Subtitle / Supporting Paragraph */}
            <p className="text-lg sm:text-xl text-[#BAC6DA] font-inter leading-relaxed max-w-2xl font-normal">
              SOLAHANA believes financial planning should feel <span className="text-[#F8F7F3] font-medium">simple</span>, <span className="text-[#F8F7F3] font-medium">thoughtful</span>, and <span className="text-[#E8C878] font-semibold">deeply personal</span>. We bring structure, clarity, and peace of mind to life's biggest financial decisions.
            </p>

            {/* Action Buttons */}
            <div className="pt-4 flex flex-wrap items-center gap-4">
              <button
                onClick={onExplorePhilosophy}
                className="gold-glow-button px-7 py-3.5 rounded-full text-xs sm:text-sm font-bold tracking-wide flex items-center space-x-2.5 group"
              >
                <span>Our Planning Philosophy</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                onClick={onOpenSearch}
                className="px-7 py-3.5 rounded-full text-xs sm:text-sm font-semibold text-[#F8F7F3] hover:text-[#E8C878] bg-[#071C48]/60 hover:bg-[#071C48] border border-[#C8A24A]/30 hover:border-[#C8A24A]/60 transition-all flex items-center space-x-2"
              >
                <span>Book Consultation</span>
              </button>
            </div>

            {/* Trust Badges */}
            <div className="pt-6 grid grid-cols-3 gap-4 border-t border-[#C8A24A]/15 max-w-xl">
              <div>
                <p className="text-xl font-bold font-sora text-[#E8C878]">100%</p>
                <p className="text-xs text-[#BAC6DA] mt-0.5">Unbiased Fiduciary</p>
              </div>
              <div>
                <p className="text-xl font-bold font-sora text-[#F8F7F3]">₹1,200 Cr+</p>
                <p className="text-xs text-[#BAC6DA] mt-0.5">Goals Planned</p>
              </div>
              <div>
                <p className="text-xl font-bold font-sora text-[#E8C878]">15+ Yrs</p>
                <p className="text-xs text-[#BAC6DA] mt-0.5">Wealth Leadership</p>
              </div>
            </div>
          </motion.div>

          {/* Right Column — Elegant Financial Roadmap Graphic */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, ease: 'easeOut', delay: 0.2 }}
            className="lg:col-span-5 relative"
          >
            {/* Visual Container Card */}
            <div className="relative p-6 sm:p-8 rounded-3xl bg-gradient-to-b from-[#071C48]/90 via-[#071C48]/60 to-[#020B2D]/90 border border-[#C8A24A]/30 shadow-[0_20px_50px_rgba(2,11,45,0.8)] backdrop-blur-xl">
              
              {/* Top Card Badge */}
              <div className="flex items-center justify-between mb-6 pb-4 border-b border-[#C8A24A]/15">
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 rounded-full bg-[#E8C878] animate-ping opacity-75" />
                  <span className="text-xs font-semibold text-[#E8C878] font-sora tracking-wider uppercase">
                    The Solahana Blueprint
                  </span>
                </div>
                <span className="text-[10px] text-[#BAC6DA] font-mono bg-[#020B2D] px-2.5 py-1 rounded-md border border-[#C8A24A]/20">
                  LIFE ROADMAP
                </span>
              </div>

              {/* Connected Milestone Path */}
              <div className="relative space-y-5">
                
                {/* SVG Golden Path Line */}
                <div className="absolute left-[19px] top-6 bottom-6 w-[2px] bg-gradient-to-b from-[#E8C878] via-[#C8A24A] to-[#B8862B] z-0" />

                {/* Milestone 1 */}
                <div className="relative z-10 flex items-start space-x-4 p-3 rounded-2xl bg-[#020B2D]/70 border border-[#C8A24A]/20 hover:border-[#C8A24A]/50 transition-all">
                  <div className="w-10 h-10 rounded-full bg-[#C8A24A]/20 border border-[#E8C878] flex items-center justify-center text-[#E8C878] shrink-0 font-sora font-bold text-xs shadow-[0_0_10px_rgba(200,162,74,0.3)]">
                    01
                  </div>
                  <div className="text-left">
                    <h4 className="text-xs font-bold text-[#F8F7F3] flex items-center gap-1.5">
                      <span>Current Snapshot & Audit</span>
                      <ShieldCheck className="w-3.5 h-3.5 text-[#C8A24A]" />
                    </h4>
                    <p className="text-[11px] text-[#BAC6DA] mt-0.5">
                      Net worth, emergency shield & cash flow mapping
                    </p>
                  </div>
                </div>

                {/* Milestone 2 */}
                <div className="relative z-10 flex items-start space-x-4 p-3 rounded-2xl bg-[#020B2D]/70 border border-[#C8A24A]/20 hover:border-[#C8A24A]/50 transition-all">
                  <div className="w-10 h-10 rounded-full bg-[#C8A24A]/20 border border-[#E8C878] flex items-center justify-center text-[#E8C878] shrink-0 font-sora font-bold text-xs shadow-[0_0_10px_rgba(200,162,74,0.3)]">
                    02
                  </div>
                  <div className="text-left">
                    <h4 className="text-xs font-bold text-[#F8F7F3] flex items-center gap-1.5">
                      <span>Goal Horizon Mapping</span>
                      <Target className="w-3.5 h-3.5 text-[#C8A24A]" />
                    </h4>
                    <p className="text-[11px] text-[#BAC6DA] mt-0.5">
                      Quantifying home, education & FIRE retirement timelines
                    </p>
                  </div>
                </div>

                {/* Milestone 3 */}
                <div className="relative z-10 flex items-start space-x-4 p-3 rounded-2xl bg-[#020B2D]/70 border border-[#C8A24A]/20 hover:border-[#C8A24A]/50 transition-all">
                  <div className="w-10 h-10 rounded-full bg-[#C8A24A]/20 border border-[#E8C878] flex items-center justify-center text-[#E8C878] shrink-0 font-sora font-bold text-xs shadow-[0_0_10px_rgba(200,162,74,0.3)]">
                    03
                  </div>
                  <div className="text-left">
                    <h4 className="text-xs font-bold text-[#F8F7F3] flex items-center gap-1.5">
                      <span>Tax-Efficient Asset Allocation</span>
                      <TrendingUp className="w-3.5 h-3.5 text-[#C8A24A]" />
                    </h4>
                    <p className="text-[11px] text-[#BAC6DA] mt-0.5">
                      Optimizing SIPs, Sec 80C/80D & capital gain harvesting
                    </p>
                  </div>
                </div>

                {/* Milestone 4 */}
                <div className="relative z-10 flex items-start space-x-4 p-3 rounded-2xl bg-[#071C48]/90 border border-[#E8C878]/60 shadow-[0_0_20px_rgba(200,162,74,0.25)] transition-all">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-[#E8C878] to-[#B8862B] text-[#020B2D] flex items-center justify-center shrink-0 font-sora font-bold text-xs shadow-md">
                    <Sparkles className="w-4 h-4" />
                  </div>
                  <div className="text-left">
                    <h4 className="text-xs font-bold text-[#E8C878] flex items-center gap-1.5">
                      <span>Life Goal Peace of Mind</span>
                    </h4>
                    <p className="text-[11px] text-[#F8F7F3] mt-0.5">
                      Freedom from financial anxiety with ongoing annual reviews
                    </p>
                  </div>
                </div>

              </div>

              {/* Bottom Summary Pill */}
              <div className="mt-6 pt-4 border-t border-[#C8A24A]/15 flex items-center justify-between text-left">
                <span className="text-[11px] text-[#BAC6DA]">Methodology:</span>
                <span className="text-xs font-semibold text-[#E8C878] font-sora">
                  Fiduciary Goal-Based Advisory
                </span>
              </div>

            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
