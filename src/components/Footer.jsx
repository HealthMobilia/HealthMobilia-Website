import { NavLink } from "react-router-dom";
import { 
  FaXTwitter, 
  FaLinkedin, 
  FaFacebookF, 
  FaInstagram, 
  FaYoutube, 
  FaArrowRight, 
  FaEnvelope, 
  FaPhone, 
  FaLocationDot // Changed from FaMapMarkerAlt
} from 'react-icons/fa6'; 

export default function Footer() {
  const companyLinks = [
    { name: "Home", href: "/" },
    { name: "The Genesis", href: "/genesis" },
    { name: "Intelligence", href: "/intelligence" },
    { name: "Partnerships", href: "/collaborate" },
    { name: "Contact", href: "/contact" },
  ];

  const focusLinks = [
    { name: "PCOS Detection", href: "/intelligence" },
    { name: "Metabolic Health", href: "/intelligence" },
    { name: "Reproductive Vitals", href: "/genesis" },
  ];

  const socialLinks = [
    { name: "LinkedIn", icon: FaLinkedin, href: "https://www.linkedin.com/company/healthmobilia/" },
    { name: "X (Twitter)", icon: FaXTwitter, href: "https://x.com/healthmobilia" },
    { name: "Instagram", icon: FaInstagram, href: "https://www.instagram.com/healthmobilia/" },
    { name: "Facebook", icon: FaFacebookF, href: "https://www.facebook.com/share/18psSbpDCH/" },
    { name: "YouTube", icon: FaYoutube, href: "https://www.youtube.com/@healthmobilia" },
  ];

  return (
    <footer className="bg-[#050707] text-[#F5F7F7] border-t border-white/5 py-20 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-20">
          
          {/* Brand Column */}
          <div className="lg:col-span-2 space-y-8">
            <div>
              <h3 className="text-2xl font-bold tracking-tighter mb-6">
                HEALTH<span className="text-[#94A89A] italic">MOBILIA</span>
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed max-w-sm font-light">
                Engineering the biological intelligence infrastructure for the missing decade of reproductive health. Transforming public health through data integrity and proactive care.
              </p>
            </div>
            
            {/* Social Links */}
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <a 
                  key={social.name}
                  href={social.href} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-10 h-10 border border-white/5 flex items-center justify-center rounded-full text-gray-500 hover:border-[#94A89A] hover:text-[#94A89A] transition-all duration-300"
                  aria-label={social.name}
                >
                  <social.icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Focus Areas Column */}
          <div>
            <h4 className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#94A89A] mb-8">Focus Areas</h4>
            <ul className="space-y-4">
              {focusLinks.map(link => (
                <li key={link.name}>
                  <NavLink to={link.href} className="text-gray-500 hover:text-[#F5F7F7] transition-colors text-xs font-medium uppercase tracking-widest">
                    {link.name}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links Column */}
          <div>
            <h4 className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#94A89A] mb-8">Navigation</h4>
            <ul className="space-y-4">
              {companyLinks.map(link => (
                <li key={link.name}>
                  <NavLink to={link.href} className="text-gray-500 hover:text-[#F5F7F7] transition-colors text-xs font-medium uppercase tracking-widest">
                    {link.name}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>
        </div>

       

        {/* Legal & Bottom Bar */}
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-[10px] text-gray-600 uppercase tracking-widest">
            © {new Date().getFullYear()} HealthMobilia Private Limited. All rights reserved.
          </p>
          <div className="flex flex-wrap gap-8 text-[10px] font-bold uppercase tracking-widest text-gray-600">
            <NavLink to="/privacy-policy" className="hover:text-[#94A89A] transition-colors">Privacy Policy</NavLink>
            <NavLink to="/terms-of-service" className="hover:text-[#94A89A] transition-colors">Terms of Service</NavLink>
            {/* <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#94A89A] animate-pulse"></span>
              <span className="text-[#94A89A]">Stealth R&D Phase</span>
            </div> */}
          </div>
        </div>
      </div>
    </footer>
  );
}