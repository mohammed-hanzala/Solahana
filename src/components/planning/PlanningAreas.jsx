import React from 'react';
import { motion } from 'framer-motion';
import { Target, Compass, ShieldCheck, HeartPulse, GraduationCap, Building } from 'lucide-react';

export default function PlanningAreas() {
  const areas = [
    {
      title: 'Retirement Planning & FIRE',
      desc: 'Build an inflation-adjusted financial independence corpus to retire comfortably on your terms.',
      icon: Target,
      tag: 'Freedom Target',
    },
    {
      title: 'Tax Efficient Investment Structuring',
      desc: 'Proactive optimization across ELSS, NPS, and capital gains tax harvesting to maximize net returns.',
      icon: Compass,
      tag: 'Tax Harvesting',
    },
    {
      title: 'Risk Management & Emergency Reserves',
      desc: 'Comprehensive coverage audit across term insurance, health insurance, and 6-12 months liquidity buffer.',
      icon: ShieldCheck,
      tag: 'Capital Safety',
    },
    {
      title: 'Children’s Education & Milestone Funds',
      desc: 'Dedicated goal-based portfolios for overseas higher education and major life milestones.',
      icon: GraduationCap,
      tag: 'Future Security',
    },
    {
      title: 'Real Estate & Major Property Goals',
      desc: 'Structured down payment planning and home loan interest optimization strategies.',
      icon: Building,
      tag: 'Asset Creation',
    },
    {
      title: 'Estate Planning & Legacy Succession',
      desc: 'Wills, private trusts, and nomination audits to guarantee smooth multi-generational wealth transfer.',
      icon: HeartPulse,
      tag: 'Legacy Protection',
    },
  ];

  return (
    <section id="planning-areas" className="py-20 md:py-28 relative overflow-hidden bg-[#FCFAF6]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-left">
        <div className="text-center space-y-4 max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-[#C89B3C]/10 border border-[#E7D7B5] text-[#C89B3C] text-xs font-semibold uppercase tracking-widest font-sora">
            <Compass className="w-3.5 h-3.5" />
            <span>CORE ADVISORY PILLARS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-serif-luxury font-bold text-[#1A1A1A]">
            Comprehensive Financial Planning Areas
          </h2>
          <p className="text-base text-[#555555] font-inter">
            End-to-end wealth management designed for working professionals and business owners.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {areas.map((ar, idx) => {
            const IconComp = ar.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="p-7 rounded-3xl bg-white border border-[#E7D7B5] hover:border-[#C89B3C] shadow-sm transition-all duration-300 text-left flex flex-col justify-between group"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="w-12 h-12 rounded-2xl bg-[#C89B3C]/10 text-[#C89B3C] group-hover:bg-[#C89B3C] group-hover:text-white transition-colors flex items-center justify-center">
                      <IconComp className="w-6 h-6" />
                    </div>
                    <span className="text-[10px] font-sora font-semibold uppercase tracking-wider px-2.5 py-1 rounded-full bg-[#FCFAF6] text-[#C89B3C] border border-[#E7D7B5]">
                      {ar.tag}
                    </span>
                  </div>
                  <h3 className="text-lg font-serif-luxury font-bold text-[#1A1A1A] group-hover:text-[#C89B3C] transition-colors">
                    {ar.title}
                  </h3>
                  <p className="text-xs text-[#555555] font-inter leading-relaxed">
                    {ar.desc}
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
