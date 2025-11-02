import { FaArrowRight } from 'react-icons/fa6';
import { FaBuildingColumns, FaHospital, FaBuildingNgo } from 'react-icons/fa6';
import StatCounter from '../components/StatCounter'; 
import heroVisual from "../assets/collaborate/hero.png";

export default function Collaborate() {
  
  // Pilot stats
  const pilotStats = [
    {
      value: 11,
      suffix: ' Lakh+',
      label: "Population Coverage"
    },
    {
      value: 25,
      suffix: '+',
      label: "PHCs Engaged"
    },
    {
      value: 3,
      suffix: '',
      label: "Core Focus Areas"
    }
  ];

  return (
    <div className="min-h-screen bg-white text-black antialiased">
      
      {/* Hero Section */}
      <section className="relative min-h-[70vh] bg-gray-50 flex items-center">
        <div className="max-w-7xl mx-auto px-6 py-20 lg:py-0 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Side: Text Content */}
          <div className="space-y-8 z-10">
            <div>
              <h2 className="text-base md:text-lg font-semibold text-gray-600 uppercase tracking-wider mb-4">
                Partnerships
              </h2>
              <h1 className="text-5xl md:text-7xl font-bold leading-tight text-black">
                <span className="whitespace-nowrap">Collaborate With</span>
                <span className="block mt-2 bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent">
                  HealthMobilia
                </span>
              </h1>
            </div>
            <p className="text-xl text-gray-700 leading-relaxed max-w-xl">
              We partner with public health systems to transform data collection, analysis, and preventive care planning.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href="mailto:partners@healthmobilia.com" 
                className="inline-flex items-center justify-center bg-black text-white px-6 py-3 text-base font-semibold hover:bg-gray-800 transition-colors rounded-lg"
              >
                Start the Conversation
                <FaArrowRight className="w-4 h-4 ml-3" />
              </a>
              <a 
                href="#pilot" 
                className="inline-flex items-center justify-center border-2 border-black text-black px-6 py-3 text-base font-semibold hover:bg-black hover:text-white transition-colors rounded-lg"
              >
                See Our Pilot
              </a>
            </div>
          </div>

          {/* Right Side: Visual Element */}
          <div className="relative w-full h-80 lg:h-[450px]">
            <div className="absolute inset-0 bg-gray-200 rounded-lg shadow-2xl overflow-hidden">
              <img
                src={heroVisual}
                alt="Greyscale visual of a team or data network"
                className="w-full h-full object-cover opacity-50"
                loading="lazy"
              />
               <div className="absolute inset-0 rounded-lg border-2 border-gray-300"></div>
            </div>
            <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-white border-8 border-gray-50 rounded-full z-20"></div>
          </div>
        </div>
      </section>

      {/* "Who We Partner With" Section */}
      <section className="bg-gray-50 text-black px-6 py-24 md:py-32 border-y border-gray-200">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 max-w-4xl mx-auto">
            <h2 className="text-5xl md:text-6xl font-bold mb-4">Our Ideal Partners</h2>
            <p className="text-xl text-gray-700">
              Our model is built for collaboration with public health entities dedicated to evidence-based interventions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            {/* Partner 1: Government */}
            <div className="text-center p-8 bg-white rounded-lg border border-gray-200 shadow-lg transition-shadow hover:shadow-2xl">
              <div className="flex items-center justify-center w-20 h-20 bg-black text-white rounded-full mx-auto mb-6">
                <FaBuildingColumns className="w-8 h-8" />
              </div>
              <h3 className="text-3xl font-bold mb-2">District Authorities</h3>
              <p className="text-lg text-gray-600 leading-relaxed">District Health Offices (DHOs) and administrations seeking to leverage data for planning and resource allocation.</p>
            </div>

            {/* Partner 2: Health Systems */}
            <div className="text-center p-8 bg-white rounded-lg border border-gray-200 shadow-lg transition-shadow hover:shadow-2xl">
              <div className="flex items-center justify-center w-20 h-20 bg-black text-white rounded-full mx-auto mb-6">
                <FaHospital className="w-8 h-8" />
              </div>
              <h3 className="text-3xl font-bold mb-2">Public Health Centres</h3>
              <p className="text-lg text-gray-600 leading-relaxed">PHCs and their networks who are on the front lines of community health data collection and implementation.</p>
            </div>

            {/* Partner 3: Gov. Programs */}
            <div className="text-center p-8 bg-white rounded-lg border border-gray-200 shadow-lg transition-shadow hover:shadow-2xl">
              <div className="flex items-center justify-center w-20 h-20 bg-black text-white rounded-full mx-auto mb-6">
                <FaBuildingNgo className="w-8 h-8" />
              </div>
              <h3 className="text-3xl font-bold mb-2">Health Programs</h3>
              <p className="text-lg text-gray-600 leading-relaxed">State and national health initiatives focused on NCDs, mental health, or women's health seeking data-driven partners.</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* "Our Pilot Program" Section */}
      <section id="pilot" className="bg-black text-white px-6 py-24 md:py-32">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 max-w-4xl mx-auto">
            <h2 className="text-5xl md:text-6xl font-bold mb-4">Our Flagship Pilot: Washim</h2>
            <p className="text-xl text-gray-400">Our work in Washim District, Maharashtra, validates our model for strengthening public health intelligence from the ground up.</p>
          </div>

          {/* Pilot Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center mb-16">
              {pilotStats.map((stat) => (
                  <div key={stat.label} className="py-4">
                      <p className="text-7xl font-extrabold text-white mb-2">
                        <StatCounter value={stat.value} duration={stat.value > 10 ? 2.5 : 1.5} />
                        {stat.suffix}
                      </p>
                      <p className="text-lg font-medium text-gray-400">{stat.label}</p>
                  </div>
              ))}
          </div>

          <div className="max-w-4xl mx-auto bg-gray-900 border border-gray-800 rounded-xl p-10 lg:p-12">
            <div className="text-center">
              <h3 className="text-3xl font-bold mb-6 text-white">Pilot Focus & Objectives</h3>
              <p className="text-lg text-gray-400 leading-relaxed">
                In collaboration with the District Health Office (DHO), Washim, this pilot focuses on NCDs (including PCOS) and mental health. Our objectives are to validate field-level data workflows, test data consistency, and build visualization models that can directly inform district and state-level health planning.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-white text-black px-6 py-20 md:py-24">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Let's Start a Conversation
          </h2>
          <p className="text-lg text-gray-700 mb-10 max-w-2xl mx-auto">
            Interested in starting a pilot in your district? We're ready to help you build the future of preventive public health.
          </p>
          <a 
            href="mailto:partners@healthmobilia.com" 
            className="inline-flex items-center justify-center bg-black text-white px-8 py-3 text-base font-semibold hover:bg-gray-800 transition-colors rounded-lg"
          >
            Email Us: partners@healthmobilia.com
            <FaArrowRight className="w-4 h-4 ml-3" />
          </a>
        </div>
      </section>

    </div>
  );
}