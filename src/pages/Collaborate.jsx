import { FaHandshakeSimple, FaBuildingColumns, FaSackDollar, FaArrowRight, FaEnvelope } from 'react-icons/fa6';

export default function Collaborate() {
  const partners = [
    {
      title: "B2G Infrastructure",
      subtitle: "Government & Public Health",
      desc: "We provide the missing data layer for existing public health programs. By integrating our screening intelligence, government administrations can identify metabolic risks in the 15-30 age group that current maternal programs overlook.",
      icon: <FaHandshakeSimple className="text-[#94A89A] text-3xl" />
    },
    {
      title: "Clinical Research",
      subtitle: "Academic & Scientific Institutions",
      desc: "We are open to academic partnerships to validate our proprietary multivariate models. Our large-scale community datasets offer a unique look into reproductive health trends in underserved rural clusters.",
      icon: <FaBuildingColumns className="text-[#94A89A] text-3xl" />
    },
    {
      title: "Strategic Investment",
      subtitle: "Impact Funds & Grants",
      desc: "We are actively seeking impact investment and grants to scale our R&D. Our focus is on making high-end metabolic screening affordable and accessible to the last mile.",
      icon: <FaSackDollar className="text-[#94A89A] text-3xl" />
    }
  ];

  return (
    <div className="bg-[#050707] text-[#F5F7F7] min-h-screen pt-32 pb-20 selection:bg-[#94A89A] selection:text-[#050707]">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* 1. HERO: STRATEGIC GROWTH */}
        <section className="mb-40 animate-reveal">
          <div className="max-w-4xl">
            <p className="text-[#94A89A] tracking-[0.4em] uppercase text-[10px] font-bold mb-6 opacity-80">
              Partnerships • Strategic Growth
            </p>
            <h1 className="font-serif text-5xl md:text-8xl leading-[0.95] tracking-tight mb-12">
              Scaling the <br /> <span className="text-[#94A89A] italic">Infrastructure.</span>
            </h1>
            <p className="text-gray-500 text-lg md:text-2xl leading-relaxed font-light">
              HealthMobilia is built for collaboration. We partner with organizations that 
              share our mission to close the diagnostic gap in reproductive health.
            </p>
          </div>
        </section>

        {/* 2. THE PARTNERSHIP MODEL (Grid) */}
        <section className="py-32 border-t border-white/5">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {partners.map((item, i) => (
              <div key={i} className="group p-10 bg-[#0A0C0C] border border-white/5 rounded-[2.5rem] hover:border-[#94A89A]/40 transition-all duration-700">
                <div className="mb-10 group-hover:scale-110 transition-transform duration-500">
                  {item.icon}
                </div>
                <p className="text-[#94A89A] text-[10px] font-bold uppercase tracking-widest mb-4">
                  {item.subtitle}
                </p>
                <h3 className="text-2xl font-serif mb-6">{item.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-8">
                  {item.desc}
                </p>
                <div className="h-px w-full bg-white/5 group-hover:bg-[#94A89A]/20 transition-colors" />
              </div>
            ))}
          </div>
        </section>

        {/* 3. FUNDING & GRANTS FOCUS */}
        <section className="py-40 bg-[#141717] rounded-[4rem] px-10 md:px-20 border border-white/5 relative overflow-hidden text-center">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-[#94A89A]/5 to-transparent pointer-events-none" />
          
          <div className="relative z-10 max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-6xl font-serif mb-10 leading-tight">
              Fueling the Next <span className="text-[#94A89A] italic">Intelligence Milestone.</span>
            </h2>
            <p className="text-gray-400 text-lg md:text-xl leading-relaxed font-light mb-16">
              We are moving through our technical validation phase and are inviting 
              sovereignty funds, impact investors, and grant-making bodies to join our 
              mission. We provide the data; you provide the scale.
            </p>
            
            <div className="flex flex-col sm:flex-row justify-center gap-8">
              <a 
                href="mailto:relations@healthmobilia.com" 
                className="inline-flex items-center justify-center gap-3 px-12 py-6 bg-[#94A89A] text-[#050707] text-[10px] font-bold uppercase tracking-[0.2em] rounded-full hover:scale-105 transition-all shadow-xl shadow-[#94A89A]/10"
              >
                Inquire for Funding <FaEnvelope />
              </a>
              <a 
                href="/contact" 
                className="inline-flex items-center justify-center gap-3 px-12 py-6 border border-white/10 text-white text-[10px] font-bold uppercase tracking-[0.2em] rounded-full hover:bg-white/5 transition-all"
              >
                Request Partnership Pack <FaArrowRight />
              </a>
            </div>
          </div>
        </section>

        {/* 4. ETHICS & SOVEREIGNTY (The Trust Layer) */}
        <section className="py-32 px-6 text-center">
          <div className="max-w-2xl mx-auto space-y-8">
            <h4 className="text-[#94A89A] font-bold tracking-[0.3em] uppercase text-xs">Ethics First</h4>
            <p className="text-gray-500 text-sm italic font-light">
              "We treat community health data as a sovereign asset. Every partnership 
              is built on a foundation of data integrity, ethics, and privacy."
            </p>
          </div>
        </section>

      </div>
    </div>
  );
}