import React, { useState } from 'react';
import { X, Cpu, CheckCircle2, Send, PhoneCall, MessageSquare, ArrowRight, ShieldCheck, Sparkles, AlertCircle } from 'lucide-react';
import { COMPANY_INFO } from '../data/agencyData';
import { AuditFormData } from '../types';

interface AuditModalProps {
  isOpen: boolean;
  onClose: () => void;
  prefillService?: string;
}

export const AuditModal: React.FC<AuditModalProps> = ({ isOpen, onClose, prefillService }) => {
  const [formData, setFormData] = useState<AuditFormData>({
    websiteUrl: '',
    businessName: '',
    contactName: '',
    phoneOrWhatsapp: '',
    email: '',
    primaryGoal: (prefillService as any) || 'SEO Ranking',
    monthlyBudget: '₹25,000 - ₹50,000 / mo',
    additionalNotes: '',
  });

  const [isScanning, setIsScanning] = useState(false);
  const [scanProgress, setScanProgress] = useState(0);
  const [scanStep, setScanStep] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleRunAudit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.websiteUrl && !formData.phoneOrWhatsapp) return;

    setIsScanning(true);
    setScanProgress(10);
    setScanStep('Initializing Rankz AI Diagnostic Engine...');

    setTimeout(() => {
      setScanProgress(35);
      setScanStep('Analyzing Organic Search Rankings & Keyword Gaps...');
    }, 700);

    setTimeout(() => {
      setScanProgress(65);
      setScanStep('Checking Meta Pixel, Google Conversion Tracking & Core Web Vitals...');
    }, 1500);

    setTimeout(() => {
      setScanProgress(90);
      setScanStep('Benchmarking Competitor Ad Spend & Funnel Bottlenecks...');
    }, 2200);

    setTimeout(() => {
      setScanProgress(100);
      setScanStep('Growth Opportunities Identified! Preparing Report...');
      setIsScanning(false);
      setIsSubmitted(true);
    }, 2900);
  };

  const handleSendWhatsApp = () => {
    const text = encodeURIComponent(
      `Hi Rankz Digital Team!\n\nI just requested a Free Audit on your website.\n\n` +
      `🌐 Website: ${formData.websiteUrl || 'N/A'}\n` +
      `🏢 Business: ${formData.businessName || 'N/A'}\n` +
      `👤 Name: ${formData.contactName || 'N/A'}\n` +
      `📞 Phone: ${formData.phoneOrWhatsapp || 'N/A'}\n` +
      `🎯 Primary Goal: ${formData.primaryGoal}\n` +
      `💰 Budget: ${formData.monthlyBudget}\n\n` +
      `Please contact me with the audit findings!`
    );
    window.open(`https://wa.me/91${COMPANY_INFO.phoneRaw}?text=${text}`, '_blank');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-950/80 backdrop-blur-md animate-fadeIn">
      <div 
        className="relative w-full max-w-2xl bg-[#0d1322] border border-cyan-500/30 rounded-2xl p-6 sm:p-8 shadow-2xl glow-cyan overflow-hidden"
        id="audit-modal-container"
      >
        {/* Glow ambient accent background */}
        <div className="absolute -top-24 -right-24 w-60 h-60 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-24 -left-24 w-60 h-60 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />

        {/* Close Button */}
        <button
          onClick={onClose}
          id="close-audit-modal-btn"
          className="absolute top-5 right-5 text-slate-400 hover:text-white bg-slate-900/80 hover:bg-slate-800 p-2 rounded-xl transition-all border border-slate-700/50"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header */}
        <div className="mb-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/60 border border-cyan-500/40 text-cyan-400 text-xs font-mono-tech mb-3">
            <Sparkles className="w-3.5 h-3.5 text-cyan-300 animate-pulse" />
            <span>AI GROWTH AUDIT & REVENUE REPORT</span>
          </div>
          <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
            Claim Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-sky-300 to-blue-500">Free Digital Marketing Audit</span>
          </h3>
          <p className="text-slate-300 text-sm mt-1">
            We will analyze your website, paid ad accounts, and SEO rankings to identify quick-win revenue opportunities. No cost, no obligation.
          </p>
        </div>

        {!isSubmitted && !isScanning && (
          <form onSubmit={handleRunAudit} className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-mono-tech text-slate-300 mb-1.5">
                  WEBSITE OR SOCIAL URL <span className="text-cyan-400">*</span>
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. https://yourbusiness.com"
                  value={formData.websiteUrl}
                  onChange={(e) => setFormData({ ...formData, websiteUrl: e.target.value })}
                  className="w-full bg-slate-900/90 border border-slate-700 focus:border-cyan-400 rounded-xl px-3.5 py-2.5 text-sm text-white placeholder:text-slate-500 focus:outline-none focus:ring-1 focus:ring-cyan-400 transition-all"
                  id="audit-input-website"
                />
              </div>

              <div>
                <label className="block text-xs font-mono-tech text-slate-300 mb-1.5">
                  BUSINESS NAME
                </label>
                <input
                  type="text"
                  placeholder="e.g. Acme Enterprises"
                  value={formData.businessName}
                  onChange={(e) => setFormData({ ...formData, businessName: e.target.value })}
                  className="w-full bg-slate-900/90 border border-slate-700 focus:border-cyan-400 rounded-xl px-3.5 py-2.5 text-sm text-white placeholder:text-slate-500 focus:outline-none focus:ring-1 focus:ring-cyan-400 transition-all"
                  id="audit-input-business"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-mono-tech text-slate-300 mb-1.5">
                  PHONE / WHATSAPP NUMBER <span className="text-cyan-400">*</span>
                </label>
                <input
                  type="tel"
                  required
                  placeholder="e.g. 9810409675"
                  value={formData.phoneOrWhatsapp}
                  onChange={(e) => setFormData({ ...formData, phoneOrWhatsapp: e.target.value })}
                  className="w-full bg-slate-900/90 border border-slate-700 focus:border-cyan-400 rounded-xl px-3.5 py-2.5 text-sm text-white placeholder:text-slate-500 focus:outline-none focus:ring-1 focus:ring-cyan-400 transition-all"
                  id="audit-input-phone"
                />
              </div>

              <div>
                <label className="block text-xs font-mono-tech text-slate-300 mb-1.5">
                  YOUR EMAIL ADDRESS
                </label>
                <input
                  type="email"
                  placeholder="e.g. name@company.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full bg-slate-900/90 border border-slate-700 focus:border-cyan-400 rounded-xl px-3.5 py-2.5 text-sm text-white placeholder:text-slate-500 focus:outline-none focus:ring-1 focus:ring-cyan-400 transition-all"
                  id="audit-input-email"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-mono-tech text-slate-300 mb-1.5">
                  PRIMARY FOCUS
                </label>
                <select
                  value={formData.primaryGoal}
                  onChange={(e) => setFormData({ ...formData, primaryGoal: e.target.value as any })}
                  className="w-full bg-slate-900/90 border border-slate-700 focus:border-cyan-400 rounded-xl px-3.5 py-2.5 text-sm text-white focus:outline-none focus:ring-1 focus:ring-cyan-400 transition-all"
                  id="audit-select-goal"
                >
                  <option value="SEO Ranking">SEO & Organic Rankings</option>
                  <option value="Google Ads ROI">Google Ads (PPC)</option>
                  <option value="Meta Ads Growth">Meta Ads (FB & IG)</option>
                  <option value="Social Media Presence">Social Media Marketing</option>
                  <option value="Full Digital Overhaul">Complete Growth Strategy</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-mono-tech text-slate-300 mb-1.5">
                  ESTIMATED AD/MARKETING BUDGET
                </label>
                <select
                  value={formData.monthlyBudget}
                  onChange={(e) => setFormData({ ...formData, monthlyBudget: e.target.value })}
                  className="w-full bg-slate-900/90 border border-slate-700 focus:border-cyan-400 rounded-xl px-3.5 py-2.5 text-sm text-white focus:outline-none focus:ring-1 focus:ring-cyan-400 transition-all"
                  id="audit-select-budget"
                >
                  <option value="Under ₹25,000 / mo">Under ₹25,000 / mo</option>
                  <option value="₹25,000 - ₹50,000 / mo">₹25,000 - ₹50,000 / mo</option>
                  <option value="₹50,000 - ₹1,50,000 / mo">₹50,000 - ₹1,50,000 / mo</option>
                  <option value="₹1,50,000+ / mo">₹1,50,000+ / mo</option>
                </select>
              </div>
            </div>

            <div className="pt-2">
              <button
                type="submit"
                id="submit-audit-btn"
                className="w-full py-3.5 px-6 rounded-xl font-bold text-slate-950 bg-gradient-to-r from-cyan-400 via-sky-300 to-blue-400 hover:from-cyan-300 hover:to-blue-300 shadow-lg glow-cyan flex items-center justify-center gap-2 group transition-all duration-300 text-sm cursor-pointer"
              >
                <Cpu className="w-4 h-4 text-slate-950 group-hover:rotate-12 transition-transform" />
                <span>START FREE AUDIT SCAN</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>

            <div className="flex items-center justify-between text-xs text-slate-400 pt-1 font-mono-tech">
              <span className="flex items-center gap-1">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                100% Confidential
              </span>
              <span>Response in under 2 hours</span>
            </div>
          </form>
        )}

        {isScanning && (
          <div className="py-12 text-center space-y-6">
            <div className="relative w-20 h-20 mx-auto">
              <div className="absolute inset-0 rounded-full border-2 border-cyan-500/20 animate-ping" />
              <div className="w-full h-full rounded-full border-2 border-cyan-400 border-t-transparent animate-spin flex items-center justify-center bg-cyan-950/40">
                <Cpu className="w-8 h-8 text-cyan-400" />
              </div>
            </div>

            <div>
              <div className="text-xl font-bold text-white mb-2 font-mono-tech">
                Scanning {formData.websiteUrl || 'Domain'}...
              </div>
              <p className="text-xs text-cyan-300 font-mono-tech h-6">{scanStep}</p>
            </div>

            <div className="w-full bg-slate-900 rounded-full h-2.5 overflow-hidden border border-slate-800">
              <div
                className="bg-gradient-to-r from-cyan-500 to-blue-500 h-2.5 rounded-full transition-all duration-500 ease-out"
                style={{ width: `${scanProgress}%` }}
              />
            </div>

            <p className="text-xs text-slate-400">
              Rankz AI is compiling ranking signals, tracking tags, and competitor benchmark metrics.
            </p>
          </div>
        )}

        {isSubmitted && (
          <div className="py-8 text-center space-y-6 animate-fadeIn">
            <div className="w-16 h-16 mx-auto rounded-full bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center text-emerald-400 glow-cyan">
              <CheckCircle2 className="w-8 h-8" />
            </div>

            <div>
              <h4 className="text-2xl font-bold text-white mb-1">
                Audit Diagnostic Request Received!
              </h4>
              <p className="text-slate-300 text-sm max-w-md mx-auto">
                Our senior strategists at Rankz Digital have logged your request. We are preparing a personalized action plan for <strong className="text-cyan-300">{formData.websiteUrl}</strong>.
              </p>
            </div>

            <div className="bg-slate-900/80 border border-slate-800 rounded-xl p-4 text-left text-xs font-mono-tech space-y-2 max-w-md mx-auto text-slate-300">
              <div className="flex justify-between text-slate-400 pb-1 border-b border-slate-800">
                <span>DIAGNOSTIC STATUS</span>
                <span className="text-emerald-400 font-bold">QUEUED FOR REVIEW</span>
              </div>
              <div><strong className="text-slate-200">Domain:</strong> {formData.websiteUrl}</div>
              <div><strong className="text-slate-200">Phone:</strong> {formData.phoneOrWhatsapp}</div>
              <div><strong className="text-slate-200">Primary Focus:</strong> {formData.primaryGoal}</div>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 justify-center pt-2">
              <button
                onClick={handleSendWhatsApp}
                id="audit-whatsapp-connect-btn"
                className="py-3 px-6 rounded-xl font-bold text-white bg-emerald-600 hover:bg-emerald-500 flex items-center justify-center gap-2 transition-all cursor-pointer text-sm shadow-md"
              >
                <MessageSquare className="w-4 h-4 fill-white" />
                <span>Connect via WhatsApp Now</span>
              </button>

              <a
                href={`tel:${COMPANY_INFO.phoneRaw}`}
                id="audit-call-direct-btn"
                className="py-3 px-6 rounded-xl font-bold text-slate-200 bg-slate-800 hover:bg-slate-700 border border-slate-700 flex items-center justify-center gap-2 transition-all text-sm"
              >
                <PhoneCall className="w-4 h-4 text-cyan-400" />
                <span>Call Us Directly ({COMPANY_INFO.phoneRaw})</span>
              </a>
            </div>

            <button
              onClick={() => {
                setIsSubmitted(false);
                onClose();
              }}
              className="text-xs text-slate-400 hover:text-white underline cursor-pointer"
            >
              Done & Return to Site
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
