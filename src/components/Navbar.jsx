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
      {/* Top Header Information Bar (As per client reference design) */}
      {!isAdminRoute && (
        <div className="hidden lg:block bg-[#FAF8F5] border-b border-[#C89A4B]/20 text-[#475569] text-xs py-2 px-4 sm:px-6 lg:px-8 font-inter">
          <div className="max-w-7xl mx-auto flex items-center justify-between">
            <div className="flex items-center space-x-6">
              <span className="flex items-center space-x-1.5">
                <MapPin className="w-3.5 h-3.5 text-[#C89A4B]" />
                <span>Off Veera Desai Road, Andheri West, Mumbai - 400053</span>
              </span>
              <span className="text-[#C89A4B]/30">|</span>
              <a href="mailto:info@solahana.com" className="flex items-center space-x-1.5 hover:text-[#C89A4B] transition-colors">
                <Mail className="w-3.5 h-3.5 text-[#C89A4B]" />
                <span>info@solahana.com</span>
              </a>
            </div>

            <div className="flex items-center space-x-6">
              <span className="flex items-center space-x-1.5">
                <Clock className="w-3.5 h-3.5 text-[#C89A4B]" />
                <span>Mon - Sat: 10:00am - 7:00pm</span>
              </span>
              <span className="text-[#C89A4B]/30">|</span>
              <div className="flex items-center space-x-3 text-[#475569]">
                <a href="https://facebook.com" target="_blank" rel="noreferrer" className="hover:text-[#C89A4B] transition-colors" title="Facebook">
                  <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
                </a>
                <a href="https://instagram.com" target="_blank" rel="noreferrer" className="hover:text-[#C89A4B] transition-colors" title="Instagram">
                  <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
                </a>
                <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="hover:text-[#C89A4B] transition-colors" title="LinkedIn">
                  <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24"><path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/></svg>
                </a>
                <a href="https://wa.me/917304442171" target="_blank" rel="noreferrer" className="hover:text-emerald-600 transition-colors" title="WhatsApp Advisory">
                  <MessageSquare className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      )}

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
                  <span>Start Your ₹1 Plan</span>
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
                <span>Start Your ₹1 Plan</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
