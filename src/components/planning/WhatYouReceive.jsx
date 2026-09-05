import React from 'react';
import { motion } from 'framer-motion';
import { FileText, Target, TrendingUp, ShieldCheck, Calculator, CheckSquare, Sparkles, Download } from 'lucide-react';

export default function WhatYouReceive({ onOpenSearch }) {
  const reportCards = [
    {
      title: 'Goal Summary & Timeline Matrix',
      description: 'Clear breakdown of each life goal (Home, Education, FIRE Retirement) with target corpus, start date, and monthly SIP requirements.',
      icon: Target,
      tag: 'Report Page 01',
      metric: '4 Active Goals Planned'
    },
    {
      title: 'FIRE Retirement Projection Chart',
      description: 'Inflation-adjusted net worth growth curve showing exact age-48 financial independence date and monthly passive income target.',
      icon: TrendingUp,
      tag: 'Report Page 02',
      metric: 'Corpus ₹4.50 Cr at Age 48'
    },
    {
      title: 'Emergency Health & Shield Status',
      description: 'Audit of liquid safety reserves (₹12 Lakhs liquid FDs/Liquid Funds) and health insurance top-up coverage adequacy.',
      icon: ShieldCheck,
      tag: 'Report Page 03',
      metric: '100% Liquid Safety Shield'
    },
    {
      title: 'Tax Planning & Loss Harvesting',
      description: 'Section 80C/80D optimization map and step-by-step capital gains tax harvesting roadmap to save up to ₹48,500 annually.',
      icon: Calculator,
      tag: 'Report Page 04',
      metric: '₹48,500 Annual Tax Savings'
    },
    {
      title: 'Multi-Asset Investment Allocation',
      description: 'Target asset mix (Equity 65%, Debt 25%, Gold 10%) mapped to risk profile with zero-commission direct fund recommendations.',
      icon: FileText,
      tag: 'Report Page 05',
      metric: 'Zero-Commission Direct Allocation'
    },
    {
      title: 'Annual Review & Action Checklist',
      description: 'Step-by-step implementation guide with automated SIP instructions, nominee updates, and annual review schedule.',
      icon: CheckSquare,
      tag: 'Report Page 06',
      metric: '10-Step Execution Checklist'
    }
  ];

  return (
    <section className="py-20 md:py-28 relative overflow-hidden bg-[#020B2D]">
      {/* Background Lighting */}
      <div className="absolute top-1/3 left-1/3 w-[600px] h-[400px] bg-[#C8A24A]/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-[#071C48] border border-[#C8A24A]/30 text-[#E8C878] text-xs font-semibold uppercase tracking-widest font-sora">
            <Sparkles className="w-3.5 h-3.5 text-[#C8A24A]" />
            <span>DELIVERABLE REPORT</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif-luxury font-bold text-[#F8F7F3] tracking-tight">
            A Personalized Financial Planning Report
          </h2>

          <p className="text-base sm:text-lg text-[#BAC6DA] font-inter">
            Your customized, downloadable master blueprint formatted into 6 detailed analytical sections.
          </p>
        </div>

        {/* 6 Report Preview Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reportCards.map((item, idx) => {
            const IconComp = item.icon;

            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.08 }}
                whileHover={{ y: -6 }}
                className="p-7 rounded-3xl bg-gradient-to-b from-[#071C48]/95 to-[#020B2D]/95 border border-[#C8A24A]/30 hover:border-[#E8C878]/70 transition-all duration-300 shadow-[0_15px_40px_rgba(2,11,45,0.8)] backdrop-blur-2xl text-left flex flex-col justify-between group"
              >
                <div className="space-y-4">
                  
                  {/* Top Bar with Icon & Page Tag */}
                  <div className="flex items-center justify-between pb-3 border-b border-[#C8A24A]/15">
                    <span className="text-[10px] font-mono text-[#E8C878] bg-[#020B2D] px-2.5 py-1 rounded border border-[#C8A24A]/20 uppercase">
                      {item.tag}
                    </span>
                    <div className="p-2 rounded-lg bg-[#C8A24A]/10 text-[#E8C878] group-hover:bg-[#C8A24A] group-hover:text-[#020B2D] transition-colors">
                      <IconComp className="w-4 h-4" />
                    </div>
                  </div>

                  {/* Title & Description */}
                  <h3 className="text-lg font-serif-luxury font-bold text-[#F8F7F3] group-hover:text-[#E8C878] transition-colors">
                    {item.title}
                  </h3>

                  <p className="text-xs text-[#BAC6DA] leading-relaxed font-inter">
                    {item.description}
                  </p>

                  {/* Mini Preview Graphic */}
                  <div className="p-3 rounded-xl bg-[#020B2D]/80 border border-[#C8A24A]/20 space-y-2">
                    <div className="flex items-center justify-between text-[11px] font-sora">
                      <span className="text-[#BAC6DA]">Key Indicator:</span>
                      <span className="text-[#E8C878] font-bold">{item.metric}</span>
                    </div>
                    <div className="w-full h-1 rounded-full bg-[#071C48] overflow-hidden">
                      <div className="h-full bg-gradient-to-r from-[#E8C878] to-[#B8862B] w-full" />
                    </div>
                  </div>

                </div>

                {/* Bottom Footer Tag */}
                <div className="mt-5 pt-3 border-t border-[#C8A24A]/15 flex items-center justify-between text-[11px] text-[#BAC6DA]">
                  <span>Format: Interactive PDF & Dashboard</span>
                  <span className="text-[#E8C878] font-semibold flex items-center gap-1 font-sora">
                    <Download className="w-3.5 h-3.5" />
                    Included
                  </span>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
