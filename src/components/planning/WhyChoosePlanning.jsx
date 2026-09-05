import React from 'react';
import { motion } from 'framer-motion';
import { Target, UserCheck, Hourglass, ShieldCheck, RefreshCw, HeartHandshake, Award } from 'lucide-react';

export default function WhyChoosePlanning() {
  const features = [
    {
      title: 'Goal-Based Planning',
      description: 'Every rupee invested is explicitly mapped to a real-world milestone with a target date and required corpus.',
      icon: Target,
      badge: 'Milestone Focus'
    },
    {
      title: 'Personalized Strategies',
      description: 'Zero cookie-cutter templates. Your plan is engineered around your income, risk tolerance, and family values.',
      icon: UserCheck,
      badge: 'Custom Architecture'
    },
    {
      title: 'Long-Term Wealth Focus',
      description: 'Built for multi-decadal compounding, shielding your capital from short-term market volatility and hype.',
      icon: Hourglass,
      badge: 'Decadal Growth'
    },
    {
      title: 'Transparent Planning',
      description: '100% unbiased zero-commission direct mutual funds with no hidden fees or product kickbacks.',
      icon: ShieldCheck,
      badge: 'Unbiased Fiduciary'
    },
    {
      title: 'Regular Reviews',
      description: 'Structured annual rebalancing and quarterly sanity checks to adapt your plan through life transitions.',
      icon: RefreshCw,
      badge: 'Continuous Care'
    },
    {
      title: 'Human Guidance',
      description: 'Experienced SEBI-registered financial planners dedicated to guiding your family through every major decision.',
      icon: HeartHandshake,
      badge: 'Expert Partnership'
    }
  ];

  return (
    <section className="py-20 md:py-28 relative overflow-hidden bg-[#071C48]/40 border-t border-[#C8A24A]/15">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-[#071C48] border border-[#C8A24A]/30 text-[#E8C878] text-xs font-semibold uppercase tracking-widest font-sora">
            <Award className="w-3.5 h-3.5 text-[#C8A24A]" />
            <span>FIDUCIARY EXCELLENCE</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif-luxury font-bold text-[#F8F7F3] tracking-tight">
            Why Families Trust SOLAHANA
          </h2>

          <p className="text-base sm:text-lg text-[#BAC6DA] font-inter">
            Built on strict fiduciary principles, transparent advisory, and long-term client partnerships.
          </p>
        </div>

        {/* 6 Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((item, idx) => {
            const IconComp = item.icon;

            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.08 }}
                whileHover={{ y: -6 }}
                className="p-7 rounded-3xl bg-[#020B2D]/90 border border-[#C8A24A]/25 hover:border-[#E8C878]/60 transition-all duration-300 shadow-[0_10px_30px_rgba(2,11,45,0.7)] backdrop-blur-xl text-left flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#E8C878]/20 to-[#C8A24A]/10 border border-[#E8C878]/40 flex items-center justify-center text-[#E8C878] group-hover:bg-[#C8A24A] group-hover:text-[#020B2D] transition-all duration-300 shadow-[0_0_15px_rgba(200,162,74,0.2)]">
                      <IconComp className="w-6 h-6" />
                    </div>

                    <span className="text-[10px] font-sora font-semibold uppercase tracking-wider px-2.5 py-1 rounded-md bg-[#071C48] text-[#E8C878] border border-[#C8A24A]/20">
                      {item.badge}
                    </span>
                  </div>

                  <h3 className="text-xl font-serif-luxury font-bold text-[#F8F7F3] mb-3 group-hover:text-[#E8C878] transition-colors">
                    {item.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-[#BAC6DA] leading-relaxed font-inter">
                    {item.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-[#C8A24A]/15 flex items-center justify-between text-[11px] text-[#BAC6DA] group-hover:text-[#E8C878] transition-colors">
                  <span>SOLAHANA Standard</span>
                  <span className="font-semibold font-sora">100% Commitment</span>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
