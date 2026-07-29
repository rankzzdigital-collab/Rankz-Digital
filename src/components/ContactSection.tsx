import React, { useState } from 'react';
import { Phone, Mail, MessageSquare, Instagram, Facebook, Linkedin, Copy, Check, Send, Sparkles, Clock, ShieldCheck, MapPin } from 'lucide-react';
import { COMPANY_INFO } from '../data/agencyData';

export const ContactSection: React.FC = () => {
  const [copiedPhone, setCopiedPhone] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);

  const [formState, setFormState] = useState({
    name: '',
    phone: '',
    email: '',
    service: 'All Four Services',
    message: ''
  });

  const [isSent, setIsSent] = useState(false);

  const handleCopyPhone = () => {
    navigator.clipboard.writeText(COMPANY_INFO.phoneRaw);
    setCopiedPhone(true);
    setTimeout(() => setCopiedPhone(false), 2000);
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(COMPANY_INFO.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const handleSubmitForm = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSent(true);
  };

  const handleWhatsAppDirect = () => {
    const text = encodeURIComponent(
      `Hi Rankz Digital Team!\n\n` +
      `Name: ${formState.name || 'Not provided'}\n` +
      `Phone: ${formState.phone || 'Not provided'}\n` +
      `Email: ${formState.email || 'Not provided'}\n` +
      `Service: ${formState.service}\n` +
      `Message: ${formState.message || 'I would like to discuss digital marketing services for my business.'}`
    );
    window.open(`https://wa.me/91${COMPANY_INFO.phoneRaw}?text=${text}`, '_blank');
  };

  return (
    <section id="contact" className="py-24 relative bg-[#080c14] border-t border-slate-800/80">
      
      {/* Background glow orbs */}
      <div className="absolute top-1/2 right-10 w-96 h-96 bg-cyan-500/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-blue-600/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="badge-eyebrow">
            <MessageSquare className="w-3.5 h-3.5 text-cyan-400" />
            <span>START THE CONVERSATION</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-hero-bold text-white tracking-tighter uppercase leading-none">
            CONNECT WITH OUR <span className="text-gradient-cyan-violet">GROWTH TEAM</span>
          </h2>

          <p className="text-slate-300 text-base sm:text-lg">
            Have a question or ready to scale your revenue? Reach out directly via phone, WhatsApp, email, or social media.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Direct Contact Info & Social Links */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Phone Card */}
            <div className="p-6 rounded-2xl bg-slate-900/90 border border-slate-800 hover:border-cyan-500/40 transition-all flex items-center justify-between group">
              <div className="flex items-center gap-4">
                <div className="p-3.5 rounded-xl bg-cyan-950/80 border border-cyan-500/30 text-cyan-400">
                  <Phone className="w-6 h-6 animate-pulse" />
                </div>
                <div>
                  <div className="text-xs font-mono-tech text-slate-400">CALL / PHONE DIRECT</div>
                  <a
                    href={`tel:${COMPANY_INFO.phoneRaw}`}
                    id="contact-phone-link"
                    className="text-xl font-bold text-white hover:text-cyan-300 transition-colors font-mono-tech"
                  >
                    {COMPANY_INFO.phone}
                  </a>
                </div>
              </div>

              <button
                onClick={handleCopyPhone}
                className="p-2 text-slate-400 hover:text-white bg-slate-800/80 rounded-lg hover:bg-slate-700 transition-all"
                title="Copy phone number"
                id="copy-phone-btn"
              >
                {copiedPhone ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
              </button>
            </div>

            {/* WhatsApp Card */}
            <a
              href={COMPANY_INFO.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              id="contact-whatsapp-link"
              className="p-6 rounded-2xl bg-slate-900/90 border border-emerald-500/30 hover:border-emerald-400/80 transition-all flex items-center justify-between group block cursor-pointer shadow-lg"
            >
              <div className="flex items-center gap-4">
                <div className="p-3.5 rounded-xl bg-emerald-950/80 border border-emerald-500/30 text-emerald-400">
                  <MessageSquare className="w-6 h-6 fill-emerald-400" />
                </div>
                <div>
                  <div className="text-xs font-mono-tech text-emerald-400 font-bold">WHATSAPP CHAT</div>
                  <div className="text-lg font-bold text-white group-hover:text-emerald-300 transition-colors font-mono-tech">
                    +91 9810409675
                  </div>
                  <div className="text-xs text-slate-400">Instant response during business hours</div>
                </div>
              </div>
              <Send className="w-5 h-5 text-emerald-400 group-hover:translate-x-1 transition-transform" />
            </a>

            {/* Email Card */}
            <div className="p-6 rounded-2xl bg-slate-900/90 border border-slate-800 hover:border-cyan-500/40 transition-all flex items-center justify-between group">
              <div className="flex items-center gap-4">
                <div className="p-3.5 rounded-xl bg-blue-950/80 border border-blue-500/30 text-blue-400">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-xs font-mono-tech text-slate-400">OFFICIAL EMAIL</div>
                  <a
                    href={`mailto:${COMPANY_INFO.email}`}
                    id="contact-email-link"
                    className="text-lg font-bold text-white hover:text-cyan-300 transition-colors font-mono-tech"
                  >
                    {COMPANY_INFO.email}
                  </a>
                </div>
              </div>

              <button
                onClick={handleCopyEmail}
                className="p-2 text-slate-400 hover:text-white bg-slate-800/80 rounded-lg hover:bg-slate-700 transition-all"
                title="Copy email address"
                id="copy-email-btn"
              >
                {copiedEmail ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
              </button>
            </div>

            {/* Social Media Handles */}
            <div className="p-6 rounded-2xl bg-slate-900/90 border border-slate-800 space-y-4">
              <div className="text-xs font-mono-tech text-slate-400 uppercase tracking-wider">
                CONNECT ON SOCIAL CHANNELS
              </div>

              <div className="grid grid-cols-3 gap-3">
                <a
                  href={COMPANY_INFO.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  id="contact-instagram-link"
                  className="p-3 rounded-xl bg-slate-950 border border-slate-800 hover:border-pink-500/50 hover:bg-slate-800/80 text-slate-300 hover:text-pink-400 flex flex-col items-center justify-center gap-2 transition-all group"
                >
                  <Instagram className="w-5 h-5 group-hover:scale-110 transition-transform" />
                  <span className="text-[11px] font-mono-tech">Instagram</span>
                </a>

                <a
                  href={COMPANY_INFO.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  id="contact-facebook-link"
                  className="p-3 rounded-xl bg-slate-950 border border-slate-800 hover:border-blue-500/50 hover:bg-slate-800/80 text-slate-300 hover:text-blue-400 flex flex-col items-center justify-center gap-2 transition-all group"
                >
                  <Facebook className="w-5 h-5 group-hover:scale-110 transition-transform" />
                  <span className="text-[11px] font-mono-tech">Facebook</span>
                </a>

                <a
                  href={COMPANY_INFO.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  id="contact-linkedin-link"
                  className="p-3 rounded-xl bg-slate-950 border border-slate-800 hover:border-sky-500/50 hover:bg-slate-800/80 text-slate-300 hover:text-sky-400 flex flex-col items-center justify-center gap-2 transition-all group"
                >
                  <Linkedin className="w-5 h-5 group-hover:scale-110 transition-transform" />
                  <span className="text-[11px] font-mono-tech">LinkedIn</span>
                </a>
              </div>
            </div>

          </div>

          {/* Right Column: Direct Consultation Form */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-8 rounded-2xl bg-[#0b101d] border border-cyan-500/30 shadow-2xl glow-cyan space-y-6">
              
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/60 text-cyan-400 text-xs font-mono-tech mb-2">
                  <Sparkles className="w-3.5 h-3.5 text-cyan-300" />
                  <span>DIRECT INQUIRY</span>
                </div>
                <h3 className="text-2xl font-bold text-white">Send Us a Direct Message</h3>
                <p className="text-slate-300 text-xs sm:text-sm mt-1">
                  Fill in your details below and a senior growth strategist will reach out within 2 hours.
                </p>
              </div>

              {!isSent ? (
                <form onSubmit={handleSubmitForm} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-mono-tech text-slate-300 mb-1">
                        YOUR NAME <span className="text-cyan-400">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Vikram Malhotra"
                        value={formState.name}
                        onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                        className="w-full bg-slate-900 border border-slate-800 focus:border-cyan-400 rounded-xl px-3.5 py-2.5 text-sm text-white placeholder:text-slate-600 focus:outline-none focus:ring-1 focus:ring-cyan-400 transition-all"
                        id="contact-input-name"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-mono-tech text-slate-300 mb-1">
                        PHONE / WHATSAPP <span className="text-cyan-400">*</span>
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="e.g. 9810409675"
                        value={formState.phone}
                        onChange={(e) => setFormState({ ...formState, phone: e.target.value })}
                        className="w-full bg-slate-900 border border-slate-800 focus:border-cyan-400 rounded-xl px-3.5 py-2.5 text-sm text-white placeholder:text-slate-600 focus:outline-none focus:ring-1 focus:ring-cyan-400 transition-all"
                        id="contact-input-phone"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-mono-tech text-slate-300 mb-1">
                        EMAIL ADDRESS
                      </label>
                      <input
                        type="email"
                        placeholder="e.g. name@company.com"
                        value={formState.email}
                        onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                        className="w-full bg-slate-900 border border-slate-800 focus:border-cyan-400 rounded-xl px-3.5 py-2.5 text-sm text-white placeholder:text-slate-600 focus:outline-none focus:ring-1 focus:ring-cyan-400 transition-all"
                        id="contact-input-email"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-mono-tech text-slate-300 mb-1">
                        SERVICE REQUIRED
                      </label>
                      <select
                        value={formState.service}
                        onChange={(e) => setFormState({ ...formState, service: e.target.value })}
                        className="w-full bg-slate-900 border border-slate-800 focus:border-cyan-400 rounded-xl px-3.5 py-2.5 text-sm text-white focus:outline-none focus:ring-1 focus:ring-cyan-400 transition-all"
                        id="contact-select-service"
                      >
                        <option value="All Four Services">All Four Growth Services</option>
                        <option value="SEO">SEO (Search Engine Optimization)</option>
                        <option value="Google Ads">Google Ads (PPC)</option>
                        <option value="Meta Ads">Meta Ads (FB & IG)</option>
                        <option value="Social Media Marketing">Social Media Marketing</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-mono-tech text-slate-300 mb-1">
                      PROJECT OR BUSINESS GOALS
                    </label>
                    <textarea
                      rows={3}
                      placeholder="Tell us about your target market, current marketing challenges, or revenue targets..."
                      value={formState.message}
                      onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                      className="w-full bg-slate-900 border border-slate-800 focus:border-cyan-400 rounded-xl p-3.5 text-sm text-white placeholder:text-slate-600 focus:outline-none focus:ring-1 focus:ring-cyan-400 transition-all"
                      id="contact-textarea-message"
                    />
                  </div>

                  <div className="flex flex-col sm:flex-row gap-3 pt-2">
                    <button
                      type="submit"
                      id="contact-submit-btn"
                      className="btn-bold-primary rounded-xl flex-1 flex items-center justify-center gap-2 cursor-pointer text-xs"
                    >
                      <Send className="w-4 h-4 text-black" />
                      <span>Submit Inquiry</span>
                    </button>

                    <button
                      type="button"
                      onClick={handleWhatsAppDirect}
                      id="contact-whatsapp-direct-btn"
                      className="py-3.5 px-6 rounded-xl font-bold text-white bg-emerald-600 hover:bg-emerald-500 flex items-center justify-center gap-2 cursor-pointer transition-all text-xs uppercase font-display tracking-wider shadow-md"
                    >
                      <MessageSquare className="w-4 h-4 fill-white" />
                      <span>Send on WhatsApp</span>
                    </button>
                  </div>
                </form>
              ) : (
                <div className="py-8 text-center space-y-4">
                  <div className="w-12 h-12 mx-auto rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center">
                    <Check className="w-6 h-6" />
                  </div>
                  <h4 className="text-xl font-bold text-white">Message Dispatched!</h4>
                  <p className="text-slate-300 text-sm max-w-sm mx-auto">
                    Thank you {formState.name || 'there'}. Our team at Rankz Digital will contact you shortly at <strong className="text-cyan-300">{formState.phone}</strong>.
                  </p>
                  <button
                    onClick={() => setIsSent(false)}
                    className="text-xs text-slate-400 hover:text-white underline cursor-pointer"
                  >
                    Send another message
                  </button>
                </div>
              )}

              <div className="flex items-center justify-between text-xs text-slate-400 pt-2 border-t border-slate-800 font-mono-tech">
                <span className="flex items-center gap-1">
                  <Clock className="w-3.5 h-3.5 text-cyan-400" />
                  Response Time: Under 2 Hours
                </span>
                <span className="flex items-center gap-1">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                  No Spam Policy
                </span>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
