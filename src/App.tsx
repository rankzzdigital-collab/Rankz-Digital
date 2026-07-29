import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ServicesSection } from './components/ServicesSection';
import { ProcessSection } from './components/ProcessSection';
import { WhyChooseUs } from './components/WhyChooseUs';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { AuditModal } from './components/AuditModal';
import { TESTIMONIALS, FAQS, COMPANY_INFO } from './data/agencyData';
import { MessageSquare, PhoneCall, ChevronDown, Sparkles, HelpCircle, Star, Quote } from 'lucide-react';

export default function App() {
  const [isAuditModalOpen, setIsAuditModalOpen] = useState(false);
  const [auditPrefillService, setAuditPrefillService] = useState<string | undefined>(undefined);
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  const handleOpenAuditModal = (service?: string) => {
    setAuditPrefillService(service);
    setIsAuditModalOpen(true);
  };

  const handleCloseAuditModal = () => {
    setIsAuditModalOpen(false);
    setAuditPrefillService(undefined);
  };

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-[#080c14] text-slate-100 font-sans selection:bg-cyan-500/30 selection:text-cyan-200 overflow-x-hidden">
      
      {/* Sticky Navigation Bar */}
      <Navbar onOpenAuditModal={handleOpenAuditModal} />

      {/* Hero Section */}
      <Hero onOpenAuditModal={handleOpenAuditModal} />

      {/* Services Section (SEO, Google Ads, Meta Ads, Social Media Marketing) */}
      <ServicesSection onOpenAuditModal={handleOpenAuditModal} />

      {/* Process Section (Audit -> Execute -> Optimize) */}
      <ProcessSection onOpenAuditModal={handleOpenAuditModal} />

      {/* Why Choose Us & Interactive ROI Estimator */}
      <WhyChooseUs onOpenAuditModal={handleOpenAuditModal} />

      {/* Testimonials & FAQs Section */}
      <section className="py-20 bg-[#060a12] border-t border-slate-800/80 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-slate-900 border border-cyan-500/30 text-cyan-400 text-xs font-mono-tech">
              <Star className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />
              <span>CLIENT PROOF & TRANSPARENCY</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
              Real Results From <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-sky-300 to-blue-500">Growth Campaigns</span>
            </h2>
            <p className="text-slate-300 text-sm sm:text-base">
              See what happens when strategy, AI diagnostic data, and straight-talking execution come together.
            </p>
          </div>

          {/* Testimonials Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
            {TESTIMONIALS.map((t, idx) => (
              <div 
                key={idx}
                className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800 hover:border-cyan-500/30 transition-all flex flex-col justify-between relative group"
              >
                <div>
                  <Quote className="w-8 h-8 text-cyan-500/30 mb-4 group-hover:text-cyan-400/60 transition-colors" />
                  <p className="text-slate-300 text-xs sm:text-sm leading-relaxed mb-6 italic">
                    "{t.quote}"
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-800 flex items-center justify-between font-mono-tech">
                  <div>
                    <div className="text-sm font-bold text-white">{t.clientName}</div>
                    <div className="text-[11px] text-slate-400">{t.company}</div>
                  </div>
                  <span className="text-xs px-2.5 py-1 rounded-full bg-emerald-950/80 border border-emerald-500/30 text-emerald-400 font-bold">
                    {t.growthStat}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* FAQs Accordion */}
          <div className="max-w-3xl mx-auto space-y-4">
            <div className="text-center mb-8">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-slate-300 text-xs font-mono-tech">
                <HelpCircle className="w-3.5 h-3.5 text-cyan-400" />
                <span>FREQUENTLY ASKED QUESTIONS</span>
              </div>
              <h3 className="text-2xl font-bold text-white mt-2">Clear Answers, Zero Jargon</h3>
            </div>

            {FAQS.map((faq, idx) => (
              <div
                key={idx}
                className="rounded-xl bg-slate-900/80 border border-slate-800 overflow-hidden transition-all"
              >
                <button
                  onClick={() => toggleFaq(idx)}
                  className="w-full p-4 text-left font-bold text-sm sm:text-base text-white flex items-center justify-between gap-4 cursor-pointer hover:text-cyan-300 transition-colors"
                  id={`faq-btn-${idx}`}
                >
                  <span>{faq.question}</span>
                  <ChevronDown className={`w-4 h-4 text-cyan-400 transition-transform ${openFaqIndex === idx ? 'rotate-180' : ''}`} />
                </button>

                {openFaqIndex === idx && (
                  <div className="p-4 pt-0 text-slate-300 text-xs sm:text-sm border-t border-slate-800/60 animate-fadeIn">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Contact Section (Phone, WhatsApp, Email, Instagram, Facebook, LinkedIn) */}
      <ContactSection />

      {/* Footer */}
      <Footer />

      {/* Floating Quick WhatsApp & Call Widget */}
      <div className="fixed bottom-6 right-6 z-40 flex flex-col gap-3">
        <a
          href={COMPANY_INFO.whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          id="floating-whatsapp-widget"
          className="p-3.5 rounded-full bg-emerald-500 hover:bg-emerald-400 text-slate-950 shadow-2xl flex items-center justify-center transition-all hover:scale-110 glow-cyan group"
          title="Chat on WhatsApp (+91 9810409675)"
          aria-label="Chat on WhatsApp"
        >
          <MessageSquare className="w-6 h-6 fill-slate-950" />
          <span className="max-w-0 overflow-hidden whitespace-nowrap group-hover:max-w-xs transition-all duration-300 font-mono-tech text-xs font-bold pl-0 group-hover:pl-2">
            WhatsApp Us
          </span>
        </a>

        <a
          href={`tel:${COMPANY_INFO.phoneRaw}`}
          id="floating-call-widget"
          className="p-3.5 rounded-full bg-cyan-500 hover:bg-cyan-400 text-slate-950 shadow-2xl flex items-center justify-center transition-all hover:scale-110 group"
          title="Call Rankz Digital (9810409675)"
          aria-label="Call Rankz Digital"
        >
          <PhoneCall className="w-5 h-5 fill-slate-950" />
          <span className="max-w-0 overflow-hidden whitespace-nowrap group-hover:max-w-xs transition-all duration-300 font-mono-tech text-xs font-bold pl-0 group-hover:pl-2">
            Call 9810409675
          </span>
        </a>
      </div>

      {/* Free Audit Modal */}
      <AuditModal
        isOpen={isAuditModalOpen}
        onClose={handleCloseAuditModal}
        prefillService={auditPrefillService}
      />

    </div>
  );
}
