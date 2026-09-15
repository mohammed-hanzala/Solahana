import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  GraduationCap, 
  Briefcase, 
  HeartHandshake, 
  Users, 
  Building2, 
  TrendingUp, 
  Umbrella,
  ArrowRight,
  CheckCircle2,
  Sparkles
} from 'lucide-react';

const lifeStages = [
  {
    id: 'student',
    title: 'Student & Early Career',
    subtitle: 'Financial Foundations',
    ageRange: 'Age 18 - 23',
    icon: GraduationCap,
    badgeColor: 'from-[#38BDF8] to-[#0284C7]',
    accentColor: '#38BDF8',
    summary: 'Build early money discipline, master basic budgeting, and set up your first emergency reserve.',
    keyActions: [
      'Learn compound interest mechanics',
      'Create zero-debt budgeting habits',
      'Build initial ₹25k-₹50k emergency buffer',
      'Open first Direct Mutual Fund SIP'
    ],
    targetFocus: 'Financial Literacy & Discipline'
  },
  {
    id: 'first-salary',
    title: 'First Salary & Career Start',
    subtitle: 'Wealth Acceleration',
    ageRange: 'Age 24 - 28',
    icon: Briefcase,
    badgeColor: 'from-[#C8A24A] to-[#9A7326]',
    accentColor: '#C8A24A',
    summary: 'Channel 20-30% of salary directly into automated goal SIPs before discretionary expenses.',
    keyActions: [
      'Automate monthly 80C & 80D tax planning',
      'Construct 6-month liquid emergency fund',
      'Purchase early term life & health insurance',
      'Initiate equity-focused long-term SIPs'
    ],
    targetFocus: 'Savings Rate & Risk Protection'
  },
  {
    id: 'marriage',
    title: 'Marriage & Partnership',
    subtitle: 'Joint Goal Alignment',
    ageRange: 'Age 28 - 32',
    icon: HeartHandshake,
    badgeColor: 'from-[#E8C878] to-[#C8A24A]',
    accentColor: '#E8C878',
    summary: 'Consolidate joint financial goals, combine risk coverage, and map short-term milestone budgets.',
    keyActions: [
      'Create shared household budget system',
      'Upgrade family floater health insurance',
      'Set dedicated wedding & honeymoon reserve',
      'Align joint long-term wealth targets'
    ],
    targetFocus: 'Joint Security & Protection'
  },
  {
    id: 'family',
    title: 'Family & Children',
    subtitle: 'Child Future Planning',
    ageRange: 'Age 32 - 38',
    icon: Users,
    badgeColor: 'from-[#34D399] to-[#059669]',
    accentColor: '#34D399',
    summary: 'Secure children higher education corpus with inflation-adjusted step-up mutual fund plans.',
    keyActions: [
      'Lock in ₹50L-₹1Cr education fund target',
      'Increase term insurance to 15x annual income',
      'Add super top-up health insurance buffer',
      'Establish annual tax-efficient gifting strategy'
    ],
    targetFocus: 'Education & Family Resilience'
  },
  {
    id: 'home',
    title: 'Home Purchase & Assets',
    subtitle: 'Real Estate & Debt Optimization',
    ageRange: 'Age 35 - 45',
    icon: Building2,
    badgeColor: 'from-[#F472B6] to-[#DB2777]',
    accentColor: '#F472B6',
    summary: 'Structure home loan down payments without liquidating emergency or retirement reserves.',
    keyActions: [
      'Compute 20%+ home down payment buffer',
      'Maintain EMI under 35% of net income',
      'Pre-pay home loan principal strategically',
      'Protect property with home insurance cover'
    ],
    targetFocus: 'Asset Creation & Debt Control'
  },
  {
    id: 'accumulation',
    title: 'Peak Wealth Accumulation',
    subtitle: 'Tax Harvesting & Multi-Asset',
    ageRange: 'Age 45 - 55',
    icon: TrendingUp,
    badgeColor: 'from-[#818CF8] to-[#4F46E5]',
    accentColor: '#818CF8',
    summary: 'Harvest annual LTCG tax exemptions, balance debt-to-equity ratio, and prepare for FIRE transition.',
    keyActions: [
      'Rebalance portfolio equity-to-debt ratio',
      'Harvest ₹1.25L annual LTCG tax exemption',
      'Maximize NPS & corporate superannuation',
      'Stress-test retirement FIRE corpus numbers'
    ],
    targetFocus: 'Tax Harvesting & Capital Growth'
  },
  {
    id: 'retirement',
    title: 'Retirement & Legacy Transfer',
    subtitle: 'FIRE & Estate Planning',
    ageRange: 'Age 55+',
    icon: Umbrella,
    badgeColor: 'from-[#E5C158] to-[#B38334]',
    accentColor: '#E5C158',
    summary: 'Generate predictable inflation-adjusted monthly pension via Systematic Withdrawal Plans (SWPs).',
    keyActions: [
      'Establish SWP monthly payout stream',
      'Maintain 3-year liquid debt ladder buffer',
      'Draft legally binding Will & Estate Trust',
      'Ensure smooth multi-generational transfer'
    ],
    targetFocus: 'Passive Cashflow & Legacy Transfer'
  }
];

export default function StagePlanningSection({ onOpenSearch }) {
  const [selectedStage, setSelectedStage] = useState(lifeStages[1]); // Default to First Salary

  return (
    <section className="py-24 relative overflow-hidden bg-gradient-to-b from-[#020B2D] via-[#041235] to-[#020B2D] text-left">
      {/* Background Ambient Glows */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[850px] h-[550px] bg-[#C8A24A]/10 rounded-full blur-[180px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-14">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#C8A24A]/15 border border-[#C8A24A]/30 text-xs font-semibold uppercase tracking-widest text-[#E8C878]"
          >
            <Sparkles className="w-3.5 h-3.5 text-[#E8C878]" />
            <span>LIFE STAGES ADVISORY ENGINE</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-serif-luxury text-3xl sm:text-5xl font-bold text-white tracking-tight leading-tight"
          >
            Stage Planning Across Your{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#C8A24A] via-[#F3E5AB] to-[#C8A24A]">
              Financial Lifecycle.
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-base sm:text-lg text-white/70 font-light leading-relaxed"
          >
            Every stage of life requires a distinct financial strategy. Explore our tailored wealth roadmap designed for your current life milestone.
          </motion.p>
        </div>

        {/* ------------------------------------------------------------- */}
        {/* HORIZONTAL CONNECTED TIMELINE TRACK (DESKTOP & MOBILE RESPONSIVE) */}
        {/* ------------------------------------------------------------- */}
        <div className="relative pt-6 pb-2">
          {/* Timeline Connecting Path Line */}
          <div className="hidden lg:block absolute top-12 left-10 right-10 h-1 bg-gradient-to-r from-[#38BDF8] via-[#C8A24A] to-[#E5C158] rounded-full -translate-y-1/2 opacity-30 z-0" />

          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-3 sm:gap-4 relative z-10">
            {lifeStages.map((stage) => {
              const IconComp = stage.icon;
              const isSelected = selectedStage.id === stage.id;

              return (
                <motion.button
                  key={stage.id}
                  type="button"
                  onClick={() => setSelectedStage(stage)}
                  whileHover={{ y: -6 }}
                  className={`p-4 rounded-2xl border text-left transition-all cursor-pointer flex flex-col justify-between relative group ${
                    isSelected
                      ? 'bg-gradient-to-b from-[#0F172A] to-[#041235] border-[#C8A24A] shadow-[0_12px_35px_rgba(200,154,75,0.35)] ring-2 ring-[#C8A24A]/50'
                      : 'bg-white/5 border-white/10 hover:border-[#C8A24A]/40 hover:bg-white/10'
                  }`}
                >
                  {/* Stage Icon */}
                  <div className="flex items-center justify-between mb-3">
                    <div 
                      className={`w-11 h-11 rounded-xl flex items-center justify-center transition-transform group-hover:scale-110 ${
                        isSelected 
                          ? 'bg-gradient-to-br from-[#E5C158] via-[#C8A24A] to-[#9A7326] text-[#020B2D] shadow-md font-bold' 
                          : 'bg-white/10 text-white'
                      }`}
                    >
                      <IconComp className="w-5 h-5" />
                    </div>

                    <span className="text-[9px] font-mono font-semibold px-2 py-0.5 rounded-full bg-white/10 text-[#E8C878] border border-white/10">
                      {stage.ageRange}
                    </span>
                  </div>

                  {/* Stage Title */}
                  <div>
                    <h3 className={`text-xs font-bold leading-snug transition-colors ${
                      isSelected ? 'text-[#E8C878]' : 'text-white group-hover:text-[#E8C878]'
                    }`}>
                      {stage.title.split('&')[0]}
                    </h3>
                    <p className="text-[10px] text-white/50 font-light mt-0.5 truncate">
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
            className="rounded-3xl bg-gradient-to-b from-[#071C48] via-[#041235] to-[#020B2D] border border-[#C8A24A]/35 p-6 sm:p-10 shadow-2xl backdrop-blur-2xl relative overflow-hidden grid grid-cols-1 lg:grid-cols-12 gap-8 items-center"
          >
            {/* Top Gold Arc Accent Line */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-48 h-[2.5px] bg-gradient-to-r from-transparent via-[#C8A24A] to-transparent rounded-full" />

            {/* Left Column — Detailed Text & Action Plan */}
            <div className="lg:col-span-7 space-y-6">
              <div className="flex items-center gap-3 flex-wrap">
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#E8C878] px-3 py-1 rounded-full bg-[#C8A24A]/15 border border-[#C8A24A]/30">
                  {selectedStage.ageRange}
                </span>
                <span className="text-xs text-white/60 font-medium">
                  Core Focus: <strong className="text-white font-semibold">{selectedStage.targetFocus}</strong>
                </span>
              </div>

              <div>
                <h3 className="font-serif-luxury text-2xl sm:text-4xl font-bold text-white tracking-tight">
                  {selectedStage.title}
                </h3>
                <p className="text-sm sm:text-base text-white/75 font-light leading-relaxed mt-3">
                  {selectedStage.summary}
                </p>
              </div>

              {/* Action Bullet Points */}
              <div className="space-y-3 pt-2">
                <h4 className="text-xs font-mono font-semibold text-[#E8C878] uppercase tracking-wider">
                  Recommended Action Plan:
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {selectedStage.keyActions.map((action, idx) => (
                    <div key={idx} className="flex items-start space-x-2.5 p-3 rounded-xl bg-white/5 border border-white/10">
                      <CheckCircle2 className="w-4 h-4 text-[#C8A24A] shrink-0 mt-0.5" />
                      <span className="text-xs text-white/90 font-medium leading-normal">{action}</span>
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
                  <span>Build {selectedStage.title.split('&')[0]} Plan</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Right Column — Large Stage Icon & Graphic Badge Container */}
            <div className="lg:col-span-5 relative flex items-center justify-center">
              <div className="relative w-64 h-64 sm:w-72 sm:h-72 rounded-3xl bg-gradient-to-br from-[#0F172A] via-[#041235] to-[#020B2D] border-2 border-[#C8A24A]/40 shadow-[0_0_50px_rgba(200,154,75,0.2)] flex flex-col items-center justify-center p-6 text-center overflow-hidden">
                {/* Glowing Rings Behind */}
                <div className="absolute w-48 h-48 rounded-full bg-[#C8A24A]/15 blur-2xl animate-pulse-glow" />

                {/* Big Stage Icon */}
                <div className="relative w-20 h-20 rounded-2xl bg-gradient-to-br from-[#E5C158] via-[#C8A24A] to-[#9A7326] p-[2px] shadow-xl mb-4">
                  <div className="w-full h-full bg-[#020B2D] rounded-[14px] flex items-center justify-center text-[#E8C878]">
                    {React.createElement(selectedStage.icon, { className: 'w-10 h-10' })}
                  </div>
                </div>

                <div className="relative z-10 space-y-1">
                  <h4 className="text-lg font-serif-luxury font-bold text-white">
                    {selectedStage.subtitle}
                  </h4>
                  <p className="text-xs font-mono text-[#E8C878]">
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
