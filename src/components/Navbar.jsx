import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Search, 
  ChevronDown, 
  Sparkles, 
  Menu, 
  X, 
  ArrowRight, 
  Target,
  Calculator,
  PieChart,
  ShieldCheck,
  Building2,
  TrendingUp,
  User,
  PhoneCall
} from 'lucide-react';
import { useAuth } from '../context/AuthContext';

export default function Navbar({ onOpenSearch, currentPage = 'home', onNavigate }) {
  const { user, logout, openAuthModal } = useAuth();
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e, page) => {
    e.preventDefault();
    if (onNavigate) {
      onNavigate(page);
    }
    setMobileMenuOpen(false);
  };

  const navMenus = {
    planning: {
      title: 'Financial Planning',
      description: 'Organize and structure your wealth around your life goals.',
      items: [
        { name: 'Comprehensive Goal Planning', desc: 'Holistic roadmap for early retirement, education & asset creation', icon: Target },
        { name: 'Tax Planning & Harvesting', desc: 'Maximize Section 80C/80D savings and capital gain efficiency', icon: Calculator },
        { name: 'Retirement Structuring', desc: 'FIRE framework and inflation-indexed passive income streams', icon: ShieldCheck },
        { name: 'Estate & Wealth Transfer', desc: 'Multi-generational trust & succession planning for families', icon: Building2 },
      ]
    },
    goals: {
      title: 'Goal Trackers',
      description: 'Track and simulate your milestone progress in real time.',
      items: [
        { name: 'FIRE Early Retirement', desc: 'Calculate your target corpus and age 45-55 retirement date', icon: Target },
        { name: 'Children Higher Education', desc: 'Plan inflation-adjusted tuition & university expenses', icon: TrendingUp },
        { name: 'Dream Property Fund', desc: 'Structured down payment & mortgage planning', icon: Building2 },
        { name: 'Emergency Shield Fund', desc: '6 to 12 months liquid safety reserve', icon: ShieldCheck },
      ]
    },
    investments: {
      title: 'Investment Advisory',
      description: 'Goal-aligned multi-asset portfolios for long-term compounding.',
      items: [
        { name: 'Goal-Based Mutual Funds', desc: 'Zero commission direct plans matched to your target timeline', icon: PieChart },
        { name: 'Direct Equity & PMS', desc: 'Concentrated high-conviction portfolios', icon: TrendingUp },
        { name: 'Fixed Income & Bonds', desc: 'AAA corporate bonds & Sovereign Gold Bonds (SGB)', icon: ShieldCheck },
      ]
    },
    tax: {
      title: 'Tax Planning',
      description: 'Legal strategies to minimize tax drag and keep more of your returns.',
      items: [
        { name: 'Section 80C / 80D Optimizer', desc: 'Smart allocation across ELSS, NPS & health insurance', icon: Calculator },
        { name: 'LTCG Tax Loss Harvesting', desc: 'Harvest up to ₹1,00,000 tax-free capital gains annually', icon: Sparkles },
      ]
    },
    calculators: {
      title: 'Financial Calculators',
      description: 'Free interactive financial planning tools.',
      items: [
        { name: 'SIP & Compounding Calculator', desc: 'Visualize wealth growth with step-up SIPs', icon: Calculator },
        { name: 'FIRE Retirement Calculator', desc: 'Find your target retirement net worth number', icon: Target },
        { name: 'Tax Savings Calculator', desc: 'Compare Old vs New Tax Regime for FY 2025-26', icon: Calculator },
      ]
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 h-[80px] transition-all duration-500 ease-in-out ${
        isScrolled
          ? 'bg-[#020B2D]/85 backdrop-blur-xl border-b border-[#C8A24A]/20 shadow-[0_10px_30px_rgba(2,11,45,0.8)]'
          : 'bg-transparent border-b border-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto h-full px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        
        {/* Left Side: SOLAHANA Brand Logo */}
        <button onClick={(e) => handleNavClick(e, 'home')} className="flex items-center space-x-3 group text-left cursor-pointer">
          {/* Gold Geometric Emblem */}
          <div className="relative w-10 h-10 rounded-xl bg-gradient-to-br from-[#E8C878] via-[#C8A24A] to-[#B8862B] p-[1px] shadow-[0_0_15px_rgba(200,162,74,0.4)] group-hover:shadow-[0_0_25px_rgba(200,162,74,0.7)] transition-all duration-300">
            <div className="w-full h-full bg-[#020B2D] rounded-[11px] flex items-center justify-center relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-tr from-[#C8A24A]/20 to-transparent" />
              <div className="w-5 h-5 border-2 border-[#E8C878] rotate-45 flex items-center justify-center group-hover:rotate-[225deg] transition-transform duration-700 ease-out">
                <div className="w-2 h-2 bg-[#E8C878] rounded-full" />
              </div>
            </div>
          </div>

          <div className="flex flex-col">
            <span className="text-xl font-serif-luxury font-bold tracking-tight text-[#F8F7F3] group-hover:text-[#E8C878] transition-colors">
              SOLAHANA
            </span>
            <span className="text-[9px] tracking-widest uppercase text-[#BAC6DA] font-medium font-sora">
              Financial Planning
            </span>
          </div>
        </button>

        {/* Center Navigation Menu (Desktop) */}
        <nav className="hidden lg:flex items-center space-x-1 font-inter text-xs font-semibold">
          <button
            onClick={(e) => handleNavClick(e, 'home')}
            className={`px-3 py-2 transition-colors rounded-lg ${
              currentPage === 'home'
                ? 'text-[#E8C878] bg-[#071C48] font-bold border border-[#C8A24A]/30'
                : 'text-[#F8F7F3] hover:text-[#E8C878] hover:bg-[#071C48]/40'
            }`}
          >
            Home
          </button>

          <button
            onClick={(e) => handleNavClick(e, 'about')}
            className={`px-3 py-2 transition-colors rounded-lg ${
              currentPage === 'about'
                ? 'text-[#E8C878] bg-[#071C48] font-bold border border-[#C8A24A]/30'
                : 'text-[#BAC6DA] hover:text-[#F8F7F3] hover:bg-[#071C48]/40'
            }`}
          >
            About
          </button>

          <button
            onClick={(e) => handleNavClick(e, 'financial-planning')}
            className={`px-3 py-2 transition-colors rounded-lg ${
              currentPage === 'financial-planning'
                ? 'text-[#E8C878] bg-[#071C48] font-bold border border-[#C8A24A]/30'
                : 'text-[#BAC6DA] hover:text-[#F8F7F3] hover:bg-[#071C48]/40'
            }`}
          >
            Financial Planning
          </button>

          <button
            onClick={(e) => handleNavClick(e, 'goals')}
            className={`px-3 py-2 transition-colors rounded-lg ${
              currentPage === 'goals'
                ? 'text-[#E8C878] bg-[#071C48] font-bold border border-[#C8A24A]/30'
                : 'text-[#BAC6DA] hover:text-[#F8F7F3] hover:bg-[#071C48]/40'
            }`}
          >
            Goals
          </button>

          <button
            onClick={(e) => handleNavClick(e, 'investments')}
            className={`px-3 py-2 transition-colors rounded-lg ${
              currentPage === 'investments'
                ? 'text-[#E8C878] bg-[#071C48] font-bold border border-[#C8A24A]/30'
                : 'text-[#BAC6DA] hover:text-[#F8F7F3] hover:bg-[#071C48]/40'
            }`}
          >
            Investments
          </button>

          <button
            onClick={(e) => handleNavClick(e, 'tax-planning')}
            className={`px-3 py-2 transition-colors rounded-lg ${
              currentPage === 'tax-planning'
                ? 'text-[#E8C878] bg-[#071C48] font-bold border border-[#C8A24A]/30'
                : 'text-[#BAC6DA] hover:text-[#F8F7F3] hover:bg-[#071C48]/40'
            }`}
          >
            Tax Planning
          </button>

          <button
            onClick={(e) => handleNavClick(e, 'calculators')}
            className={`px-3 py-2 transition-colors rounded-lg ${
              currentPage === 'calculators'
                ? 'text-[#E8C878] bg-[#071C48] font-bold border border-[#C8A24A]/30'
                : 'text-[#BAC6DA] hover:text-[#F8F7F3] hover:bg-[#071C48]/40'
            }`}
            onMouseEnter={() => setActiveDropdown('calculators')}
            onMouseLeave={() => setActiveDropdown(null)}
          >
            Calculators
            <AnimatePresence>
              {activeDropdown === 'calculators' && (
                <motion.div
                  initial={{ opacity: 0, y: 12, scale: 0.98 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 8, scale: 0.98 }}
                  transition={{ duration: 0.2, ease: 'easeOut' }}
                  className="absolute top-[60px] left-1/2 -translate-x-1/2 w-[460px] bg-[#071C48]/95 border border-[#C8A24A]/30 rounded-2xl p-5 shadow-[0_20px_50px_rgba(2,11,45,0.9)] backdrop-blur-2xl z-50 overflow-hidden text-left"
                >
                  <div className="pb-3 mb-3 border-b border-[#C8A24A]/15">
                    <h4 className="text-sm font-semibold text-[#E8C878] font-serif-luxury flex items-center justify-between">
                      <span>{navMenus.calculators.title}</span>
                      <span className="text-[10px] font-sans text-[#BAC6DA] font-normal uppercase tracking-wider">SOLAHANA</span>
                    </h4>
                    <p className="text-xs text-[#BAC6DA] mt-0.5">
                      {navMenus.calculators.description}
                    </p>
                  </div>

                  <div className="grid grid-cols-1 gap-2">
                    {navMenus.calculators.items.map((item, i) => {
                      const IconComponent = item.icon;
                      return (
                        <a
                          key={i}
                          href="#"
                          className="p-2.5 rounded-xl hover:bg-[#020B2D]/80 border border-transparent hover:border-[#C8A24A]/25 transition-all flex items-start space-x-3 group/item"
                        >
                          <div className="p-2 rounded-lg bg-[#C8A24A]/10 text-[#C8A24A] group-hover/item:bg-[#C8A24A] group-hover/item:text-[#020B2D] transition-colors mt-0.5">
                            <IconComponent className="w-4 h-4" />
                          </div>
                          <div className="flex-1">
                            <div className="text-xs font-semibold text-[#F8F7F3] group-hover/item:text-[#E8C878] transition-colors flex items-center justify-between">
                              {item.name}
                              <ArrowRight className="w-3 h-3 text-[#BAC6DA] opacity-0 group-hover/item:opacity-100 group-hover/item:translate-x-1 transition-all" />
                            </div>
                            <div className="text-[11px] text-[#BAC6DA] mt-0.5 leading-relaxed">
                              {item.desc}
                            </div>
                          </div>
                        </a>
                      );
                    })}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </button>

          <button
            onClick={(e) => handleNavClick(e, 'contact')}
            className={`px-3 py-2 transition-colors rounded-lg ${
              currentPage === 'contact'
                ? 'text-[#E8C878] bg-[#071C48] font-bold border border-[#C8A24A]/30'
                : 'text-[#BAC6DA] hover:text-[#F8F7F3] hover:bg-[#071C48]/40'
            }`}
          >
            Contact
          </button>
        </nav>

        {/* Right Side Actions */}
        <div className="hidden lg:flex items-center space-x-4">
          {/* Search Icon */}
          <button
            onClick={onOpenSearch}
            className="p-2.5 text-[#BAC6DA] hover:text-[#E8C878] bg-[#071C48]/50 hover:bg-[#071C48] border border-[#C8A24A]/20 hover:border-[#C8A24A]/50 rounded-xl transition-all flex items-center gap-2 text-xs"
            title="Search goals or calculators (Cmd+K)"
          >
            <Search className="w-4 h-4 text-[#C8A24A]" />
          </button>

          {/* Login / User Session Button */}
          {user ? (
            <div className="flex items-center gap-2">
              {(user.role === 'admin' || user.role === 'advisor') && (
                <button
                  onClick={(e) => handleNavClick(e, 'admin')}
                  className="text-xs font-bold text-[#020B2D] px-3 py-1.5 rounded-xl bg-[#C8A24A] hover:bg-[#E8C878] transition-all cursor-pointer shadow flex items-center gap-1.5"
                  title="Admin Control Center"
                >
                  <ShieldCheck className="w-3.5 h-3.5" />
                  <span>Admin Dashboard</span>
                </button>
              )}
              <button
                onClick={(e) => handleNavClick(e, 'dashboard')}
                className="text-xs font-semibold text-[#E8C878] px-3 py-1.5 rounded-xl bg-[#071C48] border border-[#C8A24A]/30 hover:bg-[#C8A24A]/20 transition-all cursor-pointer"
                title="Go to My Dashboard"
              >
                {user.name.split(' ')[0]}
              </button>
              <button
                onClick={logout}
                className="px-3 py-1.5 text-xs text-white/70 hover:text-white bg-white/5 hover:bg-white/10 rounded-xl border border-white/10 transition-colors cursor-pointer"
                title="Logout"
              >
                Logout
              </button>
            </div>
          ) : (
            <button
              onClick={() => openAuthModal('login')}
              className="px-4 py-2 text-xs font-semibold text-[#F8F7F3] hover:text-[#E8C878] rounded-xl border border-[#BAC6DA]/20 hover:border-[#C8A24A]/50 bg-[#071C48]/30 hover:bg-[#071C48]/80 transition-all cursor-pointer"
            >
              Login
            </button>
          )}

          {/* Golden Pill CTA: Start Planning */}
          <button
            onClick={(e) => handleNavClick(e, 'contact')}
            className="gold-glow-button px-5 py-2.5 rounded-full text-xs font-bold tracking-wide flex items-center space-x-2 group cursor-pointer"
          >
            <span>Start Planning</span>
            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        {/* Mobile Hamburger Button */}
        <div className="flex items-center space-x-3 lg:hidden">
          <button
            onClick={onOpenSearch}
            className="p-2 text-[#C8A24A] bg-[#071C48]/60 border border-[#C8A24A]/20 rounded-xl"
          >
            <Search className="w-4 h-4" />
          </button>
          
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-[#F8F7F3] hover:text-[#E8C878] bg-[#071C48]/60 border border-[#C8A24A]/30 rounded-xl"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

      </div>

      {/* Mobile Glass Menu Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-[#020B2D]/95 border-b border-[#C8A24A]/20 backdrop-blur-2xl overflow-hidden px-5 py-6 space-y-4 shadow-2xl text-left"
          >
            <div className="space-y-2">
              <button 
                onClick={(e) => handleNavClick(e, 'home')} 
                className={`w-full text-left p-3 rounded-xl text-sm font-semibold transition-colors ${
                  currentPage === 'home' ? 'bg-[#071C48] text-[#E8C878] border border-[#C8A24A]/30' : 'bg-[#071C48]/50 text-[#F8F7F3]'
                }`}
              >
                Home
              </button>
              <button 
                onClick={(e) => handleNavClick(e, 'about')} 
                className={`w-full text-left p-3 rounded-xl text-sm font-semibold transition-colors ${
                  currentPage === 'about' ? 'bg-[#071C48] text-[#E8C878] border border-[#C8A24A]/30' : 'bg-[#071C48]/50 text-[#BAC6DA]'
                }`}
              >
                About SOLAHANA
              </button>
              <button 
                onClick={(e) => handleNavClick(e, 'financial-planning')} 
                className={`w-full text-left p-3 rounded-xl text-sm font-semibold transition-colors ${
                  currentPage === 'financial-planning' ? 'bg-[#071C48] text-[#E8C878] border border-[#C8A24A]/30' : 'bg-[#071C48]/50 text-[#BAC6DA]'
                }`}
              >
                Financial Planning
              </button>
              <button 
                onClick={(e) => handleNavClick(e, 'goals')} 
                className={`w-full text-left p-3 rounded-xl text-sm font-semibold transition-colors ${
                  currentPage === 'goals' ? 'bg-[#071C48] text-[#E8C878] border border-[#C8A24A]/30' : 'bg-[#071C48]/50 text-[#BAC6DA]'
                }`}
              >
                Life Goals
              </button>
              <button 
                onClick={(e) => handleNavClick(e, 'investments')} 
                className={`w-full text-left p-3 rounded-xl text-sm font-semibold transition-colors ${
                  currentPage === 'investments' ? 'bg-[#071C48] text-[#E8C878] border border-[#C8A24A]/30' : 'bg-[#071C48]/50 text-[#BAC6DA]'
                }`}
              >
                Investments
              </button>
              <button 
                onClick={(e) => handleNavClick(e, 'tax-planning')} 
                className={`w-full text-left p-3 rounded-xl text-sm font-semibold transition-colors ${
                  currentPage === 'tax-planning' ? 'bg-[#071C48] text-[#E8C878] border border-[#C8A24A]/30' : 'bg-[#071C48]/50 text-[#BAC6DA]'
                }`}
              >
                Tax Planning
              </button>
              <button 
                onClick={(e) => handleNavClick(e, 'calculators')} 
                className={`w-full text-left p-3 rounded-xl text-sm font-semibold transition-colors ${
                  currentPage === 'calculators' ? 'bg-[#071C48] text-[#E8C878] border border-[#C8A24A]/30' : 'bg-[#071C48]/50 text-[#BAC6DA]'
                }`}
              >
                Financial Calculators
              </button>
              <a href="#" className="block p-3 rounded-xl bg-[#071C48]/50 text-sm font-semibold text-[#BAC6DA]">
                Contact
              </a>
            </div>

            <div className="pt-4 border-t border-[#C8A24A]/20 flex flex-col gap-3">
              {user ? (
                <div className="flex items-center justify-between p-3 rounded-xl bg-[#071C48] border border-[#C8A24A]/30">
                  <span className="text-xs font-semibold text-[#E8C878]">{user.name}</span>
                  <button
                    onClick={() => {
                      logout();
                      setMobileMenuOpen(false);
                    }}
                    className="text-xs text-red-400 hover:text-red-300 font-medium"
                  >
                    Logout
                  </button>
                </div>
              ) : (
                <button
                  onClick={() => {
                    openAuthModal('login');
                    setMobileMenuOpen(false);
                  }}
                  className="w-full text-center py-2.5 rounded-xl border border-[#C8A24A]/30 text-xs font-semibold text-[#F8F7F3] bg-[#071C48]/60 cursor-pointer"
                >
                  Login
                </button>
              )}
              <button
                onClick={(e) => {
                  handleNavClick(e, 'contact');
                }}
                className="w-full gold-glow-button text-center py-3 rounded-full text-xs font-bold flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>Start Planning</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
