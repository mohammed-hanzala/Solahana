import React from 'react';
import { motion } from 'framer-motion';
import { FileText, MessageSquare, Map, Compass } from 'lucide-react';

const steps = [
  {
    step: '01',
    icon: FileText,
    title: 'Tell Us About Your Goals',
    description: 'Complete our brief 1-on-1 advisory form detailing your key milestones, income stability, and financial priorities.'
  },
  {
    step: '02',
    icon: MessageSquare,
    title: 'Receive Your Personalized Planning Discussion',
    description: 'Join a confidential 45-minute video or in-person session with a SEBI registered wealth advisor focused strictly on your objectives.'
  },
  {
    step: '03',
    icon: Map,
    title: 'Understand Your Financial Roadmap',
    description: 'Review a clear, mathematical blueprint showing step-by-step asset allocation, tax efficiency, and SIP contributions.'
  },
  {
    step: '04',
    icon: Compass,
    title: 'Begin Your Planning Journey',
    description: 'Execute your long-term wealth plan with quarterly portfolio reviews, zero commission direct mutual funds, and ongoing advisory.'
  }
];

export const ConsultationJourneyTimeline = () => {
  return (
    <section className="py-24 relative overflow-hidden bg-[#020B2D]">
      {/* Glow background */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-[#C8A24A]/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#C8A24A]/10 border border-[#C8A24A]/25 mb-4"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[#C8A24A]" />
            <span className="text-xs font-semibold uppercase tracking-widest text-[#E8C878]">
              WHAT HAPPENS AFTER YOU BOOK?
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-playfair text-3xl md:text-5xl font-bold text-white mb-6 leading-tight"
          >
            Your Consultation{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#C8A24A] via-[#F3E5AB] to-[#C8A24A]">
              Journey.
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-white/70 text-base md:text-lg font-light leading-relaxed"
          >
            A transparent four-step advisory process designed to move you from initial clarity to lifelong financial confidence.
          </motion.p>
        </div>

        {/* Timeline Grid with Connecting Gold Line */}
        <div className="relative">
          {/* Horizontal Golden Connecting Line (Desktop) */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#C8A24A]/40 to-transparent -translate-y-12 z-0" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
            {steps.map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.step}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ y: -8, transition: { duration: 0.2 } }}
                  className="group relative p-8 rounded-3xl bg-gradient-to-b from-[#071C48]/80 via-[#041235]/90 to-[#020B2D] border border-white/10 hover:border-[#C8A24A]/40 shadow-2xl backdrop-blur-2xl transition-all duration-300 flex flex-col justify-between"
                >
                  {/* Subtle hover gold glow */}
                  <div className="absolute inset-0 rounded-3xl bg-gradient-to-b from-[#C8A24A]/0 to-[#C8A24A]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

                  <div>
                    {/* Top Step Pill & Icon */}
                    <div className="flex items-center justify-between mb-8">
                      <div className="w-14 h-14 rounded-2xl bg-[#C8A24A]/10 border border-[#C8A24A]/30 flex items-center justify-center group-hover:bg-[#C8A24A] transition-colors duration-300">
                        <Icon className="w-7 h-7 text-[#E8C878] group-hover:text-[#020B2D] transition-colors duration-300" />
                      </div>
                      <span className="font-mono text-2xl font-bold text-[#E8C878]/40 group-hover:text-[#E8C878] transition-colors duration-300">
                        {item.step}
                      </span>
                    </div>

                    <h3 className="font-playfair text-xl font-bold text-white mb-4 group-hover:text-[#E8C878] transition-colors duration-300 leading-snug">
                      {item.title}
                    </h3>

                    <p className="text-white/65 text-sm leading-relaxed font-light">
                      {item.description}
                    </p>
                  </div>

                  <div className="mt-8 pt-4 border-t border-white/10 flex items-center justify-between">
                    <span className="text-xs font-mono text-[#E8C878] uppercase tracking-wider">
                      Step {item.step}
                    </span>
                    <div className="w-2 h-2 rounded-full bg-[#C8A24A]" />
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
