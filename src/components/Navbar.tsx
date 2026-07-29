import React, { useState, useEffect } from 'react';
import { Phone, ArrowRight, Menu, X, Zap, Cpu } from 'lucide-react';
import { COMPANY_INFO } from '../data/agencyData';

interface NavbarProps {
  onOpenAuditModal: (service?: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenAuditModal }) => {
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

  const navLinks = [
    { name: 'Services', href: '#services' },
    { name: 'Process', href: '#process' },
    { name: 'Why Us', href: '#why-us' },
    { name: 'ROI Estimator', href: '#roi-estimator' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled 
          ? 'bg-[#080c14]/90 backdrop-blur-md border-b border-slate-800/80 py-3 shadow-xl' 
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo */}
          <a href="#" className="flex items-center gap-3 group" id="nav-logo-link">
            <div className="relative w-10 h-10 rounded-xl bg-gradient-to-tr from-cyan-500 via-sky-500 to-indigo-600 p-[1px] shadow-lg group-hover:shadow-cyan-500/50 transition-all">
              <div className="w-full h-full bg-[#080c14] rounded-[11px] flex items-center justify-center">
                <Cpu className="w-5 h-5 text-cyan-400 group-hover:rotate-45 transition-transform duration-500" />
              </div>
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-bold tracking-tight text-white flex items-center gap-1">
                RANKZ <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">DIGITAL</span>
              </span>
              <span className="text-[10px] font-mono-tech text-slate-400 tracking-widest uppercase">
                Growth Engine
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-slate-300 hover:text-cyan-400 transition-colors relative group py-1"
              >
                {link.name}
                <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-cyan-400 transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </nav>

          {/* Right Actions: Phone + CTA Button */}
          <div className="hidden lg:flex items-center gap-4">
            <a
              href={`tel:${COMPANY_INFO.phoneRaw}`}
              className="flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-mono-tech text-slate-300 hover:text-cyan-300 bg-slate-900/80 hover:bg-slate-800/90 border border-slate-800 transition-all"
              id="nav-phone-link"
            >
              <Phone className="w-3.5 h-3.5 text-cyan-400 animate-pulse" />
              <span>{COMPANY_INFO.phone}</span>
            </a>

            <button
              onClick={() => onOpenAuditModal()}
              id="nav-audit-cta-btn"
              className="btn-bold-primary rounded-xl flex items-center gap-2 cursor-pointer text-xs"
            >
              <Zap className="w-3.5 h-3.5 fill-black" />
              <span>Get Free Audit</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Mobile Menu Toggle Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden text-slate-300 hover:text-white p-2 rounded-lg bg-slate-900 border border-slate-800"
            id="mobile-menu-toggle-btn"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6 text-cyan-400" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#0a0e1a]/95 border-b border-slate-800 px-4 pt-4 pb-6 space-y-4 backdrop-blur-xl animate-fadeIn">
          <div className="flex flex-col space-y-3">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-base font-medium text-slate-200 hover:text-cyan-400 py-2 border-b border-slate-800/60"
              >
                {link.name}
              </a>
            ))}
          </div>

          <div className="pt-2 flex flex-col gap-3">
            <a
              href={`tel:${COMPANY_INFO.phoneRaw}`}
              className="flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-slate-900 border border-slate-800 text-slate-200 font-mono-tech text-sm"
            >
              <Phone className="w-4 h-4 text-cyan-400" />
              <span>Call: {COMPANY_INFO.phone}</span>
            </a>

            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenAuditModal();
              }}
              className="w-full py-3 px-4 rounded-xl font-bold text-slate-950 bg-gradient-to-r from-cyan-400 to-blue-400 text-sm flex items-center justify-center gap-2 cursor-pointer shadow-lg"
            >
              <Zap className="w-4 h-4 fill-slate-950" />
              <span>Get Free Digital Marketing Audit</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
