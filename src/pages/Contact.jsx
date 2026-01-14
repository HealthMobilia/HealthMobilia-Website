import React from 'react';
import { FaEnvelope, FaPhone, FaLocationDot } from 'react-icons/fa6';

export default function Contact() {
  return (
    <div className="bg-[#050707] text-[#F5F7F7] w-full pt-32 pb-24 px-6 md:px-12 font-sans selection:bg-[#94A89A] selection:text-black min-h-[90vh]">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          
          {/* LEFT COLUMN: Narrative & Details */}
          <div className="space-y-12">
            <section>
              <p className="text-[#94A89A] tracking-[0.3em] uppercase text-[10px] font-bold mb-6 opacity-90">
                Contact Us
              </p>
              <h1 className="font-serif text-5xl md:text-7xl leading-[1.1] mb-8">
                Let's <span className="text-[#94A89A] italic">Connect.</span>
              </h1>
              <p className="text-gray-400 text-lg md:text-xl font-light leading-relaxed max-w-md">
                Whether you are a public health official, a research partner, or an investor, we are here to discuss how we can solve the diagnostic lag together.
              </p>
            </section>

            {/* Contact Details Grid */}
            <div className="space-y-10 border-t border-white/10 pt-12">
              
              {/* Location */}
              <div className="group">
                <h4 className="text-[10px] font-bold uppercase tracking-widest text-gray-600 flex items-center gap-2 mb-3">
                  <FaLocationDot className="text-[#94A89A]" /> Headquarters
                </h4>
                <p className="text-lg font-light leading-relaxed text-gray-200">
                  Shelubazar, Maharashtra,<br />
                  India. PIN 444402
                </p>
              </div>

              {/* Email */}
              <div className="group">
                <h4 className="text-[10px] font-bold uppercase tracking-widest text-gray-600 flex items-center gap-2 mb-3">
                  <FaEnvelope className="text-[#94A89A]" /> Email
                </h4>
                <a href="mailto:contact@healthmobilia.com" className="text-lg font-light text-gray-200 hover:text-[#94A89A] transition-colors border-b border-transparent hover:border-[#94A89A]">
                  contact@healthmobilia.com
                </a>
              </div>

              {/* Phone */}
              <div className="group">
                <h4 className="text-[10px] font-bold uppercase tracking-widest text-gray-600 flex items-center gap-2 mb-3">
                  <FaPhone className="text-[#94A89A]" /> Phone
                </h4>
                <a href="tel:+919657953795" className="text-lg font-light text-gray-200 hover:text-[#94A89A] transition-colors border-b border-transparent hover:border-[#94A89A]">
                  +91 9657 953 795
                </a>
              </div>

            </div>
          </div>

          {/* RIGHT COLUMN: The Map */}
          <div className="h-full min-h-[400px] w-full bg-[#0A0C0C] border border-white/5 rounded-[2rem] overflow-hidden relative grayscale hover:grayscale-0 transition-all duration-700">
             <iframe 
               src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3745.319567964532!2d77.1706689!3d20.4649757!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bd1199341656877%3A0x685519822941323!2sShelu%20Bazar%2C%20Maharashtra%20444402!5e0!3m2!1sen!2sin!4v1708528991490!5m2!1sen!2sin" 
               width="100%" 
               height="100%" 
               style={{ border: 0, filter: 'invert(90%) hue-rotate(180deg)' }} 
               allowFullScreen="" 
               loading="lazy" 
               referrerPolicy="no-referrer-when-downgrade"
               title="HealthMobilia HQ Map"
               className="absolute inset-0 w-full h-full"
             ></iframe>
             
             {/* Map Overlay to ensure text legibility if you add anything on top */}
             <div className="absolute inset-0 pointer-events-none border-[6px] border-[#050707]/50 rounded-[2rem]"></div>
          </div>

        </div>
      </div>
    </div>
  );
}