import React from 'react';
import { motion } from 'framer-motion';
import { Compass, CheckCircle2 } from 'lucide-react';

export default function PlanningJourney() {
  const steps = [
    {
      step: 'Step 01',
      title: 'Initial Discovery & Data Gathering',
      desc: 'We map out your full financial picture—income streams, monthly expenses, existing investments, loans, and family targets.',
    },
    {
      step: 'Step 02',
      title: 'Gap Analysis & Strategy Architecture',
      desc: 'Our SEBI advisory team stress-tests your assets against inflation, market downturns, and target retirement timelines.',
    },
    {
      step: 'Step 03',
      title: 'Custom Blueprint Presentation',
      desc: 'We walk you through your personalized 30-page Financial Blueprint with clear, actionable recommendations.',
    },
    {
      step: 'Step 04',
      title: 'Execution & Continuous Monitoring',
      desc: 'We guide fund selection in zero-commission direct plans and conduct annual rebalancing reviews.',
    },
  ];

  return (
    <section className="py-20 md:py-28 relative overflow-hidden bg-[#FCFAF6] border-y border-[#E7D7B5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-left">
        <div className="text-center space-y-4 max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-[#C89B3C]/10 border border-[#E7D7B5] text-[#C89B3C] text-xs font-semibold uppercase tracking-widest font-sora">
            <Compass className="w-3.5 h-3.5" />
            <span>ADVISORY PROCESS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-serif-luxury font-bold text-[#1A1A1A]">
            Your 4-Step Financial Planning Journey
          </h2>
          <p className="text-base text-[#555555] font-inter">
            A structured, collaborative process designed for clarity and confidence.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {steps.map((st, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="p-7 rounded-3xl bg-white border border-[#E7D7B5] hover:border-[#C89B3C] shadow-sm transition-all space-y-3"
            >
              <div className="flex items-center justify-between">
                <span className="px-3.5 py-1 rounded-full bg-[#C89B3C] text-white font-sora font-bold text-xs">
                  {st.step}
                </span>
                <CheckCircle2 className="w-5 h-5 text-[#C89B3C]" />
              </div>
              <h3 className="text-lg font-serif-luxury font-bold text-[#1A1A1A]">{st.title}</h3>
              <p className="text-xs text-[#555555] font-inter leading-relaxed">{st.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
