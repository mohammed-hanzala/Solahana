import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, HeartHandshake, Hourglass, Feather, UserCheck, RefreshCw, Star } from 'lucide-react';

export default function AboutValues() {
  const values = [
    {
      title: 'Transparency',
      description: 'Zero hidden commissions, complete clarity on fees, and unbiased advisory on every decision.',
      icon: ShieldCheck,
      badge: 'Uncompromising'
    },
    {
      title: 'Trust',
      description: 'A strict fiduciary commitment that puts your family’s interests above everything else.',
      icon: HeartHandshake,
      badge: 'Fiduciary Guarantee'
    },
    {
      title: 'Long-Term Thinking',
      description: 'Building multi-decadal compounding strategy instead of chasing short-term market noise.',
      icon: Hourglass,
      badge: 'Generational Growth'
    },
    {
      title: 'Simplicity',
      description: 'Demystifying financial jargon into intuitive roadmaps that anyone can understand.',
      icon: Feather,
      badge: 'Clear & Intuitive'
    },
    {
      title: 'Personal Guidance',
      description: 'Custom-tailored financial blueprints tailored to your specific family milestones and risk profile.',
      icon: UserCheck,
      badge: 'Human Expertise'
    },
    {
      title: 'Continuous Review',
      description: 'Proactive quarterly and annual rebalancing to keep your plan aligned with real-world changes.',
      icon: RefreshCw,
      badge: 'Always On Track'
    }
  ];

  return (
    <section className="py-20 md:py-28 relative overflow-hidden bg-[#071C48]/40 border-t border-[#C8A24A]/15">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-[#071C48] border border-[#C8A24A]/30 text-[#E8C878] text-xs font-semibold uppercase tracking-widest font-sora">
            <Star className="w-3.5 h-3.5 text-[#C8A24A]" />
            <span>CORE FOUNDATION</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif-luxury font-bold text-[#F8F7F3] tracking-tight">
            Our Guiding Values
          </h2>

          <p className="text-base sm:text-lg text-[#BAC6DA] font-inter">
            The bedrock principles that govern every recommendation, plan, and client partnership at SOLAHANA.
          </p>
        </div>

        {/* 6 Premium Value Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {values.map((item, index) => {
            const IconComponent = item.icon;

            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                whileHover={{ y: -6 }}
                className="p-7 rounded-3xl bg-[#020B2D]/90 border border-[#C8A24A]/25 hover:border-[#C8A24A]/60 transition-all duration-300 shadow-[0_10px_30px_rgba(2,11,45,0.7)] backdrop-blur-xl text-left flex flex-col justify-between group"
              >
                <div>
                  {/* Top Bar with Icon & Badge */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#E8C878]/20 to-[#C8A24A]/10 border border-[#E8C878]/40 flex items-center justify-center text-[#E8C878] group-hover:bg-[#C8A24A] group-hover:text-[#020B2D] transition-all duration-300 shadow-[0_0_15px_rgba(200,162,74,0.2)]">
                      <IconComponent className="w-6 h-6" />
                    </div>

                    <span className="text-[10px] font-sora font-semibold uppercase tracking-wider px-2.5 py-1 rounded-md bg-[#071C48] text-[#E8C878] border border-[#C8A24A]/20">
                      {item.badge}
                    </span>
                  </div>

                  {/* Title & Description */}
                  <h3 className="text-xl font-serif-luxury font-bold text-[#F8F7F3] mb-3 group-hover:text-[#E8C878] transition-colors">
                    {item.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-[#BAC6DA] leading-relaxed font-inter">
                    {item.description}
                  </p>
                </div>

                {/* Bottom Border Glow Accent */}
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
