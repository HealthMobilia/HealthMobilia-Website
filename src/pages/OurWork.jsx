import { 
  FaUsers, 
  FaChartBar, 
  FaNetworkWired, 
  FaMobileAlt, 
  FaCogs,
  FaRegCheckCircle
} from 'react-icons/fa';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';

import StatCounter from '../components/StatCounter'; 
import NishaAppPhoto from "../assets/product/nisha.png";
import HeyMetrricaPhto from "../assets/product/heymetrrica.png";
import heroVisual from "../assets/work/work_hero.png";

export default function OurWork() {
  
  const platforms = [
    {
      name: "NiSha",
      icon: <FaMobileAlt className="w-8 h-8 text-black" />,
      description: "A digital platform designed to simplify community health data capture and trend visualization, beginning with PCOS and mental health indicators.",
      details: [
        "Streamlined field data capture",
        "Community-level trend visualization",
        "Focus on PCOS & Mental Health indicators"
      ],
      image: NishaAppPhoto
    },
    {
      name: "HeyMetrrica",
      icon: <FaCogs className="w-8 h-8 text-black" />,
      description: "A data analytics layer that transforms raw field data into powerful insights for officials, highlighting gaps, correlations, and opportunities for targeted action.",
      details: [
        "Advanced data analytics engine",
        "Highlights correlations and gaps",
        "Actionable insights for policymakers"
      ],
      image: HeyMetrricaPhto
    }
  ];

  const impacts = [
    {
      icon: <FaUsers className="w-10 h-10 text-gray-400" />,
      title: "Community Engagement",
      description: "Working within existing government systems has ensured transparency, adaptability, and faster feedback from the field."
    },
    {
      icon: <FaChartBar className="w-10 h-10 text-gray-400" />,
      title: "Data Visibility",
      description: "Structured data collection has already begun to surface valuable insights about community-level health conditions and reporting gaps."
    },
    {
      icon: <FaNetworkWired className="w-10 h-10 text-gray-400" />,
      title: "Scalable Models",
      description: "Lessons from Washim are shaping scalable, tech-enabled frameworks that can be replicated across other districts."
    }
  ];

  const pilotStats = [
    { value: 576, suffix: 'K+', label: "Target Total Population" },
    { value: 25, suffix: '', label: "PHCs Engaged" },
    { value: 2, suffix: '', label: "Core Focus Areas" }
  ];

  return (
    <div className="min-h-screen bg-white text-black antialiased" lang="en">

      {/* Hero Section */}
      <section className="relative bg-gray-50 flex items-center py-20 sm:py-24 lg:min-h-[70vh] lg:py-0">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          <div className="space-y-8 z-10">
            <div>
              <h2 className="text-base md:text-lg font-semibold text-gray-600 uppercase tracking-wider mb-4">
                Making Data Work
              </h2>
              <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold leading-tight text-black">
                <span className="whitespace-nowrap">Our Work in</span>
                <span className="block mt-2 whitespace-nowrap">
                  Public Health
                </span>
              </h1>
            </div>
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed max-w-xl text-justify hyphens-auto">
              We build data intelligence systems that transform how public health operates—moving from reactive treatment to proactive, data-driven prevention.
            </p>
            <div className="h-1 w-24 bg-black"></div>
          </div>

          <div className="relative w-full h-80 md:h-[450px] hidden md:block">
            <div className="absolute inset-0 bg-gray-200 rounded-lg shadow-2xl overflow-hidden">
              <img
                src={heroVisual} 
                alt="Greyscale visual of Maharashtra"
                className="w-full h-full object-cover opacity-50"
                loading="lazy"
              />
              <div className="absolute inset-0 rounded-lg border-2 border-gray-300"></div>
            </div>
          </div>
        </div>
      </section>

      {/* The Challenge Section */}
      <section className="bg-black text-white px-6 py-16 md:py-24">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-base font-semibold text-gray-400 uppercase tracking-wider mb-4">
            The Challenge
          </h2>
          <p className="text-2xl sm:text-3xl md:text-4xl font-bold leading-tight text-center">
            Local health data is often collected but rarely used to guide early, preventive action. We exist to close that gap.
          </p>
        </div>
      </section>

      {/* Our Solution - Platform Showcase */}
      <section className="px-6 py-16 md:py-32 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">Our Solution</h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto text-center">
              We developed a two-part system to connect field data with high-level decision-making.
            </p>
          </div>
          
          <div className="space-y-16 md:space-y-20">
            {platforms.map((platform, index) => (
              <div 
                key={platform.name}
                className="flex flex-col lg:grid lg:grid-cols-2 gap-10 md:gap-12 lg:items-center"
              >
                {/* TEXT SIDE */}
                <div className={`space-y-6 order-1 ${index % 2 === 1 ? 'lg:order-2' : 'lg:order-1'}`}>
                  <div className="flex items-center space-x-4">
                    <div className="p-3 bg-gray-100 rounded-full">
                      {platform.icon}
                    </div>
                    <h3 className="text-2xl sm:text-3xl font-bold">{platform.name}</h3>
                  </div>

                  {/* --- MOBILE IMAGE APPEARS HERE BELOW THE TITLE --- */}
                  <div className="relative w-full aspect-video rounded-lg shadow-2xl overflow-hidden border border-gray-200 block lg:hidden">
                    <img
                      src={platform.image}
                      alt={`${platform.name} UI Mockup`}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  </div>

                  <p className="text-base md:text-lg text-gray-700 leading-relaxed text-justify hyphens-auto">
                    {platform.description}
                  </p>
                  <ul className="space-y-2">
                    {platform.details.map((detail, i) => (
                      <li key={i} className="flex items-center text-base text-gray-600">
                        <FaRegCheckCircle className="w-4 h-4 text-black mr-3 flex-shrink-0" />
                        {detail}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* DESKTOP IMAGE SIDE */}
                <div 
                  className={`relative w-full aspect-video rounded-lg shadow-2xl overflow-hidden border border-gray-200 mt-6 lg:mt-0 hidden lg:block
                              ${index % 2 === 1 ? 'lg:order-1' : 'lg:order-2'}`}
                >
                  <img
                    src={platform.image}
                    alt={`${platform.name} UI Mockup`}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* The Pilot - Washim District */}
      <section className="bg-gray-50 px-6 py-16 md:py-32">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
            
            <div className="lg:col-span-1 space-y-6">
              <div className="border-l-4 border-black pl-6 md:pl-8">
                <h2 className="text-2xl sm:text-3xl font-bold">Pilot: Washim District</h2>
              </div>
              <p className="text-base md:text-lg text-gray-700 leading-relaxed text-justify hyphens-auto">
                Our pilot in Washim, Maharashtra, engages existing government health networks to build a foundation for better public health intelligence.
              </p>
              <p className="text-base md:text-lg text-gray-700 leading-relaxed text-justify hyphens-auto">
                The focus is on NCDs, PCOS, and mental health, demonstrating how early data trends can inform vital prevention strategies.
              </p>
            </div>
            
            <div className="lg:col-span-2 flex flex-col sm:grid sm:grid-cols-3 gap-8">
              {pilotStats.map((stat) => (
                <div key={stat.label} className="bg-white p-6 md:p-8 rounded-lg shadow-lg border border-gray-200 flex flex-row sm:flex-col items-center sm:items-start gap-4 sm:gap-0">
                  <p className="text-4xl sm:text-5xl font-bold text-black sm:mb-2 flex-shrink-0 text-left sm:text-left">
                    <StatCounter value={stat.value} duration={2} />
                    {stat.suffix}
                  </p>
                  <p className="text-base md:text-lg font-medium text-gray-600 text-left sm:text-left">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      
      {/* Early Learnings & Impact Section */}
      <section className="bg-black text-white px-6 py-16 md:py-32">
        <style>{`
          .swiper-pagination-bullet {
            background-color: #6b7280;
            opacity: 0.7;
          }
          .swiper-pagination-bullet-active {
            background-color: #ffffff;
            opacity: 1;
          }
        `}</style>

        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-16 text-center">
            Early Impact & Learnings
          </h2>
          
          <div className="md:hidden">
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
              {impacts.map((item, index) => (
                <SwiperSlide key={index}>
                  <div className="bg-gray-900 p-8 rounded-lg border border-gray-700 h-full">
                    <div className="mb-6">
                      {item.icon}
                    </div>
                    <h3 className="text-xl font-bold mb-4">{item.title}</h3>
                    <p className="text-base text-gray-300 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>

          <div className="hidden md:grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {impacts.map((item) => (
              <div
                key={item.title}
                className="bg-gray-900 p-8 rounded-lg border border-gray-700 transition-all duration-300 hover:border-white hover:-translate-y-2"
              >
                <div className="mb-6">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold mb-4">{item.title}</h3>
                <p className="text-base text-gray-300 leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Guiding Philosophy */}
      <section className="bg-white px-6 py-20 md:py-32">
        <div className="max-w-4xl mx-auto text-center">
          <blockquote className="text-gray-800 italic text-xl sm:text-2xl md:text-3xl leading-relaxed mb-6 relative">
            <span className="absolute -top-6 left-1/2 transform -translate-x-1/2 text-8xl font-serif text-gray-200 opacity-70">"</span>
            <p className="relative z-10">
              The true value of data is not in its collection, but in its <strong>capacity to inform action</strong> transforming hindsight into foresight.
            </p>
          </blockquote>
          <p className="text-base md:text-lg font-semibold text-black mt-10">
            — Our Guiding Philosophy
          </p>
        </div>
      </section>

    </div>
  );
}
