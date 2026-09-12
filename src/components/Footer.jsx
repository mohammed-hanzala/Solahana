import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  ShieldCheck, 
  ArrowRight, 
  Mail, 
  Phone,
  MapPin
} from 'lucide-react';

import newsletterService from '../services/newsletterService';

export default function Footer() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubscribe = async (e) => {
    e.preventDefault();
    if (!email || !email.includes('@')) return;
    setLoading(true);
    try {
      await newsletterService.subscribe(email, 'website_footer');
      setSubscribed(true);
      setEmail('');
      setTimeout(() => setSubscribed(false), 4000);
    } catch (err) {
      console.error('[Newsletter Subscribe Error]:', err);
    } finally {
      setLoading(false);
    }
  };

  const handleLinkClick = (e, target) => {
    e.preventDefault();
    const pathMap = {
      'home': '/',
      'about': '/about',
      'financial-planning': '/financial-planning',
      'goals': '/goals',
      'investments': '/investments',
      'tax-planning': '/tax-planning',
      'calculators': '/calculators',
      'contact': '/contact',
      'dashboard': '/dashboard',
    };
    const dest = pathMap[target] || target;
    navigate(dest);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative z-20 bg-[#0F172A] border-t border-[#C89A4B]/20 text-[#94A3B8]">
      
      {/* Main Footer Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12">
          
          {/* COLUMN 1: SOLAHANA LOGO & BRAND BRIEF */}
          <div className="lg:col-span-4 space-y-5 text-left">
            <button onClick={(e) => handleLinkClick(e, 'home')} className="flex items-center space-x-3 group text-left cursor-pointer">
              <div className="relative w-10 h-10 rounded-full bg-gradient-to-br from-[#E5C158] via-[#C89A4B] to-[#9A7326] p-[1.5px]">
                <div className="w-full h-full bg-[#0F172A] rounded-full flex items-center justify-center">
                  <span className="text-white font-serif-luxury font-bold text-lg">S</span>
                  <span className="text-[#C89A4B] font-bold text-xs -ml-0.5">₹</span>
                </div>
              </div>
              <div className="flex flex-col">
                <div className="flex items-center space-x-0.5">
                  <span className="text-xl font-serif-luxury font-bold tracking-tight text-white group-hover:text-[#C89A4B] transition-colors">
                    SOLAHANA
                  </span>
                  <span className="text-[10px] font-bold text-[#C89A4B]">TM</span>
                </div>
                <span className="text-[10px] tracking-widest uppercase text-[#94A3B8] font-medium font-sora">
                  Your Complete Financial Partner
                </span>
              </div>
            </button>

            <p className="text-xs text-[#94A3B8] leading-relaxed max-w-sm font-inter">
              SOLAHANA helps individuals and families organize, structure, and plan their money around life goals with transparent, zero-commission fiduciary advisory.
            </p>

            <div className="space-y-2 pt-1 text-xs text-[#CBD5E1]">
              <div className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-[#C89A4B] shrink-0" />
                <span>Off Veera Desai Road, Andheri West, Mumbai - 400053</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-[#C89A4B] shrink-0" />
                <a href="tel:+917304442171" className="hover:text-[#C89A4B] transition-colors">+91 73044 42171</a>
                <span>•</span>
                <a href="tel:+917021295187" className="hover:text-[#C89A4B] transition-colors">+91 70212 95187</a>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-[#C89A4B] shrink-0" />
                <a href="mailto:info@solahana.com" className="hover:text-[#C89A4B] transition-colors font-medium">info@solahana.com</a>
              </div>
            </div>

            <div className="pt-2 flex items-center space-x-2 text-xs text-emerald-400 font-num">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span>SEBI Reg. RIA #INA000018241</span>
            </div>
          </div>

          {/* COLUMN 2: FINANCIAL PLANNING LINKS */}
          <div className="lg:col-span-2 text-left space-y-4">
            <h4 className="text-sm font-serif-luxury font-bold text-white uppercase tracking-wider">
              Planning Services
            </h4>
            <ul className="space-y-2.5 text-xs">
              {['Financial Planning', 'Retirement Planning', 'Investment Planning', 'Tax Planning', 'Life Goals Roadmap'].map((item, i) => (
                <li key={i}>
                  {item === 'Financial Planning' ? (
                    <button onClick={(e) => handleLinkClick(e, 'financial-planning')} className="hover:text-[#C89A4B] transition-colors duration-200 block py-0.5 text-left cursor-pointer">
                      {item}
                    </button>
                  ) : item === 'Investment Planning' ? (
                    <button onClick={(e) => handleLinkClick(e, 'investments')} className="hover:text-[#C89A4B] transition-colors duration-200 block py-0.5 text-left cursor-pointer">
                      {item}
                    </button>
                  ) : item === 'Tax Planning' ? (
                    <button onClick={(e) => handleLinkClick(e, 'tax-planning')} className="hover:text-[#C89A4B] transition-colors duration-200 block py-0.5 text-left cursor-pointer">
                      {item}
                    </button>
                  ) : (
                    <button onClick={(e) => handleLinkClick(e, 'goals')} className="hover:text-[#C89A4B] transition-colors duration-200 block py-0.5 text-left cursor-pointer">
                      {item}
                    </button>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* COLUMN 3: TOOLS & COMPANY LINKS */}
          <div className="lg:col-span-2 text-left space-y-4">
            <h4 className="text-sm font-serif-luxury font-bold text-white uppercase tracking-wider">
              Tools & Company
            </h4>
            <ul className="space-y-2.5 text-xs">
              {['Calculators Desk', 'Financial Blogs', 'FAQs', 'About SOLAHANA', 'Contact Us'].map((item, i) => (
                <li key={i}>
                  {item === 'About SOLAHANA' ? (
                    <button onClick={(e) => handleLinkClick(e, 'about')} className="hover:text-[#C89A4B] transition-colors duration-200 block py-0.5 text-left cursor-pointer">
                      {item}
                    </button>
                  ) : item === 'Calculators Desk' ? (
                    <button onClick={(e) => handleLinkClick(e, 'calculators')} className="hover:text-[#C89A4B] transition-colors duration-200 block py-0.5 text-left cursor-pointer">
                      {item}
                    </button>
                  ) : item === 'Financial Blogs' ? (
                    <button onClick={(e) => handleLinkClick(e, 'blogs')} className="hover:text-[#C89A4B] transition-colors duration-200 block py-0.5 text-left cursor-pointer">
                      {item}
                    </button>
                  ) : (
                    <button onClick={(e) => handleLinkClick(e, 'contact')} className="hover:text-[#C89A4B] transition-colors duration-200 block py-0.5 text-left cursor-pointer">
                      {item}
                    </button>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* COLUMN 4: NEWSLETTER & SOCIALS */}
          <div className="lg:col-span-4 text-left space-y-5">
            <h4 className="text-sm font-serif-luxury font-bold text-white uppercase tracking-wider">
              Weekly Wealth Insights
            </h4>
            <p className="text-xs text-[#94A3B8]">
              Subscribe for clear, practical financial insights delivered to your inbox every Sunday.
            </p>

            <form onSubmit={handleSubscribe} className="flex items-center space-x-2">
              <div className="relative flex-1">
                <Mail className="w-4 h-4 text-[#94A3B8] absolute left-3 top-1/2 -translate-y-1/2" />
                <input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full bg-[#1E293B] border border-[#C89A4B]/30 rounded-xl pl-9 pr-3 py-2.5 text-xs text-white placeholder-[#94A3B8] focus:outline-none focus:border-[#C89A4B] transition-colors"
                />
              </div>
              <button
                type="submit"
                className="gold-glow-button px-4 py-2.5 rounded-xl text-xs font-bold text-white flex items-center justify-center shrink-0"
              >
                {subscribed ? 'Subscribed!' : <ArrowRight className="w-4 h-4" />}
              </button>
            </form>

            {/* Social Icons */}
            <div className="pt-2 flex items-center space-x-3">
              <a
                href="https://www.linkedin.com/company/solahana"
                target="_blank"
                rel="noopener noreferrer"
                title="LinkedIn"
                className="w-9 h-9 rounded-xl bg-[#1E293B] border border-[#C89A4B]/20 flex items-center justify-center text-[#94A3B8] hover:text-[#C89A4B] hover:border-[#C89A4B] transition-all"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/>
                </svg>
              </a>

              <a
                href="https://www.instagram.com/solahana.wealth"
                target="_blank"
                rel="noopener noreferrer"
                title="Instagram"
                className="w-9 h-9 rounded-xl bg-[#1E293B] border border-[#C89A4B]/20 flex items-center justify-center text-[#94A3B8] hover:text-[#C89A4B] hover:border-[#C89A4B] transition-all"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>

              <a
                href="https://wa.me/917304442171"
                target="_blank"
                rel="noopener noreferrer"
                title="WhatsApp"
                className="w-9 h-9 rounded-xl bg-[#1E293B] border border-[#C89A4B]/20 flex items-center justify-center text-[#94A3B8] hover:text-emerald-400 hover:border-emerald-400 transition-all"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-1.146 4.187 4.289-1.126z"/>
                </svg>
              </a>
            </div>
          </div>

        </div>

        {/* BOTTOM FOOTER DISCLAIMER & COPYRIGHT */}
        <div className="mt-14 pt-8 border-t border-[#C89A4B]/15 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-[#94A3B8]">
          <div>
            © {new Date().getFullYear()} SOLAHANA Financial Advisory. All rights reserved.
          </div>

          <div className="flex flex-wrap items-center gap-6 text-xs text-[#94A3B8]">
            <a href="#" className="hover:text-[#C89A4B] transition-colors">Privacy Policy</a>
            <span>•</span>
            <a href="#" className="hover:text-[#C89A4B] transition-colors">Terms of Service</a>
            <span>•</span>
            <a href="#" className="hover:text-[#C89A4B] transition-colors">SEBI Disclosures</a>
            <span>•</span>
            <a href="#" className="hover:text-[#C89A4B] transition-colors">Grievance Redressal</a>
          </div>
        </div>

        <div className="mt-4 text-[10px] text-center text-[#64748B] leading-relaxed">
          Disclaimer: Investments are subject to market risks. Read all scheme related documents carefully before investing. SEBI Registration No: INA000018241. Past performance is not indicative of future returns.
        </div>

      </div>

    </footer>
  );
}
