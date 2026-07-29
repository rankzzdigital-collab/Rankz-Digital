import React, { useState } from 'react';
import { Users, BarChart3, Layers, ShieldCheck, Calculator, ArrowRight, CheckCircle2, Sparkles, TrendingUp } from 'lucide-react';
import { VALUE_PROPS } from '../data/agencyData';

interface WhyChooseUsProps {
  onOpenAuditModal: (service?: string) => void;
}

export const WhyChooseUs: React.FC<WhyChooseUsProps> = ({ onOpenAuditModal }) => {
  // Interactive ROI Calculator State
  const [monthlySpend, setMonthlySpend] = useState<number>(50000);
  const [currentLeads, setCurrentLeads] = useState<number>(20);
  const [selectedChannel, setSelectedChannel] = useState<'Google Ads' | 'Meta Ads' | 'SEO' | 'All Combined'>('Google Ads');

  // Calculations
  const estimatedMultiplier = selectedChannel === 'SEO' ? 3.8 : selectedChannel === 'Meta Ads' ? 4.2 : selectedChannel === 'Google Ads' ? 4.5 : 4.8;
  const estimatedLeads = Math.round(currentLeads * (selectedChannel === 'SEO' ? 3.1 : 2.8));
  const estimatedCostPerLead = Math.round((monthlySpend / estimatedLeads));
  const currentCostPerLead = currentLeads > 0 ? Math.round(monthlySpend / currentLeads) : 0;
  const cplReduction = currentCostPerLead > 0 ? Math.round(((currentCostPerLead - estimatedCostPerLead) / currentCostPerLead) * 100) : 35;

  const getPropIcon = (iconName: string) => {
    switch (iconName) {
      case 'Users':
        return <Users className="w-6 h-6 text-cyan-400" />;
      case 'BarChart3':
        return <BarChart3 className="w-6 h-6 text-blue-400" />;
      case 'Layers':
        return <Layers className="w-6 h-6 text-violet-400" />;
      case 'ShieldCheck':
        return <ShieldCheck className="w-6 h-6 text-emerald-400" />;
      default:
        return <Sparkles className="w-6 h-6 text-cyan-400" />;
    }
  };

  return (
    <section id="why-us" className="py-24 relative bg-[#060911] border-t border-slate-800/80">
      
      {/* Background radial lights */}
      <div className="absolute top-1/4 left-1/3 w-96 h-96 bg-cyan-500/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="badge-eyebrow">
            <ShieldCheck className="w-3.5 h-3.5 text-cyan-400" />
            <span>UNCOMPROMISING TRANSPARENCY</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-hero-bold text-white tracking-tighter uppercase leading-none">
            WHY HIGH-GROWTH BRANDS <span className="text-gradient-cyan-violet">CHOOSE RANKZ DIGITAL</span>
          </h2>

          <p className="text-slate-300 text-base sm:text-lg">
            We are built for business owners tired of generic agency excuses, hidden markups, and delayed communication.
          </p>
        </div>

        {/* 4 Value Props Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          {VALUE_PROPS.map((vp) => (
            <div
              key={vp.id}
              className="glass-panel glass-panel-hover rounded-2xl p-6 sm:p-8 flex flex-col justify-between relative border border-slate-800/80 hover:border-cyan-500/40 transition-all duration-300"
              id={`value-prop-card-${vp.id}`}
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="p-3 rounded-xl bg-slate-900 border border-slate-800">
                    {getPropIcon(vp.icon)}
                  </div>

                  <div className="text-right">
                    <span className="text-2xl font-bold font-mono-tech text-cyan-300 block">{vp.statNumber}</span>
                    <span className="text-[10px] font-mono-tech text-slate-400 uppercase">{vp.statLabel}</span>
                  </div>
                </div>

                <h3 className="text-xl sm:text-2xl font-bold text-white mb-1">{vp.title}</h3>
                <p className="text-xs font-mono-tech text-cyan-400 mb-3">{vp.highlightText}</p>
                <p className="text-slate-300 text-sm leading-relaxed">{vp.description}</p>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-800/60 flex items-center gap-2 text-xs text-slate-400 font-mono-tech">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>Verified Client Partnership Standard</span>
              </div>
            </div>
          ))}
        </div>

        {/* Interactive Growth & ROI Estimator Tool */}
        <div id="roi-estimator" className="p-6 sm:p-10 rounded-2xl bg-gradient-to-br from-[#0c1222] via-[#090e1a] to-[#070b14] border border-cyan-500/30 shadow-2xl glow-cyan space-y-8">
          
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 pb-6 border-b border-slate-800">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/80 text-cyan-400 text-xs font-mono-tech mb-2">
                <Calculator className="w-3.5 h-3.5 text-cyan-300" />
                <span>INTERACTIVE REVENUE CALCULATOR</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold text-white">
                Estimate Your <span className="text-cyan-400">Campaign Growth Potential</span>
              </h3>
              <p className="text-slate-300 text-sm mt-1">
                Adjust the sliders below to see potential lead volume and cost-per-lead optimization with Rankz Digital.
              </p>
            </div>

            {/* Channel Switcher Buttons */}
            <div className="flex flex-wrap gap-2 font-mono-tech text-xs">
              {(['Google Ads', 'Meta Ads', 'SEO', 'All Combined'] as const).map((channel) => (
                <button
                  key={channel}
                  onClick={() => setSelectedChannel(channel)}
                  className={`py-2 px-3.5 rounded-xl border transition-all cursor-pointer ${
                    selectedChannel === channel
                      ? 'bg-cyan-500 text-slate-950 font-bold border-cyan-400 shadow-md'
                      : 'bg-slate-900 text-slate-300 border-slate-800 hover:border-slate-700'
                  }`}
                >
                  {channel}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left Controls */}
            <div className="lg:col-span-6 space-y-6">
              
              {/* Slider 1: Spend */}
              <div className="space-y-2">
                <div className="flex justify-between items-center text-sm">
                  <label className="text-slate-300 font-medium">Estimated Monthly Marketing Budget</label>
                  <span className="font-mono-tech font-bold text-cyan-300 text-base">
                    ₹{monthlySpend.toLocaleString('en-IN')}
                  </span>
                </div>
                <input
                  type="range"
                  min="20000"
                  max="500000"
                  step="5000"
                  value={monthlySpend}
                  onChange={(e) => setMonthlySpend(Number(e.target.value))}
                  className="w-full accent-cyan-400 bg-slate-900 rounded-lg cursor-pointer h-2"
                />
                <div className="flex justify-between text-[10px] font-mono-tech text-slate-500">
                  <span>₹20,000</span>
                  <span>₹2,50,000</span>
                  <span>₹5,00,000+</span>
                </div>
              </div>

              {/* Slider 2: Current Monthly Leads */}
              <div className="space-y-2">
                <div className="flex justify-between items-center text-sm">
                  <label className="text-slate-300 font-medium">Current Monthly Inquiries / Leads</label>
                  <span className="font-mono-tech font-bold text-cyan-300 text-base">
                    {currentLeads} Leads / mo
                  </span>
                </div>
                <input
                  type="range"
                  min="5"
                  max="200"
                  step="5"
                  value={currentLeads}
                  onChange={(e) => setCurrentLeads(Number(e.target.value))}
                  className="w-full accent-cyan-400 bg-slate-900 rounded-lg cursor-pointer h-2"
                />
                <div className="flex justify-between text-[10px] font-mono-tech text-slate-500">
                  <span>5 Leads</span>
                  <span>100 Leads</span>
                  <span>200+ Leads</span>
                </div>
              </div>

            </div>

            {/* Right Projection Metrics Box */}
            <div className="lg:col-span-6 bg-slate-950/80 rounded-xl p-6 border border-slate-800 space-y-4">
              <div className="text-xs font-mono-tech text-slate-400 uppercase tracking-wider">
                PROJECTED RANKZ CAMPAIGN OUTCOMES
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="p-3.5 rounded-xl bg-slate-900/90 border border-slate-800">
                  <div className="text-[11px] font-mono-tech text-slate-400">ESTIMATED MONTHLY LEADS</div>
                  <div className="text-2xl font-bold font-mono-tech text-emerald-400 flex items-center gap-1">
                    <span>{estimatedLeads} Leads</span>
                    <TrendingUp className="w-4 h-4 text-emerald-400" />
                  </div>
                  <div className="text-[10px] font-mono-tech text-slate-400 mt-1">
                    Up from {currentLeads} current
                  </div>
                </div>

                <div className="p-3.5 rounded-xl bg-slate-900/90 border border-slate-800">
                  <div className="text-[11px] font-mono-tech text-slate-400">PROJECTED COST PER LEAD</div>
                  <div className="text-2xl font-bold font-mono-tech text-cyan-300">
                    ₹{estimatedCostPerLead.toLocaleString('en-IN')}
                  </div>
                  <div className="text-[10px] font-mono-tech text-emerald-400 mt-1">
                    ~{cplReduction > 0 ? `${cplReduction}% Cost Reduction` : 'Optimized CPL'}
                  </div>
                </div>
              </div>

              <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4">
                <span className="text-xs text-slate-400 font-mono-tech">
                  *Projections based on Rankz Digital historical client benchmark data.
                </span>

                <button
                  onClick={() => onOpenAuditModal(selectedChannel)}
                  id="roi-estimator-claim-btn"
                  className="btn-bold-primary rounded-xl flex items-center justify-center gap-2 cursor-pointer text-xs whitespace-nowrap w-full sm:w-auto"
                >
                  <span>Lock In This Forecast</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
