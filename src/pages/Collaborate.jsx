import { FaHandshakeSimple, FaBuildingColumns, FaSackDollar, FaArrowRight, FaEnvelope } from 'react-icons/fa6';

export default function Collaborate() {
  const partners = [
    {
      title: "B2G Infrastructure",
      subtitle: "Government & Public Health",
      desc: "We provide the missing data layer for existing public health programs. By integrating our screening intelligence, government administrations can identify metabolic risks in the 15-30 age group that current maternal programs overlook.",
      icon: <FaBuildingColumns className="text-[#94A89A] text-2xl mb-6" />
    },
    {
      title: "Clinical Research",
      subtitle: "Academic & Scientific Institutions",
      desc: "We are open to academic partnerships to validate our proprietary multivariate models. Our large-scale community datasets offer a unique look into reproductive health trends in underserved rural clusters.",
      icon: <FaHandshakeSimple className="text-[#94A89A] text-2xl mb-6" />
    },
    {
      title: "Strategic Investment",
      subtitle: "Impact Funds & Grants",
      desc: "We are actively seeking impact investment and grants to scale our R&D. Our focus is on making high-end metabolic screening affordable and accessible to the last mile.",
      icon: <FaSackDollar className="text-[#94A89A] text-2xl mb-6" />
    }
  ];

  return (
    <div className="bg-[#050707] text-[#F5F7F7] min-h-screen pt-32 pb-20 selection:bg-[#94A89A] selection:text-[#050707]">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* 1. HEADER (Matches Genesis Exact Spacing/Typo) */}
        <div className="mb-24 text-center md:text-left">
          <p className="text-[#94A89A] tracking-[0.3em] uppercase text-[10px] font-bold mb-6 opacity-80">
             Partnerships • Strategic Scale
          </p>
          <h1 className="font-serif text-5xl md:text-7xl leading-tight mb-10">
            Scaling the <span className="text-[#94A89A] italic">Infrastructure</span> <br />
            of Prevention.
          </h1>
          <p className="text-gray-400 text-lg md:text-xl leading-relaxed font-light max-w-3xl">
            HealthMobilia is built for collaboration. We partner with organizations that share our mission to close the diagnostic gap in reproductive health.
          </p>
        </div>

        {/* 2. THE PARTNERSHIP GRID */}
        {/* Matches Genesis Card Style: bg-[#0A0C0C], rounded-3xl, border-white/5 */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-24">
          {partners.map((item, i) => (
            <div key={i} className="p-10 bg-[#0A0C0C] border border-white/5 rounded-3xl flex flex-col hover:border-[#94A89A]/30 transition-colors duration-500 group">
              
              {/* Icon */}
              <div className="group-hover:scale-110 transition-transform duration-500 origin-left">
                {item.icon}
              </div>

              {/* Label */}
              <h3 className="text-[#94A89A] text-[10px] font-bold uppercase tracking-widest mb-4">
                {item.subtitle}
              </h3>

              {/* Title */}
              <h2 className="text-2xl font-serif mb-6 text-white group-hover:text-[#94A89A] transition-colors">
                {item.title}
              </h2>

              {/* Desc */}
              <p className="text-sm leading-relaxed text-gray-400 font-light mb-8 flex-grow">
                {item.desc}
              </p>

              {/* Decorative Line */}
              <div className="h-px w-full bg-white/5 group-hover:bg-[#94A89A]/20 transition-colors" />
            </div>
          ))}
        </div>

        {/* 3. FUNDING & ACTION (Compact & Professional) */}
        {/* Designed to look like the Genesis 'Quote' section but expanded */}
        <div className="bg-[#0A0C0C] rounded-3xl p-10 md:p-20 border border-white/5 text-center relative overflow-hidden">
           
           {/* Subtle Background Gradient */}
           <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-[#94A89A]/5 to-transparent pointer-events-none" />

           <div className="relative z-10 max-w-3xl mx-auto">
             <h2 className="text-3xl md:text-5xl font-serif mb-8 leading-tight">
               Fueling the <span className="text-[#94A89A] italic">Next Milestone.</span>
             </h2>
             <p className="text-gray-400 text-lg font-light leading-relaxed mb-12">
               We are moving through our technical validation phase and are inviting sovereignty funds and grant-making bodies to join our mission. We provide the data; you provide the scale.
             </p>
             
             <div className="flex flex-col sm:flex-row justify-center gap-6">
               <a 
                 href="mailto:funding@healthmobilia.com" 
                 className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-[#94A89A] text-[#050707] text-[10px] font-bold uppercase tracking-[0.2em] rounded-full hover:bg-white transition-colors"
               >
                 Inquire for Funding <FaEnvelope />
               </a>
               <a 
                 href="/contact" 
                 className="inline-flex items-center justify-center gap-3 px-8 py-4 border border-white/10 text-white text-[10px] font-bold uppercase tracking-[0.2em] rounded-full hover:bg-white/5 transition-all"
               >
                 Contact Us <FaArrowRight />
               </a>
             </div>
           </div>

        </div>

        {/* 4. FOOTER NOTE (Matches Genesis 'Quote' attribution style) */}
        {/* <div className="mt-16 text-center">
            <p className="text-gray-500 text-[10px] uppercase tracking-[0.2em] opacity-60">
                Data Sovereignty & Ethics First
            </p>
        </div> */}

      </div>
    </div>
  );
}