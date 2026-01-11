import { useState } from 'react';
import { FaLinkedin, FaXTwitter, FaEnvelope, FaArrowDown, FaArrowUp } from 'react-icons/fa6';

export default function Genesis() {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="bg-[#050707] text-[#F5F7F7] min-h-screen pt-32 pb-20 selection:bg-[#94A89A] selection:text-[#050707]">
      <div className="max-w-5xl mx-auto px-6">
        
        {/* HEADER */}
        <div className="mb-24">
          <p className="text-[#94A89A] tracking-[0.3em] uppercase text-[10px] font-bold mb-6 opacity-80">
            The Genesis • Our Origin
          </p>
          <h1 className="font-serif text-5xl md:text-7xl leading-tight mb-10">
            Fixing the <span className="text-[#94A89A] italic">Missing Decade</span> <br />
            of Women’s Health.
          </h1>
        </div>

        {/* THE STORY CONTENT */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          
          {/* Left Side: Summary Cards */}
          <div className="lg:col-span-4 space-y-8">
            <div className="p-8 bg-[#0A0C0C] border border-white/5 rounded-3xl">
              <h3 className="text-[#94A89A] text-xs font-bold uppercase tracking-widest mb-4">The Focus</h3>
              <p className="text-sm leading-relaxed text-gray-400 font-light">
                Our mission is to fill the "White Space" in healthcare—finding health issues like PCOS early, before they become chronic problems.
              </p>
            </div>
            <div className="p-8 bg-[#0A0C0C] border border-white/5 rounded-3xl">
              <h3 className="text-[#94A89A] text-xs font-bold uppercase tracking-widest mb-4">The Statistics</h3>
              <p className="text-sm leading-relaxed text-gray-400 font-light">
                70% of PCOS cases remain undiagnosed globally. We are building the architecture to change that.
              </p>
            </div>
          </div>

          {/* Right Side: The Narrative */}
          <div className="lg:col-span-8 space-y-8 text-gray-300 font-light leading-relaxed text-lg md:text-xl">
            <p className="first-letter:text-5xl first-letter:text-[#94A89A] first-letter:font-serif first-letter:mr-3 first-letter:float-left">
              Megha’s journey started with years of confusion. She dealt with irregular periods and metabolic fatigue, but was often told it was "normal" and that she should only worry after marriage. When she was finally diagnosed with PCOS, the advice was just to wait until she had a child to "get better."
            </p>

            <p>
              This experience showed a big gap. Most systems only care about a woman's health when she wants to be a mother. But what about the decade before that? While Megha dealt with this, Hemant was working on biotechnology and ways to find health problems early.
            </p>

            <div className={isExpanded ? 'block' : 'hidden md:block'}>
              <p className="mb-8">
                They worked together at an early-stage startup called AiSense. There, they realized that the real problem wasn't a lack of treatment, but a lack of awareness. Most women don't even know they have PCOS because reproductive health is often treated as a taboo topic.
              </p>
              
              <p>
                In 2025, they founded HealthMobilia to fix this. Their goal is to make sure women don't have to wait ten years to understand their own bodies. They are building a system that treats a woman's cycle as a basic health sign, so health issues can be found early.
              </p>

              {/* THE QUOTE */}
              <div className="mt-16 pt-12 border-t border-white/5">
                <blockquote className="text-2xl md:text-3xl font-serif italic text-[#94A89A] mb-8 leading-tight">
                  "Their conversations often circled back to the same gap: public health systems collect enormous amounts of data but rarely turn it into insight."
                </blockquote>
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-gray-500">
                  — Siblings and Founders, Hemant & Megha
                </p>
              </div>
            </div>

            {/* Mobile "Read More" Toggle */}
            <button 
              onClick={() => setIsExpanded(!isExpanded)}
              className="md:hidden flex items-center gap-2 text-[#94A89A] text-xs font-bold uppercase tracking-widest pt-4"
            >
              {isExpanded ? 'Read Less' : 'Read Full Story'}
              {isExpanded ? <FaArrowUp /> : <FaArrowDown />}
            </button>
          </div>

        </div>

        {/* TEAM FOOTER */}
        <div className="mt-40 pt-20 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex gap-8">
            <div className="text-center">
              <p className="text-white font-bold text-sm mb-2">Megha Bothe</p>
              <div className="flex justify-center gap-4 text-gray-600">
                <a href="https://www.linkedin.com/in/meghabothe/" className="hover:text-[#94A89A] transition-colors"><FaLinkedin size={18} /></a>
                <a href="mailto:meghabothe@gmail.com" className="hover:text-[#94A89A] transition-colors"><FaEnvelope size={18} /></a>
              </div>
            </div>
            <div className="text-center">
              <p className="text-white font-bold text-sm mb-2">Hemant Bothe</p>
              <div className="flex justify-center gap-4 text-gray-600">
                <a href="https://linkedin.com/in/hemantbothe" className="hover:text-[#94A89A] transition-colors"><FaLinkedin size={18} /></a>
                <a href="mailto:hemantbothe@gmail.com" className="hover:text-[#94A89A] transition-colors"><FaEnvelope size={18} /></a>
              </div>
            </div>
          </div>
          <p className="text-[10px] text-gray-600 uppercase tracking-widest">
            HealthMobilia Intelligence • 2025
          </p>
        </div>
      </div>
    </div>
  );
}