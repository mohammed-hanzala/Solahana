import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  GraduationCap, 
  Briefcase, 
  HeartHandshake, 
  Building2, 
  TrendingUp, 
  Umbrella,
  ShieldCheck,
  Scroll,
  ArrowRight,
  CheckCircle2,
  Sparkles
} from 'lucide-react';

const lifeStages = [
  {
    id: 'education',
    title: 'Education',
    fullTitle: 'Education & Early Foundation',
    subtitle: 'Financial Discipline',
    ageRange: 'Age 18 - 23',
    icon: GraduationCap,
    summary: 'Build early money discipline, master basic budgeting, and set up your first liquid emergency reserve.',
    keyActions: [
      'Learn compound interest mechanics',
      'Create zero-debt budgeting habits',
      'Build initial emergency buffer',
      'Open first Direct Mutual Fund SIP'
    ],
    targetFocus: 'Financial Literacy & Discipline'
  },
  {
    id: 'career',
    title: 'Career',
    fullTitle: 'First Salary & Career Start',
    subtitle: 'Wealth Acceleration',
    ageRange: 'Age 24 - 28',
    icon: Briefcase,
    summary: 'Channel 20-30% of your rising salary directly into automated goal-based SIPs before discretionary expenses.',
    keyActions: [
      'Automate monthly 80C & 80D tax planning',
      'Construct 6-month liquid emergency fund',
      'Purchase early term life insurance cover',
      'Initiate equity-focused long-term SIPs'
    ],
    targetFocus: 'Savings Rate & Risk Protection'
  },
  {
    id: 'marriage',
    title: 'Marriage',
    fullTitle: 'Marriage & Partnership',
    subtitle: 'Joint Life Planning',
    ageRange: 'Age 28 - 32',
    icon: HeartHandshake,
    summary: 'Consolidate joint financial goals, combine risk coverage, and map short-term milestone budgets.',
    keyActions: [
      'Create shared household budget system',
      'Upgrade family floater health insurance',
      'Set dedicated wedding & milestone reserve',
      'Align joint long-term wealth targets'
    ],
    targetFocus: 'Joint Security & Protection'
  },
  {
    id: 'property',
    title: 'Property',
    fullTitle: 'Home Purchase & Assets',
    subtitle: 'Real Estate & Assets',
    ageRange: 'Age 32 - 40',
    icon: Building2,
    summary: 'Structure home loan down payments and real estate investments without liquidating core equity reserves.',
    keyActions: [
      'Compute 20%+ home down payment buffer',
      'Maintain EMI under 35% of net income',
      'Pre-pay home loan principal strategically',
      'Protect property with comprehensive home cover'
    ],
    targetFocus: 'Asset Creation & Debt Control'
  },
  {
    id: 'wealth',
    title: 'Wealth Creation',
    fullTitle: 'Peak Wealth Accumulation',
    subtitle: 'Tax Harvesting & Growth',
    ageRange: 'Age 40 - 50',
    icon: TrendingUp,
    summary: 'Harvest annual LTCG tax exemptions, balance debt-to-equity ratio, and accelerate portfolio compounding.',
    keyActions: [
      'Rebalance portfolio equity-to-debt ratio',
      'Harvest ₹1.25L annual LTCG tax exemption',
      'Maximize NPS & corporate superannuation',
      'Stress-test target FIRE wealth numbers'
    ],
    targetFocus: 'Tax Harvesting & Capital Growth'
  },
  {
    id: 'retirement',
    title: 'Retirement',
    fullTitle: 'Retirement & SWP Stream',
    subtitle: 'FIRE & Cashflow',
    ageRange: 'Age 50 - 58',
    icon: Umbrella,
    summary: 'Generate predictable inflation-adjusted monthly pension via Systematic Withdrawal Plans (SWP).',
    keyActions: [
      'Establish SWP monthly payout stream',
      'Maintain 3-year liquid debt ladder buffer',
      'Structure inflation-proof pension pool',
      'Optimize tax-free retirement corpus'
    ],
    targetFocus: 'Passive Cashflow & FIRE'
  },
  {
    id: 'health',
    title: 'Health Protection',
    fullTitle: 'Health & Medical Cover',
    subtitle: 'Healthcare Shield',
    ageRange: 'Age 55 - 65',
    icon: ShieldCheck,
    summary: 'Protect accumulated wealth against medical inflation with senior top-up health policies and dedicated medical reserves.',
    keyActions: [
      'Lock in senior top-up health insurance',
      'Create dedicated critical illness reserve',
      'Set up emergency hospital liquidity pool',
      'Review annual health coverage benefits'
    ],
    targetFocus: 'Health Shield & Capital Protection'
  },
  {
    id: 'estate',
    title: 'Estate Planning',
    fullTitle: 'Estate & Legacy Transfer',
    subtitle: 'Will & Trust Succession',
    ageRange: 'Age 60+',
    icon: Scroll,
    summary: 'Ensure seamless multi-generational wealth transfer through legally binding registered Wills and Private Family Trusts.',
    keyActions: [
      'Draft legally binding registered Will',
      'Establish Private Family Trust structure',
      'Assign updated nominees across all assets',
      'Plan tax-efficient wealth succession transfer'
    ],
    targetFocus: 'Legacy Transfer & Will Trust'
  }
];

export default function StagePlanningSection({ onOpenSearch }) {
  const [selectedStage, setSelectedStage] = useState(lifeStages[1]); // Default to Career

  const selectedIndex = lifeStages.findIndex(s => s.id === selectedStage.id);

  return (
    <section className="py-8 sm:py-10 lg:py-12 relative overflow-hidden bg-[#FCFAF6] border-y border-[#E7D7B5] text-left">
      {/* Background Ambient Glows */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[850px] h-[550px] bg-[#C89B3C]/8 rounded-full blur-[180px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-6">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#C89B3C]/10 border border-[#E7D7B5] text-xs font-semibold uppercase tracking-widest text-[#C89B3C]"
          >
            <Sparkles className="w-3.5 h-3.5 text-[#C89B3C]" />
            <span className="font-bold">LIFE STAGES PLANNING ENGINE</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-serif-luxury text-3xl sm:text-5xl font-bold text-[#1A1A1A] tracking-tight leading-tight"
          >
            Stage Planning Across Your{' '}
            <span className="text-[#C89B3C] italic font-serif-luxury">
              Financial Lifecycle.
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-base sm:text-lg text-[#555555] font-normal leading-relaxed"
          >
            Every stage of life requires a distinct financial strategy. Explore our 8-stage continuous wealth roadmap designed for your life milestones.
          </motion.p>
        </div>

        {/* ------------------------------------------------------------- */}
        {/* HORIZONTAL CONNECTED TIMELINE TRACK (ALL 8 STAGES CONTINUOUSLY CONNECTED) */}
        {/* ------------------------------------------------------------- */}
        <div className="relative pt-4 pb-2">
          {/* Desktop 8-Column Continuous Trace Line */}
          <div className="hidden lg:block absolute top-[36px] left-[6.25%] right-[6.25%] h-[3px] pointer-events-none z-0">
            {/* Base Metallic Gold Track */}
            <div className="w-full h-full bg-gradient-to-r from-[#E7D7B5] via-[#C89B3C]/40 to-[#E7D7B5] rounded-full shadow-sm" />
            
            {/* Active Illuminated Gold Progress Path */}
            <motion.div 
              className="absolute top-0 left-0 h-full bg-gradient-to-r from-[#C89B3C] via-[#E5C158] to-[#9A7326] rounded-full shadow-[0_0_12px_rgba(200,154,75,0.6)]"
              initial={false}
              animate={{
                width: `${(selectedIndex / (lifeStages.length - 1)) * 100}%`
              }}
              transition={{ duration: 0.4, ease: 'easeInOut' }}
            />
          </div>

          {/* 8 Milestone Grid Layout */}
          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-2.5 sm:gap-3 lg:gap-3.5 relative z-10">
            {lifeStages.map((stage, idx) => {
              const IconComp = stage.icon;
              const isSelected = selectedStage.id === stage.id;
              const isPassed = idx <= selectedIndex;

              return (
                <motion.button
                  key={stage.id}
                  type="button"
                  onClick={() => setSelectedStage(stage)}
                  whileHover={{ y: -5 }}
                  className={`p-3.5 sm:p-4 rounded-2xl border text-center transition-all cursor-pointer flex flex-col items-center justify-between relative group ${
                    isSelected
                      ? 'bg-white border-[#C89B3C] shadow-lg ring-2 ring-[#C89B3C]/40'
                      : 'bg-white/95 border-[#E7D7B5] hover:border-[#C89B3C] shadow-sm'
                  }`}
                >
                  {/* Top Icon Badge Header */}
                  <div className="relative mb-2 flex flex-col items-center">
                    <div 
                      className={`w-11 h-11 rounded-xl flex items-center justify-center transition-all ${
                        isSelected 
                          ? 'bg-gradient-to-br from-[#E5C158] via-[#C89B3C] to-[#9A7326] text-white shadow-md font-bold scale-110' 
                          : isPassed
                            ? 'bg-[#C89B3C]/15 text-[#9A7326] border border-[#C89B3C]'
                            : 'bg-[#FCFAF6] text-[#C89B3C] border border-[#E7D7B5] group-hover:border-[#C89B3C]'
                      }`}
                    >
                      <IconComp className="w-5 h-5" />
                    </div>

                    {/* Age Range Badge Pill */}
                    <span className={`text-[9px] font-mono font-bold mt-2 px-2 py-0.5 rounded-full border ${
                      isSelected
                        ? 'bg-[#C89B3C] text-white border-[#9A7326]'
                        : 'bg-[#FCFAF6] text-[#C89B3C] border-[#E7D7B5]'
                    }`}>
                      {stage.ageRange}
                    </span>
                  </div>

                  {/* Title & Subtitle */}
                  <div className="w-full text-center">
                    <h3 className={`text-xs font-bold font-serif-luxury leading-tight transition-colors ${
                      isSelected ? 'text-[#C89B3C]' : 'text-[#1A1A1A] group-hover:text-[#C89B3C]'
                    }`}>
                      {stage.title}
                    </h3>
                    <p className="text-[10px] text-[#64748B] font-light mt-0.5 truncate">
                      {stage.subtitle}
                    </p>
                  </div>
                </motion.button>
              );
            })}
          </div>
        </div>

        {/* ------------------------------------------------------------- */}
        {/* SELECTED STAGE DETAILED DISPLAY CARD                          */}
        {/* ------------------------------------------------------------- */}
        <AnimatePresence mode="wait">
          <motion.div
            key={selectedStage.id}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.3 }}
            className="rounded-3xl bg-white/95 border border-[#C89A4B]/35 p-6 sm:p-10 shadow-xl backdrop-blur-xl relative overflow-hidden grid grid-cols-1 lg:grid-cols-12 gap-8 items-center"
          >
            {/* Top Gold Arc Accent Line */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-48 h-[2.5px] bg-gradient-to-r from-transparent via-[#C89A4B] to-transparent rounded-full" />

            {/* Left Column — Detailed Text & Action Plan */}
            <div className="lg:col-span-7 space-y-6">
              <div className="flex items-center gap-3 flex-wrap">
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#9A7326] px-3 py-1 rounded-full bg-[#C89A4B]/10 border border-[#C89A4B]/30">
                  {selectedStage.ageRange}
                </span>
                <span className="text-xs text-[#64748B] font-medium">
                  Core Focus: <strong className="text-[#0F172A] font-semibold">{selectedStage.targetFocus}</strong>
                </span>
              </div>

              <div>
                <h3 className="font-serif-luxury text-2xl sm:text-4xl font-bold text-[#0F172A] tracking-tight">
                  {selectedStage.fullTitle}
                </h3>
                <p className="text-sm sm:text-base text-[#475569] font-normal leading-relaxed mt-3">
                  {selectedStage.summary}
                </p>
              </div>

              {/* Action Bullet Points */}
              <div className="space-y-3 pt-2">
                <h4 className="text-xs font-mono font-semibold text-[#9A7326] uppercase tracking-wider">
                  Recommended Action Plan:
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {selectedStage.keyActions.map((action, idx) => (
                    <div key={idx} className="flex items-start space-x-2.5 p-3 rounded-xl bg-[#FAF8F5] border border-[#C89A4B]/20">
                      <CheckCircle2 className="w-4 h-4 text-[#C89A4B] shrink-0 mt-0.5" />
                      <span className="text-xs text-[#0F172A] font-medium leading-normal">{action}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* CTA Button */}
              <div className="pt-2">
                <button
                  type="button"
                  onClick={onOpenSearch}
                  className="gold-glow-button px-7 py-3.5 rounded-full text-xs font-bold tracking-wide flex items-center space-x-2 cursor-pointer shadow-lg"
                >
                  <span>Build {selectedStage.title} Plan</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Right Column — Large Stage Icon & Graphic Badge Container */}
            <div className="lg:col-span-5 relative flex items-center justify-center">
              <div className="relative w-64 h-64 sm:w-72 sm:h-72 rounded-3xl bg-gradient-to-br from-[#FAF8F5] via-white to-[#FAF7F2] border-2 border-[#C89A4B]/35 shadow-[0_15px_40px_rgba(200,154,75,0.18)] flex flex-col items-center justify-center p-6 text-center overflow-hidden">
                {/* Glowing Rings Behind */}
                <div className="absolute w-48 h-48 rounded-full bg-[#C89A4B]/10 blur-2xl animate-pulse-glow" />

                {/* Big Stage Icon */}
                <div className="relative w-20 h-20 rounded-2xl bg-gradient-to-br from-[#E5C158] via-[#C89A4B] to-[#9A7326] p-[2px] shadow-xl mb-4">
                  <div className="w-full h-full bg-white rounded-[14px] flex items-center justify-center text-[#9A7326]">
                    {React.createElement(selectedStage.icon, { className: 'w-10 h-10' })}
                  </div>
                </div>

                <div className="relative z-10 space-y-1">
                  <h4 className="text-lg font-serif-luxury font-bold text-[#0F172A]">
                    {selectedStage.subtitle}
                  </h4>
                  <p className="text-xs font-mono text-[#9A7326]">
                    SOLAHANA FIDUCIARY ARCHITECTURE
                  </p>
                </div>
              </div>
            </div>

          </motion.div>
        </AnimatePresence>

      </div>
    </section>
  );
}
