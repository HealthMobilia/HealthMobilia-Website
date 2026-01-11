import { FaLinkedin, FaEnvelope, FaPhone, FaLocationDot } from 'react-icons/fa6';

export default function Contact() {
  return (
    <div className="bg-[#050707] text-[#F5F7F7] min-h-screen pt-40 pb-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          
          {/* Narrative & Info */}
          <div className="space-y-16">
            <section>
              <p className="text-[#94A89A] tracking-[0.4em] uppercase text-[10px] font-bold mb-6 opacity-80">Contact</p>
              <h1 className="font-serif text-5xl md:text-7xl leading-tight mb-8">Let's <span className="text-[#94A89A] italic">Connect.</span></h1>
              <p className="text-gray-500 text-lg md:text-xl font-light leading-relaxed">
                Whether you are a public health official, a potential partner, or an investor, we are here to discuss how we can solve the diagnostic lag together.
              </p>
            </section>

            {/* Direct Details (Kept Original as requested) */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 border-t border-white/5 pt-16">
              <div className="space-y-4">
                <h4 className="text-[10px] font-bold uppercase tracking-widest text-gray-600 flex items-center gap-2">
                  <FaLocationDot className="text-[#94A89A]" /> Headquarters
                </h4>
                <p className="text-sm font-light leading-relaxed text-gray-400">
                  Shelubazar, Maharashtra,<br />
                  India. PIN 444402
                </p>
              </div>
              <div className="space-y-4">
                <h4 className="text-[10px] font-bold uppercase tracking-widest text-gray-600 flex items-center gap-2">
                  <FaEnvelope className="text-[#94A89A]" /> Email
                </h4>
                <a href="mailto:contact@healthmobilia.com" className="text-sm font-light text-gray-400 hover:text-[#94A89A]">
                  contact@healthmobilia.com
                </a>
              </div>
              <div className="space-y-4">
                <h4 className="text-[10px] font-bold uppercase tracking-widest text-gray-600 flex items-center gap-2">
                  <FaPhone className="text-[#94A89A]" /> Phone
                </h4>
                <a href="tel:+919657953795" className="text-sm font-light text-gray-400 hover:text-[#94A89A]">
                  +91 9657953795
                </a>
              </div>
            </div>
          </div>

          {/* Optional: Simple Inquiry Form Placeholder or an Image */}
          <div className="bg-[#0A0C0C] border border-white/5 rounded-[3rem] p-12 flex items-center justify-center">
             <p className="text-gray-700 text-sm font-serif italic uppercase tracking-widest">HealthMobilia Intelligence Network</p>
          </div>

        </div>
      </div>
    </div>
  );
}