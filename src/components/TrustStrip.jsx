import React from 'react';
import { motion } from 'framer-motion';
import { Target, Calculator, ShieldCheck, PieChart, Sparkles, ArrowRight } from 'lucide-react';

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
    <section className="relative z-20 py-10 bg-[#071C48]/60 backdrop-blur-xl border-y border-[#C8A24A]/20 shadow-[0_15px_40px_rgba(2,11,45,0.8)]">
      
      {/* Background Soft Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[100px] bg-[#C8A24A]/5 blur-[90px] rounded-full pointer-events-none" />

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
                whileHover={{ y: -4 }}
                className="group p-5 rounded-2xl bg-[#020B2D]/70 border border-[#C8A24A]/20 hover:border-[#C8A24A]/60 backdrop-blur-md transition-all duration-300 flex items-start space-x-3.5 hover:shadow-[0_10px_30px_rgba(200,162,74,0.18)]"
              >
                <div className="p-2.5 rounded-xl bg-[#C8A24A]/15 border border-[#C8A24A]/30 text-[#E8C878] group-hover:bg-[#C8A24A] group-hover:text-[#020B2D] transition-colors duration-300 shrink-0 mt-0.5 shadow-[0_0_12px_rgba(200,162,74,0.2)]">
                  <IconComp className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-serif-luxury font-bold text-[#F8F7F3] group-hover:text-[#E8C878] transition-colors duration-300">
                    {badge.title}
                  </h4>
                  <p className="text-xs text-[#BAC6DA] leading-relaxed mt-0.5">
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
