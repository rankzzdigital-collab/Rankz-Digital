import React from 'react';
import { Phone, Mail, Instagram, Facebook, Linkedin, Cpu, ArrowUp, ShieldCheck } from 'lucide-react';
import { COMPANY_INFO } from '../data/agencyData';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#04070d] text-slate-300 border-t border-slate-800/80 pt-16 pb-12 relative overflow-hidden">
      
      {/* Glow ambient background line */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-slate-800/80">
          
          {/* Brand Info */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-cyan-500 to-indigo-600 p-[1px]">
                <div className="w-full h-full bg-[#080c14] rounded-[11px] flex items-center justify-center">
                  <Cpu className="w-5 h-5 text-cyan-400" />
                </div>
              </div>
              <span className="text-xl font-bold tracking-tight text-white">
                RANKZ <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">DIGITAL</span>
              </span>
            </div>

            <p className="text-slate-400 text-sm max-w-sm leading-relaxed">
              Engineering #1 search rankings, high-ROAS paid ads, and dominant social media presence for ambitious businesses. No filler, no buzzwords — pure growth.
            </p>

            <div className="pt-2 flex items-center gap-3">
              <a
                href={COMPANY_INFO.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 hover:border-pink-500/50 hover:text-pink-400 transition-all text-slate-400"
                aria-label="Instagram"
                id="footer-instagram-link"
              >
                <Instagram className="w-4 h-4" />
              </a>

              <a
                href={COMPANY_INFO.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 hover:border-blue-500/50 hover:text-blue-400 transition-all text-slate-400"
                aria-label="Facebook"
                id="footer-facebook-link"
              >
                <Facebook className="w-4 h-4" />
              </a>

              <a
                href={COMPANY_INFO.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 hover:border-sky-500/50 hover:text-sky-400 transition-all text-slate-400"
                aria-label="LinkedIn"
                id="footer-linkedin-link"
              >
                <Linkedin className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-3 space-y-3 font-mono-tech text-xs">
            <div className="text-white font-bold text-sm tracking-wider uppercase mb-2">GROWTH SERVICES</div>
            <ul className="space-y-2 text-slate-400">
              <li><a href="#services" className="hover:text-cyan-400 transition-colors">SEO (Search Engine Optimization)</a></li>
              <li><a href="#services" className="hover:text-cyan-400 transition-colors">Google Ads (PPC)</a></li>
              <li><a href="#services" className="hover:text-cyan-400 transition-colors">Meta Ads (Facebook & IG)</a></li>
              <li><a href="#services" className="hover:text-cyan-400 transition-colors">Social Media Marketing</a></li>
            </ul>
          </div>

          {/* Contact Details */}
          <div className="lg:col-span-4 space-y-3 font-mono-tech text-xs">
            <div className="text-white font-bold text-sm tracking-wider uppercase mb-2">CONTACT DIRECTLY</div>
            
            <div className="space-y-2 text-slate-300">
              <a href={`tel:${COMPANY_INFO.phoneRaw}`} className="flex items-center gap-2 hover:text-cyan-300 transition-colors">
                <Phone className="w-4 h-4 text-cyan-400" />
                <span>Phone: {COMPANY_INFO.phone}</span>
              </a>

              <a href={COMPANY_INFO.whatsappUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-emerald-400 hover:underline">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                <span>WhatsApp: +91 9810409675</span>
              </a>

              <a href={`mailto:${COMPANY_INFO.email}`} className="flex items-center gap-2 hover:text-cyan-300 transition-colors">
                <Mail className="w-4 h-4 text-cyan-400" />
                <span>Email: {COMPANY_INFO.email}</span>
              </a>
            </div>

            <div className="pt-2 text-[10px] text-slate-500">
              High-Response Time • Mon - Sat 9:00 AM - 8:00 PM IST
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono-tech text-slate-500">
          <div>
            © {new Date().getFullYear()} <strong className="text-slate-300">Rankz Digital</strong>. All Rights Reserved. Built for high performance.
          </div>

          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1 text-slate-400">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
              100% Data Protection
            </span>

            <button
              onClick={scrollToTop}
              id="footer-back-to-top-btn"
              className="p-2 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-white transition-all flex items-center gap-1 border border-slate-800 cursor-pointer"
              title="Scroll to top"
            >
              <span>TOP</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
