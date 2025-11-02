import { FaArrowRight, FaGlobe } from 'react-icons/fa6'; 
import { FaMapMarkerAlt, FaEnvelope, FaPhone, FaClock } from 'react-icons/fa'; 
import contactVisual from '../assets/contact/hero.png'; 

export default function Contact() {

  return (
    <div className="min-h-screen bg-white text-black antialiased">
      
      {/* Hero Section */}
      <section className="relative min-h-[70vh] bg-gray-50 flex items-center">
        <div className="max-w-7xl mx-auto px-6 py-20 lg:py-0 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Side: Text Content */}
          <div className="space-y-8 z-10">
            <div>
              <h2 className="text-base md:text-lg font-semibold text-gray-600 uppercase tracking-wider mb-4">
                Contact Us
              </h2>
              <h1 className="text-5xl md:text-7xl font-bold leading-tight text-black">
                <span className="whitespace-nowrap">Let's</span>
                <span className="block mt-2 bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent">
                  Connect
                </span>
              </h1>
            </div>
            <p className="text-xl text-gray-700 leading-relaxed max-w-xl">
              Whether you're a public health official, a potential partner, or just have a question, we're here to talk.
            </p>
            <div className="h-1 w-24 bg-black"></div>
          </div>

          {/* Right Side: Visual Element */}
          <div className="relative w-full h-80 lg:h-[450px]">
            <div className="absolute inset-0 bg-gray-200 rounded-lg shadow-2xl overflow-hidden">
              <img
                src={contactVisual} 
                alt="Greyscale collaboration visual"
                className="w-full h-full object-cover opacity-50"
                loading="lazy"
              />
               <div className="absolute inset-0 rounded-lg border-2 border-gray-300"></div>
            </div>
            <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-white border-8 border-gray-50 rounded-full z-20"></div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="bg-white text-black px-6 py-24 md:py-32">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            
            {/* Left Column: Info Boxes */}
            <div className="space-y-8">
              
              {/* Contact Details Box */}
              <div className="bg-gray-50 p-8 rounded-lg shadow-lg border border-gray-200">
                <h3 className="text-3xl font-bold mb-6">Contact Details</h3>
                
                <div className="flex items-start gap-4 mb-5">
                  <FaMapMarkerAlt className="w-5 h-5 text-black mt-1 flex-shrink-0" />
                  <div>
                    <p className="text-lg font-medium text-gray-900">Address</p>
                    <p className="text-lg text-gray-600">
                      Shelubazar, Maharashtra<br />
                      PIN Code 444402
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 mb-5">
                  <FaEnvelope className="w-5 h-5 text-black mt-1 flex-shrink-0" />
                  <div>
                    <p className="text-lg font-medium text-gray-900">Email</p>
                    <a href="mailto:contact@healthmobilia.com" className="text-lg text-gray-600 hover:text-black">
                      contact@healthmobilia.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4 mb-5">
                  <FaPhone className="w-5 h-5 text-black mt-1 flex-shrink-0" />
                  <div>
                    <p className="text-lg font-medium text-gray-900">Phone</p>
                    <a href="tel:+919657953795" className="text-lg text-gray-600 hover:text-black">
                      +91 9657953795
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4 pt-5 border-t border-gray-200 mt-5">
                  <FaClock className="w-5 h-5 text-black mt-1 flex-shrink-0" />
                  <div>
                    <p className="text-lg font-medium text-gray-900">Office Hours</p>
                    <p className="text-lg text-gray-600">
                      Mon - Fri, 9:00 AM - 6:00 PM IST
                    </p>
                  </div>
                </div>
              </div>

            </div>

            {/* Right Column: Map */}
            <div>
              <div className="rounded-lg shadow-lg overflow-hidden border border-gray-200">
                <iframe
                  title="Washim District map"
                  src="https://www.google.com/maps?q=Shelu+Bazar+Maharashtra&output=embed"
                  className="w-full h-96 border-0 filter grayscale"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
              <div className="mt-6">
                <p className="text-lg text-gray-600">
                  For all inquiries, please email us at <a href="mailto:contact@healthmobilia.com" className="font-medium text-black hover:text-gray-700">contact@healthmobilia.com</a>
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>
      

    </div>
  );
}