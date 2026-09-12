import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus, Sparkles } from 'lucide-react';

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      q: 'What is financial planning?',
      a: 'Financial planning is a structured process of organizing your income, cashflow, liabilities, emergency reserves, tax optimization, and investments around your concrete life goals — such as buying a home, funding children’s education, and achieving early retirement (FIRE).',
    },
    {
      q: 'How is SOLAHANA different from investment apps?',
      a: 'Unlike traditional trading apps that focus on short-term buying/selling of stocks, SOLAHANA focuses 100% on goal-based wealth planning. We start by defining your life milestones, structuring risk protection, and optimizing your tax slabs before allocating assets.',
    },
    {
      q: 'Can I plan for multiple goals together?',
      a: 'Yes! SOLAHANA’s multi-asset planning framework allows you to track and manage multiple goals simultaneously — including emergency reserves, retirement FIRE targets, home down payments, and children’s university funds — under one unified roadmap.',
    },
    {
      q: 'Does SOLAHANA help with tax planning?',
      a: 'Absolutely. We proactively optimize your tax liabilities across Section 80C, Section 80D, NPS Tier 1, and automated capital gains tax-loss harvesting, helping you keep more of your investment returns legally.',
    },
    {
      q: 'Can I review my financial plan regularly?',
      a: 'Yes. Financial planning is an evolving process. SOLAHANA provides periodic reviews, rebalancing alerts, and strategy updates whenever your salary increases, career advances, or life priorities shift.',
    },
    {
      q: 'Who should use SOLAHANA?',
      a: 'SOLAHANA is tailored for salaried professionals, business owners, NRI families, and young professionals looking for a disciplined, goal-aligned, and transparent fiduciary advisory platform.',
    },
  ];

  return (
    <section className="relative z-10 py-24 bg-[#F3EFE9] border-t border-[#C89A4B]/20 overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center space-y-4 max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full gold-badge text-xs font-semibold text-[#9A7326] border border-[#C89A4B]/35 shadow-sm"
          >
            <Sparkles className="w-3.5 h-3.5 text-[#C89A4B]" />
            <span className="font-sora tracking-wide uppercase text-[11px]">FREQUENTLY ASKED QUESTIONS</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-serif-luxury font-bold text-[#0F172A] tracking-tight leading-tight"
          >
            Clear Answers to Your{' '}
            <span className="gold-gradient-text italic font-serif-luxury">Financial Questions</span>
          </motion.h2>
        </div>

        {/* Accordions */}
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
                className="rounded-2xl bg-white border border-[#C89A4B]/20 overflow-hidden shadow-sm hover:border-[#C89A4B] transition-all"
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : idx)}
                  className="w-full p-6 text-left flex items-center justify-between gap-4 font-serif-luxury font-bold text-lg text-[#0F172A] hover:text-[#C89A4B] transition-colors"
                >
                  <span>{faq.q}</span>
                  <div className="w-8 h-8 rounded-full bg-[#FAF8F5] border border-[#C89A4B]/30 flex items-center justify-center shrink-0 text-[#C89A4B]">
                    {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                  </div>
                </button>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="px-6 pb-6 text-sm text-[#475569] font-inter leading-relaxed border-t border-[#C89A4B]/10 pt-4"
                    >
                      {faq.a}
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
