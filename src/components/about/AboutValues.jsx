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
    <section className="py-20 md:py-28 relative overflow-hidden bg-[#F3EFE9] border-t border-[#C89A4B]/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full gold-badge text-[#9A7326] text-xs font-semibold uppercase tracking-widest font-sora">
            <Star className="w-3.5 h-3.5 text-[#C89A4B]" />
            <span>CORE FOUNDATION</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif-luxury font-bold text-[#0F172A] tracking-tight">
            Our Guiding Values
          </h2>

          <p className="text-base sm:text-lg text-[#475569] font-inter">
            These six principles define every conversation, recommendation, and strategy we build at SOLAHANA.
          </p>
        </div>

        {/* 6 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {values.map((item, idx) => {
            const IconComp = item.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                whileHover={{ y: -4 }}
                className="p-8 rounded-3xl bg-white border border-[#C89A4B]/20 hover:border-[#C89A4B] backdrop-blur-xl shadow-md transition-all space-y-4"
              >
                <div className="flex items-center justify-between">
                  <div className="w-12 h-12 rounded-2xl bg-[#C89A4B]/10 border border-[#C89A4B]/30 text-[#C89A4B] flex items-center justify-center font-bold">
                    <IconComp className="w-6 h-6" />
                  </div>
                  <span className="text-[10px] font-sora font-semibold text-[#9A7326] uppercase tracking-widest px-2.5 py-1 rounded-full bg-[#FAF8F5] border border-[#C89A4B]/20">
                    {item.badge}
                  </span>
                </div>

                <h3 className="text-xl font-serif-luxury font-bold text-[#0F172A]">
                  {item.title}
                </h3>

                <p className="text-sm text-[#475569] font-inter leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
