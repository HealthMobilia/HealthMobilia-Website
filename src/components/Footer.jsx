import { FaXTwitter, FaLinkedin, FaFacebookF, FaInstagram, FaYoutube, FaArrowRight } from 'react-icons/fa6'; 
import { FaMapMarkerAlt, FaEnvelope, FaPhone } from 'react-icons/fa'; 

export default function Footer() {
  
  // Navigation Links should match your site structure
  const companyLinks = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Our Work", href: "/work" },
    { name: "Pilot & Collaborations", href: "/collaborate" },
    { name: "Contact", href: "/contact" },
  ];

  // Focus Links 
  const focusLinks = [
    { name: "PCOS", href: "#" },
    { name: "Mental Health", href: "#" },
    { name: "NCDs", href: "#" },
  ];

  // Social Links 
  const socialLinks = [
    { name: "LinkedIn", icon: FaLinkedin, href: "https://www.linkedin.com/company/healthmobilia/" },
    { name: "X (Twitter)", icon: FaXTwitter, href: "https://x.com/healthmobilia" },
    { name: "Instagram", icon: FaInstagram, href: "https://www.instagram.com/healthmobilia/" },
    { name: "Facebook", icon: FaFacebookF, href: "https://www.facebook.com/healthmobilia" },
    { name: "YouTube", icon: FaYoutube, href: "https://www.youtube.com/@healthmobilia" },
  ];

  return (
    <footer className="bg-black text-white">
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          
          {/* Company Info */}
          <div className="lg:col-span-2 space-y-6">
            <div>
              <h3 className="text-2xl font-bold mb-4">HealthMobilia</h3>
              <p className="text-gray-300 text-lg leading-relaxed max-w-md">
                HealthMobilia is transforming public health through data intelligence and analytics, building an ecosystem that supports proactive, preventive care.
              </p>
            </div>

            {/* Partnership & Collaborations Stats */}
            <div className="pt-4">
              <p className="text-sm text-gray-400 mb-2">Partnership & Collaborations</p>
              <div className="flex space-x-4">
                <div className="bg-gray-800 px-3 py-1 text-xs font-medium">25+ PHC</div>
                <div className="bg-gray-800 px-3 py-1 text-xs font-medium">6+ Taluka</div>
              </div>
            </div>
          </div>

          {/* Focus Areas */}
          <div className="space-y-6">
            <h4 className="text-lg font-semibold text-white">Focus Areas</h4>
            <ul className="space-y-3">
              {focusLinks.map(link => (
                <li key={link.name}>
                  <span className="text-gray-400 text-sm font-medium">
                    {link.name}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h4 className="text-lg font-semibold text-white">Quick Links</h4>
            <ul className="space-y-3">
              {companyLinks.map(link => (
                <li key={link.name}>
                  <a href={link.href} className="text-gray-400 hover:text-white transition-colors text-sm font-medium">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* --- Contact & Social Section --- */}
        <div className="border-t border-gray-800 mt-16 pt-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            
            {/* Left Side: Contact Info */}
             <div className="space-y-6">
              <h4 className="text-lg font-semibold text-white">Get in Touch</h4>
                 <div className="space-y-4">
    <div className="flex items-start space-x-3">
      <div className="w-9 h-9 rounded-full bg-gray-800 flex-shrink-0 flex items-center justify-center">
        <FaEnvelope className="w-4 h-4 text-white" />
      </div>
      <div>
        <p className="text-gray-300 text-sm font-medium">Email</p>
        <a href="mailto:contact@healthmobilia.com" className="text-white hover:text-gray-300 transition-colors">
          contact@healthmobilia.com
        </a>
      </div>
    </div>
    <div className="flex items-start space-x-3">
      <div className="w-9 h-9 rounded-full bg-gray-800 flex-shrink-0 flex items-center justify-center">
        <FaPhone className="w-4 h-4 text-white" />
      </div>
      <div>
        <p className="text-gray-300 text-sm font-medium">Phone</p>
        <a href="tel:+919657953795" className="text-white hover:text-gray-300 transition-colors">
          +91 9657953795
        </a>
      </div>
    </div>
    <div className="flex items-start space-x-3">
      <div className="w-9 h-9 rounded-full bg-gray-800 flex-shrink-0 flex items-center justify-center">
        <FaMapMarkerAlt className="w-4 h-4 text-white" />
      </div>
      <div>
        <p className="text-gray-300 text-sm font-medium">Location</p>
        <p className="text-white">Shelubazar, Maharashtra, India</p>
      </div>
    </div>
  </div>
  
</div>

            {/* Right Side: Partnership & Social */}
            <div className="space-y-6"> 
              {/* Start a Partnership */}
              <div className="pb-6">
                <h4 className="text-lg font-semibold text-white mb-3">Start a Partnership</h4>
                <p className="text-gray-400 text-sm mb-4">
                  We are actively seeking collaborations with public health organizations.
                </p>
                <a 
                  href="/collaborate" 
                  className="inline-flex items-center px-4 py-2 border border-gray-600 text-sm font-semibold text-white 
                             hover:border-white hover:bg-white hover:text-black transition-colors rounded-sm" 
                >
                  Learn More About Partnering
                  <FaArrowRight className="w-3 h-3 ml-2" />
                </a>
              </div>

              {/* Follow Us */}
              <div className="border-t border-gray-800 pt-6"> 
                <h4 className="text-lg font-semibold text-white mb-4">Follow Our Insights</h4>
                <div className="flex space-x-4">
                  {socialLinks.map(social => (
                    <a 
                      key={social.name}
                      href={social.href} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="w-10 h-10 border border-gray-600 flex items-center justify-center rounded-full hover:border-white hover:bg-white hover:text-black transition-colors"
                      aria-label={social.name}
                    >
                      <social.icon className="h-5 w-5" />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Copyright */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm">
              © {new Date().getFullYear()} HealthMobilia. All rights reserved.
            </p>
            <div className="flex flex-wrap gap-6 text-sm">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">Terms of Service</a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">Security</a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">Compliance</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}