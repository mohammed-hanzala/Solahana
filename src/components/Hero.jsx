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

export default function Hero({ onOpenSearch }) {
  const navigate = useNavigate();
  const [activeSlide, setActiveSlide] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  // 6 Client-Approved Premium Storytelling Slides
  const heroSlides = [
    {
      id: 'slide-1',
      badge: 'YOUR GOALS. OUR PLAN.',
      titleLine1: 'One Plan.',
      titleLine2: 'Every Goal.',
      scriptText: 'Only ₹1.',
      subtitle: 'From marriage to retirement, education to wealth creation — Solahana brings every financial goal into one personalised financial roadmap.',
      ctaText: 'Start Your ₹1 Financial Plan',
      ctaRoute: '/contact',
      emotion: 'Hope. Ambition. Future.'
    },
    {
      id: 'slide-2',
      badge: 'TAX-EFFICIENT WEALTH',
      titleLine1: 'Save Taxes.',
      titleLine2: 'Build Wealth.',
      scriptText: 'Smarter Strategy.',
      subtitle: 'Optimize Section 80C, 80D, NPS and long-term tax planning with personalised tax-saving strategies designed for your financial goals.',
      ctaText: 'Explore Tax Saving Plan',
      ctaRoute: '/tax-planning',
      emotion: 'Confidence. Savings.'
    },
    {
      id: 'slide-3',
      badge: 'RETIREMENT ROADMAP',
      titleLine1: 'Retire Rich.',
      titleLine2: 'Live Freely.',
      scriptText: 'Tomorrow Starts Today.',
      subtitle: 'Build a retirement corpus with inflation-adjusted planning, SIP projections and long-term wealth creation strategies.',
      ctaText: 'Plan My Retirement',
      ctaRoute: '/calculators/retirement',
      emotion: 'Peace. Freedom.'
    },
    {
      id: 'slide-4',
      badge: 'WEALTH CREATION',
      titleLine1: 'Invest With Purpose.',
      titleLine2: 'Grow With Confidence.',
      scriptText: 'Every Rupee Has A Job.',
      subtitle: 'Personalised investment planning across SIPs, mutual funds, fixed income, emergency funds and long-term wealth creation.',
      ctaText: 'Build My Investment Plan',
      ctaRoute: '/investments',
      emotion: 'Growth. Confidence.'
    },
    {
      id: 'slide-5',
      badge: 'LIFE GOALS PLANNING',
      titleLine1: 'Every Dream.',
      titleLine2: 'Financially Planned.',
      scriptText: 'Together We Grow.',
      subtitle: 'Marriage, children\'s education, home purchase, emergency fund and every important milestone planned through one financial strategy.',
      ctaText: 'Plan My Family Goals',
      ctaRoute: '/goals',
      emotion: 'Security. Family. Future.'
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
  ];

  return (
    <section 
      className="relative min-h-[90vh] lg:min-h-screen pt-28 pb-16 lg:pt-32 lg:pb-20 bg-[#FAF8F5] overflow-hidden flex flex-col justify-between select-none"
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
        <div className="absolute top-1/4 left-1/3 w-[750px] h-[750px] bg-[#C89A4B]/10 blur-[170px] rounded-full" />
        <div className="absolute top-10 right-10 w-[550px] h-[550px] bg-[#E5C158]/12 blur-[140px] rounded-full" />

        {/* Sunrise Skyline Silhouette Horizon */}
        <div className="absolute bottom-0 inset-x-0 h-44 opacity-15 pointer-events-none flex items-end justify-center">
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
        className="absolute left-3 sm:left-6 lg:left-8 top-1/2 -translate-y-1/2 z-30 p-3 sm:p-4 rounded-full bg-white/80 hover:bg-white border border-[#C89A4B]/40 text-[#0F172A] shadow-xl backdrop-blur-md transition-all hover:scale-110 hover:border-[#C89A4B] cursor-pointer"
        title="Previous Slide"
        aria-label="Previous Slide"
      >
        <ChevronLeft className="w-5 h-5 text-[#0F172A]" />
      </button>

      <button
        onClick={() => setActiveSlide((prev) => (prev + 1) % heroSlides.length)}
        className="absolute right-3 sm:right-6 lg:right-8 top-1/2 -translate-y-1/2 z-30 p-3 sm:p-4 rounded-full bg-white/80 hover:bg-white border border-[#C89A4B]/40 text-[#0F172A] shadow-xl backdrop-blur-md transition-all hover:scale-110 hover:border-[#C89A4B] cursor-pointer"
        title="Next Slide"
        aria-label="Next Slide"
      >
        <ChevronRight className="w-5 h-5 text-[#0F172A]" />
      </button>

      {/* ------------------------------------------------------------- */}
      {/* MAIN CAROUSEL SLIDE CONTAINER (42% Left, 58% Right Desktop)   */}
      {/* ------------------------------------------------------------- */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10 my-auto">
        <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-8 lg:gap-10">
          
          {/* ========================================================= */}
          {/* LEFT COLUMN: TYPOGRAPHY & STORYTELLING COPY (42% Width)   */}
          {/* ========================================================= */}
          <div className="w-full lg:w-[42%] text-left space-y-5 shrink-0">
            {/* Left Column Text Animation (Fintoo 800ms Fade + Subtle Rise) */}
            <AnimatePresence mode="wait">
              <motion.div
                key={currentSlide.id}
                initial={{ opacity: 0, y: 15, x: -10 }}
                animate={{ opacity: 1, y: 0, x: 0 }}
                exit={{ opacity: 0, y: -15, x: 10 }}
                transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1.0] }}
                className="space-y-3 sm:space-y-4"
              >
                {/* Eyebrow Category Label */}
                <div className="inline-flex items-center space-x-2">
                  <span className="text-xs font-sora font-semibold tracking-widest text-[#64748B] uppercase">
                    {currentSlide.badge}
                  </span>
                </div>

                {/* Editorial Luxury Headline */}
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif-luxury font-bold text-[#0F172A] leading-[1.12] tracking-tight">
                  {currentSlide.titleLine1} <br />
                  <span>{currentSlide.titleLine2}</span> <br />
                  <span className="font-alex-brush text-5xl sm:text-6xl lg:text-7xl text-[#C89A4B] font-normal block mt-1">
                    {currentSlide.scriptText}
                  </span>
                </h1>

                {/* Description */}
                <p className="text-base sm:text-lg text-[#475569] leading-relaxed max-w-xl font-inter font-normal pt-1">
                  {currentSlide.subtitle}
                </p>
              </motion.div>
            </AnimatePresence>

            {/* Primary Action Button (Gold Pill with Shimmer & Arrow Slide) */}
            <div className="pt-2">
              <Link
                to={currentSlide.ctaRoute}
                className="gold-glow-button px-9 py-4 rounded-full text-sm font-bold text-white tracking-wide inline-flex items-center justify-center space-x-3 group shadow-[0_10px_30px_rgba(200,154,75,0.35)] cursor-pointer hover:shadow-[0_15px_40px_rgba(200,154,75,0.5)] transition-all"
              >
                <span>{currentSlide.ctaText}</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform duration-300" />
              </Link>
            </div>

            {/* Trust Strip Indicator */}
            <div className="pt-6 border-t border-[#C89A4B]/20 flex flex-wrap items-center gap-4 sm:gap-6 text-xs text-[#0F172A] font-inter">
              <div className="flex items-center space-x-2 group cursor-pointer transition-transform hover:scale-105">
                <ShieldCheck className="w-4 h-4 text-[#C89A4B] shrink-0" />
                <span className="font-semibold">Trusted <span className="text-[#64748B] font-normal">by Thousands</span></span>
              </div>
              <span className="text-[#C89A4B]/40 hidden sm:inline">|</span>
              <div className="flex items-center space-x-2 group cursor-pointer transition-transform hover:scale-105">
                <Users className="w-4 h-4 text-[#C89A4B] shrink-0" />
                <span className="font-semibold">Transparent <span className="text-[#64748B] font-normal">Process</span></span>
              </div>
              <span className="text-[#C89A4B]/40 hidden sm:inline">|</span>
              <div className="flex items-center space-x-2 group cursor-pointer transition-transform hover:scale-105">
                <Star className="w-4 h-4 text-[#C89A4B] shrink-0" />
                <span className="font-semibold">Personalised <span className="text-[#64748B] font-normal">For You</span></span>
              </div>
            </div>

          </div>

          {/* ========================================================= */}
          {/* RIGHT COLUMN: 20-25% LARGER ILLUSTRATION FOCUS (58% Width) */}
          {/* ========================================================= */}
          <div className="w-full lg:w-[58%] relative flex items-center justify-center min-h-[480px] sm:min-h-[560px] lg:min-h-[620px]">
            
            <AnimatePresence mode="wait">
              <motion.div
                key={currentSlide.id}
                initial={{ opacity: 0, scale: 0.97, x: 15 }}
                animate={{ opacity: 1, scale: 1.0, x: 0 }}
                exit={{ opacity: 0, scale: 0.97, x: -15 }}
                transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1.0] }}
                className="w-full max-w-[620px] aspect-square relative flex items-center justify-center"
              >
                {/* --------------------------------------------------- */}
                {/* SLIDE 1 VISUAL: ECOSYSTEM PORTAL & WALKING FIGURE  */}
                {/* --------------------------------------------------- */}
                {activeSlide === 0 && (
                  <div className="relative w-full h-full flex items-center justify-center">
                    
                    {/* Concentric Golden Orbit Ring */}
                    <div className="absolute w-[450px] sm:w-[480px] h-[450px] sm:h-[480px] rounded-full border-2 border-dashed border-[#C89A4B]/40 shadow-[0_0_40px_rgba(200,154,75,0.15)] pointer-events-none animate-spin-slow" />

                    {/* Central 3D Glass Hub Portal */}
                    <div className="relative w-[290px] sm:w-[320px] h-[290px] sm:h-[320px] rounded-full bg-gradient-to-br from-white/95 via-[#FAF8F5]/90 to-white/95 border-4 border-[#C89A4B]/70 shadow-[0_0_60px_rgba(200,154,75,0.35)] backdrop-blur-xl flex flex-col items-center justify-center p-6 text-center z-10">
                      <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#E5C158] via-[#C89A4B] to-[#9A7326] p-[2px] shadow-lg mb-3">
                        <div className="w-full h-full bg-[#FAF8F5] rounded-full flex items-center justify-center">
                          <span className="text-[#0F172A] font-serif-luxury font-bold text-2xl">S</span>
                          <span className="text-[#C89A4B] font-bold text-sm -ml-0.5">₹</span>
                        </div>
                      </div>
                      <div className="flex items-center justify-center space-x-0.5">
                        <span className="text-2xl font-serif-luxury font-bold tracking-tight text-[#0F172A]">SOLAHANA</span>
                        <span className="text-[10px] font-bold text-[#C89A4B]">TM</span>
                      </div>
                      <span className="text-[10px] uppercase font-medium text-[#64748B] tracking-wider mt-1">
                        Your Complete Financial Partner
                      </span>
                    </div>

                    {/* Mathematically Symmetrical 7 Orbital Goal Nodes (Estate Planning Removed) */}
                    {orbitalNodes.map((node, index) => {
                      const IconComponent = node.icon;
                      return (
                        <div
                          key={index}
                          className="absolute z-20 flex flex-col items-center group cursor-pointer transition-transform hover:scale-110"
                          style={{
                            left: `calc(50% + ${node.x}px)`,
                            top: `calc(50% + ${node.y}px)`,
                            transform: 'translate(-50%, -50%)'
                          }}
                          onClick={onOpenSearch}
                        >
                          <div className="w-12 h-12 rounded-full bg-white border-2 border-[#C89A4B]/50 shadow-lg flex items-center justify-center group-hover:border-[#C89A4B] group-hover:bg-[#FAF8F5] transition-all">
                            <IconComponent className="w-5 h-5 text-[#C89A4B]" />
                          </div>
                          <span className="mt-1 text-[10px] font-semibold text-[#0F172A] whitespace-nowrap bg-white/95 px-2.5 py-0.5 rounded-full border border-[#C89A4B]/30 shadow-md">
                            {node.title}
                          </span>
                        </div>
                      );
                    })}

                    {/* Aspirational Walking Human Vector & Perspective Sunrise Path */}
                    <div className="absolute bottom-1 z-30 w-52 h-36 flex flex-col items-center justify-end pointer-events-none">
                      <svg className="w-full h-full" viewBox="0 0 200 140" fill="none">
                        <path d="M 30 140 C 70 80, 85 40, 100 10 C 115 40, 130 80, 170 140 Z" fill="url(#walkwayGrad)" stroke="#C89A4B" strokeWidth="1.5" />
                        <defs>
                          <linearGradient id="walkwayGrad" x1="0" y1="1" x2="0" y2="0">
                            <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.95" />
                            <stop offset="100%" stopColor="#FAF8F5" stopOpacity="0.3" />
                          </linearGradient>
                        </defs>
                      </svg>

                      {/* Human Figure Walking Up Towards Hub */}
                      <div className="absolute bottom-2 z-40 flex flex-col items-center">
                        <svg className="w-16 h-30 drop-shadow-lg overflow-visible" viewBox="0 0 120 200" fill="none">
                          {/* Head */}
                          <circle cx="60" cy="25" r="14" fill="#0F172A" />
                          {/* Hair Accent */}
                          <path d="M50 20C55 15 65 15 70 20" stroke="#C89A4B" strokeWidth="2" strokeLinecap="round" />
                          {/* Left Arm & Hand */}
                          <path d="M38 48 Q22 75 24 105" stroke="#0F172A" strokeWidth="9" strokeLinecap="round" fill="none" />
                          <circle cx="24" cy="109" r="5" fill="#C89A4B" />
                          {/* Right Arm & Hand */}
                          <path d="M82 48 Q98 75 96 105" stroke="#0F172A" strokeWidth="9" strokeLinecap="round" fill="none" />
                          <circle cx="96" cy="109" r="5" fill="#C89A4B" />
                          {/* Torso / Blazer */}
                          <path d="M35 55C35 45 45 42 60 42C75 42 85 45 85 55L80 115H40L35 55Z" fill="#0F172A" />
                          {/* Shirt V-Neck */}
                          <path d="M54 42L60 58L66 42" stroke="#FFFFFF" strokeWidth="2" fill="none" />
                          {/* Left Leg */}
                          <path d="M42 115L34 185H50L56 115H42Z" fill="#1E293B" />
                          {/* Right Leg */}
                          <path d="M64 115L72 185H88L78 115H64Z" fill="#0F172A" />
                        </svg>
                      </div>
                    </div>

                  </div>
                )}

                {/* --------------------------------------------------- */}
                {/* SLIDE 2 VISUAL: TAX PLANNING WORKSPACE              */}
                {/* --------------------------------------------------- */}
                {activeSlide === 1 && (
                  <div className="w-full h-full rounded-3xl bg-white border-2 border-[#C89A4B]/30 shadow-2xl p-8 flex flex-col items-center justify-between relative overflow-hidden text-left">
                    <div className="w-full flex items-center justify-between border-b border-[#C89A4B]/20 pb-4">
                      <div className="flex items-center space-x-3">
                        <div className="w-11 h-11 rounded-2xl bg-[#C89A4B]/10 text-[#C89A4B] flex items-center justify-center font-bold">
                          <Calculator className="w-6 h-6" />
                        </div>
                        <div>
                          <div className="text-base font-serif-luxury font-bold text-[#0F172A]">Tax Optimization Desk</div>
                          <div className="text-xs text-[#64748B]">Section 80C, 80D, NPS & LTCG Harvest</div>
                        </div>
                      </div>
                      <span className="px-3.5 py-1 rounded-full bg-emerald-50 text-emerald-700 font-sora font-semibold text-xs border border-emerald-200">
                        Active Strategy
                      </span>
                    </div>

                    {/* Advisor & Client Interaction Vector Graphic */}
                    <div className="my-4 w-full flex items-center justify-center relative">
                      <svg className="w-72 h-48 drop-shadow-md" viewBox="0 0 300 200" fill="none">
                        {/* Desk */}
                        <rect x="20" y="140" width="260" height="12" rx="4" fill="#E2E8F0" />
                        <rect x="40" y="152" width="12" height="40" fill="#94A3B8" />
                        <rect x="248" y="152" width="12" height="40" fill="#94A3B8" />
                        {/* Advisor Figure */}
                        <circle cx="80" cy="70" r="16" fill="#0F172A" />
                        <path d="M50 140C50 100 65 90 80 90C95 90 110 100 110 140Z" fill="#0F172A" />
                        {/* Tax Document on Desk */}
                        <rect x="120" y="100" width="60" height="40" rx="4" fill="#FAF8F5" stroke="#C89A4B" strokeWidth="2" />
                        <line x1="130" y1="112" x2="170" y2="112" stroke="#C89A4B" strokeWidth="2" />
                        <line x1="130" y1="124" x2="160" y2="124" stroke="#94A3B8" strokeWidth="2" />
                        {/* Client Professional Figure */}
                        <circle cx="220" cy="70" r="16" fill="#C89A4B" />
                        <path d="M190 140C190 100 205 90 220 90C235 90 250 100 250 140Z" fill="#334155" />
                      </svg>
                    </div>

                    {/* Floating Tax Badges */}
                    <div className="w-full grid grid-cols-3 gap-3">
                      <div className="p-3 rounded-2xl bg-[#FAF8F5] border border-[#C89A4B]/20 text-center">
                        <div className="text-[10px] text-[#64748B]">Sec 80C Savings</div>
                        <div className="text-sm font-bold text-[#0F172A] font-sora">₹1,50,000</div>
                      </div>
                      <div className="p-3 rounded-2xl bg-[#FAF8F5] border border-[#C89A4B]/20 text-center">
                        <div className="text-[10px] text-[#64748B]">Sec 80D Health</div>
                        <div className="text-sm font-bold text-[#0F172A] font-sora">₹75,000</div>
                      </div>
                      <div className="p-3 rounded-2xl bg-[#FAF8F5] border border-[#C89A4B]/20 text-center">
                        <div className="text-[10px] text-[#64748B]">LTCG Harvest</div>
                        <div className="text-sm font-bold text-[#C89A4B] font-sora">₹1,00,000 Tax-Free</div>
                      </div>
                    </div>
                  </div>
                )}

                {/* --------------------------------------------------- */}
                {/* SLIDE 3 VISUAL: RETIREMENT ROADMAP                 */}
                {/* --------------------------------------------------- */}
                {activeSlide === 2 && (
                  <div className="w-full h-full rounded-3xl bg-white border-2 border-[#C89A4B]/30 shadow-2xl p-8 flex flex-col items-center justify-between relative overflow-hidden text-left">
                    <div className="w-full flex items-center justify-between border-b border-[#C89A4B]/20 pb-4">
                      <div className="flex items-center space-x-3">
                        <div className="w-11 h-11 rounded-2xl bg-[#C89A4B]/10 text-[#C89A4B] flex items-center justify-center font-bold">
                          <Umbrella className="w-6 h-6" />
                        </div>
                        <div>
                          <div className="text-base font-serif-luxury font-bold text-[#0F172A]">FIRE Retirement Tracker</div>
                          <div className="text-xs text-[#64748B]">Target Age 45 Inflation-Adjusted Corpus</div>
                        </div>
                      </div>
                      <span className="px-3.5 py-1 rounded-full bg-[#FAF8F5] text-[#9A7326] font-sora font-semibold text-xs border border-[#C89A4B]/30">
                        FIRE 45
                      </span>
                    </div>

                    {/* Happy Retired Couple Vector Illustration */}
                    <div className="my-4 w-full flex items-center justify-center relative">
                      <svg className="w-72 h-48 drop-shadow-md" viewBox="0 0 300 200" fill="none">
                        <circle cx="150" cy="90" r="55" fill="#E5C158" fillOpacity="0.25" />
                        <path d="M70 160 Q80 100 110 70" stroke="#059669" strokeWidth="4" />
                        <path d="M110 70C90 60 70 70 60 80M110 70C130 60 140 75 145 85M110 70C115 50 100 40 90 40" stroke="#059669" strokeWidth="3" fill="none" />
                        <circle cx="170" cy="90" r="14" fill="#0F172A" />
                        <path d="M150 160C150 120 160 110 170 110C180 110 190 120 190 160Z" fill="#0F172A" />
                        <circle cx="210" cy="95" r="13" fill="#C89A4B" />
                        <path d="M192 160C192 125 202 115 210 115C218 115 228 125 228 160Z" fill="#334155" />
                      </svg>
                    </div>

                    <div className="w-full grid grid-cols-2 gap-4">
                      <div className="p-4 rounded-2xl bg-[#FAF8F5] border border-[#C89A4B]/20">
                        <div className="text-xs text-[#64748B]">Target Corpus</div>
                        <div className="text-xl font-bold font-serif-luxury text-[#0F172A]">₹10,00,00,000</div>
                      </div>
                      <div className="p-4 rounded-2xl bg-[#FAF8F5] border border-[#C89A4B]/20">
                        <div className="text-xs text-[#64748B]">Monthly Passive Income</div>
                        <div className="text-xl font-bold font-serif-luxury text-[#C89A4B]">₹3,50,000/mo</div>
                      </div>
                    </div>
                  </div>
                )}

                {/* --------------------------------------------------- */}
                {/* SLIDE 4 VISUAL: WEALTH CREATION & INVESTMENTS       */}
                {/* --------------------------------------------------- */}
                {activeSlide === 3 && (
                  <div className="w-full h-full rounded-3xl bg-white border-2 border-[#C89A4B]/30 shadow-2xl p-8 flex flex-col items-center justify-between relative overflow-hidden text-left">
                    <div className="w-full flex items-center justify-between border-b border-[#C89A4B]/20 pb-4">
                      <div className="flex items-center space-x-3">
                        <div className="w-11 h-11 rounded-2xl bg-[#C89A4B]/10 text-[#C89A4B] flex items-center justify-center font-bold">
                          <TrendingUp className="w-6 h-6" />
                        </div>
                        <div>
                          <div className="text-base font-serif-luxury font-bold text-[#0F172A]">Multi-Asset Wealth Portfolio</div>
                          <div className="text-xs text-[#64748B]">Direct Equity, Mutual Funds & Bonds</div>
                        </div>
                      </div>
                      <span className="px-3.5 py-1 rounded-full bg-emerald-50 text-emerald-700 font-sora font-semibold text-xs border border-emerald-200">
                        +16.4% CAGR
                      </span>
                    </div>

                    {/* Growth Chart Vector */}
                    <div className="my-4 w-full flex items-center justify-center relative">
                      <svg className="w-full h-48 drop-shadow-md" viewBox="0 0 320 160" fill="none">
                        <path d="M 20 140 Q 80 120, 140 80 T 260 30 T 300 20" stroke="#C89A4B" strokeWidth="4" fill="none" />
                        <path d="M 20 140 Q 80 120, 140 80 T 260 30 T 300 20 L 300 160 L 20 160 Z" fill="url(#growthGrad)" />
                        <circle cx="300" cy="20" r="6" fill="#C89A4B" />
                        <defs>
                          <linearGradient id="growthGrad" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="0%" stopColor="#C89A4B" stopOpacity="0.3" />
                            <stop offset="100%" stopColor="#C89A4B" stopOpacity="0" />
                          </linearGradient>
                        </defs>
                      </svg>
                    </div>

                    <div className="w-full grid grid-cols-3 gap-3">
                      <div className="p-3 rounded-2xl bg-[#FAF8F5] border border-[#C89A4B]/20 text-center">
                        <div className="text-[10px] text-[#64748B]">Direct Equity</div>
                        <div className="text-xs font-bold text-[#0F172A] font-sora">45% Weight</div>
                      </div>
                      <div className="p-3 rounded-2xl bg-[#FAF8F5] border border-[#C89A4B]/20 text-center">
                        <div className="text-[10px] text-[#64748B]">Goal SIPs</div>
                        <div className="text-xs font-bold text-[#0F172A] font-sora">35% Weight</div>
                      </div>
                      <div className="p-3 rounded-2xl bg-[#FAF8F5] border border-[#C89A4B]/20 text-center">
                        <div className="text-[10px] text-[#64748B]">AAA Bonds & SGB</div>
                        <div className="text-xs font-bold text-[#C89A4B] font-sora">20% Weight</div>
                      </div>
                    </div>
                  </div>
                )}

                {/* --------------------------------------------------- */}
                {/* SLIDE 5 VISUAL: FAMILY & LIFE GOALS                 */}
                {/* --------------------------------------------------- */}
                {activeSlide === 4 && (
                  <div className="w-full h-full rounded-3xl bg-white border-2 border-[#C89A4B]/30 shadow-2xl p-8 flex flex-col items-center justify-between relative overflow-hidden text-left">
                    <div className="w-full flex items-center justify-between border-b border-[#C89A4B]/20 pb-4">
                      <div className="flex items-center space-x-3">
                        <div className="w-11 h-11 rounded-2xl bg-[#C89A4B]/10 text-[#C89A4B] flex items-center justify-center font-bold">
                          <HeartHandshake className="w-6 h-6" />
                        </div>
                        <div>
                          <div className="text-base font-serif-luxury font-bold text-[#0F172A]">Family Milestone Roadmap</div>
                          <div className="text-xs text-[#64748B]">Home, Education, Marriage & Travel</div>
                        </div>
                      </div>
                      <span className="px-3.5 py-1 rounded-full bg-[#FAF8F5] text-[#9A7326] font-sora font-semibold text-xs border border-[#C89A4B]/30">
                        4 Milestones
                      </span>
                    </div>

                    {/* Family Vector Illustration */}
                    <div className="my-4 w-full flex items-center justify-center relative">
                      <svg className="w-72 h-48 drop-shadow-md" viewBox="0 0 300 200" fill="none">
                        <path d="M 100 150 L 100 80 L 150 40 L 200 80 L 200 150 Z" fill="#F3EFE9" stroke="#C89A4B" strokeWidth="2" />
                        <circle cx="110" cy="90" r="12" fill="#0F172A" />
                        <path d="M95 150C95 120 102 110 110 110C118 110 125 120 125 150Z" fill="#0F172A" />
                        <circle cx="190" cy="92" r="11" fill="#C89A4B" />
                        <path d="M176 150C176 122 183 112 190 112C197 112 204 122 204 150Z" fill="#334155" />
                        <circle cx="150" cy="115" r="9" fill="#059669" />
                        <path d="M140 150C140 130 145 125 150 125C155 125 160 130 160 150Z" fill="#059669" />
                      </svg>
                    </div>

                    <div className="w-full grid grid-cols-2 gap-4">
                      <div className="p-4 rounded-2xl bg-[#FAF8F5] border border-[#C89A4B]/20">
                        <div className="text-xs text-[#64748B]">Dream Home (2028)</div>
                        <div className="text-lg font-bold font-serif-luxury text-[#0F172A]">₹1.20 Crore</div>
                      </div>
                      <div className="p-4 rounded-2xl bg-[#FAF8F5] border border-[#C89A4B]/20">
                        <div className="text-xs text-[#64748B]">Child Education (2032)</div>
                        <div className="text-lg font-bold font-serif-luxury text-[#C89A4B]">₹45 Lakhs</div>
                      </div>
                    </div>
                  </div>
                )}

                {/* --------------------------------------------------- */}
                {/* SLIDE 6 VISUAL: HEALTH & PROTECTION                */}
                {/* --------------------------------------------------- */}
                {activeSlide === 5 && (
                  <div className="w-full h-full rounded-3xl bg-white border-2 border-[#C89A4B]/30 shadow-2xl p-8 flex flex-col items-center justify-between relative overflow-hidden text-left">
                    <div className="w-full flex items-center justify-between border-b border-[#C89A4B]/20 pb-4">
                      <div className="flex items-center space-x-3">
                        <div className="w-11 h-11 rounded-2xl bg-[#C89A4B]/10 text-[#C89A4B] flex items-center justify-center font-bold">
                          <Shield className="w-6 h-6" />
                        </div>
                        <div>
                          <div className="text-base font-serif-luxury font-bold text-[#0F172A]">Risk & Protection Shield</div>
                          <div className="text-xs text-[#64748B]">Term, Health & Emergency Reserve</div>
                        </div>
                      </div>
                      <span className="px-3.5 py-1 rounded-full bg-emerald-50 text-emerald-700 font-sora font-semibold text-xs border border-emerald-200">
                        100% Shielded
                      </span>
                    </div>

                    {/* Shield & Protection Vector */}
                    <div className="my-4 w-full flex items-center justify-center relative">
                      <svg className="w-52 h-48 drop-shadow-md" viewBox="0 0 200 200" fill="none">
                        <path d="M 100 20 L 160 50 L 160 110 C 160 150, 100 180, 100 180 C 100 180, 40 150, 40 110 L 40 50 Z" fill="#FAF8F5" stroke="#C89A4B" strokeWidth="4" />
                        <path d="M 100 60 L 100 140" stroke="#C89A4B" strokeWidth="3" />
                        <path d="M 70 100 L 130 100" stroke="#C89A4B" strokeWidth="3" />
                      </svg>
                    </div>

                    <div className="w-full grid grid-cols-2 gap-4">
                      <div className="p-4 rounded-2xl bg-[#FAF8F5] border border-[#C89A4B]/20">
                        <div className="text-xs text-[#64748B]">Family Health Cover</div>
                        <div className="text-lg font-bold font-serif-luxury text-[#0F172A]">₹1.00 Crore</div>
                      </div>
                      <div className="p-4 rounded-2xl bg-[#FAF8F5] border border-[#C89A4B]/20">
                        <div className="text-xs text-[#64748B]">Term Insurance Shield</div>
                        <div className="text-lg font-bold font-serif-luxury text-[#C89A4B]">₹3.50 Crore</div>
                      </div>
                    </div>
                  </div>
                )}

              </motion.div>
            </AnimatePresence>

          </div>

        </div>
      </div>

      {/* ========================================================= */}
      {/* HERO FOOTER TICKER BANNER & SINGLE BOTTOM-RIGHT DOTS      */}
      {/* ========================================================= */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-20 pt-2 pb-2">
        <div className="border-t border-[#C89A4B]/20 pt-4 flex items-center justify-between text-xs font-inter text-[#64748B]">
          
          {/* Ticker Banner & Emotion Label */}
          <div className="flex items-center space-x-3 font-sora font-semibold tracking-widest text-[#0F172A] uppercase">
            <span>PLAN TODAY</span>
            <span className="text-[#C89A4B]">|</span>
            <span>SECURE TOMORROW</span>
            <span className="text-[#C89A4B] hidden md:inline">•</span>
            <span className="text-[#C89A4B] font-serif-luxury lowercase tracking-normal italic text-sm hidden md:inline">
              {currentSlide.emotion}
            </span>
          </div>

        </div>
      </div>

      {/* ========================================================= */}
      {/* SINGLE PREMIUM BOTTOM-RIGHT CAROUSEL NAVIGATION INDICATOR  */}
      {/* ========================================================= */}
      <div className="absolute bottom-6 right-6 sm:right-8 lg:bottom-8 lg:right-12 z-30 flex items-center space-x-2.5 bg-white/85 backdrop-blur-md px-4 py-2 rounded-full border border-[#C89A4B]/30 shadow-lg">
        {heroSlides.map((slide, idx) => (
          <button
            key={`single-dot-${slide.id}`}
            onClick={() => setActiveSlide(idx)}
            className={`h-2.5 rounded-full transition-all duration-500 cursor-pointer ${
              activeSlide === idx
                ? 'bg-[#C89A4B] w-7 shadow-[0_0_10px_rgba(200,154,75,0.5)]'
                : 'bg-[#C89A4B]/30 hover:bg-[#C89A4B]/70 w-2.5'
            }`}
            title={`Slide ${idx + 1}: ${slide.badge}`}
          />
        ))}
      </div>

    </section>
  );
}

