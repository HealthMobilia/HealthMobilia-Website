import InstagramIcon from "./Icons/Instagram";
import XIcon from "./Icons/X";

export default function Footer() {
  return (
    <footer className="bg-black text-white">
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="lg:col-span-2 space-y-6">
            <div>
              <h3 className="text-2xl font-bold mb-4">HealthMobilia</h3>
              <p className="text-gray-300 text-lg leading-relaxed max-w-md">
                HealthMobilia is transforming public health through data intelligence and analytics building a sustainable, data-driven ecosystem that supports preventive and community-based care.
              </p>
            </div>
            {/* <div className="pt-4">
              <p className="text-sm text-gray-400 mb-2">Partnership & Collaborations</p>
              <div className="flex space-x-4">
                <div className="bg-gray-800 px-3 py-1 text-xs font-medium">25+ PHC</div>
                <div className="bg-gray-800 px-3 py-1 text-xs font-medium">6+ Taluka</div>
              </div>
            </div> */}
          </div>

          {/* Focus Areas */}
          <div className="space-y-6">
            <h4 className="text-lg font-semibold text-white">Focus Areas</h4>
            <ul className="space-y-3">
              <li><a href="/pcos" className="text-gray-300 hover:text-white transition-colors text-sm font-medium">PCOS</a></li>
              <li><a href="/mental-health" className="text-gray-300 hover:text-white transition-colors text-sm font-medium">Mental Health</a></li>
              <li><a href="/ncds" className="text-gray-300 hover:text-white transition-colors text-sm font-medium">NCDs</a></li>
            </ul>
          </div>

          {/* Company */}
          <div className="space-y-6">
            <h4 className="text-lg font-semibold text-white">Company</h4>
            <ul className="space-y-3">
              <li><a href="/about" className="text-gray-300 hover:text-white transition-colors text-sm font-medium">About Us</a></li>
              <li><a href="/team" className="text-gray-300 hover:text-white transition-colors text-sm font-medium">Our Work</a></li>
              <li><a href="/careers" className="text-gray-300 hover:text-white transition-colors text-sm font-medium">Pilot & Collaborations</a></li>
              <li><a href="/news" className="text-gray-300 hover:text-white transition-colors text-sm font-medium">Contact</a></li>
            </ul>
          </div>
        </div>

        {/* Contact & Social Section */}
        <div className="border-t border-gray-800 mt-16 pt-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div className="space-y-6">
              <h4 className="text-lg font-semibold text-white">Get in Touch</h4>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-9 h-9 rounded-full bg-gray-800 flex-shrink-0 flex items-center justify-center">
                    <svg className="w-4 h-4 text-white" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
                      <path d="M3 8.5C3 7.671 3.671 7 4.5 7h15c.829 0 1.5.671 1.5 1.5v7c0 .829-.671 1.5-1.5 1.5h-15A1.5 1.5 0 013 15.5v-7z" stroke="currentColor" strokeWidth="0" fill="currentColor" />
                      <path d="M4 8l8 5 8-5" stroke="currentColor" strokeWidth="0" fill="currentColor" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-gray-300 text-sm font-medium">Email</p>
                    <a href="mailto:contact@healthtech-analytics.com" className="text-white hover:text-gray-300 transition-colors">
                      contact@healthmobilia.com
                    </a>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-9 h-9 rounded-full bg-gray-800 flex-shrink-0 flex items-center justify-center">
                    <svg className="w-4 h-4 text-white" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
                      <path d="M21 15.46a16.88 16.88 0 01-3.7.99c-.99.14-1.28-.43-2.7-1.27-1.42-.84-2.32-.86-3.31-.68-1 .18-1.92.67-2.68 1.16-.76.49-1.45.35-2.44.21A16.88 16.88 0 013 6.99C3 6.52 3.17 6 3.67 6c.83 0 2.21.56 3.12 1.05.91.5 1.74.3 2.5-.19.76-.49 1.34-1.33 2.04-1.76.7-.43 1.82-.19 2.51.06.69.25 1.6.1 2.05-.21.45-.31 1.09-.9 1.64-1.24.55-.34 1.45-.18 1.85.21.4.39.46 1.19.46 1.85 0 .66-.09 1.74-.21 2.49-.12.75.06 1.44.46 1.82.4.38 1.06 1.03 1.66 1.36.6.33.9.97.9 1.52 0 .55-.18 1.12-.42 1.53l-.01.01z" fill="currentColor" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-gray-300 text-sm font-medium">Phone</p>
                    <a href="tel:+1-555-123-4567" className="text-white hover:text-gray-300 transition-colors">
                      +91 9657953795
                    </a>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-9 h-9 rounded-full bg-gray-800 flex-shrink-0 flex items-center justify-center">
                    <svg className="w-4 h-4 text-white" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
                      <path d="M12 2C8 2 5 5.03 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.97-3-7-7-7zm0 9.5a2.5 2.5 0 110-5 2.5 2.5 0 010 5z" fill="currentColor" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-gray-300 text-sm font-medium">Location</p>
                    <p className="text-white">Shelubazar, Maharashtra, India</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Newsletter & Social */}
            <div className="space-y-6">
              <div>
                <h4 className="text-lg font-semibold text-white mb-4">Our Impact</h4>
                <p className="text-gray-300 text-sm mb-4">Making a difference in public health through data-driven insights and preventive care initiatives.</p>
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-gray-800 p-3 rounded">
                    <p className="text-white text-lg font-bold">25+</p>
                    <p className="text-gray-400 text-xs">Primary Health Center</p>
                  </div>
                  <div className="bg-gray-800 p-3 rounded">
                    <p className="text-white text-lg font-bold">1.1M+</p>
                    <p className="text-gray-400 text-xs">Population</p>
                  </div>
                </div>
              </div>

              <div>
                <h4 className="text-lg font-semibold text-white mb-4">Follow Us</h4>
                <div className="flex space-x-4">
                  <a href="https://www.linkedin.com/company/healthmobilia/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 border border-gray-600 flex items-center justify-center hover:border-white hover:bg-white hover:text-black transition-colors">
                    <span className="sr-only">LinkedIn</span>
                    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                    </svg>
                  </a>
                  <a href="https://www.instagram.com/healthmobilia/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 border border-gray-600 flex items-center justify-center hover:border-white hover:bg-white hover:text-black transition-colors">
                    <span className="sr-only">Instagram</span>
                    <InstagramIcon className="h-5 w-5" />
                  </a>
                  <a href="https://x.com/healthmobilia" target="_blank" rel="noopener noreferrer" className="w-10 h-10 border border-gray-600 flex items-center justify-center hover:border-white hover:bg-white hover:text-black transition-colors">
                    <span className="sr-only">X</span>
                    <XIcon className="h-5 w-5" />
                  </a>
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
              <a href="/privacy" className="text-gray-400 hover:text-white transition-colors">Privacy Policy</a>
              <a href="/terms" className="text-gray-400 hover:text-white transition-colors">Terms of Service</a>
              <a href="/security" className="text-gray-400 hover:text-white transition-colors">Security</a>
              <a href="/compliance" className="text-gray-400 hover:text-white transition-colors">Compliance</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}