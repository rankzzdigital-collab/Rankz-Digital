import React, { useState } from 'react';
import { Cpu, Zap, Activity, ArrowRight, CheckCircle2, Clock } from 'lucide-react';
import { PROCESS_STEPS } from '../data/agencyData';

interface ProcessSectionProps {
  onOpenAuditModal: () => void;
}

export const ProcessSection: React.FC<ProcessSectionProps> = ({ onOpenAuditModal }) => {
  const [activeStep, setActiveStep] = useState(0);

  const getStepIcon = (iconName: string) => {
    switch (iconName) {
      case 'Cpu':
        return <Cpu className="w-6 h-6 text-cyan-400" />;
      case 'Zap':
        return <Zap className="w-6 h-6 text-sky-400" />;
      case 'Activity':
        return <Activity className="w-6 h-6 text-blue-400" />;
      default:
        return <Zap className="w-6 h-6 text-cyan-400" />;
    }
  };

  return (
    <section id="process" className="py-24 relative bg-[#080c14] border-t border-slate-800/80">
      
      {/* Background ambient lighting */}
      <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-cyan-500/5 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="badge-eyebrow">
            <Activity className="w-3.5 h-3.5 text-cyan-400" />
            <span>THE RANKZ METHODOLOGY</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-hero-bold text-white tracking-tighter uppercase leading-none">
            HOW WE <span className="text-gradient-cyan-violet">ENGINEER GROWTH</span>
          </h2>

          <p className="text-slate-300 text-base sm:text-lg">
            A battle-tested 3-step growth execution model designed to plug revenue leaks, activate high-intent funnels, and scale profitable ad spend.
          </p>
        </div>

        {/* 3 Steps Desktop Interactive Process Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 relative">
          
          {/* Connector Line (Desktop) */}
          <div className="hidden lg:block absolute top-1/2 left-10 right-10 h-[2px] bg-gradient-to-r from-cyan-500/20 via-sky-500/40 to-blue-500/20 -translate-y-12 z-0" />

          {PROCESS_STEPS.map((step, index) => (
            <div
              key={step.number}
              onClick={() => setActiveStep(index)}
              className={`glass-panel rounded-2xl p-6 sm:p-8 relative z-10 cursor-pointer transition-all duration-300 border ${
                activeStep === index
                  ? 'border-cyan-400 bg-slate-900/90 shadow-xl glow-cyan scale-[1.02]'
                  : 'border-slate-800/80 hover:border-slate-700 bg-slate-900/40'
              }`}
              id={`process-step-card-${step.number}`}
            >
              {/* Step Header */}
              <div className="flex items-center justify-between mb-6">
                <span className="text-3xl font-bold font-mono-tech text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
                  {step.number}
                </span>

                <div className="flex items-center gap-2">
                  <div className="p-3 rounded-xl bg-slate-950 border border-slate-800">
                    {getStepIcon(step.icon)}
                  </div>
                </div>
              </div>

              {/* Title & Subtitle */}
              <div className="mb-4">
                <div className="flex items-center gap-2 text-xs font-mono-tech text-cyan-400 mb-1">
                  <Clock className="w-3.5 h-3.5" />
                  <span>{step.duration}</span>
                </div>
                <h3 className="text-2xl font-bold text-white">{step.title}</h3>
                <p className="text-xs font-mono-tech text-slate-400 mt-0.5">{step.subtitle}</p>
              </div>

              {/* Description */}
              <p className="text-slate-300 text-sm leading-relaxed mb-6">
                {step.description}
              </p>

              {/* Outputs List */}
              <div className="space-y-2 pt-4 border-t border-slate-800/80">
                <div className="text-[10px] font-mono-tech text-slate-400 uppercase tracking-wider mb-2">
                  Key Deliverables
                </div>
                {step.keyOutputs.map((output, idx) => (
                  <div key={idx} className="flex items-start gap-2 text-xs text-slate-300">
                    <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 flex-shrink-0 mt-0.5" />
                    <span>{output}</span>
                  </div>
                ))}
              </div>

            </div>
          ))}

        </div>

        {/* Process CTA Bar */}
        <div className="mt-16 p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-slate-900 via-[#0a1122] to-slate-900 border border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center sm:text-left">
            <h3 className="text-xl font-bold text-white">Ready to start Step 01 with a Free Audit?</h3>
            <p className="text-slate-400 text-sm">We analyze your current ad accounts & SEO footprint with zero risk.</p>
          </div>

          <button
            onClick={onOpenAuditModal}
            id="process-start-audit-btn"
            className="btn-bold-primary rounded-xl flex items-center gap-2 cursor-pointer text-xs whitespace-nowrap"
          >
            <span>Start Step 01: Free Audit</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </section>
  );
};
