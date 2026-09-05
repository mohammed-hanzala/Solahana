import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, Compass, CheckCircle2, Clock } from 'lucide-react';

export default function TaxTimeline() {
  const milestones = [
    {
      month: 'April',
      phase: 'FY Kickoff & Allocation Blueprint',
      title: 'Tax Regime Selection & SIP Setup',
      description: 'Choose between Old vs New Tax Regime for salary TDS declaration. Setup automated monthly ELSS SIPs to spread Section 80C savings throughout the year.',
      deliverable: 'Annual Tax Declaration & ELSS SIP Setup'
    },
    {
      month: 'July',
      phase: 'Mid-Year Audit & ITR Review',
      title: 'Form 26AS Audit & Proof Verification',
      description: 'Audit Form 26AS & AIS tax credits. Complete previous FY income tax return (ITR) filing and verify HRA / medical reimbursement documentation.',
      deliverable: 'Form 26AS Reconciliation & ITR Verification'
    },
    {
      month: 'September',
      phase: 'Q2 Advance Tax & Gains Check',
      title: 'Advance Tax Calculation & Mid-Year Capital Audit',
      description: 'Assess capital gains on mutual funds, stock portfolios, or property sales. Pay Q2 advance tax instalments if non-salary income exceeds ₹10,000.',
      deliverable: 'Q2 Advance Tax Calculation & Gains Audit'
    },
    {
      month: 'December',
      phase: 'Section 80C/80D Top-up & NPS Shield',
      title: 'Deduction Limit Top-up & NPS Section 80CCD',
      description: 'Review Section 80C, 80D, and NPS 80CCD(1B) utilization. Top up any remaining gap before employers lock investment proof portals.',
      deliverable: 'Section 80C/80D Limit Gap Analysis'
    },
    {
      month: 'March',
      phase: 'Final LTCG Harvesting & Year-End Audit',
      title: 'Tax-Loss Harvesting & Final Reconciliation',
      description: 'Harvest up to ₹1,00,000 of tax-free long-term capital gains (LTCG) and set off short-term capital losses (STCL) before the financial year closes.',
      deliverable: 'LTCG Tax Loss Harvesting & Year-End Audit'
    }
  ];

  return (
    <section className="py-20 md:py-28 relative overflow-hidden bg-[#020B2D]">
      {/* Glow Effects */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-[#C8A24A]/10 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-20">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-[#071C48] border border-[#C8A24A]/30 text-[#E8C878] text-xs font-semibold uppercase tracking-widest font-sora">
            <Calendar className="w-3.5 h-3.5 text-[#C8A24A]" />
            <span>ANNUAL ROADMAP</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif-luxury font-bold text-[#F8F7F3] tracking-tight">
            A Year-Round Tax Planning Timeline.
          </h2>

          <p className="text-base sm:text-lg text-[#BAC6DA] font-inter">
            Stay ahead of deadlines with structured milestones throughout the financial year.
          </p>
        </div>

        {/* Vertical Timeline */}
        <div className="relative max-w-4xl mx-auto">
          
          {/* Vertical Golden Connector Line */}
          <div className="absolute left-6 md:left-1/2 top-8 bottom-8 -translate-x-1/2 w-[2px] bg-gradient-to-b from-[#E8C878] via-[#C8A24A] to-[#B8862B] z-0" />

          <div className="space-y-12">
            {milestones.map((item, index) => {
              const isEven = index % 2 === 0;

              return (
                <motion.div
                  key={item.month}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className={`grid grid-cols-1 md:grid-cols-12 gap-8 items-center relative z-10 ${
                    isEven ? '' : 'md:flex-row-reverse'
                  }`}
                >
                  
                  {/* Card Container Column */}
                  <div className={`md:col-span-6 text-left ${isEven ? 'md:order-1 md:text-right md:pr-10' : 'md:order-2 md:pl-10'}`}>
                    <div className="p-7 rounded-3xl bg-[#071C48]/90 border border-[#C8A24A]/30 hover:border-[#E8C878]/70 transition-all duration-300 backdrop-blur-xl shadow-[0_15px_40px_rgba(2,11,45,0.8)] space-y-3 group">
                      
                      <div className={`flex items-center gap-3 ${isEven ? 'md:justify-end' : ''}`}>
                        <span className="px-3.5 py-1 rounded-full bg-[#E8C878] text-[#020B2D] font-sora font-bold text-xs">
                          {item.month}
                        </span>
                        <span className="text-[11px] font-mono text-[#E8C878] uppercase">
                          {item.phase}
                        </span>
                      </div>

                      <h3 className="text-xl font-serif-luxury font-bold text-[#F8F7F3] group-hover:text-[#E8C878] transition-colors">
                        {item.title}
                      </h3>

                      <p className="text-xs sm:text-sm text-[#BAC6DA] leading-relaxed font-inter">
                        {item.description}
                      </p>

                      <div className="pt-3 border-t border-[#C8A24A]/15 flex items-center space-x-2 text-xs text-[#E8C878] font-sora">
                        <CheckCircle2 className="w-4 h-4 text-[#C8A24A]" />
                        <span>Action: {item.deliverable}</span>
                      </div>

                    </div>
                  </div>

                  {/* Center Node Badge */}
                  <div className="hidden md:flex md:col-span-0 absolute left-1/2 -translate-x-1/2 w-12 h-12 rounded-full bg-gradient-to-br from-[#E8C878] to-[#B8862B] text-[#020B2D] items-center justify-center font-sora font-bold text-xs shadow-[0_0_20px_rgba(200,162,74,0.5)] z-20">
                    <Clock className="w-5 h-5 text-[#020B2D]" />
                  </div>

                  {/* Spacer Column */}
                  <div className={`hidden md:block md:col-span-6 ${isEven ? 'md:order-2' : 'md:order-1'}`} />

                </motion.div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}
