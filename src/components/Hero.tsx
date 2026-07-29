import React, { useState, useEffect } from 'react';
import { ArrowRight, Search, Target, TrendingUp, Cpu, Activity, Zap, CheckCircle2, RefreshCw } from 'lucide-react';
import { ParticleCanvas } from './ParticleCanvas';

interface HeroProps {
  onOpenAuditModal: (service?: string) => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenAuditModal }) => {
  const [activeTab, setActiveTab] = useState<'seo' | 'ads'>('seo');
  const [liveMetric, setLiveMetric] = useState(384);
  const [isRefreshing, setIsRefreshing] = useState(false);

  // Live metric tick effect
  useEffect(() => {
    const interval = setInterval(() => {
      setLiveMetric((prev) => prev + Math.floor(Math.random() * 3) + 1);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const triggerRefresh = () => {
    setIsRefreshing(true);
    setTimeout(() => {
      setIsRefreshing(false);
    }, 800);
  };

  return (
    <section className="relative min-h-screen pt-32 pb-20 overflow-hidden flex items-center justify-center bg-cyber-grid">
      {/* Background canvas & gradient lights */}
      <ParticleCanvas />
      
      {/* Ambient background glow orbs */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cyan-500/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[400px] h-[400px] bg-blue-600/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-20 left-10 w-[350px] h-[350px] bg-purple-600/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Copy & Dual CTAs */}
          <div className="lg:col-span-7 space-y-6 text-left">
            
            {/* Live AI System Tag */}
            <div className="badge-eyebrow">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
              </span>
              <span>RANKZ AI ENGINE</span>
              <span className="text-white font-bold">// ACTIVE CAMPAIGN OPTIMIZATION</span>
            </div>

            {/* Headline */}
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-hero-bold text-white tracking-tighter uppercase leading-[0.9]">
              Rank Higher <span className="text-gradient-cyan-violet glow-text-cyan">with Rankz Digital</span>
            </h1>

            {/* Subtitle */}
            <p className="text-base sm:text-lg text-slate-300 max-w-2xl leading-relaxed font-sans">
              Rankz Digital is a straight-talking growth partner. We combine technical SEO, precision Google Ads, and high-converting Meta Ads to deliver predictable pipeline and compounding ROI.
            </p>

            {/* Value Checkpoints */}
            <div className="grid grid-cols-2 gap-3 pt-2 text-xs sm:text-sm font-mono-tech text-slate-300">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                <span>Zero Agency Fluff or Vanity Reports</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                <span>Direct Access to Senior Strategists</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                <span>24/7 Live Lead & ROAS Dashboard</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                <span>High-Intent Buyer Traffic Acquisition</span>
              </div>
            </div>

            {/* Dual CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-4">
              <button
                onClick={() => onOpenAuditModal()}
                id="hero-free-audit-cta"
                className="btn-bold-primary rounded-xl flex items-center justify-center gap-3 cursor-pointer"
              >
                <Zap className="w-5 h-5 fill-black" />
                <span>Get a Free Audit</span>
                <ArrowRight className="w-5 h-5" />
              </button>

              <a
                href="#services"
                id="hero-see-services-btn"
                className="btn-bold-outline rounded-xl flex items-center justify-center gap-2"
              >
                <span>See Our Services</span>
              </a>
            </div>

            {/* Quick Contact Line */}
            <div className="pt-2 text-xs font-mono-tech text-slate-400 flex items-center gap-3">
              <span>INSTANT ASSISTANCE:</span>
              <a href="tel:9810409675" className="text-cyan-300 hover:underline font-bold">
                +91 9810409675
              </a>
              <span>•</span>
              <a href="mailto:admin@rankzdigital.com" className="text-slate-300 hover:underline">
                admin@rankzdigital.com
              </a>
            </div>

          </div>

          {/* Right Column: Futuristic Interactive AI Marketing Dashboard Centerpiece */}
          <div className="lg:col-span-5">
            <div className="relative rounded-2xl p-1 bg-gradient-to-b from-cyan-500/40 via-blue-500/20 to-slate-800/40 shadow-2xl glow-cyan">
              
              {/* Glassmorphic Container */}
              <div className="bg-[#0b101d] rounded-xl p-5 sm:p-6 space-y-5 border border-slate-800 relative overflow-hidden">
                
                {/* Top Terminal Bar */}
                <div className="flex items-center justify-between pb-4 border-b border-slate-800">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-500/80" />
                    <div className="w-3 h-3 rounded-full bg-amber-500/80" />
                    <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
                    <span className="text-xs font-mono-tech text-slate-400 ml-2">rankz-ai-telemetry v3.4</span>
                  </div>

                  <button 
                    onClick={triggerRefresh}
                    className="p-1.5 text-slate-400 hover:text-cyan-400 rounded-lg hover:bg-slate-800 transition-all cursor-pointer"
                    title="Refresh telemetry"
                  >
                    <RefreshCw className={`w-3.5 h-3.5 ${isRefreshing ? 'animate-spin text-cyan-400' : ''}`} />
                  </button>
                </div>

                {/* Switcher Tabs */}
                <div className="flex rounded-xl bg-slate-900/90 p-1 border border-slate-800 text-xs font-mono-tech">
                  <button
                    onClick={() => setActiveTab('seo')}
                    className={`flex-1 py-2 rounded-lg flex items-center justify-center gap-2 transition-all cursor-pointer ${
                      activeTab === 'seo'
                        ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-bold shadow'
                        : 'text-slate-400 hover:text-white'
                    }`}
                  >
                    <Search className="w-3.5 h-3.5" />
                    <span>SEO RANKINGS</span>
                  </button>

                  <button
                    onClick={() => setActiveTab('ads')}
                    className={`flex-1 py-2 rounded-lg flex items-center justify-center gap-2 transition-all cursor-pointer ${
                      activeTab === 'ads'
                        ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-bold shadow'
                        : 'text-slate-400 hover:text-white'
                    }`}
                  >
                    <Target className="w-3.5 h-3.5" />
                    <span>ADS TELEMETRY</span>
                  </button>
                </div>

                {/* Dashboard Tab Content */}
                {activeTab === 'seo' ? (
                  <div className="space-y-4 animate-fadeIn">
                    
                    {/* Stat Card 1 */}
                    <div className="p-3.5 rounded-xl bg-slate-900/70 border border-slate-800 flex items-center justify-between">
                      <div>
                        <div className="text-[11px] font-mono-tech text-slate-400">ORGANIC KEYWORD #1 RANKINGS</div>
                        <div className="text-2xl font-bold text-white font-mono-tech flex items-center gap-2">
                          <span>184 Keywords</span>
                          <span className="text-xs px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-400 font-bold">+28%</span>
                        </div>
                      </div>
                      <div className="p-2.5 rounded-xl bg-cyan-950/60 border border-cyan-500/30 text-cyan-400">
                        <TrendingUp className="w-5 h-5" />
                      </div>
                    </div>

                    {/* Keywords Live Ranking List */}
                    <div className="space-y-2 text-xs font-mono-tech">
                      <div className="text-slate-400 flex justify-between px-1">
                        <span>TARGET KEYWORD</span>
                        <span>POSITION</span>
                      </div>

                      <div className="p-2.5 rounded-lg bg-slate-900/40 border border-slate-800/80 flex items-center justify-between text-slate-200">
                        <span className="text-cyan-300 font-semibold">"high intent buyer service"</span>
                        <span className="px-2 py-0.5 rounded bg-cyan-500/20 text-cyan-300 font-bold">#1 Google</span>
                      </div>

                      <div className="p-2.5 rounded-lg bg-slate-900/40 border border-slate-800/80 flex items-center justify-between text-slate-200">
                        <span className="text-slate-300">"digital growth agency near me"</span>
                        <span className="px-2 py-0.5 rounded bg-cyan-500/20 text-cyan-300 font-bold">#1 Google</span>
                      </div>

                      <div className="p-2.5 rounded-lg bg-slate-900/40 border border-slate-800/80 flex items-center justify-between text-slate-200">
                        <span className="text-slate-300">"top conversion marketing firm"</span>
                        <span className="px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300 font-bold">#2 (+4 Pos)</span>
                      </div>
                    </div>

                  </div>
                ) : (
                  <div className="space-y-4 animate-fadeIn">
                    
                    {/* Stat Card 2 */}
                    <div className="p-3.5 rounded-xl bg-slate-900/70 border border-slate-800 flex items-center justify-between">
                      <div>
                        <div className="text-[11px] font-mono-tech text-slate-400">BLENDED RETURN ON AD SPEND</div>
                        <div className="text-2xl font-bold text-white font-mono-tech flex items-center gap-2">
                          <span>4.85x ROAS</span>
                          <span className="text-xs px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-400 font-bold">+142%</span>
                        </div>
                      </div>
                      <div className="p-2.5 rounded-xl bg-blue-950/60 border border-blue-500/30 text-blue-400">
                        <Activity className="w-5 h-5" />
                      </div>
                    </div>

                    {/* Campaign breakdown */}
                    <div className="space-y-2 text-xs font-mono-tech">
                      <div className="p-2.5 rounded-lg bg-slate-900/40 border border-slate-800 flex items-center justify-between">
                        <div>
                          <span className="text-white font-bold block">Google Ads Search Campaign</span>
                          <span className="text-[10px] text-slate-400">Search Commercial Intent</span>
                        </div>
                        <div className="text-right">
                          <span className="text-emerald-400 font-bold block">5.2x ROAS</span>
                          <span className="text-[10px] text-slate-400">CPL: ₹280</span>
                        </div>
                      </div>

                      <div className="p-2.5 rounded-lg bg-slate-900/40 border border-slate-800 flex items-center justify-between">
                        <div>
                          <span className="text-white font-bold block">Meta Retargeting Funnel</span>
                          <span className="text-[10px] text-slate-400">High-Converting Reel Angles</span>
                        </div>
                        <div className="text-right">
                          <span className="text-emerald-400 font-bold block">4.4x ROAS</span>
                          <span className="text-[10px] text-slate-400">CAPI Matched</span>
                        </div>
                      </div>
                    </div>

                  </div>
                )}

                {/* Bottom Live Pulse Bar */}
                <div className="p-3 rounded-xl bg-cyan-950/40 border border-cyan-500/30 flex items-center justify-between text-xs font-mono-tech">
                  <div className="flex items-center gap-2 text-cyan-300">
                    <Cpu className="w-4 h-4 text-cyan-400 animate-spin" />
                    <span>MONTHLY QUALIFIED LEADS:</span>
                  </div>
                  <span className="text-white font-bold text-sm">{liveMetric} Leads</span>
                </div>

              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
