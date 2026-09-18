import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, Sparkles } from 'lucide-react';

export default function PlanningFAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      q: 'What is included in a SOLAHANA Financial Plan?',
      a: 'A 360° blueprint covering cashflow analysis, emergency reserves, goal SIPs, tax harvesting, risk cover, and estate legacy.',
    },
    {
      q: 'How is SOLAHANA different from traditional financial advisors?',
      a: 'SOLAHANA operates under a zero-commission fiduciary model, focusing 100% on your goals without product selling conflicts.',
    },
    {
      q: 'How long does it take to create my financial plan?',
      a: 'Your initial plan is presented within 5-7 business days after your confidential 1-on-1 discovery consultation.',
    },
    {
      q: 'Can I update my financial plan as my career advances?',
      a: 'Yes! Your financial plan is a living document reviewed annually or whenever major life milestones occur.',
    },
    {
      q: 'Is my personal and financial information secure?',
      a: 'Absolutely. We enforce 256-bit bank-grade encryption and strict non-disclosure compliance.',
    },
    {
      q: 'How do I get started with SOLAHANA Financial Planning?',
      a: "Click 'Start Your Financial Planning' to schedule a 1-on-1 discovery call with a SEBI-registered advisor.",
    },
  ];

  return (
    <section className="py-16 md:py-24 relative overflow-hidden bg-[#FAF8F5] border-t border-[#E7D7B5]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-left">
        
        {/* Section Header */}
        <div className="text-center space-y-3 max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-[#C89B3C]/10 border border-[#E7D7B5] text-[#C89B3C] text-xs font-semibold uppercase tracking-widest font-sora">
            <Sparkles className="w-3.5 h-3.5" />
            <span>FREQUENTLY ASKED QUESTIONS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif-luxury font-bold text-[#1A1A1A] leading-tight">
            Financial Planning FAQ
          </h2>
          <p className="text-base text-[#555555] font-inter max-w-xl mx-auto">
            Clear, concise answers regarding our fiduciary planning process, security, and onboarding.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-4">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.08 }}
                className="rounded-2xl bg-white border border-[#E7D7B5] hover:border-[#C89B3C] shadow-sm transition-all overflow-hidden"
              >
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : idx)}
                  className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 cursor-pointer focus:outline-none"
                >
                  <span className="text-base sm:text-lg font-serif-luxury font-bold text-[#0F172A] hover:text-[#C89B3C] transition-colors">
                    {faq.q}
                  </span>
                  <div className={`w-8 h-8 rounded-full bg-[#FAF8F5] border border-[#E7D7B5] flex items-center justify-center shrink-0 text-[#C89B3C] transition-transform duration-300 ${isOpen ? 'rotate-180 bg-[#C89B3C] text-white border-[#C89B3C]' : ''}`}>
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: 'easeInOut' }}
                      className="overflow-hidden"
                    >
                      <div className="px-5 sm:px-6 pb-6 text-xs sm:text-sm text-[#555555] font-inter leading-relaxed border-t border-[#E7D7B5]/40 pt-4">
                        {faq.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
