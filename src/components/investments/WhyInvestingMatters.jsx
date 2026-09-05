import React from 'react';
import { motion } from 'framer-motion';
import { Target, Flame, TrendingUp, Sparkles, ShieldCheck, Compass, ArrowRight } from 'lucide-react';

export default function WhyInvestingMatters() {
  const cards = [
    {
      title: 'Invest For Goals',
      subtitle: 'Anchor every rupee to concrete life deadlines.',
      description: 'Instead of holding random funds, tie investments directly to home down-payments, higher education, or FIRE retirement dates.',
      icon: Target,
      tag: 'Goal-Anchored'
    },
    {
      title: 'Beat Inflation',
      subtitle: 'Outpace 6% annual rupee purchasing power erosion.',
      description: 'Idle cash in low-yield savings accounts loses purchasing power every year. Disciplined multi-asset compounding protects your real wealth.',
      icon: Flame,
      tag: 'Inflation Shield'
    },
    {
      title: 'Create Long-Term Wealth',
      subtitle: 'Harness the power of multi-decadal compounding.',
      description: 'Reinvested dividends, capital gains, and systematic step-up SIPs turn monthly surplus into multi-crore intergenerational wealth.',
      icon: TrendingUp,
      tag: 'Compounding'
    },
    {
      title: 'Generate Passive Growth',
      subtitle: 'Build income streams that work while you rest.',
      description: 'Debt coupon payouts, dividend yields, and systematic withdrawal plans (SWP) create inflation-protected cash flow.',
      icon: Sparkles,
      tag: 'Passive Yield'
    },
    {
      title: 'Build Financial Freedom',
      subtitle: 'Achieve independence from mandatory employment.',
      description: 'When your investment portfolio corpus covers 25x to 30x your annual living expenses, work becomes a choice rather than a necessity.',
      icon: ShieldCheck,
      tag: 'FIRE Freedom'
    }
  ];

  return (
    <section className="py-20 md:py-28 relative overflow-hidden bg-[#071C48]/30 border-y border-[#C8A24A]/15">
      {/* Glow Effects */}
      <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-[#C8A24A]/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-[#071C48] border border-[#C8A24A]/30 text-[#E8C878] text-xs font-semibold uppercase tracking-widest font-sora">
            <Compass className="w-3.5 h-3.5 text-[#C8A24A]" />
            <span>WEALTH PURPOSE</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif-luxury font-bold text-[#F8F7F3] tracking-tight">
            Every Investment Should Have A Purpose.
          </h2>

          <p className="text-base sm:text-lg text-[#BAC6DA] font-inter">
            Investing is not about chasing volatile market highs — it is the engine that drives your life goals.
          </p>
        </div>

        {/* Two-Column Editorial Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-center">
          
          {/* Left Column — Money Growth Visual Illustration */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-5 relative"
          >
            <div className="p-8 rounded-3xl bg-gradient-to-b from-[#071C48] to-[#020B2D] border border-[#C8A24A]/30 shadow-[0_20px_50px_rgba(2,11,45,0.9)] backdrop-blur-2xl text-left space-y-6">
              
              <div className="flex items-center justify-between pb-4 border-b border-[#C8A24A]/15">
                <span className="text-xs font-sora font-bold text-[#E8C878] uppercase tracking-wider">
                  COMPOUNDING TRAJECTORY
                </span>
                <span className="text-[10px] text-[#BAC6DA] px-2.5 py-1 rounded bg-[#020B2D] border border-[#C8A24A]/20">
                  15-YEAR HORIZON
                </span>
              </div>

              {/* Cash vs Investment Comparison */}
              <div className="space-y-4">
                
                {/* Idle Cash Box */}
                <div className="p-4 rounded-2xl bg-red-950/20 border border-red-500/30 space-y-1.5">
                  <div className="flex items-center justify-between text-xs font-bold text-red-400 font-sora">
                    <span>Idle Savings Account (3.5% Return)</span>
                    <span>LOSING VALUE</span>
                  </div>
                  <p className="text-xs text-[#BAC6DA]">
                    ₹50,000/mo over 15 yrs = ₹90 Lakhs saved, but eroded by inflation down to ₹48 Lakhs real purchasing power.
                  </p>
                </div>

                {/* Arrow */}
                <div className="flex justify-center my-1">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-b from-[#E8C878] to-[#B8862B] text-[#020B2D] flex items-center justify-center font-bold shadow-[0_0_15px_rgba(200,162,74,0.4)]">
                    <ArrowRight className="w-5 h-5 rotate-90" />
                  </div>
                </div>

                {/* Disciplined Investing Box */}
                <div className="p-4 rounded-2xl bg-[#071C48] border border-[#E8C878]/50 space-y-1.5 shadow-[0_0_20px_rgba(200,162,74,0.2)]">
                  <div className="flex items-center justify-between text-xs font-bold text-[#E8C878] font-sora">
                    <span>Disciplined Goal Portfolio (12% CAGR)</span>
                    <span>₹2.50 CR CORPUS</span>
                  </div>
                  <p className="text-xs text-[#F8F7F3] leading-relaxed font-medium">
                    ₹50,000/mo step-up SIP grows into ₹2.50 Cr+ inflation-protected net worth creating true financial freedom.
                  </p>
                </div>

              </div>

              <div className="pt-3 border-t border-[#C8A24A]/15 text-center text-xs text-[#BAC6DA]">
                Strategic Edge: <span className="text-[#E8C878] font-semibold font-sora">+₹1.60 Cr Wealth Difference</span>
              </div>

            </div>
          </motion.div>

          {/* Right Column — 5 Information Cards */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-7 space-y-4 text-left"
          >
            {cards.map((item, index) => {
              const IconComp = item.icon;

              return (
                <motion.div
                  key={item.title}
                  whileHover={{ x: 6 }}
                  className="p-5 rounded-2xl bg-[#020B2D]/90 border border-[#C8A24A]/25 hover:border-[#C8A24A]/60 transition-all duration-300 backdrop-blur-xl flex items-start space-x-4 group"
                >
                  <div className="p-3 rounded-xl bg-[#C8A24A]/10 text-[#E8C878] group-hover:bg-[#C8A24A] group-hover:text-[#020B2D] transition-colors shrink-0 mt-0.5">
                    <IconComp className="w-5 h-5" />
                  </div>

                  <div className="flex-1 space-y-1">
                    <div className="flex items-center justify-between">
                      <h3 className="text-base font-serif-luxury font-bold text-[#F8F7F3] group-hover:text-[#E8C878] transition-colors">
                        {item.title}
                      </h3>
                      <span className="text-[10px] font-sora font-semibold uppercase tracking-wider px-2 py-0.5 rounded bg-[#071C48] text-[#E8C878] border border-[#C8A24A]/20">
                        {item.tag}
                      </span>
                    </div>
                    <p className="text-xs font-semibold text-[#E8C878]">
                      {item.subtitle}
                    </p>
                    <p className="text-xs text-[#BAC6DA] leading-relaxed font-inter pt-0.5">
                      {item.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>

        </div>

      </div>
    </section>
  );
}
