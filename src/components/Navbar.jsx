import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Search, 
  ChevronDown, 
  Menu, 
  X, 
  ArrowRight, 
  User, 
  LogOut,
  ShieldCheck,
  TrendingUp,
  PieChart,
  Calculator,
  FileText,
  Building2,
  Sparkles,
  Award
} from 'lucide-react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

export default function Navbar({ onOpenSearch }) {
  const { user, logout, openAuthModal } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  const pathname = location.pathname;
  const isAdminRoute = pathname.startsWith('/admin');

  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const dropdownTimeoutRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 15) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e, targetPath) => {
    if (e) e.preventDefault();
    setMobileMenuOpen(false);
    setActiveDropdown(null);

    const pathMap = {
      'home': '/',
      'about': '/about',
      'services': '/financial-planning',
      'solutions': '/goals',
      'resources': '/blogs',
      'calculators': '/calculators',
      'investments': '/investments',
      'tax-planning': '/tax-planning',
      'contact': '/contact',
      'dashboard': '/dashboard',
      'admin': '/admin/dashboard',
      'admin-login': '/admin/login',
    };

    const dest = pathMap[targetPath] || targetPath;
    navigate(dest);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleMouseEnterDropdown = (menuName) => {
    if (dropdownTimeoutRef.current) clearTimeout(dropdownTimeoutRef.current);
    setActiveDropdown(menuName);
  };

  const handleMouseLeaveDropdown = () => {
    dropdownTimeoutRef.current = setTimeout(() => {
      setActiveDropdown(null);
    }, 150);
  };

  const handleAdminLogout = async () => {
    await logout();
    navigate('/admin/login');
  };

  // Dropdown Configurations
  const dropdownData = {
    services: [
      { title: 'Financial Planning', path: '/financial-planning', desc: 'Comprehensive 360° financial roadmap', icon: PieChart },
      { title: 'Wealth & Investments', path: '/investments', desc: 'Personalised compounding portfolios', icon: TrendingUp },
      { title: 'Tax Planning', path: '/tax-planning', desc: 'Optimize Section 80C, 80D & NPS', icon: FileText },
    ],
    solutions: [
      { title: 'Life Stage Goals', path: '/goals', desc: 'Education, marriage & property planning', icon: Building2 },
      { title: 'Retirement FIRE', path: '/calculators/retirement', desc: 'Inflation-adjusted retirement freedom', icon: Award },
      { title: 'Family Protection', path: '/contact', desc: 'Comprehensive health & life cover', icon: ShieldCheck },
    ],
    resources: [
      { title: 'Financial Calculators', path: '/calculators', desc: 'SIP, Retirement & Tax calculators', icon: Calculator },
      { title: 'Knowledge Center', path: '/blogs', desc: 'Expert financial insights & guides', icon: Sparkles },
    ],
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300">
      <div
        className={`h-[88px] transition-all duration-300 ${
          isScrolled
            ? 'bg-[#FCFAF6]/95 backdrop-blur-xl border-b border-[#C89B3C]/30 shadow-[0_10px_30px_rgba(200,154,75,0.12)]'
            : 'bg-[#FCFAF6]/90 backdrop-blur-md border-b border-[#C89B3C]/20'
        }`}
      >
        <div className="max-w-7xl mx-auto h-full px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          
          {/* ========================================================= */}
          {/* LEFT: SOLAHANA LOGO (PROMINENT BRAND PRESENCE)            */}
          {/* ========================================================= */}
          <button 
            onClick={(e) => handleNavClick(e, isAdminRoute ? '/admin/dashboard' : 'home')} 
            className="flex items-center shrink-0 cursor-pointer group py-1 text-left"
            title="SOLAHANA Home"
            aria-label="SOLAHANA Home"
          >
            <img 
              src="/solahana-logo.png" 
              alt="SOLAHANA" 
              className="h-14 sm:h-[60px] lg:h-[66px] w-auto object-contain transition-transform duration-300 group-hover:scale-[1.03] drop-shadow-sm"
            />
          </button>

          {/* ========================================================= */}
          {/* CENTER: FINTOO-STYLE NAVIGATION LINKS (DESKTOP)           */}
          {/* ========================================================= */}
          {isAdminRoute ? (
            <div className="hidden lg:flex items-center gap-2 px-5 py-2 rounded-full bg-[#C89B3C]/10 border border-[#C89B3C]/30 text-xs font-bold text-[#9A7326]">
              <ShieldCheck className="w-4 h-4 text-[#C89B3C]" />
              <span>ADMINISTRATOR GOVERNANCE DESK</span>
            </div>
          ) : (
            <nav className="hidden lg:flex items-center space-x-1 sm:space-x-2 font-inter text-xs sm:text-[13px] font-semibold text-[#0F172A]">
              
              {/* Home */}
              <button
                onClick={(e) => handleNavClick(e, 'home')}
                className={`px-3.5 py-2 rounded-lg transition-all relative ${
                  pathname === '/' ? 'text-[#C89B3C] font-bold' : 'hover:text-[#C89B3C]'
                }`}
              >
                Home
                {pathname === '/' && (
                  <motion.div layoutId="activeUnderline" className="absolute bottom-0 left-3.5 right-3.5 h-[2.5px] bg-[#C89B3C] rounded-full" />
                )}
              </button>

              {/* About Us */}
              <button
                onClick={(e) => handleNavClick(e, 'about')}
                className={`px-3.5 py-2 rounded-lg transition-all relative ${
                  pathname === '/about' ? 'text-[#C89B3C] font-bold' : 'hover:text-[#C89B3C]'
                }`}
              >
                About Us
                {pathname === '/about' && (
                  <motion.div layoutId="activeUnderline" className="absolute bottom-0 left-3.5 right-3.5 h-[2.5px] bg-[#C89B3C] rounded-full" />
                )}
              </button>

              {/* Services (With Dropdown) */}
              <div 
                className="relative"
                onMouseEnter={() => handleMouseEnterDropdown('services')}
                onMouseLeave={handleMouseLeaveDropdown}
              >
                <button
                  onClick={(e) => handleNavClick(e, 'services')}
                  className={`px-3.5 py-2 rounded-lg transition-all flex items-center gap-1 relative ${
                    pathname === '/financial-planning' || pathname === '/investments' || pathname === '/tax-planning'
                      ? 'text-[#C89B3C] font-bold'
                      : 'hover:text-[#C89B3C]'
                  }`}
                >
                  <span>Services</span>
                  <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${activeDropdown === 'services' ? 'rotate-180 text-[#C89B3C]' : ''}`} />
                  {(pathname === '/financial-planning' || pathname === '/investments' || pathname === '/tax-planning') && (
                    <motion.div layoutId="activeUnderline" className="absolute bottom-0 left-3.5 right-3.5 h-[2.5px] bg-[#C89B3C] rounded-full" />
                  )}
                </button>

                {/* Dropdown Menu */}
                <AnimatePresence>
                  {activeDropdown === 'services' && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 8 }}
                      transition={{ duration: 0.2 }}
                      className="absolute top-full left-0 mt-2 w-72 bg-white rounded-2xl border border-[#C89B3C]/30 shadow-xl p-3 z-50 space-y-1"
                    >
                      {dropdownData.services.map((item) => {
                        const Icon = item.icon;
                        return (
                          <button
                            key={item.title}
                            onClick={(e) => handleNavClick(e, item.path)}
                            className="w-full text-left p-2.5 rounded-xl hover:bg-[#FAF8F5] transition-colors flex items-start gap-3 group"
                          >
                            <div className="p-2 rounded-lg bg-[#C89B3C]/10 text-[#C89B3C] group-hover:bg-[#C89B3C] group-hover:text-white transition-colors">
                              <Icon className="w-4 h-4" />
                            </div>
                            <div>
                              <div className="text-xs font-bold text-[#0F172A] group-hover:text-[#C89B3C] transition-colors">{item.title}</div>
                              <div className="text-[11px] text-[#64748B] leading-snug">{item.desc}</div>
                            </div>
                          </button>
                        );
                      })}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Planning Solutions (With Dropdown) */}
              <div 
                className="relative"
                onMouseEnter={() => handleMouseEnterDropdown('solutions')}
                onMouseLeave={handleMouseLeaveDropdown}
              >
                <button
                  onClick={(e) => handleNavClick(e, 'solutions')}
                  className={`px-3.5 py-2 rounded-lg transition-all flex items-center gap-1 relative ${
                    pathname === '/goals' ? 'text-[#C89B3C] font-bold' : 'hover:text-[#C89B3C]'
                  }`}
                >
                  <span>Planning Solutions</span>
                  <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${activeDropdown === 'solutions' ? 'rotate-180 text-[#C89B3C]' : ''}`} />
                  {pathname === '/goals' && (
                    <motion.div layoutId="activeUnderline" className="absolute bottom-0 left-3.5 right-3.5 h-[2.5px] bg-[#C89B3C] rounded-full" />
                  )}
                </button>

                <AnimatePresence>
                  {activeDropdown === 'solutions' && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 8 }}
                      transition={{ duration: 0.2 }}
                      className="absolute top-full left-0 mt-2 w-72 bg-white rounded-2xl border border-[#C89B3C]/30 shadow-xl p-3 z-50 space-y-1"
                    >
                      {dropdownData.solutions.map((item) => {
                        const Icon = item.icon;
                        return (
                          <button
                            key={item.title}
                            onClick={(e) => handleNavClick(e, item.path)}
                            className="w-full text-left p-2.5 rounded-xl hover:bg-[#FAF8F5] transition-colors flex items-start gap-3 group"
                          >
                            <div className="p-2 rounded-lg bg-[#C89B3C]/10 text-[#C89B3C] group-hover:bg-[#C89B3C] group-hover:text-white transition-colors">
                              <Icon className="w-4 h-4" />
                            </div>
                            <div>
                              <div className="text-xs font-bold text-[#0F172A] group-hover:text-[#C89B3C] transition-colors">{item.title}</div>
                              <div className="text-[11px] text-[#64748B] leading-snug">{item.desc}</div>
                            </div>
                          </button>
                        );
                      })}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Resources (With Dropdown) */}
              <div 
                className="relative"
                onMouseEnter={() => handleMouseEnterDropdown('resources')}
                onMouseLeave={handleMouseLeaveDropdown}
              >
                <button
                  onClick={(e) => handleNavClick(e, 'resources')}
                  className={`px-3.5 py-2 rounded-lg transition-all flex items-center gap-1 relative ${
                    pathname.startsWith('/blogs') || pathname.startsWith('/calculators')
                      ? 'text-[#C89B3C] font-bold'
                      : 'hover:text-[#C89B3C]'
                  }`}
                >
                  <span>Resources</span>
                  <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${activeDropdown === 'resources' ? 'rotate-180 text-[#C89B3C]' : ''}`} />
                  {(pathname.startsWith('/blogs') || pathname.startsWith('/calculators')) && (
                    <motion.div layoutId="activeUnderline" className="absolute bottom-0 left-3.5 right-3.5 h-[2.5px] bg-[#C89B3C] rounded-full" />
                  )}
                </button>

                <AnimatePresence>
                  {activeDropdown === 'resources' && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 8 }}
                      transition={{ duration: 0.2 }}
                      className="absolute top-full left-0 mt-2 w-72 bg-white rounded-2xl border border-[#C89B3C]/30 shadow-xl p-3 z-50 space-y-1"
                    >
                      {dropdownData.resources.map((item) => {
                        const Icon = item.icon;
                        return (
                          <button
                            key={item.title}
                            onClick={(e) => handleNavClick(e, item.path)}
                            className="w-full text-left p-2.5 rounded-xl hover:bg-[#FAF8F5] transition-colors flex items-start gap-3 group"
                          >
                            <div className="p-2 rounded-lg bg-[#C89B3C]/10 text-[#C89B3C] group-hover:bg-[#C89B3C] group-hover:text-white transition-colors">
                              <Icon className="w-4 h-4" />
                            </div>
                            <div>
                              <div className="text-xs font-bold text-[#0F172A] group-hover:text-[#C89B3C] transition-colors">{item.title}</div>
                              <div className="text-[11px] text-[#64748B] leading-snug">{item.desc}</div>
                            </div>
                          </button>
                        );
                      })}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Contact Us */}
              <button
                onClick={(e) => handleNavClick(e, 'contact')}
                className={`px-3.5 py-2 rounded-lg transition-all relative ${
                  pathname === '/contact' ? 'text-[#C89B3C] font-bold' : 'hover:text-[#C89B3C]'
                }`}
              >
                Contact Us
                {pathname === '/contact' && (
                  <motion.div layoutId="activeUnderline" className="absolute bottom-0 left-3.5 right-3.5 h-[2.5px] bg-[#C89B3C] rounded-full" />
                )}
              </button>

            </nav>
          )}

          {/* ========================================================= */}
          {/* RIGHT: SEARCH, PROFILE & GOLD CTA BUTTON (DESKTOP)        */}
          {/* ========================================================= */}
          <div className="hidden lg:flex items-center space-x-3.5">
            {isAdminRoute ? (
              <div className="flex items-center gap-3">
                {user && (
                  <span className="text-xs font-semibold text-[#9A7326] px-3 py-1.5 rounded-xl bg-[#C89B3C]/10 border border-[#C89B3C]/30">
                    {user.name} (Admin)
                  </span>
                )}
                {user ? (
                  <button
                    onClick={handleAdminLogout}
                    className="px-3.5 py-1.5 text-xs text-red-600 hover:text-white bg-red-50 hover:bg-red-600 rounded-xl border border-red-200 transition-colors cursor-pointer flex items-center gap-1.5 font-semibold"
                  >
                    <LogOut className="w-3.5 h-3.5" />
                    <span>Logout</span>
                  </button>
                ) : (
                  <button
                    onClick={() => navigate('/admin/login')}
                    className="px-4 py-2 text-xs font-bold text-white bg-[#0F172A] hover:bg-[#C89A4B] rounded-xl transition-all cursor-pointer"
                  >
                    Admin Login
                  </button>
                )}
              </div>
            ) : (
              <>
                {/* Search Icon Button (Circular White Icon with Gold Outline) */}
                <button
                  onClick={onOpenSearch}
                  className="w-10 h-10 rounded-full bg-white border border-[#C89B3C]/30 hover:border-[#C89B3C] text-[#0F172A] hover:text-[#C89B3C] shadow-sm flex items-center justify-center transition-all cursor-pointer hover:scale-105"
                  title="Search financial goals, tools & blogs"
                  aria-label="Search"
                >
                  <Search className="w-4 h-4" />
                </button>

                {/* Profile / Login Icon Button (Circular White Icon with Gold Outline) */}
                {user ? (
                  <button
                    onClick={(e) => handleNavClick(e, 'dashboard')}
                    className="w-10 h-10 rounded-full bg-white border border-[#C89B3C]/30 hover:border-[#C89B3C] text-[#0F172A] hover:text-[#C89B3C] shadow-sm flex items-center justify-center transition-all cursor-pointer hover:scale-105"
                    title={`My Dashboard (${user.name})`}
                    aria-label="User Profile"
                  >
                    <User className="w-4 h-4 text-[#C89B3C]" />
                  </button>
                ) : (
                  <button
                    onClick={() => openAuthModal('login')}
                    className="w-10 h-10 rounded-full bg-white border border-[#C89B3C]/30 hover:border-[#C89B3C] text-[#0F172A] hover:text-[#C89B3C] shadow-sm flex items-center justify-center transition-all cursor-pointer hover:scale-105"
                    title="Login / Register"
                    aria-label="Login"
                  >
                    <User className="w-4 h-4" />
                  </button>
                )}

                {/* Primary Gold CTA Button */}
                <button
                  onClick={(e) => handleNavClick(e, 'contact')}
                  className="gold-glow-button px-5 py-2.5 rounded-full text-xs font-bold text-white tracking-wide flex items-center space-x-2 group cursor-pointer shadow-md"
                >
                  <span>Start Your Comprehensive Plan</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </button>
              </>
            )}
          </div>

          {/* Mobile Hamburger Button */}
          <div className="flex items-center space-x-2 lg:hidden">
            {!isAdminRoute && (
              <button
                onClick={onOpenSearch}
                className="w-9 h-9 rounded-full bg-white border border-[#C89B3C]/30 text-[#C89B3C] flex items-center justify-center"
              >
                <Search className="w-4 h-4" />
              </button>
            )}
            
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="w-10 h-10 rounded-full bg-white border border-[#C89B3C]/30 text-[#0F172A] flex items-center justify-center shadow-sm"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5 text-[#C89B3C]" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Slide-Out Panel */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            {/* Backdrop Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileMenuOpen(false)}
              className="fixed inset-0 bg-[#0F172A]/40 backdrop-blur-sm z-40 lg:hidden"
            />

            {/* Slide-out White Drawer */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed inset-y-0 right-0 w-80 max-w-[85vw] bg-white shadow-2xl border-l border-[#C89B3C]/30 z-50 p-6 flex flex-col justify-between overflow-y-auto lg:hidden"
            >
              <div className="space-y-6">
                {/* Mobile Drawer Header */}
                <div className="flex items-center justify-between pb-4 border-b border-[#C89B3C]/20">
                  <img src="/solahana-logo.png" alt="SOLAHANA" className="h-12 w-auto object-contain" />
                  <button 
                    onClick={() => setMobileMenuOpen(false)}
                    className="p-2 rounded-full hover:bg-gray-100 text-[#0F172A]"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>

                {/* Mobile Navigation Links */}
                <div className="flex flex-col space-y-1 font-inter text-sm font-semibold text-[#0F172A]">
                  <button
                    onClick={(e) => handleNavClick(e, 'home')}
                    className="text-left py-2.5 px-3 rounded-xl hover:bg-[#FAF8F5] hover:text-[#C89B3C] transition-colors"
                  >
                    Home
                  </button>
                  <button
                    onClick={(e) => handleNavClick(e, 'about')}
                    className="text-left py-2.5 px-3 rounded-xl hover:bg-[#FAF8F5] hover:text-[#C89B3C] transition-colors"
                  >
                    About Us
                  </button>
                  <button
                    onClick={(e) => handleNavClick(e, 'services')}
                    className="text-left py-2.5 px-3 rounded-xl hover:bg-[#FAF8F5] hover:text-[#C89B3C] transition-colors"
                  >
                    Services
                  </button>
                  <button
                    onClick={(e) => handleNavClick(e, 'solutions')}
                    className="text-left py-2.5 px-3 rounded-xl hover:bg-[#FAF8F5] hover:text-[#C89B3C] transition-colors"
                  >
                    Planning Solutions
                  </button>
                  <button
                    onClick={(e) => handleNavClick(e, 'resources')}
                    className="text-left py-2.5 px-3 rounded-xl hover:bg-[#FAF8F5] hover:text-[#C89B3C] transition-colors"
                  >
                    Resources & Calculators
                  </button>
                  <button
                    onClick={(e) => handleNavClick(e, 'contact')}
                    className="text-left py-2.5 px-3 rounded-xl hover:bg-[#FAF8F5] hover:text-[#C89B3C] transition-colors"
                  >
                    Contact Us
                  </button>
                </div>
              </div>

              {/* Mobile Drawer Bottom Actions */}
              <div className="pt-6 border-t border-[#C89B3C]/20 space-y-3">
                {user ? (
                  <button
                    onClick={(e) => handleNavClick(e, 'dashboard')}
                    className="w-full py-2.5 rounded-full border border-[#C89B3C] text-xs font-bold text-[#0F172A] bg-white flex items-center justify-center gap-2"
                  >
                    <User className="w-4 h-4 text-[#C89B3C]" />
                    <span>My Dashboard ({user.name.split(' ')[0]})</span>
                  </button>
                ) : (
                  <button
                    onClick={() => { openAuthModal('login'); setMobileMenuOpen(false); }}
                    className="w-full py-2.5 rounded-full border border-[#C89B3C]/40 text-xs font-bold text-[#0F172A] bg-white flex items-center justify-center gap-2"
                  >
                    <User className="w-4 h-4 text-[#C89B3C]" />
                    <span>Login / Register</span>
                  </button>
                )}

                <button
                  onClick={(e) => handleNavClick(e, 'contact')}
                  className="w-full gold-glow-button text-center py-3 rounded-full text-xs font-bold text-white flex items-center justify-center gap-2"
                >
                  <span>Start Your Comprehensive Plan</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}
