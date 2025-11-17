import { useState, useCallback } from 'react';
import { FaArrowRight, FaChartLine, FaDatabase, FaUsersViewfinder } from 'react-icons/fa6';
import StatCounter from '../components/StatCounter'; 
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim"; 
import particlesConfig from '../components/particles-config'; 

export default function Home() {
  
  const particlesInit = useCallback(async (engine) => {
    await loadSlim(engine);
  }, []);

  const [activeTab, setActiveTab] = useState(0);

  const processSteps = [
    {
      name: "1. Capture",
      icon: <FaDatabase className="w-7 h-7 md:w-8 md:h-8" />,
      description: "We deploy robust systems to capture structured health data from the field, ensuring integrity from the source."
    },
    {
      name: "2. Analyze",
      icon: <FaChartLine className="w-7 h-7 md:w-8 md:h-8" />,
      description: "Our analytics engine processes the data to identify patterns, correlations, and early warning signs."
    },
    {
      name: "3. Act",
      icon: <FaUsersViewfinder className="w-7 h-7 md:w-8 md:h-8" />,
      description: "We provide officials with clear, visualized insights, empowering them to take targeted, evidence-based preventive action."
    }
  ];

  const impactStats = [
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

  return (
    <div className="min-h-screen bg-white text-black antialiased">
      
      {/* 1. Hero Section */}
      <section className="relative min-h-[85vh] md:h-screen flex items-center justify-center text-center text-white overflow-hidden bg-black">
        
        <Particles
          id="tsparticles"
          init={particlesInit}
          options={particlesConfig}
          className="absolute inset-0 z-0" 
        />

        <div className="relative z-10 p-6 flex flex-col items-center">
          <h1 className="text-lg sm:text-xl md:text-2xl font-semibold text-white uppercase tracking-widest mb-4">
            HealthMobilia
          </h1>
          <h2 className="leading-tight tracking-tight">
            <span className="block text-white whitespace-nowrap">
              <span className="font-normal opacity-90 text-xl md:text-5xl align-middle mr-1 md:mr-2">From </span>
              <span className="font-extrabold text-3xl md:text-7xl align-middle">Health Data</span>
            </span>
            <span className="block mt-1 md:mt-2 text-gray-400 whitespace-nowrap">
              <span className="font-normal opacity-90 text-xl md:text-5xl align-middle mr-1 md:mr-2">To </span>
              <span className="font-extrabold text-3xl md:text-7xl align-middle">Health Decisions</span>
            </span>
          </h2>

          <p className="mt-8 text-lg md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            We empower public health systems to turn raw community data into predictive insights and proactive, life-saving interventions.
          </p>
          <div className="mt-12 w-full flex flex-row gap-2 sm:gap-4 justify-center">
            <a href="/work" className="inline-flex items-center justify-center bg-white text-black px-4 py-3 sm:px-6 sm:py-3 text-sm sm:text-base font-semibold hover:bg-gray-200 transition-colors rounded-lg">
              See Our Work
              <FaArrowRight className="w-4 h-4 ml-2 sm:ml-3" />
            </a>
            <a href="/collaborate" className="inline-flex items-center justify-center border-2 border-gray-400 text-gray-200 px-4 py-3 sm:px-6 sm:py-3 text-sm sm:text-base font-semibold hover:bg-gray-800 transition-colors rounded-lg">
              Start a Partnership
            </a>
          </div>
        </div>
      </section>

      {/* 2. Impact Stats Section */}
      <section className="relative z-10 bg-white text-black px-6 py-16 md:py-24">
        <div className="max-w-6xl mx-auto">
            <h2 className="text-base font-semibold text-gray-500 uppercase tracking-wider text-center mb-12">
                Impact from our Pilot Program
            </h2>
            <div className="flex flex-col md:grid md:grid-cols-3 gap-10 md:gap-8">
                {impactStats.map((stat) => (
                    <div key={stat.label} className="flex flex-row items-center gap-4 md:flex-col md:items-center md:gap-0 md:text-center md:py-4">
                        <p className="text-5xl sm:text-6xl md:text-7xl font-extrabold text-black md:mb-2 w-2/5 md:w-auto text-left sm:text-center">
                          <StatCounter value={stat.value} duration={stat.value > 10 ? 2.5 : 1.5} />
                          {stat.suffix}
                        </p>
                        <p className="text-base md:text-lg font-medium text-gray-600 text-left md:text-center w-3/5 md:w-auto">{stat.label}</p>
                    </div>
                ))}
            </div>
        </div>
      </section>
      
      {/* 3. Our Process Section (Mobile Tabs) */}
      <section className="relative z-10 bg-black text-white px-6 py-20 md:py-32">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 max-w-4xl mx-auto">
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4">Our Intelligence Loop</h2>
            <p className="text-lg md:text-xl text-gray-400">We create value through a proven, three-stage public health intelligence process.</p>
          </div>

          <div className="md:hidden">
            <div className="flex justify-between rounded-lg bg-gray-800 p-1 mb-6">
              {processSteps.map((step, index) => (
                <button
                  key={step.name}
                  onClick={() => setActiveTab(index)}
                  className={`w-1/3 text-center py-3 px-2 text-sm font-semibold rounded-md transition-colors
                    ${activeTab === index 
                      ? 'bg-white text-black' 
                      : 'text-gray-400 hover:text-white'
                    }
                  `}
                >
                  {step.name}
                </button>
              ))}
            </div>
            
            <div className="text-center p-4">
              <div className="flex items-center justify-center w-16 h-16 bg-gray-800 text-white rounded-full mx-auto mb-6">
                {processSteps[activeTab].icon}
              </div>
              <h3 className="text-2xl font-bold mb-2">{processSteps[activeTab].name}</h3>
              <p className="text-base text-gray-400 leading-relaxed">
                {processSteps[activeTab].description}
              </p>
            </div>
          </div>

          <div className="hidden md:grid grid-cols-3 gap-8">
            {processSteps.map((step) => (
              <div key={step.name} className="text-center p-8">
                <div className="flex items-center justify-center w-20 h-20 bg-gray-800 text-white rounded-full mx-auto mb-6">
                  {step.icon}
                </div>
                <h3 className="text-3xl font-bold mb-2">{step.name}</h3>
                <p className="text-lg text-gray-400 leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-20">
            <a 
              href="/work" 
              className="inline-flex items-center justify-center rounded-lg border-2 border-gray-600 px-6 py-3 text-base font-semibold text-gray-200 transition-colors hover:border-white hover:text-white"
            >
              See the technology behind our work 
              <FaArrowRight className="w-4 h-4 ml-3" />
            </a>
          </div>
        </div>
      </section>

      {/* 4. CTA Section */}
      <section className="relative z-10 bg-white text-black px-6 py-16 md:py-24">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
            Let's Build a Healthier Future, Together.
          </h2>
          <p className="text-base md:text-lg text-gray-700 mb-10 max-w-2xl mx-auto">
            We are actively seeking partnerships with public health organizations, district administrations, and research institutions.
          </p>
          <a 
            href="/collaborate" 
            className="inline-flex items-center justify-center bg-black text-white px-8 py-3 text-base font-semibold hover:bg-gray-800 transition-colors rounded-lg"
          >
            Start a Partnership
            <FaArrowRight className="w-4 h-4 ml-3" />
          </a>
        </div>
      </section>

    </div>
  );
}