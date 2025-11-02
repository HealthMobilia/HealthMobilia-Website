import { FaLinkedin, FaXTwitter } from 'react-icons/fa6';
import { MdMailOutline } from 'react-icons/md';
import {
  FaRegCheckCircle,
  FaRegUser,
  FaRegLightbulb,
  FaRegHandshake
} from 'react-icons/fa';
import heroVisual from "../assets/about/aboutus-hero.png";
import hemantPhoto from "../assets/team/hemant.jpg"; 
import meghaPhoto from "../assets/team/megha.png";

export default function About() {
  // Data for founders
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

  // Data for "Our Values"
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
    <div className="min-h-screen bg-white text-black">

      {/* Hero Section */}
      <section className="relative min-h-[80vh] bg-gray-50 flex items-center">
        <div className="max-w-7xl mx-auto px-6 py-20 lg:py-0 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          <div className="space-y-8 z-10">
            <div>
              <h2 className="text-base md:text-lg font-semibold text-gray-600 uppercase tracking-wider mb-4">
                About HealthMobilia
              </h2>
              <h1 className="text-5xl md:text-7xl font-bold leading-tight text-black">
                <span className="whitespace-nowrap">Proactive Health,</span>
                <span className="block mt-2 whitespace-nowrap">
                  Powered by Data.
                </span>
              </h1>
            </div>
            <p className="text-xl text-gray-700 leading-relaxed max-w-xl">
              Building the future of proactive public health through data intelligence and predictive analytics, transforming how healthcare serves communities worldwide.
            </p>
            <div className="h-1 w-24 bg-black"></div>
          </div>

          <div className="relative w-full h-80 lg:h-[500px]">
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

      {/* Founders' Story Section */}
      {/* 2. Founders' Story Section (Dark) - UPDATED */}
      <section className="px-6 py-20 md:py-32 bg-black text-white relative overflow-hidden">
        
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 to-black opacity-90 z-0"></div>

        <div className="max-w-5xl mx-auto relative z-10 
                        bg-gray-950 p-8 md:p-12 rounded-xl 
                        border border-gray-700 shadow-2xl shadow-gray-950/50 
                        transform hover:scale-[1.005] transition-transform duration-300">
          
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">The Story Behind HealthMobilia</h2>
          </div>

          {/* New Subtitle / Deck */}
          <p className="text-center text-xl md:text-2xl text-gray-400 max-w-3xl mx-auto border-t border-gray-800 pt-12">
            How a personal journey inspired our data-to-decision mission.
          </p>
          
          {/* New Article Body */}
          <div className="mt-16 text-lg text-gray-300 space-y-6 leading-relaxed">
            
            <p className="first-letter:text-7xl first-letter:font-bold first-letter:text-white first-letter:mr-3 first-letter:float-left">
              For years, Megha didn’t have a name for what she was going through. Irregular cycles, sudden weight changes, and constant fatigue were dismissed as “normal.” They weren’t.
            </p>
            <p>
              Much later, after visiting multiple doctors, she was finally diagnosed with PCOS. By then, it had already affected her mental health and confidence. What struck her most wasn’t the diagnosis itself, but how little awareness and support existed for something so common.
            </p>
            <p>
              While studying and later working in technology, Megha kept returning to one question: what if someone had helped me understand my health earlier? If she had been guided sooner, she could have managed her condition before it began to interfere with her daily life.
            </p>
            <p>
              Through her own research, she discovered that nearly 70 percent of women with PCOS remain undiagnosed, and even those who are diagnosed often receive advice focused only on fertility. But PCOS is not just about fertility. It affects hormonal balance, metabolism, and mental well-being. That realization revealed a larger truth: society tends to focus on women’s health only when it is connected to motherhood, not before.
            </p>
            <p>
              At the same time, her brother Hemant, a biotechnologist deeply interested in early-stage disease detection, was developing technologies to identify health risks long before symptoms appear. His work showed how data, if used intelligently, could make healthcare proactive instead of reactive.
            </p>

            {/* New Pull Quote */}
            <blockquote className="border-l-4 border-gray-700 pl-6 py-4 my-10 italic text-gray-300 text-xl md:text-2xl">
              "Their conversations often circled back to the same gap: public health systems collect enormous amounts of data but rarely turn it into insight."
            </blockquote>

            <p>
              In 2025, they decided to act. Megha’s lived experience and technical background joined Hemant’s expertise in biotechnology and health systems. Together, they founded HealthMobilia, a company built on a simple idea: early understanding can change the course of public health.
            </p>
            <p>
              HealthMobilia partners with governments to transform scattered health data into actionable insight. Their first focus is on PCOS and mental health, conditions that shape women’s well-being long before motherhood, but their broader mission is to help public health move from health data to health decisions, enabling timely, preventive action for healthier futures.
            </p>
          </div>
        </div>
      </section>

      {/* Meet Our Founders Section */}
      <section className="bg-gray-50 px-6 py-20 md:py-32">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Meet Our Founders</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The siblings dedicated to bridging science, technology, and social impact in community health.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            {founders.map((founder) => (
              <div
                key={founder.name}
                className="bg-white rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300 overflow-hidden border border-gray-200"
              >
                <div className="p-8 md:p-10 flex flex-col sm:flex-row sm:items-start gap-8">
                  <div className="flex flex-col items-center w-32 flex-shrink-0">
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
                        aria-label={`${founder.name}'s LinkedIn`}
                      >
                        <FaLinkedin className="w-6 h-6" />
                      </a>
                      <a
                        href={founder.social.twitter}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-500 hover:text-black transition-colors duration-200"
                        aria-label={`${founder.name}'s Twitter`}
                      >
                        <FaXTwitter className="w-6 h-6" />
                      </a>
                      <a
                        href={`mailto:${founder.social.email}`}
                        className="text-gray-500 hover:text-black transition-colors duration-200"
                        aria-label={`Email ${founder.name}`}
                      >
                        <MdMailOutline className="w-6 h-6" />
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-gray-900 mb-1">
                      {founder.name}
                    </h3>
                    <p className="text-gray-600 font-medium text-lg mb-4">
                      {founder.role}
                    </p>
                    <p className="text-gray-700 leading-relaxed mb-6">
                      {founder.bio}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Our Values Section */}
      <section className="bg-black text-white px-6 py-20 md:py-32">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center">
            Our Guiding Values
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {ourValues.map((value, index) => (
              <div
                key={index}
                className="bg-gray-900 p-8 rounded-lg border border-gray-700 transition-all duration-300 hover:border-white hover:-translate-y-2"
              >
                <div className="mb-6">
                  {value.icon}
                </div>
                <h3 className="text-xl font-bold mb-4">{value.title}</h3>
                <p className="text-gray-300 leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="px-6 py-20 md:py-32 bg-white">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          
          <div className="space-y-6">
            <div className="border-l-4 border-black pl-8">
              <h3 className="text-3xl font-bold mb-6">Our Mission</h3>
              <div className="space-y-4 text-lg text-gray-700 leading-relaxed">
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
            <div className="border-l-4 border-gray-300 pl-8">
              <h3 className="text-3xl font-bold mb-6">Our Vision</h3>
              <div className="space-y-4 text-lg text-gray-700 leading-relaxed">
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