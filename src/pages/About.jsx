import { useState } from 'react';
import { FaLinkedin, FaXTwitter } from 'react-icons/fa6';
import { MdMailOutline } from 'react-icons/md';
import {
  FaRegCheckCircle,
  FaRegUser,
  FaRegLightbulb,
  FaRegHandshake,
  FaArrowDown,
  FaArrowUp    
} from 'react-icons/fa';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';

import heroVisual from "../assets/about/aboutus-hero.png";
import hemantPhoto from "../assets/team/hemant.jpg"; 
import meghaPhoto from "../assets/team/megha.png";

export default function About() {
  const [isStoryExpanded, setIsStoryExpanded] = useState(false);
  const founders = [
    {
      name: "Hemant Bothe",
      role: "Co-Founder & CEO",
      bio: "Hemant leverages his biotechnology expertise to set our strategic vision and guide our public health mission.",
      image: hemantPhoto,
      social: {
        linkedin: "https://linkedin.com/in/hemantbothe",
        twitter: "https://x.com/hemantbothe",
        email: "hemantbothe@gmail.com"
      }
    },
    {
      name: "Megha Bothe",
      role: "Co-Founder & CTO",
      bio: "Megha leads our technical and product development, translating our mission into a robust software platform.",
      image: meghaPhoto,
      social: {
        linkedin: "https://www.linkedin.com/in/meghabothe/",
        twitter: "https://x.com/meghabothe",
        email: "meghabothe@gmail.com"
      }
    }
  ];

  const ourValues = [
    {
      icon: <FaRegCheckCircle className="w-10 h-10 text-gray-400" />,
      title: "Data Integrity",
      description: "We treat every dataset with respect — accuracy and ethics are the foundation of trust."
    },
    {
      icon: <FaRegUser className="w-10 h-10 text-gray-400" />,
      title: "Human-Centered",
      description: "Technology must serve people. Our solutions begin with empathy and end with measurable impact."
    },
    {
      icon: <FaRegLightbulb className="w-10 h-10 text-gray-400" />,
      title: "Relentless Curiosity",
      description: "We constantly seek better ways to make health data understandable, predictive, and useful."
    },
    {
      icon: <FaRegHandshake className="w-10 h-10 text-gray-400" />,
      title: "Partnership",
      description: "We succeed only when our healthcare partners succeed. Their mission becomes our mission."
    }
  ];

  return (
    <div className="min-h-screen bg-white text-black antialiased" lang="en">

      {/* 1. Hero Section */}
      <section className="relative bg-gray-50 flex items-center py-20 sm:py-24 lg:min-h-[80vh] lg:py-0">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          <div className="space-y-8 z-10">
            <div>
              <h2 className="text-base md:text-lg font-semibold text-gray-600 uppercase tracking-wider mb-4">
                About HealthMobilia
              </h2>
              <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold leading-tight text-black">
                <span className="whitespace-nowrap">Proactive Health,</span>
                <span className="block mt-2 whitespace-nowrap">
                  Powered by Data.
                </span>
              </h1>
            </div>
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed max-w-xl">
              Building the future of proactive public health through data intelligence and predictive analytics, transforming how healthcare serves communities worldwide.
            </p>
            <div className="h-1 w-24 bg-black"></div>
          </div>

          <div className="relative w-full h-80 lg:h-[500px] hidden md:block">
            <div className="absolute inset-0 bg-gray-200 rounded-lg shadow-2xl overflow-hidden">
              <img
                src={heroVisual} 
                alt="Professional greyscale visual representing data or technology"
                className="w-full h-full object-cover opacity-50"
                loading="lazy"
              />
               <div className="absolute inset-0 rounded-lg border-2 border-gray-300"></div>
            </div>
            <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-white border-8 border-gray-50 rounded-full z-20"></div>
          </div>

        </div>
      </section>

      {/* 2. Founders' Story Section */}
      <section className="px-6 py-16 md:py-32 bg-black text-white relative overflow-hidden">
        
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 to-black opacity-90 z-0"></div>

        <div className="max-w-5xl mx-auto relative z-10 
                        bg-gray-950 p-6 md:p-12 rounded-xl 
                        border border-gray-700 shadow-2xl shadow-gray-950/50">
          
          <div className="text-center mb-10 md:mb-12">
            <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white">The Story Behind HealthMobilia</h2>
          </div>

          <p className="text-center text-lg md:text-2xl text-gray-400 max-w-3xl mx-auto border-t border-gray-800 pt-10 md:pt-12">
            How a personal journey inspired our data-to-decision mission.
          </p>
          
          <div className={`mt-12 md:mt-16 text-base md:text-lg text-gray-300 leading-relaxed text-justify hyphens-auto
                          md:grid md:grid-cols-2 md:gap-x-12 md:gap-y-0 md:items-start md:content-start md:place-items-start`}>

            
            {/* Column 1 */}
            <div className="space-y-6">
              <p className="first-letter:text-6xl md:first-letter:text-7xl first-letter:font-bold first-letter:text-white first-letter:mr-3 first-letter:float-left">
                For years, Megha didn’t have a name for what she was going through. Irregular cycles, sudden weight changes, and constant fatigue were dismissed as “normal.” They weren’t.
              </p>
              <p>
                Much later, after visiting multiple doctors, she was finally diagnosed with PCOS. By then, it had already affected her mental health and confidence. What struck her most wasn’t the diagnosis itself, but how little awareness and support existed for something so common.
              </p>
              
              <div className={`space-y-6 ${isStoryExpanded ? 'block' : 'hidden'} md:block`}>
                <p>
                  While studying and later working in technology, Megha kept returning to one question: what if someone had helped me understand my health earlier? If she had been guided sooner, she could have managed her condition before it began to interfere with her daily life.
                </p>
                <p>
                  At the same time, her brother Hemant, a biotechnologist deeply interested in early-stage disease detection, was developing technologies to identify health risks long before symptoms appear. His work showed how data, if used intelligently, could make healthcare proactive instead of reactive.
                </p>
              </div>
            </div>

            {/* Column 2 */}
            <div className={`space-y-6 ${isStoryExpanded ? 'block' : 'hidden'} md:block`}>
              <p>
                  Together, they began exploring the larger picture. Through their research, they discovered that nearly 70 percent of women with PCOS remain undiagnosed, and even those who are diagnosed often receive advice focused only on fertility. But PCOS is not just about fertility. It affects hormonal balance, metabolism, and mental well-being. That realization revealed a larger truth: society tends to focus on women’s health only when it is connected to motherhood, not before.
              </p>

              <blockquote className="border-l-4 border-gray-700 pl-6 py-4 my-8 md:my-10 italic text-gray-300 text-lg md:text-2xl">
                "Their conversations often circled back to the same gap: public health systems collect enormous amounts of data but rarely turn it into insight."
              </blockquote>

              <p>
                In 2025, they decided to act. Megha’s lived experience and technical background joined Hemant’s expertise in biotechnology and health systems. Together, they founded HealthMobilia, a company built on a simple idea: early understanding can change the course of public health.
              </p>
            </div>
          </div>

          {/* --- NEW: Read More Button (Mobile Only) --- */}
          <div className="md:hidden text-center mt-8">
            <button
              onClick={() => setIsStoryExpanded(!isStoryExpanded)}
              className="inline-flex items-center gap-2 text-sm font-semibold text-gray-300 hover:text-white"
            >
              {isStoryExpanded ? 'Read Less' : 'Read Full Story'}
              {isStoryExpanded ? <FaArrowUp className="w-3 h-3" /> : <FaArrowDown className="w-3 h-3" />}
            </button>
          </div>

        </div>
      </section>

      {/* 3. Meet Our Founders Section */}
      <section className="bg-gray-50 px-6 py-16 md:py-32">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">Meet Our Founders</h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
              The siblings dedicated to bridging science, technology, and social impact in community health.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            {founders.map((founder) => (
              <div
                key={founder.name}
                className="bg-white rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300 overflow-hidden border border-gray-200"
              >
                {/* Mobile: col, Tablet+: row */}
                <div className="p-6 md:p-10 flex flex-col sm:flex-row items-center sm:items-start gap-6">
                  <div className="flex flex-col items-center w-full sm:w-32 flex-shrink-0">
                    <img
                      src={founder.image}
                      alt={`Photo of ${founder.name}`}
                      className="w-32 h-32 rounded-full object-cover border-4 border-gray-100"
                    />
                    <div className="flex items-center space-x-4 mt-4"> 
                      <a
                        href={founder.social.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-500 hover:text-black transition-colors duration-200"
                      >
                        <FaLinkedin className="w-6 h-6" />
                      </a>
                      <a
                        href={founder.social.twitter}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-500 hover:text-black transition-colors duration-200"
                      >
                        <FaXTwitter className="w-6 h-6" />
                      </a>
                      <a
                        href={`mailto:${founder.social.email}`}
                        className="text-gray-500 hover:text-black transition-colors duration-200"
                      >
                        <MdMailOutline className="w-6 h-6" />
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex-1 text-center sm:text-left">
                    <h3 className="text-2xl font-bold text-gray-900 mb-1">
                      {founder.name}
                    </h3>
                    <p className="text-lg text-gray-600 font-medium mb-4">
                      {founder.role}
                    </p>
                    <p className="text-base text-gray-700 leading-relaxed mb-6 text-justify sm:text-left hyphens-auto">
                      {founder.bio}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* 4. Our Values Section */}
      <section className="bg-black text-white px-6 py-16 md:py-32">
        <style>{`
          .swiper-pagination-bullet {
            background-color: #6b7280; /* Muted Grey */
            opacity: 0.7;
          }
          .swiper-pagination-bullet-active {
            background-color: #ffffff; /* Pure White */
            opacity: 1;
          }
        `}</style>

        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold mb-16 text-center">
            Our Guiding Values
          </h2>
          
          {/* --- Mobile-Only Slider --- */}
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
              {ourValues.map((value, index) => (
                <SwiperSlide key={index}>
                  <div className="bg-gray-900 p-8 rounded-lg border border-gray-700 h-full">
                    <div className="mb-6">
                      {value.icon}
                    </div>
                    <h3 className="text-xl font-bold mb-4">{value.title}</h3>
                    <p className="text-base text-gray-300 leading-relaxed">
                      {value.description}
                    </p>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>

          {/* --- Desktop-Only Grid --- */}
          <div className="hidden md:grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {ourValues.map((value, index) => (
              <div
                key={index}
                className="bg-gray-900 p-8 rounded-lg border border-gray-700 transition-all duration-300 hover:border-white hover:-translate-y-2"
              >
                <div className="mb-6">
                  {value.icon}
                </div>
                <h3 className="text-xl font-bold mb-4">{value.title}</h3>
                <p className="text-base text-gray-300 leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Mission & Vision Section */}
      <section className="px-6 py-16 md:py-32 bg-white">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-16 items-start">
          
          <div className="space-y-6">
            <div className="border-l-4 border-black pl-6 md:pl-8">
              <h3 className="text-2xl md:text-3xl font-bold mb-6">Our Mission</h3>
              <div className="space-y-4 text-base md:text-lg text-gray-700 leading-relaxed text-justify hyphens-auto">
                <p>
                  To empower public health systems with the data intelligence required to support early, decisive, and preventive action.
                </p>
                <p>
                  We achieve this by building scalable, intuitive platforms that translate raw community data into clear, actionable insights for policymakers and healthcare providers, focusing on non-communicable diseases and mental health.
                </p>
              </div>
            </div>
          </div>
          
          <div className="space-y-6">
            <div className="border-l-4 border-gray-300 pl-6 md:pl-8">
              <h3 className="text-2xl md:text-3xl font-bold mb-6">Our Vision</h3>
              <div className="space-y-4 text-base md:text-lg text-gray-700 leading-relaxed text-justify hyphens-auto">
                <p>
                  A world where healthcare is predictive, not just reactive. We envision a future where health decisions are guided by data, prevention begins before symptoms, and every community has the tools to plan for a healthier tomorrow.
                </p>
                <p>
                  In this future, technology works silently in the background, bridging gaps in health equity and ensuring that resources are allocated effectively to those who need them most.
                </p>
              </div>
            </div>
          </div>

        </div>
      </section>

    </div>
  );
}