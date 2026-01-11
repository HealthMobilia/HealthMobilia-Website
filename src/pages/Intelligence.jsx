import { useState } from 'react';
import { 
  FaFingerprint, 
  FaNetworkWired, 
  FaDatabase, 
  FaUsersViewfinder, 
  FaMicroscope, 
  FaHandHoldingHeart,
  FaCoins
} from 'react-icons/fa6';

export default function Intelligence() {
  const [activeLayer, setActiveLayer] = useState(0);

  const architectureLayers = [
    {
      title: "Phenotypic Marker Detection",
      subtitle: "The Early Signal",
      desc: "Our technology identifies biological risks through non-invasive markers. By mapping cycle rhythms and metabolic signatures, we detect health signals years before they become chronic issues.",
      icon: <FaFingerprint size={24} />
    },
    {
      title: "Lifespan Monitoring",
      subtitle: "Filling the 15-Year Gap",
      desc: "We focus on the critical years where standard health systems are silent. Our infrastructure ensures reproductive health is monitored as a standard vital sign, not just a fertility metric.",
      icon: <FaUsersViewfinder size={24} />
    },
    {
      title: "Systemic Scaling",
      subtitle: "Global Infrastructure",
      desc: "We build tools designed to integrate with any existing community network. Our goal is to provide the intelligence needed to reach the 70% of women who currently live without a diagnosis.",
      icon: <FaNetworkWired size={24} />
    }
  ];

  return (
    <div className="bg-[#050707] text-[#F5F7F7] min-h-screen pt-32 pb-20 selection:bg-[#94A89A] selection:text-[#050707]">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* 1. HERO: ARCHITECTURE OF DETECTION */}
        <section className="mb-40 animate-reveal">
          <div className="max-w-4xl">
            <p className="text-[#94A89A] tracking-[0.4em] uppercase text-[10px] font-bold mb-6 opacity-80">
              Intelligence Infrastructure
            </p>
            <h1 className="font-serif text-5xl md:text-8xl leading-[0.95] tracking-tight mb-12">
              The Architecture <br /> of <span className="text-[#94A89A] italic">Detection.</span>
            </h1>
            <p className="text-gray-500 text-lg md:text-2xl leading-relaxed font-light">
              We are engineering the tools to identify undiagnosed metabolic risks, 
              turning reproductive health from a cultural taboo into actionable biological data.
            </p>
          </div>
        </section>

        {/* 2. THE DATA INFRASTRUCTURE (Interactive Section) */}
        <section className="py-32 border-t border-white/5">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
            <div className="lg:col-span-5 space-y-4">
              {architectureLayers.map((layer, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveLayer(idx)}
                  className={`w-full text-left p-8 rounded-3xl border transition-all duration-500 flex items-center gap-6 ${
                    activeLayer === idx 
                    ? 'bg-[#141717] border-[#94A89A]/40 shadow-2xl' 
                    : 'bg-transparent border-white/5 opacity-40 hover:opacity-100'
                  }`}
                >
                  <div className={`p-4 rounded-2xl ${activeLayer === idx ? 'bg-[#94A89A] text-[#050707]' : 'bg-[#0A0C0C] text-gray-500'}`}>
                    {layer.icon}
                  </div>
                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-[0.2em] mb-1 opacity-50">Component 0{idx + 1}</p>
                    <h4 className="font-bold">{layer.title}</h4>
                  </div>
                </button>
              ))}
            </div>

            <div className="lg:col-span-7">
               <div className="bg-[#141717] h-full p-12 md:p-20 rounded-[3rem] border border-white/5 relative overflow-hidden flex flex-col justify-center">
                  <div className="absolute top-10 right-10 text-8xl font-serif text-white/5">0{activeLayer + 1}</div>
                  <div className="relative z-10">
                    <h3 className="text-[#94A89A] font-bold tracking-[0.2em] uppercase text-xs mb-6">
                      {architectureLayers[activeLayer].subtitle}
                    </h3>
                    <h2 className="text-3xl md:text-5xl font-serif mb-8 leading-tight">
                      {architectureLayers[activeLayer].title}
                    </h2>
                    <p className="text-gray-400 text-lg md:text-xl leading-relaxed font-light">
                      {architectureLayers[activeLayer].desc}
                    </p>
                  </div>
               </div>
            </div>
          </div>
        </section>

        {/* 3. STRATEGIC GROWTH (FUNDING & GRANTS SECTION) */}
        <section className="py-40 bg-[#141717] rounded-[4rem] px-10 md:px-20 border border-white/5 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-[#94A89A]/5 blur-[100px]" />
          
          <div className="relative z-10 text-center max-w-4xl mx-auto">
            <h2 className="text-[#94A89A] font-bold tracking-[0.3em] uppercase text-xs mb-8">
              Strategic Growth
            </h2>
            <h3 className="text-4xl md:text-7xl font-serif mb-12">Fueling the Intelligence Shift.</h3>
            <p className="text-gray-400 text-lg md:text-xl leading-relaxed font-light mb-16">
              We are moving through our technical validation phase and are actively 
              seeking partners to scale this intelligence infrastructure globally. 
              We are open to discussions regarding:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
              <div className="p-8 bg-[#0A0C0C] border border-white/5 rounded-3xl hover:border-[#94A89A]/30 transition-all text-left group">
                <FaCoins className="text-[#94A89A] text-2xl mb-6 group-hover:scale-110 transition-transform" />
                <h4 className="text-xl font-bold mb-4">Impact Investment</h4>
                <p className="text-sm text-gray-500 font-light leading-relaxed">
                  Support our mission to make diagnostics affordable and accessible 
                  by fueling our technical R&D and scaling runway.
                </p>
              </div>
              <div className="p-8 bg-[#0A0C0C] border border-white/5 rounded-3xl hover:border-[#94A89A]/30 transition-all text-left group">
                <FaHandHoldingHeart className="text-[#94A89A] text-2xl mb-6 group-hover:scale-110 transition-transform" />
                <h4 className="text-xl font-bold mb-4">Grants & Fellowships</h4>
                <p className="text-sm text-gray-500 font-light leading-relaxed">
                  Partner with us through academic grants and public health fellowships 
                  to validate our datasets with global research institutions.
                </p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row justify-center gap-6">
              <a 
                href="mailto:relations@healthmobilia.com" 
                className="px-12 py-6 bg-[#94A89A] text-[#050707] text-[10px] font-bold uppercase tracking-[0.2em] rounded-full hover:scale-105 transition-all shadow-lg shadow-[#94A89A]/10"
              >
                Inquire for Funding
              </a>
              <a 
                href="/contact" 
                className="px-12 py-6 border border-white/10 text-white text-[10px] font-bold uppercase tracking-[0.2em] rounded-full hover:bg-white/5 transition-all"
              >
                Partnership Inquiry
              </a>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
}