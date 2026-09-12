import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Compass, ShieldCheck, Target, TrendingUp, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function AboutHero({ onExplorePhilosophy, onOpenSearch }) {
  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-[#FAF8F5]">
      {/* Background Soft Glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-[#C89A4B]/10 blur-[120px] pointer-events-none rounded-full" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column — Editorial Heading & Copy */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="lg:col-span-7 space-y-6 text-left"
          >
            {/* Small Gold Badge */}
            <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full gold-badge text-xs font-semibold uppercase tracking-widest text-[#9A7326]">
              <Compass className="w-3.5 h-3.5 text-[#C89A4B]" />
              <span>ABOUT SOLAHANA</span>
            </div>

            {/* Main Editorial Title */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif-luxury font-bold text-[#0F172A] leading-[1.15] tracking-tight">
              Helping You Build a <br />
              <span className="gold-gradient-text italic font-serif-luxury">Better Financial Future.</span>
            </h1>

            {/* Subtitle */}
            <p className="text-lg sm:text-xl text-[#475569] font-inter leading-relaxed max-w-2xl font-normal">
              SOLAHANA believes financial planning should feel <span className="text-[#0F172A] font-semibold">simple</span>, <span className="text-[#0F172A] font-semibold">thoughtful</span>, and <span className="text-[#9A7326] font-semibold">deeply personal</span>. We bring structure, clarity, and peace of mind to life's biggest financial decisions.
            </p>

            {/* Action Buttons */}
            <div className="pt-4 flex flex-wrap items-center gap-4">
              <button
                onClick={onExplorePhilosophy}
                className="gold-glow-button px-7 py-3.5 rounded-full text-xs sm:text-sm font-bold tracking-wide flex items-center space-x-2.5 group shadow-md"
              >
                <span>Our Planning Philosophy</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              <Link
                to="/contact"
                className="px-7 py-3.5 rounded-full text-xs sm:text-sm font-semibold text-[#0F172A] hover:text-[#C89A4B] bg-white border border-[#C89A4B]/30 hover:border-[#C89A4B] transition-all flex items-center space-x-2 shadow-sm"
              >
                <span>Start Your ₹1 Plan</span>
              </Link>
            </div>

            {/* Trust Badges */}
            <div className="pt-6 grid grid-cols-3 gap-4 border-t border-[#C89A4B]/20 max-w-xl">
              <div>
                <p className="text-2xl font-bold font-sora text-[#C89A4B]">100%</p>
                <p className="text-xs text-[#64748B] mt-0.5">Unbiased Fiduciary</p>
              </div>
              <div>
                <p className="text-2xl font-bold font-sora text-[#C89A4B]">₹500+ Cr</p>
                <p className="text-xs text-[#64748B] mt-0.5">Goal Corpus Planned</p>
              </div>
              <div>
                <p className="text-2xl font-bold font-sora text-[#C89A4B]">Zero</p>
                <p className="text-xs text-[#64748B] mt-0.5">Distributor Conflict</p>
              </div>
            </div>
          </motion.div>

          {/* Right Column — Visual Illustration Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-5 relative"
          >
            <div className="rounded-3xl p-8 bg-white border border-[#C89A4B]/30 shadow-xl space-y-6">
              <div className="w-12 h-12 rounded-2xl bg-[#C89A4B]/10 border border-[#C89A4B]/30 text-[#C89A4B] flex items-center justify-center">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-serif-luxury font-bold text-[#0F172A]">
                SEBI Registered Fiduciary Advisory
              </h3>
              <p className="text-sm text-[#475569] font-inter leading-relaxed">
                Founded on the belief that families deserve direct, transparent, and goal-linked financial advice. SOLAHANA operates strictly under zero-commission fiduciary standards.
              </p>
              <div className="p-4 rounded-xl bg-[#FAF8F5] border border-[#C89A4B]/20 text-xs text-[#9A7326] font-sora font-semibold">
                Registration No: INA000018241
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
