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
  PhoneCall,
  LogOut
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

  const handleNavClick = (e, targetPath) => {
    if (e) e.preventDefault();
    setMobileMenuOpen(false);

    const pathMap = {
      'home': '/',
      'about': '/about',
      'financial-planning': '/financial-planning',
      'goals': '/goals',
      'investments': '/investments',
      'tax-planning': '/tax-planning',
      'calculators': '/calculators',
      'blogs': '/blogs',
      'contact': '/contact',
      'dashboard': '/dashboard',
      'admin': '/admin/dashboard',
      'admin-login': '/admin/login',
    };

    const dest = pathMap[targetPath] || targetPath;
    navigate(dest);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleAdminLogout = async () => {
    await logout();
    navigate('/admin/login');
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
        { name: 'SIP & Step-Up Calculator', desc: 'Visualize wealth growth with step-up SIPs', icon: Calculator, path: '/calculators/sip' },
        { name: 'FIRE Retirement Calculator', desc: 'Find your target retirement net worth number', icon: Target, path: '/calculators/retirement' },
        { name: 'EMI Loan Calculator', desc: 'Compute monthly loan EMIs & interest schedule', icon: Calculator, path: '/calculators/emi' },
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
        <button onClick={(e) => handleNavClick(e, isAdminRoute ? '/admin/dashboard' : 'home')} className="flex items-center space-x-3 group text-left cursor-pointer">
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
              {isAdminRoute ? 'Admin Control Center' : 'Financial Planning'}
            </span>
          </div>
        </button>

        {/* Center Section */}
        {isAdminRoute ? (
          /* Minimal Admin Navbar Center Badge */
          <div className="hidden lg:flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#C8A24A]/10 border border-[#C8A24A]/30 text-xs font-semibold text-[#E8C878]">
            <ShieldCheck className="w-4 h-4 text-[#C8A24A]" />
            <span>ADMINISTRATOR GOVERNANCE DESK</span>
          </div>
        ) : (
          /* Public Center Navigation Menu (Desktop) */
          <nav className="hidden lg:flex items-center space-x-1 font-inter text-xs font-semibold">
            <button
              onClick={(e) => handleNavClick(e, 'home')}
              className={`px-3 py-2 transition-colors rounded-lg ${
                pathname === '/'
                  ? 'text-[#E8C878] bg-[#071C48] font-bold border border-[#C8A24A]/30'
                  : 'text-[#F8F7F3] hover:text-[#E8C878] hover:bg-[#071C48]/40'
              }`}
            >
              Home
            </button>

            <button
              onClick={(e) => handleNavClick(e, 'about')}
              className={`px-3 py-2 transition-colors rounded-lg ${
                pathname === '/about'
                  ? 'text-[#E8C878] bg-[#071C48] font-bold border border-[#C8A24A]/30'
                  : 'text-[#BAC6DA] hover:text-[#F8F7F3] hover:bg-[#071C48]/40'
              }`}
            >
              About
            </button>

            <button
              onClick={(e) => handleNavClick(e, 'financial-planning')}
              className={`px-3 py-2 transition-colors rounded-lg ${
                pathname === '/financial-planning'
                  ? 'text-[#E8C878] bg-[#071C48] font-bold border border-[#C8A24A]/30'
                  : 'text-[#BAC6DA] hover:text-[#F8F7F3] hover:bg-[#071C48]/40'
              }`}
            >
              Financial Planning
            </button>

            <button
              onClick={(e) => handleNavClick(e, 'goals')}
              className={`px-3 py-2 transition-colors rounded-lg ${
                pathname === '/goals'
                  ? 'text-[#E8C878] bg-[#071C48] font-bold border border-[#C8A24A]/30'
                  : 'text-[#BAC6DA] hover:text-[#F8F7F3] hover:bg-[#071C48]/40'
              }`}
            >
              Goals
            </button>

            <button
              onClick={(e) => handleNavClick(e, 'investments')}
              className={`px-3 py-2 transition-colors rounded-lg ${
                pathname === '/investments'
                  ? 'text-[#E8C878] bg-[#071C48] font-bold border border-[#C8A24A]/30'
                  : 'text-[#BAC6DA] hover:text-[#F8F7F3] hover:bg-[#071C48]/40'
              }`}
            >
              Investments
            </button>

            <button
              onClick={(e) => handleNavClick(e, 'tax-planning')}
              className={`px-3 py-2 transition-colors rounded-lg ${
                pathname === '/tax-planning'
                  ? 'text-[#E8C878] bg-[#071C48] font-bold border border-[#C8A24A]/30'
                  : 'text-[#BAC6DA] hover:text-[#F8F7F3] hover:bg-[#071C48]/40'
              }`}
            >
              Tax Planning
            </button>

            <button
              onClick={(e) => handleNavClick(e, 'calculators')}
              className={`px-3 py-2 transition-colors rounded-lg ${
                pathname.startsWith('/calculators')
                  ? 'text-[#E8C878] bg-[#071C48] font-bold border border-[#C8A24A]/30'
                  : 'text-[#BAC6DA] hover:text-[#F8F7F3] hover:bg-[#071C48]/40'
              }`}
            >
              Calculators
            </button>

            <button
              onClick={(e) => handleNavClick(e, 'blogs')}
              className={`px-3 py-2 transition-colors rounded-lg ${
                pathname.startsWith('/blogs')
                  ? 'text-[#E8C878] bg-[#071C48] font-bold border border-[#C8A24A]/30'
                  : 'text-[#BAC6DA] hover:text-[#F8F7F3] hover:bg-[#071C48]/40'
              }`}
            >
              Blogs
            </button>

            <button
              onClick={(e) => handleNavClick(e, 'contact')}
              className={`px-3 py-2 transition-colors rounded-lg ${
                pathname === '/contact'
                  ? 'text-[#E8C878] bg-[#071C48] font-bold border border-[#C8A24A]/30'
                  : 'text-[#BAC6DA] hover:text-[#F8F7F3] hover:bg-[#071C48]/40'
              }`}
            >
              Contact
            </button>
          </nav>
        )}

        {/* Right Side Actions */}
        <div className="hidden lg:flex items-center space-x-4">
          {isAdminRoute ? (
            /* Minimal Admin Header Right Actions */
            <div className="flex items-center gap-3">
              {user && (
                <span className="text-xs font-semibold text-[#E8C878] px-3 py-1.5 rounded-xl bg-[#071C48] border border-[#C8A24A]/30">
                  {user.name} (Admin)
                </span>
              )}
              {user ? (
                <button
                  onClick={handleAdminLogout}
                  className="px-3.5 py-1.5 text-xs text-red-300 hover:text-white bg-red-500/20 hover:bg-red-500/30 rounded-xl border border-red-500/40 transition-colors cursor-pointer flex items-center gap-1.5 font-semibold"
                  title="Admin Logout"
                >
                  <LogOut className="w-3.5 h-3.5" />
                  <span>Logout</span>
                </button>
              ) : (
                <button
                  onClick={() => navigate('/admin/login')}
                  className="px-4 py-2 text-xs font-bold text-[#020B2D] bg-[#C8A24A] hover:bg-[#E8C878] rounded-xl transition-all cursor-pointer"
                >
                  Admin Login
                </button>
              )}
            </div>
          ) : (
            /* Public Header Right Actions */
            <>
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
                      onClick={(e) => handleNavClick(e, '/admin/dashboard')}
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
            </>
          )}
        </div>

        {/* Mobile Hamburger Button */}
        <div className="flex items-center space-x-3 lg:hidden">
          {!isAdminRoute && (
            <button
              onClick={onOpenSearch}
              className="p-2 text-[#C8A24A] bg-[#071C48]/60 border border-[#C8A24A]/20 rounded-xl"
            >
              <Search className="w-4 h-4" />
            </button>
          )}
          
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
            {isAdminRoute ? (
              <div className="space-y-3">
                <div className="p-3 rounded-xl bg-[#071C48] border border-[#C8A24A]/30 text-xs font-semibold text-[#E8C878]">
                  ADMINISTRATOR CONTROL DESK
                </div>
                {user ? (
                  <button
                    onClick={() => { handleAdminLogout(); setMobileMenuOpen(false); }}
                    className="w-full text-center py-2.5 rounded-xl border border-red-500/40 text-xs font-bold text-red-300 bg-red-500/20 cursor-pointer"
                  >
                    Admin Logout
                  </button>
                ) : (
                  <button
                    onClick={() => { navigate('/admin/login'); setMobileMenuOpen(false); }}
                    className="w-full text-center py-2.5 rounded-xl text-xs font-bold text-[#020B2D] bg-[#C8A24A] cursor-pointer"
                  >
                    Admin Login
                  </button>
                )}
              </div>
            ) : (
              <>
                <div className="space-y-2">
                  <button 
                    onClick={(e) => handleNavClick(e, 'home')} 
                    className={`w-full text-left p-3 rounded-xl text-sm font-semibold transition-colors ${
                      pathname === '/' ? 'bg-[#071C48] text-[#E8C878] border border-[#C8A24A]/30' : 'bg-[#071C48]/50 text-[#F8F7F3]'
                    }`}
                  >
                    Home
                  </button>
                  <button 
                    onClick={(e) => handleNavClick(e, 'about')} 
                    className={`w-full text-left p-3 rounded-xl text-sm font-semibold transition-colors ${
                      pathname === '/about' ? 'bg-[#071C48] text-[#E8C878] border border-[#C8A24A]/30' : 'bg-[#071C48]/50 text-[#BAC6DA]'
                    }`}
                  >
                    About SOLAHANA
                  </button>
                  <button 
                    onClick={(e) => handleNavClick(e, 'financial-planning')} 
                    className={`w-full text-left p-3 rounded-xl text-sm font-semibold transition-colors ${
                      pathname === '/financial-planning' ? 'bg-[#071C48] text-[#E8C878] border border-[#C8A24A]/30' : 'bg-[#071C48]/50 text-[#BAC6DA]'
                    }`}
                  >
                    Financial Planning
                  </button>
                  <button 
                    onClick={(e) => handleNavClick(e, 'goals')} 
                    className={`w-full text-left p-3 rounded-xl text-sm font-semibold transition-colors ${
                      pathname === '/goals' ? 'bg-[#071C48] text-[#E8C878] border border-[#C8A24A]/30' : 'bg-[#071C48]/50 text-[#BAC6DA]'
                    }`}
                  >
                    Life Goals
                  </button>
                  <button 
                    onClick={(e) => handleNavClick(e, 'investments')} 
                    className={`w-full text-left p-3 rounded-xl text-sm font-semibold transition-colors ${
                      pathname === '/investments' ? 'bg-[#071C48] text-[#E8C878] border border-[#C8A24A]/30' : 'bg-[#071C48]/50 text-[#BAC6DA]'
                    }`}
                  >
                    Investments
                  </button>
                  <button 
                    onClick={(e) => handleNavClick(e, 'tax-planning')} 
                    className={`w-full text-left p-3 rounded-xl text-sm font-semibold transition-colors ${
                      pathname === '/tax-planning' ? 'bg-[#071C48] text-[#E8C878] border border-[#C8A24A]/30' : 'bg-[#071C48]/50 text-[#BAC6DA]'
                    }`}
                  >
                    Tax Planning
                  </button>
                  <button 
                    onClick={(e) => handleNavClick(e, 'calculators')} 
                    className={`w-full text-left p-3 rounded-xl text-sm font-semibold transition-colors ${
                      pathname === '/calculators' ? 'bg-[#071C48] text-[#E8C878] border border-[#C8A24A]/30' : 'bg-[#071C48]/50 text-[#BAC6DA]'
                    }`}
                  >
                    Financial Calculators
                  </button>
                  <button 
                    onClick={(e) => handleNavClick(e, 'blogs')} 
                    className={`w-full text-left p-3 rounded-xl text-sm font-semibold transition-colors ${
                      pathname.startsWith('/blogs') ? 'bg-[#071C48] text-[#E8C878] border border-[#C8A24A]/30' : 'bg-[#071C48]/50 text-[#BAC6DA]'
                    }`}
                  >
                    Financial Blog
                  </button>
                  <button 
                    onClick={(e) => handleNavClick(e, 'contact')} 
                    className={`w-full text-left p-3 rounded-xl text-sm font-semibold transition-colors ${
                      pathname === '/contact' ? 'bg-[#071C48] text-[#E8C878] border border-[#C8A24A]/30' : 'bg-[#071C48]/50 text-[#BAC6DA]'
                    }`}
                  >
                    Contact
                  </button>
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
                        className="text-xs text-red-400 hover:text-red-300 font-medium cursor-pointer"
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
              </>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
