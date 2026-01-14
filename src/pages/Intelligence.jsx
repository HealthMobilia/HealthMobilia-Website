import React from 'react';
import { FaHeartPulse, FaBrain, FaEarthAsia, FaArrowTrendUp, FaChartArea } from 'react-icons/fa6';

export default function FocusAreas() {
  
  const domains = [
    {
      title: "Menstrual Health",
      subtitle: "A Vital Sign",
      icon: <FaArrowTrendUp className="text-[#94A89A] text-3xl" />,
      desc: "Menstrual irregularities are often the first biological signal of systemic distress. Instead of viewing these as isolated events, we treat cycle health as a quantitative indicator of overall population well-being.",
      value: "Early detection of nutritional deficiencies."
    },
    {
      title: "Metabolic Resilience",
      subtitle: "PCOS & Hormonal Health",
      icon: <FaHeartPulse className="text-[#94A89A] text-3xl" />,
      desc: "Conditions like PCOS are not just reproductive issues; they are metabolic warning signs. We track indicators linked to insulin resistance to predict future chronic disease burdens.",
      value: "Prevention of Type 2 Diabetes risks."
    },
    {
      title: "Emotional Wellbeing",
      subtitle: "Psychosocial Health",
      icon: <FaBrain className="text-[#94A89A] text-3xl" />,
      desc: "Physical symptoms often manifest alongside emotional stress. We document the correlation between physiological health and mental well-being to provide a holistic view of community resilience.",
      value: "Mapping the mental burden of chronic conditions."
    }
  ];

  return (
    <div className="bg-[#050707] text-[#F5F7F7] min-h-screen pt-32 pb-20 selection:bg-[#94A89A] selection:text-[#050707]">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* =========================================
            1. HERO SECTION
            (Matches Genesis/Collaborate Spacing)
        ========================================= */}
        <div className="mb-32">
          <p className="text-[#94A89A] tracking-[0.3em] uppercase text-[10px] font-bold mb-6 opacity-80">
             Domains of Impact • Systemic View
          </p>

          <h1 className="font-serif text-5xl md:text-7xl leading-tight mb-10">
            Transforming <span className="text-[#94A89A] italic">Symptoms</span> <br />
            into Systemic Intelligence.
          </h1>

          <p className="text-gray-400 text-lg md:text-xl leading-relaxed font-light max-w-3xl">
            We focus on health domains that act as early signals for long-term population well-being. By tracking these subtle indicators today, we help health systems prevent the chronic burdens of tomorrow.
          </p>
        </div>

        {/* =========================================
            2. CORE DOMAINS GRID
            (Matches Collaborate Card Styling)
        ========================================= */}
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-32">
          {domains.map((item, i) => (
            <div key={i} className="p-10 bg-[#0A0C0C] border border-white/5 rounded-[2.5rem] flex flex-col hover:border-[#94A89A]/30 transition-colors duration-500 group">
              
              <div className="mb-10 group-hover:scale-110 transition-transform duration-500 origin-left">
                {item.icon}
              </div>

              <h3 className="text-[#94A89A] text-[10px] font-bold uppercase tracking-widest mb-4">
                {item.subtitle}
              </h3>

              <h2 className="text-2xl font-serif mb-6 text-white group-hover:text-[#94A89A] transition-colors">
                {item.title}
              </h2>

              <p className="text-sm leading-relaxed text-gray-400 font-light mb-8 flex-grow">
                {item.desc}
              </p>

              <div className="h-px w-full bg-white/5 mb-6" />
              
              <div>
                <span className="block text-[10px] font-bold text-gray-500 uppercase tracking-wider mb-1">Public Health Value</span>
                <span className="text-xs text-gray-300 font-light">{item.value}</span>
              </div>
            </div>
          ))}
        </div>

        {/* =========================================
            3. THE "ONE HEALTH" CONTEXT
            (Layout aligns with Genesis Story Flow)
        ========================================= */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-16 items-center mb-32 border-t border-white/5 pt-24">
          
          {/* Visual/Icon Side */}
          <div className="md:col-span-4 flex justify-center md:justify-start">
             <div className="relative group">
                <div className="absolute inset-0 bg-[#94A89A]/10 blur-3xl rounded-full group-hover:bg-[#94A89A]/20 transition-all duration-700"></div>
                <FaEarthAsia className="text-gray-200/80 w-40 h-40 relative z-10 group-hover:scale-105 transition-transform duration-700" />
             </div>
          </div>

          {/* Text Content Side */}
          <div className="md:col-span-8">
            <p className="text-[#94A89A] tracking-[0.3em] uppercase text-[10px] font-bold mb-6 opacity-80">
              Context Matters
            </p>
            <h2 className="text-3xl md:text-5xl font-serif mb-8 leading-tight">
              The One Health Perspective.
            </h2>
            <p className="text-gray-400 text-lg md:text-xl font-light leading-relaxed mb-8">
              We recognize that the rise in metabolic and hormonal disorders is deeply connected to environmental factors—urbanization, changing dietary patterns, and lifestyle shifts.
            </p>
            <div className="pl-8 border-l border-[#94A89A]/30">
              <p className="text-gray-300 text-lg italic font-serif opacity-80">
                "HealthMobilia contextualizes individual health data within these larger environmental shifts, offering policymakers a view not just of what is happening, but why."
              </p>
            </div>
          </div>
        </div>

        {/* =========================================
            4. STRATEGIC OUTCOME CARD
            (Matches Collaborate 'Funding' Section)
        ========================================= */}
        <div className="bg-[#141717] rounded-[4rem] px-10 md:px-20 py-20 border border-white/5 relative overflow-hidden text-center">
           
           {/* Gradient Overlay */}
           <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-[#94A89A]/5 to-transparent pointer-events-none" />

           <div className="relative z-10 max-w-4xl mx-auto">
             <FaChartArea className="text-[#94A89A] w-10 h-10 mx-auto mb-8 opacity-80" />
             
             <h2 className="text-3xl md:text-5xl font-serif mb-8 leading-tight">
               From "Hidden Burden" to <br />
               <span className="text-[#94A89A] italic">Actionable Insight.</span>
             </h2>
             
             <p className="text-gray-400 text-lg font-light leading-relaxed">
               By bringing these focus areas out of the shadows and into the data layer, we enable districts to move funding and attention toward <strong>early prevention</strong> rather than late-stage crisis management.
             </p>
           </div>
        </div>

      </div>
    </div>
  );
}