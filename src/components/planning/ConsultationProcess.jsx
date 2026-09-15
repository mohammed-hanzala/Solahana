import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, Video, FileText, CheckCircle2 } from 'lucide-react';

export default function ConsultationProcess() {
  const steps = [
    {
      number: '01',
      title: 'Book Confidential Slot',
      desc: 'Select your preferred date & time for a 1-on-1 discovery call with a SEBI Registered Advisor.',
      icon: Calendar,
    },
    {
      number: '02',
      title: 'Interactive Video Session',
      desc: 'Discuss your salary, liabilities, life goals, and tax concerns in a private, 45-minute consultation.',
      icon: Video,
    },
    {
      number: '03',
      title: 'Receive Custom Blueprint',
      desc: 'Get your comprehensive, 30+ page written Financial Strategy with step-by-step execution items.',
      icon: FileText,
    },
    {
      number: '04',
      title: 'Direct Implementation & Review',
      desc: 'Execute zero-commission direct investments with annual portfolio rebalancing reviews.',
      icon: CheckCircle2,
    },
  ];

  return (
    <section className="py-20 md:py-28 relative overflow-hidden bg-[#FCFAF6] border-t border-[#E7D7B5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-left">
        <div className="text-center space-y-4 max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-[#C89B3C]/10 border border-[#E7D7B5] text-[#C89B3C] text-xs font-semibold uppercase tracking-widest font-sora">
            <Calendar className="w-3.5 h-3.5" />
            <span>HOW IT WORKS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-serif-luxury font-bold text-[#1A1A1A]">
            Advisory Consultation Process
          </h2>
          <p className="text-base text-[#555555] font-inter">
            Simple, transparent onboarding to launch your fiduciary wealth relationship.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((st, idx) => {
            const IconComp = st.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="p-8 rounded-3xl bg-white border border-[#E7D7B5] hover:border-[#C89B3C] shadow-sm transition-all duration-300 text-left flex flex-col justify-between group"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="w-12 h-12 rounded-2xl bg-[#C89B3C]/10 text-[#C89B3C] group-hover:bg-[#C89B3C] group-hover:text-white transition-colors flex items-center justify-center">
                      <IconComp className="w-6 h-6" />
                    </div>
                    <span className="text-sm font-sora font-bold text-[#C89B3C]">
                      {st.number}
                    </span>
                  </div>
                  <h3 className="text-lg font-serif-luxury font-bold text-[#1A1A1A] group-hover:text-[#C89B3C] transition-colors">
                    {st.title}
                  </h3>
                  <p className="text-xs text-[#555555] font-inter leading-relaxed">
                    {st.desc}
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
