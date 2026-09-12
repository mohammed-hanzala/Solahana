import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Compass, Home, GraduationCap, Users, Plane, ShieldCheck } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function GoalsHero({ onStartPlanning, onExploreCategories }) {
  const milestones = [
    { title: 'Dream Home', icon: Home, amount: '₹1.2 Cr', year: '2028' },
    { title: 'Education', icon: GraduationCap, amount: '₹45 Lakhs', year: '2032' },
    { title: 'Family Protection', icon: Users, amount: '₹15 Lakhs', year: 'Active' },
    { title: 'Travel & Lifestyle', icon: Plane, amount: '₹10 Lakhs', year: 'Annual' },
    { title: 'FIRE Retirement', icon: ShieldCheck, amount: '₹4.5 Cr', year: '2038' },
  ];

  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-[#FAF8F5]">
      {/* Background Soft Glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[750px] h-[500px] bg-[#C89A4B]/10 blur-[140px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column — Editorial Heading */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-7 space-y-6 text-left"
          >
            {/* Small Gold Label */}
            <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full gold-badge text-[#9A7326] text-xs font-semibold uppercase tracking-widest font-sora">
              <Compass className="w-3.5 h-3.5 text-[#C89A4B]" />
              <span>GOALS PLANNING</span>
            </div>

            {/* Main Editorial Heading */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif-luxury font-bold text-[#0F172A] leading-[1.15] tracking-tight">
              Every Dream Begins With <br />
              A <span className="gold-gradient-text italic font-serif-luxury">Financial Goal</span>.
            </h1>

            {/* Supporting Text */}
            <p className="text-lg sm:text-xl text-[#475569] font-inter leading-relaxed max-w-2xl font-normal">
              Whether you're planning your first home, your child's future, retirement or financial freedom, SOLAHANA helps turn goals into achievable plans.
            </p>

            {/* Action Buttons */}
            <div className="pt-4 flex flex-wrap items-center gap-4">
              <Link
                to="/contact"
                className="gold-glow-button px-8 py-4 rounded-full text-xs sm:text-sm font-bold tracking-wide flex items-center space-x-2.5 group shadow-md"
              >
                <span>Start Your ₹1 Plan</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>

              <button
                onClick={onExploreCategories}
                className="px-7 py-4 rounded-full text-xs sm:text-sm font-semibold text-[#0F172A] hover:text-[#C89A4B] bg-white border border-[#C89A4B]/30 hover:border-[#C89A4B] transition-all flex items-center space-x-2 shadow-sm"
              >
                <span>Explore Goal Categories</span>
              </button>
            </div>
          </motion.div>

          {/* Right Column — Milestones List */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-5 relative"
          >
            <div className="rounded-3xl p-8 bg-white border border-[#C89A4B]/30 shadow-xl space-y-4">
              <div className="text-xs font-sora font-bold text-[#9A7326] uppercase tracking-wider mb-2">
                ACTIVE GOAL BLUEPRINTS
              </div>

              {milestones.map((m, idx) => {
                const IconComp = m.icon;
                return (
                  <div key={idx} className="p-3.5 rounded-2xl bg-[#FAF8F5] border border-[#C89A4B]/20 flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <div className="w-9 h-9 rounded-xl bg-[#C89A4B]/10 text-[#C89A4B] flex items-center justify-center">
                        <IconComp className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="text-xs font-bold text-[#0F172A]">{m.title}</div>
                        <div className="text-[10px] text-[#64748B]">Target Year: {m.year}</div>
                      </div>
                    </div>
                    <div className="text-xs font-bold font-sora text-[#C89A4B]">{m.amount}</div>
                  </div>
                );
              })}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
