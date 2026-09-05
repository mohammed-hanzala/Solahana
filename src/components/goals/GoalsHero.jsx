import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Compass, Home, GraduationCap, Users, Plane, ShieldCheck, Sparkles, Target } from 'lucide-react';

export default function GoalsHero({ onStartPlanning, onExploreCategories }) {
  const milestones = [
    { title: 'Dream Home', icon: Home, amount: '₹1.2 Cr', year: '2028' },
    { title: 'Education', icon: GraduationCap, amount: '₹45 Lakhs', year: '2032' },
    { title: 'Family Protection', icon: Users, amount: '₹15 Lakhs', year: 'Active' },
    { title: 'Travel & Lifestyle', icon: Plane, amount: '₹10 Lakhs', year: 'Annual' },
    { title: 'FIRE Retirement', icon: ShieldCheck, amount: '₹4.5 Cr', year: '2038' },
  ];

  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-[#020B2D]">
      {/* Golden Radial Background Glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[750px] h-[500px] bg-gradient-to-br from-[#C8A24A]/20 via-[#071C48]/40 to-transparent blur-[140px] pointer-events-none rounded-full" />

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
            <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-[#071C48]/80 border border-[#C8A24A]/40 text-[#E8C878] text-xs font-semibold uppercase tracking-widest font-sora shadow-[0_0_15px_rgba(200,162,74,0.2)]">
              <Compass className="w-3.5 h-3.5 text-[#C8A24A]" />
              <span>GOALS PLANNING</span>
            </div>

            {/* Main Editorial Heading */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif-luxury font-bold text-[#F8F7F3] leading-[1.15] tracking-tight">
              Every Dream Begins With <br />
              A <span className="text-gradient-gold">Financial Goal</span>.
            </h1>

            {/* Supporting Text */}
            <p className="text-lg sm:text-xl text-[#BAC6DA] font-inter leading-relaxed max-w-2xl font-normal">
              Whether you're planning your first home, your child's future, retirement or financial freedom, SOLAHANA helps turn goals into achievable plans.
            </p>

            {/* Action Buttons */}
            <div className="pt-4 flex flex-wrap items-center gap-4">
              <button
                onClick={onStartPlanning}
                className="gold-glow-button px-8 py-4 rounded-full text-xs sm:text-sm font-bold tracking-wide flex items-center space-x-2.5 group"
              >
                <span>Start Planning My Goals</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                onClick={onExploreCategories}
                className="px-7 py-4 rounded-full text-xs sm:text-sm font-semibold text-[#F8F7F3] hover:text-[#E8C878] bg-[#071C48]/60 hover:bg-[#071C48] border border-[#C8A24A]/30 hover:border-[#C8A24A]/60 transition-all flex items-center space-x-2"
              >
                <span>Explore Goal Categories</span>
              </button>
            </div>

            {/* Trust Metrics */}
            <div className="pt-6 grid grid-cols-3 gap-4 border-t border-[#C8A24A]/15 max-w-xl">
              <div>
                <p className="text-xl font-bold font-sora text-[#E8C878]">₹1,200 Cr+</p>
                <p className="text-xs text-[#BAC6DA] mt-0.5">Life Goals Tracked</p>
              </div>
              <div>
                <p className="text-xl font-bold font-sora text-[#F8F7F3]">94.8%</p>
                <p className="text-xs text-[#BAC6DA] mt-0.5">Goal Achievement Rate</p>
              </div>
              <div>
                <p className="text-xl font-bold font-sora text-[#E8C878]">100%</p>
                <p className="text-xs text-[#BAC6DA] mt-0.5">Custom Alignment</p>
              </div>
            </div>
          </motion.div>

          {/* Right Column — Golden Milestone Roadmap Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.2 }}
            className="lg:col-span-5 relative"
          >
            {/* Visual Glass Container */}
            <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-b from-[#071C48]/95 via-[#071C48]/70 to-[#020B2D]/95 border border-[#C8A24A]/35 shadow-[0_20px_60px_rgba(2,11,45,0.9)] backdrop-blur-2xl text-left space-y-6">
              
              {/* Header */}
              <div className="flex items-center justify-between pb-4 border-b border-[#C8A24A]/15">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#E8C878] to-[#B8862B] p-[1px]">
                    <div className="w-full h-full bg-[#020B2D] rounded-[11px] flex items-center justify-center text-[#E8C878]">
                      <Target className="w-5 h-5" />
                    </div>
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-[#F8F7F3] font-serif-luxury">Life Milestone Roadmap</h4>
                    <p className="text-[10px] text-[#E8C878] font-sora">Golden Strategy Path</p>
                  </div>
                </div>

                <span className="text-[10px] font-mono text-[#E8C878] bg-[#020B2D] px-2.5 py-1 rounded-full border border-[#C8A24A]/30">
                  5 MILESTONES
                </span>
              </div>

              {/* Connected Milestone Cards Stack with Glowing Golden Path Line */}
              <div className="relative space-y-4">
                <div className="absolute left-[19px] top-4 bottom-4 w-[2px] bg-gradient-to-b from-[#E8C878] via-[#C8A24A] to-[#B8862B] z-0" />

                {milestones.map((m, i) => {
                  const IconComp = m.icon;
                  return (
                    <div 
                      key={m.title}
                      className="relative z-10 flex items-center justify-between p-3.5 rounded-2xl bg-[#020B2D]/80 border border-[#C8A24A]/25 hover:border-[#E8C878]/60 transition-all duration-300 group cursor-pointer"
                    >
                      <div className="flex items-center space-x-3.5">
                        <div className="w-9 h-9 rounded-full bg-[#C8A24A]/20 border border-[#E8C878] flex items-center justify-center text-[#E8C878] shrink-0 group-hover:bg-[#C8A24A] group-hover:text-[#020B2D] transition-colors shadow-[0_0_10px_rgba(200,162,74,0.3)]">
                          <IconComp className="w-4 h-4" />
                        </div>
                        <div>
                          <h4 className="text-xs font-bold text-[#F8F7F3] group-hover:text-[#E8C878] transition-colors">
                            {m.title}
                          </h4>
                          <span className="text-[10px] text-[#BAC6DA]">Target Year: {m.year}</span>
                        </div>
                      </div>

                      <div className="text-right">
                        <p className="text-xs font-bold font-sora text-[#E8C878]">{m.amount}</p>
                        <span className="text-[9px] text-[#BAC6DA] uppercase">Corpus</span>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Bottom Tag */}
              <div className="pt-3 border-t border-[#C8A24A]/15 flex items-center justify-between text-[11px] text-[#BAC6DA]">
                <span>Connected Strategy</span>
                <span className="text-[#E8C878] font-semibold font-sora">Inflation-Adjusted</span>
              </div>

            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
