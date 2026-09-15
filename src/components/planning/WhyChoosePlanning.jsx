import React from 'react';
import { motion } from 'framer-motion';
import { Award, Compass, Sparkles, UserCheck, ShieldCheck } from 'lucide-react';

export default function WhyChoosePlanning() {
  const reasons = [
    {
      title: 'Zero Commission Fiduciary Advice',
      desc: '100% unbiased guidance focused entirely on your net wealth growth without product distribution kickbacks.',
      icon: Award,
    },
    {
      title: 'Custom Wealth Engineering',
      desc: 'Bespoke portfolios tailored to your specific salary, liabilities, cashflow, and risk capacity.',
      icon: Compass,
    },
    {
      title: 'SEBI Registered RIA Governance',
      desc: 'Operated under strict regulatory standards for fiduciary duty, transparency, and data privacy.',
      icon: ShieldCheck,
    },
  ];

  return (
    <section className="py-20 md:py-28 relative overflow-hidden bg-[#FCFAF6] border-t border-[#E7D7B5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-left">
        <div className="text-center space-y-4 max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-[#C89B3C]/10 border border-[#E7D7B5] text-[#C89B3C] text-xs font-semibold uppercase tracking-widest font-sora">
            <Sparkles className="w-3.5 h-3.5" />
            <span>SOLAHANA DIFFERENCE</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-serif-luxury font-bold text-[#1A1A1A]">
            Why Choose SOLAHANA Fiduciary Planning
          </h2>
          <p className="text-base text-[#555555] font-inter">
            Institutional discipline and personalized care for long-term wealth confidence.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {reasons.map((rs, idx) => {
            const IconComp = rs.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="p-7 rounded-3xl bg-white border border-[#E7D7B5] hover:border-[#C89B3C] shadow-sm transition-all text-left flex flex-col justify-between group"
              >
                <div className="space-y-4">
                  <div className="w-12 h-12 rounded-2xl bg-[#C89B3C]/10 text-[#C89B3C] group-hover:bg-[#C89B3C] group-hover:text-white transition-colors flex items-center justify-center">
                    <IconComp className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-serif-luxury font-bold text-[#1A1A1A] group-hover:text-[#C89B3C] transition-colors">
                    {rs.title}
                  </h3>
                  <p className="text-xs text-[#555555] font-inter leading-relaxed">
                    {rs.desc}
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
