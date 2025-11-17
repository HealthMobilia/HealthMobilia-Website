import { FaArrowRight } from 'react-icons/fa6';
import { FaBuildingColumns, FaHospital, FaBuildingNgo } from 'react-icons/fa6';
import StatCounter from '../components/StatCounter'; 
import heroVisual from "../assets/collaborate/hero.png";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';

export default function Collaborate() {
  
  // Pilot stats
  const pilotStats = [
    {
      value: 576,
      suffix: 'K+',
      label: "Target Population Coverage"
    },
    {
      value: 25,
      suffix: '',
      label: "PHCs Engaged"
    },
    {
      value: 2,
      suffix: '',
      label: "Core Focus Areas"
    }
  ];

  // --- Data for partners ---
  const partners = [
    {
      icon: <FaBuildingColumns className="w-8 h-8" />,
      title: "District Authorities",
      description: "District Health Offices (DHOs) and administrations seeking to leverage data for planning and resource allocation."
    },
    {
      icon: <FaHospital className="w-8 h-8" />,
      title: "Public Health Centres",
      description: "PHCs and their networks who are on the front lines of community health data collection and implementation."
    },
    {
      icon: <FaBuildingNgo className="w-8 h-8" />,
      title: "Health Programs",
      description: "State and national health initiatives focused on NCDs, mental health, or women's health seeking data-driven partners."
    }
  ];

  return (
    <div className="min-h-screen bg-white text-black antialiased" lang="en">
      
      {/* 1. Hero Section */}
      <section className="relative bg-gray-50 flex items-center py-20 sm:py-24 lg:min-h-[70vh] lg:py-0">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          <div className="space-y-8 z-10">
            <div>
              <h2 className="text-base md:text-lg font-semibold text-gray-600 uppercase tracking-wider mb-4">
                Partnerships
              </h2>
              <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold leading-tight text-black">
                <span className="whitespace-nowrap">Collaborate With</span>
                <span className="block mt-2 bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent">
                  HealthMobilia
                </span>
              </h1>
            </div>
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed max-w-xl text-justify hyphens-auto">
              We partner with public health systems to transform data collection, analysis, and preventive care planning.
            </p>
            <div className="h-1 w-24 bg-black"></div>
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

          <div className="relative w-full h-80 lg:h-[450px] hidden md:block">
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

      {/* 2. "Who We Partner With" Section */}
      <section className="bg-gray-50 text-black px-6 py-16 md:py-32 border-y border-gray-200">
        <style>{`
          .partner-slider .swiper-pagination-bullet {
            background-color: #6b7280; /* Muted Grey */
            opacity: 0.7;
          }
          .partner-slider .swiper-pagination-bullet-active {
            background-color: #000000; /* Pure Black */
            opacity: 1;
          }
        `}</style>

        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 max-w-4xl mx-auto">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">Our Ideal Partners</h2>
            <p className="text-lg md:text-xl text-gray-700 text-center">
              Our model is built for collaboration with public health entities dedicated to evidence-based interventions.
            </p>
          </div>

          {/* --- Mobile-Only Slider --- */}
          <div className="md:hidden partner-slider">
            <Swiper
              modules={[Autoplay, Pagination]}
              spaceBetween={30}
              slidesPerView={1}
              loop={true}
              autoplay={{
                delay: 3000,
                disableOnInteraction: false,
              }}
              pagination={{ clickable: true }}
              className="pb-10" 
            >
              {partners.map((partner, index) => (
                <SwiperSlide key={index}>
                  <div className="text-center p-8 bg-white rounded-lg border border-gray-200 shadow-lg h-full">
                    <div className="flex items-center justify-center w-20 h-20 bg-black text-white rounded-full mx-auto mb-6">
                      {partner.icon}
                    </div>
                    <h3 className="text-2xl font-bold mb-2">{partner.title}</h3>
                    <p className="text-base text-gray-600 leading-relaxed text-justify hyphens-auto">
                      {partner.description}
                    </p>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>

          {/* --- Desktop-Only Grid --- */}
          <div className="hidden md:grid grid-cols-1 md:grid-cols-3 gap-8">
            {partners.map((partner, index) => (
              <div key={index} className="text-center p-8 bg-white rounded-lg border border-gray-200 shadow-lg transition-shadow hover:shadow-2xl">
                <div className="flex items-center justify-center w-20 h-20 bg-black text-white rounded-full mx-auto mb-6">
                  {partner.icon}
                </div>
                <h3 className="text-2xl md:text-3xl font-bold mb-2">{partner.title}</h3>
                <p className="text-base md:text-lg text-gray-600 leading-relaxed text-justify hyphens-auto">
                  {partner.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* 3. "Our Pilot Program" Section */}
      <section id="pilot" className="bg-black text-white px-6 py-16 md:py-32">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 max-w-4xl mx-auto">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">Our Flagship Pilot: Washim</h2>
            <p className="text-lg md:text-xl text-gray-400 text-center">Our work in Washim District, Maharashtra, validates our model for strengthening public health intelligence from the ground up.</p>
          </div>

          <div className="flex flex-col md:grid md:grid-cols-3 gap-10 md:gap-8 mb-16">
              {pilotStats.map((stat) => (
                  <div key={stat.label} className="flex flex-row items-center gap-4 md:flex-col md:items-center md:gap-0 md:text-center md:py-4">
                      <p className="text-5xl sm:text-6xl md:text-7xl font-extrabold text-white md:mb-2 w-2/5 md:w-auto text-left sm:text-center">
                        <StatCounter value={stat.value} duration={stat.value > 10 ? 2.5 : 1.5} />
                        {stat.suffix}
                      </p>
                      <p className="text-base md:text-lg font-medium text-gray-400 text-left md:text-center w-3/5 md:w-auto">{stat.label}</p>
                  </div>
              ))}
          </div>

          <div className="max-w-4xl mx-auto bg-gray-900 border border-gray-800 rounded-xl p-6 md:p-10 lg:p-12">
            <div className="text-center">
              <h3 className="text-2xl md:text-3xl font-bold mb-6 text-white">Pilot Focus & Objectives</h3>
              <p className="text-base md:text-lg text-gray-400 leading-relaxed text-justify hyphens-auto">
                In collaboration with the District Health Office (DHO), Washim, this pilot focuses on NCDs (including PCOS) and mental health. Our objectives are to validate field-level data workflows, test data consistency, and build visualization models that can directly inform district and state-level health planning.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* 4. CTA Section */}
      <section className="bg-white text-black px-6 py-16 md:py-24">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
            Let's Start a Conversation
          </h2>
          <p className="text-base md:text-lg text-gray-700 mb-10 max-w-2xl mx-auto">
            Interested in starting a pilot in your district? We're ready to help you build the future of preventive public health.
          </p>
          <a 
            href="mailto:partners@healthmobilia.com" 
            className="inline-flex items-center justify-center bg-black text-white px-8 py-3 text-base font-semibold hover:bg-gray-800 transition-colors rounded-lg"
          >
            Let's Collaborate
            <FaArrowRight className="w-4 h-4 ml-3" />
          </a>
        </div>
      </section>

    </div>
  );
}