import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ArrowRight, 
  Sparkles, 
  ShieldCheck, 
  Users, 
  Star, 
  Coins, 
  Umbrella, 
  HeartHandshake, 
  FileText, 
  Building2, 
  Heart, 
  GraduationCap,
  ChevronLeft,
  ChevronRight,
  Calculator,
  TrendingUp,
  Award,
  CheckCircle2,
  Calendar,
  Layers,
  PieChart,
  Shield,
  Clock
} from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';

import HeroFintechIllustration from './illustrations/HeroFintechIllustration';
import TaxPlanningIllustration from './illustrations/TaxPlanningIllustration';
import InvestmentPortfolioIllustration from './illustrations/InvestmentPortfolioIllustration';
import RetirementIllustration from './illustrations/RetirementIllustration';
import GoalPlanningIllustration from './illustrations/GoalPlanningIllustration';
import InsuranceProtectionIllustration from './illustrations/InsuranceProtectionIllustration';

export default function Hero({ onOpenSearch }) {
  const navigate = useNavigate();
  const [activeSlide, setActiveSlide] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  // Client-Approved Premium Storytelling Slides
  const heroSlides = [
    {
      id: 'slide-1',
      badge: 'FINANCIAL PLANNING',
      titleLine1: 'Your Money Deserves a Plan.',
      titleLine2: 'Not Just an Investment.',
      scriptText: 'Fiduciary Advisory.',
      subtitle: 'From marriage to retirement, education to wealth creation — Solahana brings every financial goal into one personalised financial roadmap.',
      ctaText: 'Start Your Comprehensive Plan',
      ctaRoute: '/contact',
      emotion: 'Hope. Ambition. Future.'
    },
    {
      id: 'slide-2',
      badge: 'WEALTH CREATION',
      titleLine1: 'Saving Builds Security.',
      titleLine2: 'Planning Builds Wealth.',
      scriptText: 'Every Rupee Has A Job.',
      subtitle: 'Personalised investment planning across SIPs, direct mutual funds, fixed income, emergency funds and compounding long-term wealth creation.',
      ctaText: 'Build My Wealth Plan',
      ctaRoute: '/investments',
      emotion: 'Growth. Confidence.'
    },
    {
      id: 'slide-3',
      badge: 'RETIREMENT PLANNING',
      titleLine1: 'Retirement Is Not the End.',
      titleLine2: 'It\'s the Freedom You Plan For.',
      scriptText: 'Live Freely.',
      subtitle: 'Build an inflation-adjusted retirement corpus with personalized drawdown planning, pension structuring, and long-term wealth freedom.',
      ctaText: 'Plan My Retirement',
      ctaRoute: '/calculators/retirement',
      emotion: 'Peace. Freedom.'
    },
    {
      id: 'slide-4',
      badge: 'FINANCIAL GOALS',
      titleLine1: 'Dreams Need More Than Hope.',
      titleLine2: 'They Need a Plan.',
      scriptText: 'Together We Grow.',
      subtitle: 'Marriage, children\'s education, home purchase, emergency fund and every important milestone planned through one financial strategy.',
      ctaText: 'Plan My Family Goals',
      ctaRoute: '/goals',
      emotion: 'Security. Family. Future.'
    },
    {
      id: 'slide-5',
      badge: 'TAX PLANNING',
      titleLine1: 'Save Taxes Legally.',
      titleLine2: 'Compound Wealth Faster.',
      scriptText: 'Smarter Strategy.',
      subtitle: 'Optimize Section 80C, 80D, NPS and long-term tax harvesting with personalised tax-saving strategies designed for your financial goals.',
      ctaText: 'Explore Tax Advisory',
      ctaRoute: '/tax-planning',
      emotion: 'Confidence. Savings.'
    },
    {
      id: 'slide-6',
      badge: 'FINANCIAL SECURITY',
      titleLine1: 'Protect Your Wealth.',
      titleLine2: 'Protect Your Family.',
      scriptText: 'Plan Beyond Investments.',
      subtitle: 'Health insurance, life insurance, emergency planning and estate planning integrated into one financial advisory platform.',
      ctaText: 'Secure My Future',
      ctaRoute: '/contact',
      emotion: 'Protection. Trust.'
    }
  ];

  // Autoplay (6 seconds), pause on hover
  useEffect(() => {
    if (isHovered) return;
    const timer = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % heroSlides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [isHovered, heroSlides.length]);

  // Touch Swipe Handlers for Mobile
  const handleTouchStart = (e) => {
    touchStartX.current = e.targetTouches[0].clientX;
  };

  const handleTouchMove = (e) => {
    touchEndX.current = e.targetTouches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (!touchStartX.current || !touchEndX.current) return;
    const distance = touchStartX.current - touchEndX.current;
    if (distance > 50) {
      // Swiped Left -> Next Slide
      setActiveSlide((prev) => (prev + 1) % heroSlides.length);
    } else if (distance < -50) {
      // Swiped Right -> Previous Slide
      setActiveSlide((prev) => (prev === 0 ? heroSlides.length - 1 : prev - 1));
    }
    touchStartX.current = 0;
    touchEndX.current = 0;
  };

  const currentSlide = heroSlides[activeSlide];

  // 7 Orbital Nodes (Estate Planning Removed Completely to Eliminate Figure Overlap)
  // Perfectly Symmetrical Circular Placement with Zero Collision
  const orbitalNodes = [
    { title: 'Wealth Creation', icon: Coins, x: 0, y: -215 },
    { title: 'Retirement', icon: Umbrella, x: 170, y: -130 },
    { title: 'Tax Planning', icon: FileText, x: 215, y: 20 },
    { title: 'Health Insurance', icon: Heart, x: 150, y: 150 },
    { title: 'Property', icon: Building2, x: -150, y: 150 },
    { title: 'Marriage', icon: HeartHandshake, x: -215, y: 20 },
    { title: 'Education', icon: GraduationCap, x: -170, y: -130 },
  ];  return (
    <section 
      className="relative min-h-[85vh] sm:min-h-[90vh] lg:min-h-screen pt-24 sm:pt-28 pb-12 sm:pb-16 lg:pt-32 lg:pb-20 bg-[#FAF8F5] overflow-hidden flex flex-col justify-between select-none"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      
      {/* ------------------------------------------------------------- */}
      {/* BACKGROUND LAYERS & SOFT IVORY CURVED SHAPES + SUNRISE SKYLINE */}
      {/* ------------------------------------------------------------- */}
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
        {/* Soft Golden Sunrise Gradient */}
        <div className="absolute top-0 right-0 w-3/5 h-full bg-gradient-to-l from-[#F5F0EB] via-[#FAF8F5]/90 to-transparent" />
        <div className="absolute top-1/4 left-1/3 w-[350px] sm:w-[750px] h-[350px] sm:h-[750px] bg-[#C89A4B]/10 blur-[100px] sm:blur-[170px] rounded-full" />
        <div className="absolute top-10 right-10 w-[280px] sm:w-[550px] h-[280px] sm:h-[550px] bg-[#E5C158]/12 blur-[80px] sm:blur-[140px] rounded-full" />

        {/* Sunrise Skyline Silhouette Horizon */}
        <div className="absolute bottom-0 inset-x-0 h-28 sm:h-44 opacity-15 pointer-events-none flex items-end justify-center">
          <svg className="w-full h-full" viewBox="0 0 1440 200" preserveAspectRatio="none" fill="none">
            <path d="M0 200 L0 160 L40 160 L40 120 L80 120 L80 160 L140 160 L140 90 L180 90 L180 160 L240 160 L240 70 L290 70 L290 160 L360 160 L360 110 L410 110 L410 160 L500 160 L500 40 L560 40 L560 160 L640 160 L640 85 L700 85 L700 160 L780 160 L780 60 L840 60 L840 160 L920 160 L920 100 L980 100 L980 160 L1060 160 L1060 50 L1120 50 L1120 160 L1200 160 L1200 95 L1260 95 L1260 160 L1340 160 L1340 130 L1440 130 L1440 200 Z" fill="url(#skylineGrad)" />
            <defs>
              <linearGradient id="skylineGrad" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#C89A4B" stopOpacity="0.8" />
                <stop offset="100%" stopColor="#0F172A" stopOpacity="0.1" />
              </linearGradient>
            </defs>
          </svg>
        </div>

        {/* Dynamic Curved Arcs */}
        <svg className="absolute inset-0 w-full h-full opacity-40" viewBox="0 0 1440 900" fill="none">
          <path d="M-200 450C250 220 750 120 1600 550" stroke="url(#goldHeroArc1)" strokeWidth="2.5" strokeDasharray="6 6" />
          <path d="M-100 650C350 350 950 250 1700 700" stroke="url(#goldHeroArc2)" strokeWidth="1.5" />
          <defs>
            <linearGradient id="goldHeroArc1" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor="#C89A4B" stopOpacity="0" />
              <stop offset="50%" stopColor="#C89A4B" stopOpacity="0.7" />
              <stop offset="100%" stopColor="#E5C158" stopOpacity="0" />
            </linearGradient>
            <linearGradient id="goldHeroArc2" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor="#E5C158" stopOpacity="0" />
              <stop offset="50%" stopColor="#C89A4B" stopOpacity="0.4" />
              <stop offset="100%" stopColor="#9A7326" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      {/* ------------------------------------------------------------- */}
      {/* SIDE ARROW NAVIGATION BUTTONS (LEFT & RIGHT OF HERO)          */}
      {/* ------------------------------------------------------------- */}
      <button
        onClick={() => setActiveSlide((prev) => (prev === 0 ? heroSlides.length - 1 : prev - 1))}
        className="absolute left-2 sm:left-6 lg:left-8 top-1/2 -translate-y-1/2 z-30 p-2 sm:p-4 rounded-full bg-white/80 hover:bg-white border border-[#C89A4B]/40 text-[#0F172A] shadow-lg backdrop-blur-md transition-all hover:scale-110 hover:border-[#C89A4B] cursor-pointer"
        title="Previous Slide"
        aria-label="Previous Slide"
      >
        <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5 text-[#0F172A]" />
      </button>

      <button
        onClick={() => setActiveSlide((prev) => (prev + 1) % heroSlides.length)}
        className="absolute right-2 sm:right-6 lg:right-8 top-1/2 -translate-y-1/2 z-30 p-2 sm:p-4 rounded-full bg-white/80 hover:bg-white border border-[#C89A4B]/40 text-[#0F172A] shadow-lg backdrop-blur-md transition-all hover:scale-110 hover:border-[#C89A4B] cursor-pointer"
        title="Next Slide"
        aria-label="Next Slide"
      >
        <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5 text-[#0F172A]" />
      </button>

      {/* ------------------------------------------------------------- */}
      {/* MAIN CAROUSEL SLIDE CONTAINER (Stacked Vertically on Mobile)  */}
      {/* ------------------------------------------------------------- */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10 my-auto">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-6 sm:gap-8 lg:gap-10">
          
          {/* ========================================================= */}
          {/* LEFT COLUMN: TYPOGRAPHY & STORYTELLING COPY               */}
          {/* ========================================================= */}
          <div className="w-full lg:w-[42%] text-left space-y-3 sm:space-y-5 shrink-0">
            {/* Left Column Text Animation */}
            <AnimatePresence mode="wait">
              <motion.div
                key={currentSlide.id}
                initial={{ opacity: 0, y: 15, x: -10 }}
                animate={{ opacity: 1, y: 0, x: 0 }}
                exit={{ opacity: 0, y: -15, x: 10 }}
                transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1.0] }}
                className="space-y-2 sm:space-y-4"
              >
                {/* Eyebrow Category Label */}
                <div className="inline-flex items-center space-x-2">
                  <span className="text-[11px] sm:text-xs font-sora font-semibold tracking-widest text-[#64748B] uppercase">
                    {currentSlide.badge}
                  </span>
                </div>

                {/* Editorial Luxury Headline */}
                <h1 className="text-2xl sm:text-4xl lg:text-6xl font-serif-luxury font-bold text-[#0F172A] leading-tight tracking-tight">
                  {currentSlide.titleLine1} <br />
                  <span>{currentSlide.titleLine2}</span> <br />
                  <span className="font-alex-brush text-4xl sm:text-5xl lg:text-7xl text-[#C89A4B] font-normal block mt-0.5 sm:mt-1">
                    {currentSlide.scriptText}
                  </span>
                </h1>

                {/* Description */}
                <p className="text-xs sm:text-base lg:text-lg text-[#475569] leading-relaxed max-w-xl font-inter font-normal pt-0.5">
                  {currentSlide.subtitle}
                </p>
              </motion.div>
            </AnimatePresence>

            {/* Primary Action Button (Gold Pill with Shimmer & Arrow Slide) */}
            <div className="pt-1 sm:pt-2">
              <Link
                to={currentSlide.ctaRoute}
                className="gold-glow-button px-6 sm:px-9 py-3 sm:py-4 rounded-full text-xs sm:text-sm font-bold text-white tracking-wide inline-flex items-center justify-center space-x-2.5 sm:space-x-3 group shadow-[0_10px_30px_rgba(200,154,75,0.35)] cursor-pointer hover:shadow-[0_15px_40px_rgba(200,154,75,0.5)] transition-all"
              >
                <span>{currentSlide.ctaText}</span>
                <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 group-hover:translate-x-1.5 transition-transform duration-300" />
              </Link>
            </div>

            {/* Trust Strip Indicator */}
            <div className="pt-4 sm:pt-6 border-t border-[#C89A4B]/20 flex flex-wrap items-center gap-3 sm:gap-6 text-[11px] sm:text-xs text-[#0F172A] font-inter">
              <div className="flex items-center space-x-1.5 sm:space-x-2 group cursor-pointer transition-transform hover:scale-105">
                <ShieldCheck className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#C89A4B] shrink-0" />
                <span className="font-semibold">Trusted <span className="text-[#64748B] font-normal">by Thousands</span></span>
              </div>
              <span className="text-[#C89A4B]/40 hidden sm:inline">|</span>
              <div className="flex items-center space-x-1.5 sm:space-x-2 group cursor-pointer transition-transform hover:scale-105">
                <Users className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#C89A4B] shrink-0" />
                <span className="font-semibold">Transparent <span className="text-[#64748B] font-normal">Process</span></span>
              </div>
              <span className="text-[#C89A4B]/40 hidden sm:inline">|</span>
              <div className="flex items-center space-x-1.5 sm:space-x-2 group cursor-pointer transition-transform hover:scale-105">
                <Star className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#C89A4B] shrink-0" />
                <span className="font-semibold">Personalised <span className="text-[#64748B] font-normal">For You</span></span>
              </div>
            </div>

          </div>

          {/* ========================================================= */}
          {/* RIGHT COLUMN: ILLUSTRATION FOCUS                           */}
          {/* ========================================================= */}
          <div className="w-full lg:w-[58%] relative flex items-center justify-center min-h-[350px] sm:min-h-[460px] lg:min-h-[620px] -mt-2 sm:mt-0 lg:mt-0">
            
            <AnimatePresence mode="wait">
              <motion.div
                key={currentSlide.id}
                initial={{ opacity: 0, scale: 0.97, x: 15 }}
                animate={{ opacity: 1, scale: 1.0, x: 0 }}
                exit={{ opacity: 0, scale: 0.97, x: -15 }}
                transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1.0] }}
                className="w-full max-w-[390px] sm:max-w-[480px] lg:max-w-[620px] aspect-square relative flex items-center justify-center overflow-visible"
              >
                {activeSlide === 0 && <HeroFintechIllustration onOpenSearch={onOpenSearch} />}
                {activeSlide === 1 && <TaxPlanningIllustration />}
                {activeSlide === 2 && <RetirementIllustration />}
                {activeSlide === 3 && <InvestmentPortfolioIllustration />}
                {activeSlide === 4 && <GoalPlanningIllustration />}
                {activeSlide === 5 && <InsuranceProtectionIllustration />}
              </motion.div>
            </AnimatePresence>

          </div>

        </div>

      </div>

      {/* ========================================================= */}
      {/* HERO FOOTER TICKER BANNER                                 */}
      {/* ========================================================= */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-20 pt-2 pb-6 sm:pb-2">
        <div className="border-t border-[#C89A4B]/20 pt-3 sm:pt-4 flex items-center justify-between text-[11px] sm:text-xs font-inter text-[#64748B]">
          
          {/* Ticker Banner & Emotion Label */}
          <div className="flex items-center space-x-2 sm:space-x-3 font-sora font-semibold tracking-widest text-[#0F172A] uppercase">
            <span>PLAN TODAY</span>
            <span className="text-[#C89B3C]">|</span>
            <span>SECURE TOMORROW</span>
            <span className="text-[#C89B3C] hidden md:inline">•</span>
            <span className="text-[#C89B3C] font-serif-luxury lowercase tracking-normal italic text-sm hidden md:inline">
              {currentSlide.emotion}
            </span>
          </div>

        </div>
      </div>

      {/* ========================================================= */}
      {/* CENTERED BOTTOM CAROUSEL NAVIGATION INDICATOR (MOBILE FIX) */}
      {/* ========================================================= */}
      <div className="absolute bottom-2 sm:bottom-6 left-1/2 -translate-x-1/2 z-30 flex items-center space-x-2 sm:space-x-2.5 bg-white/90 backdrop-blur-md px-3.5 py-1.5 sm:px-4 sm:py-2 rounded-full border border-[#C89A4B]/30 shadow-md">
        {heroSlides.map((slide, idx) => (
          <button
            key={`single-dot-${slide.id}`}
            onClick={() => setActiveSlide(idx)}
            className={`h-2 sm:h-2.5 rounded-full transition-all duration-500 cursor-pointer ${
              activeSlide === idx
                ? 'bg-[#C89B3C] w-5 sm:w-7 shadow-[0_0_10px_rgba(200,154,75,0.5)]'
                : 'bg-[#C89B3C]/30 hover:bg-[#C89B3C]/70 w-2 sm:w-2.5'
            }`}
            title={`Slide ${idx + 1}: ${slide.badge}`}
          />
        ))}
      </div>

    </section>
  );
}

