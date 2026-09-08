import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, PhoneCall, CheckCircle2, Compass, ShieldCheck, Clock } from 'lucide-react';

export const ContactHero = () => {
  const scrollToForm = (e) => {
    e.preventDefault();
    const elem = document.getElementById('book-form-section');
    if (elem) {
      elem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 bg-gradient-to-b from-[#020B2D] via-[#041235] to-[#020B2D] overflow-hidden">
      {/* Background ambient gold radial lighting */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-[#C8A24A]/10 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute top-1/3 right-10 w-96 h-96 bg-[#071C48]/60 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Hero Content */}
          <div className="lg:col-span-7 space-y-6 text-left">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#C8A24A]/10 border border-[#C8A24A]/30"
            >
              <Calendar className="w-3.5 h-3.5 text-[#E8C878]" />
              <span className="text-xs font-semibold uppercase tracking-widest text-[#E8C878]">
                BOOK A CONSULTATION
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-playfair text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-[1.15]"
            >
              Let's Start Planning Your{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#C8A24A] via-[#F3E5AB] to-[#C8A24A]">
                Financial Future.
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-white/75 text-lg sm:text-xl font-light leading-relaxed max-w-2xl"
            >
              Whether you're planning your first investment, buying a home or preparing for retirement, we're here to help you build a thoughtful financial roadmap.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="pt-4 flex flex-col sm:flex-row items-stretch sm:items-center gap-4"
            >
              <a
                href="#book-form-section"
                onClick={scrollToForm}
                className="px-8 py-4 rounded-xl bg-gradient-to-r from-[#C8A24A] via-[#D4AF37] to-[#C8A24A] text-[#020B2D] font-bold text-base shadow-lg shadow-[#C8A24A]/25 hover:shadow-xl hover:shadow-[#C8A24A]/40 transition-all duration-300 hover:-translate-y-0.5 flex items-center justify-center gap-2 group"
              >
                <Calendar className="w-5 h-5 text-[#020B2D]" />
                <span>Book Consultation</span>
              </a>

              <a
                href="tel:+917304442171"
                className="px-8 py-4 rounded-xl bg-white/5 border border-white/20 hover:border-[#C8A24A]/50 text-white font-semibold text-base hover:bg-white/10 transition-all duration-300 flex items-center justify-center gap-2"
              >
                <PhoneCall className="w-5 h-5 text-[#E8C878]" />
                <span>Call Us</span>
              </a>
            </motion.div>

            {/* Micro trust indicators */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="pt-6 flex flex-wrap items-center gap-6 text-xs text-white/60 border-t border-white/10"
            >
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#C8A24A]" />
                <span>1-on-1 Confidential Advisory</span>
              </div>
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-[#C8A24A]" />
                <span>SEBI Reg. RIA Standards</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-[#C8A24A]" />
                <span>Flexible Online & In-Person</span>
              </div>
            </motion.div>
          </div>

          {/* Right Side Visual — Floating Consultation Dashboard */}
          <div className="lg:col-span-5 relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative p-6 sm:p-8 rounded-3xl bg-gradient-to-b from-[#071C48]/90 via-[#041235]/95 to-[#020B2D] border border-[#C8A24A]/30 shadow-2xl backdrop-blur-2xl space-y-4"
            >
              {/* Gold decorative bar */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-40 h-[3px] bg-gradient-to-r from-transparent via-[#C8A24A] to-transparent rounded-full" />

              {/* Widget 1: Consultation Scheduled */}
              <motion.div
                whileHover={{ x: 4 }}
                className="p-4 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-between"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-[#C8A24A]/20 border border-[#C8A24A]/40 flex items-center justify-center text-[#E8C878]">
                    <Calendar className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs text-white/50 font-mono uppercase tracking-wider">Status</div>
                    <div className="text-sm font-semibold text-white">Consultation Scheduled</div>
                  </div>
                </div>
                <span className="px-2.5 py-1 rounded-full bg-emerald-500/20 text-emerald-400 text-xs font-semibold border border-emerald-500/30">
                  Confirmed
                </span>
              </motion.div>

              {/* Widget 2: Goal Discussion */}
              <motion.div
                whileHover={{ x: 4 }}
                className="p-4 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-between"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-[#C8A24A]/20 border border-[#C8A24A]/40 flex items-center justify-center text-[#E8C878]">
                    <Compass className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs text-white/50 font-mono uppercase tracking-wider">Focus Area</div>
                    <div className="text-sm font-semibold text-white">Goal Discussion</div>
                  </div>
                </div>
                <span className="text-xs font-mono text-[#E8C878]">Retirement & FIRE</span>
              </motion.div>

              {/* Widget 3: Financial Review */}
              <motion.div
                whileHover={{ x: 4 }}
                className="p-4 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-between"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-[#C8A24A]/20 border border-[#C8A24A]/40 flex items-center justify-center text-[#E8C878]">
                    <ShieldCheck className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs text-white/50 font-mono uppercase tracking-wider">Analysis</div>
                    <div className="text-sm font-semibold text-white">Comprehensive Review</div>
                  </div>
                </div>
                <span className="text-xs font-mono text-emerald-400">100% Fiduciary</span>
              </motion.div>

              {/* Widget 4: Planning Roadmap */}
              <motion.div
                whileHover={{ x: 4 }}
                className="p-4 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-between"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-[#C8A24A]/20 border border-[#C8A24A]/40 flex items-center justify-center text-[#E8C878]">
                    <CheckCircle2 className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs text-white/50 font-mono uppercase tracking-wider">Deliverable</div>
                    <div className="text-sm font-semibold text-white">Planning Roadmap</div>
                  </div>
                </div>
                <span className="text-xs font-mono text-[#E8C878]">Custom Blueprint</span>
              </motion.div>

              {/* Widget 5: Calendar Reminder */}
              <div className="pt-2 flex items-center justify-between text-xs text-white/60 border-t border-white/10 px-1">
                <span>Calendar Invite & Zoom Link Sent</span>
                <span className="text-[#E8C878] font-mono">45 Mins Duration</span>
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};
