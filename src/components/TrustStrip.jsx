import React from 'react';
import { motion } from 'framer-motion';
import { Target, Calculator, ShieldCheck, PieChart, Sparkles } from 'lucide-react';

export default function TrustStrip() {
  const trustBadges = [
    {
      title: 'Goal-Based Financial Planning',
      desc: 'Align investments directly to your life milestones',
      icon: Target,
    },
    {
      title: 'Tax Planning Support',
      desc: 'Maximize Section 80C/80D & LTCG tax efficiency',
      icon: Calculator,
    },
    {
      title: 'Retirement Planning',
      desc: 'FIRE roadmap & inflation-protected income streams',
      icon: ShieldCheck,
    },
    {
      title: 'Financial Calculators',
      desc: 'Interactive SIP, Tax & FIRE simulation tools',
      icon: PieChart,
    },
  ];

  return (
    <section className="relative z-20 py-10 bg-[#F3EFE9] border-y border-[#C89A4B]/20 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {trustBadges.map((badge, idx) => {
            const IconComp = badge.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                whileHover={{ y: -3 }}
                className="group p-5 rounded-2xl bg-white border border-[#C89A4B]/20 hover:border-[#C89A4B] backdrop-blur-md transition-all duration-300 flex items-start space-x-3.5 shadow-sm hover:shadow-md"
              >
                <div className="p-2.5 rounded-xl bg-[#C89A4B]/10 border border-[#C89A4B]/30 text-[#C89A4B] group-hover:bg-[#C89A4B] group-hover:text-white transition-colors duration-300 shrink-0 mt-0.5 shadow-sm">
                  <IconComp className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-serif-luxury font-bold text-[#0F172A] group-hover:text-[#C89A4B] transition-colors duration-300">
                    {badge.title}
                  </h4>
                  <p className="text-xs text-[#475569] leading-relaxed mt-0.5">
                    {badge.desc}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
