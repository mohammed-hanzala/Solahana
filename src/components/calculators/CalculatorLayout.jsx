import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate, useLocation } from 'react-router-dom';
import { 
  Calculator, 
  TrendingUp, 
  Target, 
  ShieldCheck, 
  Building2, 
  Sparkles, 
  RotateCcw, 
  BookmarkPlus, 
  Share2, 
  ChevronRight, 
  ArrowLeft,
  DollarSign,
  PieChart,
  Percent,
  Layers,
  CheckCircle2
} from 'lucide-react';

export const CALCULATOR_META = [
  {
    id: 'sip',
    path: '/calculators/sip',
    title: 'SIP Calculator',
    shortDesc: 'Calculate wealth creation with regular SIPs & optional annual step-up.',
    icon: TrendingUp,
    badge: 'Popular',
    category: 'Investing',
  },
  {
    id: 'emi',
    path: '/calculators/emi',
    title: 'EMI Calculator',
    shortDesc: 'Compute monthly home, car, or personal loan EMIs & interest schedule.',
    icon: Calculator,
    badge: 'Loans',
    category: 'Loans',
  },
  {
    id: 'retirement',
    path: '/calculators/retirement',
    title: 'Retirement Planner',
    shortDesc: 'Plan your inflation-adjusted target corpus & monthly FIRE savings.',
    icon: ShieldCheck,
    badge: 'Wealth',
    category: 'Retirement',
  },
  {
    id: 'goal-planner',
    path: '/calculators/goal-planner',
    title: 'Goal Planner',
    shortDesc: 'Structure investments for children education, home purchase & major goals.',
    icon: Target,
    badge: 'Goals',
    category: 'Planning',
  },
  {
    id: 'lumpsum',
    path: '/calculators/lumpsum',
    title: 'Lumpsum Calculator',
    shortDesc: 'Simulate one-time investment compounding returns over custom timelines.',
    icon: PieChart,
    badge: 'Investment',
    category: 'Investing',
  },
  {
    id: 'fd',
    path: '/calculators/fd',
    title: 'FD Calculator',
    shortDesc: 'Calculate Fixed Deposit maturity amounts & compound interest yield.',
    icon: Building2,
    badge: 'Fixed Income',
    category: 'Savings',
  },
  {
    id: 'inflation',
    path: '/calculators/inflation',
    title: 'Inflation Calculator',
    shortDesc: 'Measure future purchasing power loss & inflation-adjusted future cost.',
    icon: Percent,
    badge: 'Economics',
    category: 'Planning',
  },
];

export default function CalculatorLayout({ title, subtitle, icon: HeaderIcon, onReset, onSave, children }) {
  const navigate = useNavigate();
  const location = useLocation();
  const [toastMessage, setToastMessage] = useState('');

  const handleActionToast = (msg) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(''), 3500);
  };

  const currentCalc = CALCULATOR_META.find(c => c.path === location.pathname) || CALCULATOR_META[0];

  return (
    <div className="min-h-screen pt-28 pb-20 bg-[#020B2D] text-[#F8F7F3] relative overflow-hidden">
      {/* Background Ambient Lighting */}
      <div className="absolute top-20 left-1/4 w-[500px] h-[500px] bg-[#C8A24A]/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[400px] h-[400px] bg-[#071C48]/60 rounded-full blur-[120px] pointer-events-none" />

      {/* Toast Notification */}
      <AnimatePresence>
        {toastMessage && (
          <motion.div
            initial={{ opacity: 0, y: -20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.95 }}
            className="fixed top-24 right-6 z-50 px-5 py-3.5 rounded-2xl bg-[#071C48] border border-[#C8A24A]/50 text-xs font-semibold text-[#E8C878] shadow-[0_10px_30px_rgba(200,162,74,0.3)] flex items-center gap-2.5"
          >
            <CheckCircle2 className="w-4 h-4 text-[#C8A24A]" />
            <span>{toastMessage}</span>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Breadcrumbs & Back Link */}
        <div className="flex items-center justify-between mb-6">
          <button
            onClick={() => navigate('/calculators')}
            className="inline-flex items-center gap-2 text-xs font-medium text-[#BAC6DA] hover:text-[#E8C878] transition-colors cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to All Calculators</span>
          </button>

          <div className="hidden sm:flex items-center gap-2 text-xs font-mono text-[#BAC6DA]/70">
            <span>Solahana</span>
            <ChevronRight className="w-3 h-3 text-[#C8A24A]" />
            <span>Calculators</span>
            <ChevronRight className="w-3 h-3 text-[#C8A24A]" />
            <span className="text-[#E8C878] font-semibold">{currentCalc.title}</span>
          </div>
        </div>

        {/* Header Header Banner */}
        <div className="relative mb-8 p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-[#071C48]/90 via-[#041235]/95 to-[#020B2D] border border-[#C8A24A]/30 shadow-2xl backdrop-blur-2xl overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl from-[#C8A24A]/15 to-transparent rounded-full blur-2xl pointer-events-none" />
          
          <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div className="flex items-start gap-4">
              <div className="w-14 h-14 rounded-2xl bg-[#C8A24A]/15 border border-[#C8A24A]/40 text-[#E8C878] flex items-center justify-center shrink-0 shadow-[0_0_20px_rgba(200,162,74,0.3)]">
                {HeaderIcon ? <HeaderIcon className="w-7 h-7" /> : <Calculator className="w-7 h-7" />}
              </div>
              <div className="space-y-1">
                <div className="flex items-center gap-2 flex-wrap">
                  <span className="text-[10px] uppercase font-mono tracking-widest text-[#E8C878] px-2.5 py-0.5 rounded-full bg-[#C8A24A]/15 border border-[#C8A24A]/30">
                    {currentCalc.badge || 'FINTECH ADVISORY'}
                  </span>
                  <span className="text-[10px] uppercase font-mono tracking-widest text-emerald-400 px-2.5 py-0.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 flex items-center gap-1">
                    <Sparkles className="w-3 h-3" /> Live Precision Engine
                  </span>
                </div>
                <h1 className="font-serif-luxury text-2xl sm:text-3xl font-bold text-white tracking-tight">
                  {title}
                </h1>
                <p className="text-xs text-[#BAC6DA] max-w-2xl font-light leading-relaxed">
                  {subtitle}
                </p>
              </div>
            </div>

            {/* Top Action Buttons */}
            <div className="flex items-center gap-2 shrink-0 self-start md:self-auto">
              {onReset && (
                <button
                  onClick={onReset}
                  className="px-3.5 py-2 rounded-xl bg-[#071C48] hover:bg-[#071C48]/80 border border-white/10 text-xs font-semibold text-[#F8F7F3] hover:text-[#E8C878] transition-all flex items-center gap-1.5 cursor-pointer shadow"
                  title="Reset inputs to defaults"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                  <span>Reset</span>
                </button>
              )}

              <button
                onClick={() => {
                  if (onSave) onSave();
                  handleActionToast('Calculation plan saved successfully');
                }}
                className="px-4 py-2 rounded-xl gold-glow-button text-xs font-bold text-[#020B2D] flex items-center gap-1.5 cursor-pointer shadow-lg"
              >
                <BookmarkPlus className="w-4 h-4" />
                <span>Save Calculation</span>
              </button>

              <button
                onClick={() => handleActionToast('Shareable link copied to clipboard')}
                className="p-2 rounded-xl bg-[#071C48] hover:bg-[#071C48]/80 border border-white/10 text-white/70 hover:text-white transition-all cursor-pointer shadow"
                title="Share calculation"
              >
                <Share2 className="w-4 h-4 text-[#E8C878]" />
              </button>
            </div>
          </div>
        </div>

        {/* Main Grid: Sidebar Navigator + Active Calculator Body */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Sidebar Calculator Switcher (Desktop) */}
          <aside className="hidden lg:block lg:col-span-3 space-y-3 sticky top-28">
            <div className="p-4 rounded-2xl bg-[#071C48]/70 border border-[#C8A24A]/25 backdrop-blur-xl">
              <h3 className="text-xs font-bold font-serif-luxury text-[#E8C878] uppercase tracking-wider mb-3 flex items-center justify-between">
                <span>Calculators Engine</span>
                <Layers className="w-3.5 h-3.5 text-[#C8A24A]" />
              </h3>

              <div className="space-y-1.5">
                {CALCULATOR_META.map((calc) => {
                  const CalcIcon = calc.icon;
                  const isActive = location.pathname === calc.path;

                  return (
                    <button
                      key={calc.id}
                      onClick={() => navigate(calc.path)}
                      className={`w-full text-left p-2.5 rounded-xl text-xs font-semibold transition-all flex items-center gap-3 cursor-pointer ${
                        isActive
                          ? 'bg-[#C8A24A] text-[#020B2D] font-bold shadow-lg shadow-[#C8A24A]/20'
                          : 'text-[#BAC6DA] hover:text-white hover:bg-[#020B2D]/80 border border-transparent hover:border-[#C8A24A]/20'
                      }`}
                    >
                      <div className={`p-1.5 rounded-lg shrink-0 ${
                        isActive ? 'bg-[#020B2D]/20 text-[#020B2D]' : 'bg-[#C8A24A]/10 text-[#C8A24A]'
                      }`}>
                        <CalcIcon className="w-4 h-4" />
                      </div>
                      <span className="truncate flex-1">{calc.title}</span>
                      {isActive && <ChevronRight className="w-3.5 h-3.5 shrink-0 text-[#020B2D]" />}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* SEBI Compliance Card */}
            <div className="p-4 rounded-2xl bg-gradient-to-b from-[#071C48]/50 to-[#020B2D] border border-white/10 text-left space-y-2">
              <div className="flex items-center gap-2 text-[#E8C878] text-[11px] font-semibold font-mono">
                <ShieldCheck className="w-4 h-4" />
                <span>SOLAHANA PRECISION</span>
              </div>
              <p className="text-[11px] text-[#BAC6DA]/70 font-light leading-relaxed">
                All projections account for compound interest formulas used by top Indian asset management companies and SEBI standards.
              </p>
            </div>
          </aside>

          {/* Active Calculator Main Area */}
          <main className="lg:col-span-9 space-y-8">
            {children}
          </main>
        </div>

      </div>
    </div>
  );
}
