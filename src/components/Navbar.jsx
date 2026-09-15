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
  LogOut,
  MapPin,
  Mail,
  Clock,
  MessageSquare
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

  const handleAdminLogout = async () => {
    await logout();
    navigate('/admin/login');
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300">
      {/* Main Navbar */}
      <div
        className={`h-[76px] transition-all duration-300 ${
          isScrolled
            ? 'bg-[#FAF8F5]/90 backdrop-blur-xl border-b border-[#C89A4B]/20 shadow-[0_10px_30px_rgba(200,154,75,0.12)]'
            : 'bg-[#FAF8F5]/80 backdrop-blur-md border-b border-[#C89A4B]/15'
        }`}
      >
        <div className="max-w-7xl mx-auto h-full px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          
          {/* Left Side: Brand Logo (Matching Client Reference Image Header) */}
          <button 
            onClick={(e) => handleNavClick(e, isAdminRoute ? '/admin/dashboard' : 'home')} 
            className="flex items-center space-x-3 group text-left cursor-pointer"
          >
            {/* SOLAHANA Circular Emblem */}
            <div className="relative w-10 h-10 rounded-full bg-gradient-to-br from-[#E5C158] via-[#C89A4B] to-[#9A7326] p-[1.5px] shadow-[0_0_15px_rgba(200,154,75,0.3)] group-hover:shadow-[0_0_22px_rgba(200,154,75,0.5)] transition-all duration-300">
              <div className="w-full h-full bg-[#FAF8F5] rounded-full flex items-center justify-center relative overflow-hidden">
                <span className="text-[#0F172A] font-serif-luxury font-bold text-lg leading-none">S</span>
                <span className="text-[#C89A4B] font-bold text-xs -ml-0.5">₹</span>
              </div>
            </div>

            <div className="flex flex-col">
              <div className="flex items-center space-x-0.5">
                <span className="text-xl sm:text-2xl font-serif-luxury font-bold tracking-tight text-[#0F172A]">
                  SOLAHANA
                </span>
                <span className="text-[10px] font-bold text-[#C89A4B] align-top">TM</span>
              </div>
              <span className="text-[10px] tracking-wider uppercase text-[#475569] font-medium font-inter">
                {isAdminRoute ? 'Admin Governance Center' : 'Your Complete Financial Partner'}
              </span>
            </div>
          </button>

          {/* Center Navigation Links (Desktop) */}
          {isAdminRoute ? (
            <div className="hidden lg:flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#C89A4B]/10 border border-[#C89A4B]/30 text-xs font-semibold text-[#9A7326]">
              <ShieldCheck className="w-4 h-4 text-[#C89A4B]" />
              <span>ADMINISTRATOR GOVERNANCE DESK</span>
            </div>
          ) : (
            <nav className="hidden lg:flex items-center space-x-1 font-inter text-xs font-semibold">
              <button
                onClick={(e) => handleNavClick(e, 'home')}
                className={`px-3.5 py-2 transition-all rounded-lg relative ${
                  pathname === '/'
                    ? 'text-[#C89A4B] font-bold'
                    : 'text-[#0F172A] hover:text-[#C89A4B]'
                }`}
              >
                Home
                {pathname === '/' && (
                  <motion.div layoutId="navUnderline" className="absolute bottom-0 left-3.5 right-3.5 h-[2px] bg-[#C89A4B] rounded-full" />
                )}
              </button>

              <button
                onClick={(e) => handleNavClick(e, 'about')}
                className={`px-3.5 py-2 transition-all rounded-lg relative ${
                  pathname === '/about'
                    ? 'text-[#C89A4B] font-bold'
                    : 'text-[#0F172A] hover:text-[#C89A4B]'
                }`}
              >
                About Us
                {pathname === '/about' && (
                  <motion.div layoutId="navUnderline" className="absolute bottom-0 left-3.5 right-3.5 h-[2px] bg-[#C89A4B] rounded-full" />
                )}
              </button>

              <button
                onClick={(e) => handleNavClick(e, 'services')}
                className={`px-3.5 py-2 transition-all rounded-lg relative ${
                  pathname === '/financial-planning'
                    ? 'text-[#C89A4B] font-bold'
                    : 'text-[#0F172A] hover:text-[#C89A4B]'
                }`}
              >
                Services
                {pathname === '/financial-planning' && (
                  <motion.div layoutId="navUnderline" className="absolute bottom-0 left-3.5 right-3.5 h-[2px] bg-[#C89A4B] rounded-full" />
                )}
              </button>

              <button
                onClick={(e) => handleNavClick(e, 'solutions')}
                className={`px-3.5 py-2 transition-all rounded-lg relative ${
                  pathname === '/goals'
                    ? 'text-[#C89A4B] font-bold'
                    : 'text-[#0F172A] hover:text-[#C89A4B]'
                }`}
              >
                Planning Solutions
                {pathname === '/goals' && (
                  <motion.div layoutId="navUnderline" className="absolute bottom-0 left-3.5 right-3.5 h-[2px] bg-[#C89A4B] rounded-full" />
                )}
              </button>

              <button
                onClick={(e) => handleNavClick(e, 'resources')}
                className={`px-3.5 py-2 transition-all rounded-lg relative ${
                  pathname.startsWith('/blogs') || pathname.startsWith('/calculators')
                    ? 'text-[#C89A4B] font-bold'
                    : 'text-[#0F172A] hover:text-[#C89A4B]'
                }`}
              >
                Resources
                {(pathname.startsWith('/blogs') || pathname.startsWith('/calculators')) && (
                  <motion.div layoutId="navUnderline" className="absolute bottom-0 left-3.5 right-3.5 h-[2px] bg-[#C89A4B] rounded-full" />
                )}
              </button>

              <button
                onClick={(e) => handleNavClick(e, 'contact')}
                className={`px-3.5 py-2 transition-all rounded-lg relative ${
                  pathname === '/contact'
                    ? 'text-[#C89A4B] font-bold'
                    : 'text-[#0F172A] hover:text-[#C89A4B]'
                }`}
              >
                Contact Us
                {pathname === '/contact' && (
                  <motion.div layoutId="navUnderline" className="absolute bottom-0 left-3.5 right-3.5 h-[2px] bg-[#C89A4B] rounded-full" />
                )}
              </button>
            </nav>
          )}

          {/* Right Side Actions */}
          <div className="hidden lg:flex items-center space-x-4">
            {isAdminRoute ? (
              <div className="flex items-center gap-3">
                {user && (
                  <span className="text-xs font-semibold text-[#9A7326] px-3 py-1.5 rounded-xl bg-[#C89A4B]/10 border border-[#C89A4B]/30">
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
                {/* Search Modal Trigger */}
                <button
                  onClick={onOpenSearch}
                  className="p-2 text-[#475569] hover:text-[#C89A4B] bg-[#F3EFE9] hover:bg-white border border-[#C89A4B]/20 rounded-xl transition-all flex items-center gap-2 text-xs"
                  title="Search goals or calculators"
                >
                  <Search className="w-4 h-4 text-[#C89A4B]" />
                </button>

                {/* Login / User Session Button */}
                {user ? (
                  <div className="flex items-center gap-2">
                    {(user.role === 'admin' || user.role === 'advisor') && (
                      <button
                        onClick={(e) => handleNavClick(e, '/admin/dashboard')}
                        className="text-xs font-bold text-white px-3 py-1.5 rounded-xl bg-[#0F172A] hover:bg-[#C89A4B] transition-all cursor-pointer shadow flex items-center gap-1.5"
                      >
                        <ShieldCheck className="w-3.5 h-3.5 text-[#C89A4B]" />
                        <span>Admin</span>
                      </button>
                    )}
                    <button
                      onClick={(e) => handleNavClick(e, 'dashboard')}
                      className="text-xs font-semibold text-[#0F172A] px-3 py-1.5 rounded-xl bg-[#F3EFE9] border border-[#C89A4B]/30 hover:border-[#C89A4B] transition-all cursor-pointer"
                    >
                      {user.name.split(' ')[0]}
                    </button>
                    <button
                      onClick={logout}
                      className="px-3 py-1.5 text-xs text-[#64748B] hover:text-[#0F172A] transition-colors cursor-pointer"
                    >
                      Logout
                    </button>
                  </div>
                ) : (
                  <button
                    onClick={() => openAuthModal('login')}
                    className="px-4 py-2 text-xs font-semibold text-[#0F172A] hover:text-[#C89A4B] rounded-xl border border-[#C89A4B]/25 hover:border-[#C89A4B] bg-white transition-all cursor-pointer shadow-sm"
                  >
                    Login
                  </button>
                )}

                {/* Primary CTA Button (Client Reference: "Start Your ₹1 Plan >") */}
                <button
                  onClick={(e) => handleNavClick(e, 'contact')}
                  className="gold-glow-button px-5 py-2.5 rounded-full text-xs font-bold tracking-wide flex items-center space-x-1.5 group cursor-pointer shadow-md"
                >
                  <span>Start Your Comprehensive Plan</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </button>
              </>
            )}
          </div>

          {/* Mobile Menu Hamburger */}
          <div className="flex items-center space-x-3 lg:hidden">
            {!isAdminRoute && (
              <button
                onClick={onOpenSearch}
                className="p-2 text-[#C89A4B] bg-white border border-[#C89A4B]/20 rounded-xl"
              >
                <Search className="w-4 h-4" />
              </button>
            )}
            
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-[#0F172A] bg-white border border-[#C89A4B]/30 rounded-xl"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-[#FAF8F5]/98 border-b border-[#C89A4B]/20 backdrop-blur-2xl px-5 py-6 space-y-4 shadow-xl text-left"
          >
            <div className="flex flex-col space-y-3 font-inter text-sm font-medium">
              <button
                onClick={(e) => handleNavClick(e, 'home')}
                className="text-left py-2 px-3 rounded-lg text-[#0F172A] hover:bg-[#C89A4B]/10 hover:text-[#C89A4B]"
              >
                Home
              </button>
              <button
                onClick={(e) => handleNavClick(e, 'about')}
                className="text-left py-2 px-3 rounded-lg text-[#0F172A] hover:bg-[#C89A4B]/10 hover:text-[#C89A4B]"
              >
                About Us
              </button>
              <button
                onClick={(e) => handleNavClick(e, 'services')}
                className="text-left py-2 px-3 rounded-lg text-[#0F172A] hover:bg-[#C89A4B]/10 hover:text-[#C89A4B]"
              >
                Services
              </button>
              <button
                onClick={(e) => handleNavClick(e, 'solutions')}
                className="text-left py-2 px-3 rounded-lg text-[#0F172A] hover:bg-[#C89A4B]/10 hover:text-[#C89A4B]"
              >
                Planning Solutions
              </button>
              <button
                onClick={(e) => handleNavClick(e, 'resources')}
                className="text-left py-2 px-3 rounded-lg text-[#0F172A] hover:bg-[#C89A4B]/10 hover:text-[#C89A4B]"
              >
                Resources & Blogs
              </button>
              <button
                onClick={(e) => handleNavClick(e, 'calculators')}
                className="text-left py-2 px-3 rounded-lg text-[#0F172A] hover:bg-[#C89A4B]/10 hover:text-[#C89A4B]"
              >
                Financial Calculators
              </button>
              <button
                onClick={(e) => handleNavClick(e, 'contact')}
                className="text-left py-2 px-3 rounded-lg text-[#0F172A] hover:bg-[#C89A4B]/10 hover:text-[#C89A4B]"
              >
                Contact Us
              </button>
            </div>

            <div className="pt-4 border-t border-[#C89A4B]/20 flex flex-col gap-3">
              {user ? (
                <div className="flex flex-col gap-2">
                  <button
                    onClick={(e) => handleNavClick(e, 'dashboard')}
                    className="w-full text-center py-2.5 rounded-xl border border-[#C89A4B] text-xs font-bold text-[#0F172A] bg-white"
                  >
                    Go to My Dashboard ({user.name})
                  </button>
                  <button
                    onClick={logout}
                    className="w-full text-center py-2 rounded-xl text-xs text-[#64748B]"
                  >
                    Logout
                  </button>
                </div>
              ) : (
                <button
                  onClick={() => { openAuthModal('login'); setMobileMenuOpen(false); }}
                  className="w-full text-center py-2.5 rounded-xl border border-[#C89A4B]/40 text-xs font-bold text-[#0F172A] bg-white"
                >
                  Login / Register
                </button>
              )}

              <button
                onClick={(e) => handleNavClick(e, 'contact')}
                className="w-full gold-glow-button text-center py-3 rounded-full text-xs font-bold flex items-center justify-center gap-2"
              >
                <span>Start Your Comprehensive Plan</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
