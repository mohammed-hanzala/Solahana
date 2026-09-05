import React from 'react';
import { motion } from 'framer-motion';
import { 
  Home, 
  GraduationCap, 
  ShieldAlert, 
  Target, 
  TrendingUp, 
  Calculator, 
  ArrowRight,
  Sparkles,
  CheckCircle2,
  Lock
} from 'lucide-react';

export default function FinancialGoals() {
  const goals = [
    {
      title: 'Dream Home',
      category: 'Real Estate & Down Payment',
      desc: 'Plan for down payments, registration costs, and structured mortgage payoff without straining your monthly lifestyle.',
      icon: Home,
      progress: 62,
      targetText: 'Target: ₹45.0L by 2028',
      status: 'On Track',
      color: 'from-amber-500/20 to-transparent',
    },
    {
      title: 'Child Education',
      category: 'Higher Studies & University Fund',
      desc: 'Build an inflation-adjusted fund for top Indian and overseas university tuition, accommodation, and global exposure.',
      icon: GraduationCap,
      progress: 82,
      targetText: 'Target: ₹50.0L by 2032',
      status: '82% Funded',
      color: 'from-emerald-500/20 to-transparent',
    },
    {
      title: 'Emergency Fund',
      category: 'Liquid Security Reserve',
      desc: 'Ring-fence your family against unexpected life events with 6 to 12 months of liquid reserves in high-yield safe instruments.',
      icon: ShieldAlert,
      progress: 100,
      targetText: 'Reserve: ₹12.0L Fully Shielded',
      status: '100% Secured',
      color: 'from-blue-500/20 to-transparent',
    },
    {
      title: 'Retirement Planning',
      category: 'FIRE Early Retirement',
      desc: 'Create an inflation-indexed passive income stream that funds your dream lifestyle with complete independence after age 48.',
      icon: Target,
      progress: 68,
      targetText: 'Corpus: ₹6.8 Cr / ₹10.0 Cr Target',
      status: '68% Complete',
      color: 'from-[#C8A24A]/25 to-transparent',
    },
    {
      title: 'Wealth Creation',
      category: 'Multi-Asset Compounding',
      desc: 'Grow long-term capital through disciplined step-up SIPs, direct equities, PMS, and fixed income multi-asset strategy.',
      icon: TrendingUp,
      progress: 75,
      targetText: 'Net Worth: ₹1.84 Cr (+14.2% p.a.)',
      status: 'Disciplined',
      color: 'from-purple-500/20 to-transparent',
    },
    {
      title: 'Tax Planning',
      category: 'Section 80C, 80D & LTCG Harvesting',
      desc: 'Legally reduce your tax burden under Section 80C, 80D, NPS, and automated capital gains tax-loss harvesting.',
      icon: Calculator,
      progress: 90,
      targetText: 'Savings: ₹48,500 Tax Saved FY25',
      status: 'Optimized',
      color: 'from-emerald-500/20 to-transparent',
    },
  ];

  return (
    <section className="relative z-10 py-24 bg-gradient-to-b from-[#020B2D] via-[#041442] to-[#020B2D] border-t border-[#C8A24A]/15 overflow-hidden">
      
      {/* Background Radial Glow */}
      <div className="absolute top-1/3 right-10 w-[550px] h-[550px] bg-[#C8A24A]/8 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center space-y-4 max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full gold-badge text-xs font-semibold text-[#E8C878] border border-[#C8A24A]/35 shadow-[0_0_15px_rgba(200,162,74,0.2)]"
          >
            <Sparkles className="w-3.5 h-3.5 text-[#E8C878]" />
            <span className="font-sora tracking-wide uppercase text-[11px]">GOAL-ALIGNED ROADMAP</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-serif-luxury font-bold text-[#F8F7F3] tracking-tight leading-tight"
          >
            Every Goal Deserves a{' '}
            <span className="gold-gradient-text italic font-serif-luxury">Financial Plan</span>.
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-base sm:text-lg text-[#BAC6DA] font-inter leading-relaxed"
          >
            Structure your investments around life's biggest milestones with clarity, discipline, and inflation protection.
          </motion.p>
        </div>

        {/* 6 Large Premium Goal Cards (3 Cols Desktop, 2 Cols Tablet, 1 Col Mobile) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {goals.map((goal, idx) => {
            const IconComp = goal.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                whileHover={{ y: -8 }}
                className="group relative rounded-[28px] p-7 bg-[#071C48]/65 hover:bg-[#071C48]/95 border border-[#C8A24A]/25 hover:border-[#C8A24A]/60 backdrop-blur-2xl transition-all duration-500 shadow-[0_15px_40px_rgba(2,11,45,0.8)] hover:shadow-[0_20px_50px_rgba(200,162,74,0.22)] overflow-hidden flex flex-col justify-between"
              >
                {/* Inner Gradient Background Accent */}
                <div className={`absolute top-0 right-0 w-48 h-48 bg-gradient-to-bl ${goal.color} rounded-full blur-3xl pointer-events-none opacity-40 group-hover:opacity-100 transition-opacity duration-500`} />

                <div>
                  {/* Top Header: Gold Icon + Status Chip */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-13 h-13 rounded-2xl bg-gradient-to-br from-[#E8C878]/20 via-[#C8A24A]/15 to-[#020B2D] border border-[#C8A24A]/35 flex items-center justify-center text-[#E8C878] shadow-[0_0_12px_rgba(200,162,74,0.25)] group-hover:rotate-6 transition-transform duration-300">
                      <IconComp className="w-6 h-6" />
                    </div>

                    <span className="px-3 py-1 rounded-full text-[10px] font-bold font-sora tracking-wider bg-[#020B2D]/80 text-[#E8C878] border border-[#C8A24A]/30">
                      {goal.status}
                    </span>
                  </div>

                  {/* Title & Category */}
                  <h3 className="text-xl font-serif-luxury font-bold text-[#F8F7F3] group-hover:text-[#E8C878] transition-colors duration-300 mb-1">
                    {goal.title}
                  </h3>
                  <div className="text-xs font-semibold text-[#C8A24A] font-sora mb-3">
                    {goal.category}
                  </div>

                  {/* Description */}
                  <p className="text-sm text-[#BAC6DA] font-inter leading-relaxed mb-6">
                    {goal.desc}
                  </p>

                  {/* Progress Bar & Target Element */}
                  <div className="p-3.5 rounded-xl bg-[#020B2D]/80 border border-[#C8A24A]/20 space-y-2 mb-6">
                    <div className="flex justify-between items-center text-xs font-num">
                      <span className="text-[#BAC6DA] text-[10px] uppercase font-sora">Plan Completion</span>
                      <span className="text-[#E8C878] font-bold">{goal.progress}%</span>
                    </div>
                    <div className="w-full h-2 bg-[#071C48] rounded-full overflow-hidden border border-[#C8A24A]/20">
                      <div 
                        className="h-full bg-gradient-to-r from-[#E8C878] via-[#C8A24A] to-[#B8862B] rounded-full transition-all duration-1000"
                        style={{ width: `${goal.progress}%` }}
                      />
                    </div>
                    <div className="text-[11px] text-[#BAC6DA] font-num flex items-center justify-between pt-0.5">
                      <span>{goal.targetText}</span>
                    </div>
                  </div>
                </div>

                {/* Footer Arrow Link */}
                <div className="pt-4 border-t border-[#C8A24A]/15 flex items-center justify-between">
                  <span className="text-xs font-bold text-[#E8C878] group-hover:text-white transition-colors">
                    Plan This Goal
                  </span>
                  <div className="w-8 h-8 rounded-full bg-[#C8A24A]/15 border border-[#C8A24A]/30 flex items-center justify-center text-[#E8C878] group-hover:bg-[#C8A24A] group-hover:text-[#020B2D] group-hover:translate-x-1.5 transition-all duration-300">
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </div>

              </motion.div>
            );
          })}
        </div>

      </div>

    </section>
  );
}
