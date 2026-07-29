import React, { useState } from 'react';
import { Search, Target, TrendingUp, Share2, ArrowRight, CheckCircle2, ChevronRight, Sparkles, Layers } from 'lucide-react';
import { SERVICES } from '../data/agencyData';
import { ServiceItem } from '../types';

interface ServicesSectionProps {
  onOpenAuditModal: (serviceTitle?: string) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onOpenAuditModal }) => {
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Search':
        return <Search className="w-6 h-6 text-cyan-400" />;
      case 'Target':
        return <Target className="w-6 h-6 text-blue-400" />;
      case 'TrendingUp':
        return <TrendingUp className="w-6 h-6 text-violet-400" />;
      case 'Share2':
        return <Share2 className="w-6 h-6 text-emerald-400" />;
      default:
        return <Sparkles className="w-6 h-6 text-cyan-400" />;
    }
  };

  return (
    <section id="services" className="py-24 relative bg-[#060911] border-t border-slate-800/80">
      
      {/* Background glowing lights */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-cyan-500/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-600/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="badge-eyebrow">
            <Layers className="w-3.5 h-3.5 text-cyan-400" />
            <span>FOUR CORE REVENUE ENGINES</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-hero-bold text-white tracking-tighter uppercase leading-none">
            OUR CORE <span className="text-gradient-cyan-violet">GROWTH SERVICES</span>
          </h2>

          <p className="text-slate-300 text-base sm:text-lg">
            We do not dilute our expertise across 30 different agency offerings. We specialize exclusively in four high-ROI digital channels that directly drive leads, phone calls, and revenue.
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {SERVICES.map((service) => (
            <div
              key={service.id}
              className="glass-panel glass-panel-hover rounded-2xl p-6 sm:p-8 flex flex-col justify-between relative group border border-slate-800/80 hover:border-cyan-500/40 transition-all duration-300"
              id={`service-card-${service.id}`}
            >
              <div>
                {/* Header Badge & Icon */}
                <div className="flex items-center justify-between mb-6">
                  <div className="p-3 rounded-xl bg-slate-900/90 border border-slate-800 text-cyan-400 shadow-inner group-hover:scale-105 transition-transform">
                    {getIcon(service.iconName)}
                  </div>
                  <span className="text-[10px] font-mono-tech tracking-wider uppercase px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-cyan-300">
                    {service.badge}
                  </span>
                </div>

                {/* Title & Tagline */}
                <h3 className="text-2xl font-display font-extrabold text-white mb-2 group-hover:text-cyan-300 transition-colors uppercase italic tracking-tight">
                  <span className="text-cyan-400 font-mono text-xl mr-2">0{SERVICES.findIndex(s => s.id === service.id) + 1} //</span>
                  {service.title}
                </h3>
                <p className="text-xs font-mono-tech text-cyan-400/90 mb-4">
                  {service.tagline}
                </p>

                {/* Description */}
                <p className="text-slate-300 text-sm leading-relaxed mb-6">
                  {service.description}
                </p>

                {/* Key Benefits */}
                <ul className="space-y-2.5 mb-6">
                  {service.benefits.map((benefit, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 text-xs text-slate-300">
                      <CheckCircle2 className="w-4 h-4 text-cyan-400 flex-shrink-0 mt-0.5" />
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Card Footer: Key Metric Pill + CTAs */}
              <div className="pt-6 border-t border-slate-800/80 space-y-4">
                
                {/* Metrics Badges */}
                <div className="grid grid-cols-3 gap-2 py-2 px-3 rounded-xl bg-slate-950/70 border border-slate-800/80 text-center font-mono-tech">
                  {service.metrics.map((m, idx) => (
                    <div key={idx}>
                      <div className="text-[10px] text-slate-400 uppercase">{m.label}</div>
                      <div className="text-xs font-bold text-cyan-300">{m.value}</div>
                    </div>
                  ))}
                </div>

                {/* Buttons */}
                <div className="flex items-center justify-between gap-3 pt-1">
                  <button
                    onClick={() => setSelectedService(service)}
                    className="text-xs font-mono-tech text-slate-300 hover:text-white flex items-center gap-1 group/link cursor-pointer"
                  >
                    <span>View Deliverables</span>
                    <ChevronRight className="w-3.5 h-3.5 text-cyan-400 group-hover/link:translate-x-1 transition-transform" />
                  </button>

                  <button
                    onClick={() => onOpenAuditModal(service.title)}
                    id={`service-audit-btn-${service.id}`}
                    className="py-2 px-4 rounded-xl font-bold text-xs text-slate-950 bg-gradient-to-r from-cyan-400 to-blue-400 hover:from-cyan-300 hover:to-blue-300 shadow-md flex items-center gap-1.5 cursor-pointer transition-all"
                  >
                    <span>Request Audit</span>
                    <ArrowRight className="w-3 h-3" />
                  </button>
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Service Detail Modal */}
      {selectedService && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md animate-fadeIn">
          <div className="relative w-full max-w-2xl bg-[#0d1322] border border-cyan-500/40 rounded-2xl p-6 sm:p-8 shadow-2xl space-y-6">
            <button
              onClick={() => setSelectedService(null)}
              className="absolute top-5 right-5 text-slate-400 hover:text-white bg-slate-900 p-2 rounded-xl"
            >
              ✕
            </button>

            <div className="flex items-center gap-3">
              <div className="p-3 rounded-xl bg-slate-900 border border-slate-800 text-cyan-400">
                {getIcon(selectedService.iconName)}
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white">{selectedService.title}</h3>
                <p className="text-xs font-mono-tech text-cyan-400">{selectedService.tagline}</p>
              </div>
            </div>

            <div>
              <h4 className="text-xs font-mono-tech text-slate-400 uppercase mb-2">Scope & Monthly Deliverables</h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {selectedService.deliverables.map((item, idx) => (
                  <div key={idx} className="p-3 rounded-xl bg-slate-900/80 border border-slate-800 text-xs text-slate-200 flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h4 className="text-xs font-mono-tech text-slate-400 uppercase mb-2">Technology & Analytics Stack</h4>
              <div className="flex flex-wrap gap-2">
                {selectedService.techStack.map((tech, idx) => (
                  <span key={idx} className="px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-xs text-cyan-300 font-mono-tech">
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="pt-4 flex justify-end gap-3 border-t border-slate-800">
              <button
                onClick={() => setSelectedService(null)}
                className="py-2.5 px-5 rounded-xl text-xs font-bold text-slate-300 bg-slate-900 hover:bg-slate-800 border border-slate-700"
              >
                Close
              </button>
              <button
                onClick={() => {
                  const serviceName = selectedService.title;
                  setSelectedService(null);
                  onOpenAuditModal(serviceName);
                }}
                className="py-2.5 px-5 rounded-xl font-bold text-xs text-slate-950 bg-gradient-to-r from-cyan-400 to-blue-400 hover:from-cyan-300 flex items-center gap-2 cursor-pointer shadow-md"
              >
                <span>Get Free Service Audit</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
