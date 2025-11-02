import { FaArrowRight, FaChartLine, FaDatabase, FaUsersViewfinder } from 'react-icons/fa6';
import StatCounter from '../components/StatCounter'; 

export default function Home() {
  
  // High-level impact stats
  const impactStats = [
    {
      value: 11,
      suffix: ' Lakh +',
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
      <section className="relative h-screen flex items-center justify-center text-center text-white overflow-hidden">
        
        {/* Animated Gradient Background */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-black"></div>
          <div 
            className="absolute h-[800px] w-[800px] bg-[radial-gradient(circle_at_center,_rgba(100,100,100,0.3),_rgba(0,0,0,0))] animate-[spin_20s_linear_infinite]"
            style={{ top: 'calc(50% - 400px)', left: 'calc(50% - 400px)' }}
          />
        </div>

        {/* Content */}
        <div className="relative z-10 p-6 flex flex-col items-center">
          <h1 className="text-6xl md:text-8xl font-extrabold leading-tight tracking-tight">
            From Health Data
            <span className="block mt-2 text-gray-400">
              to Health Decisions.
            </span>
          </h1>

          <p className="mt-8 text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            We empower public health systems to turn raw community data into predictive insights and proactive, life-saving interventions.
          </p>

          {/* CTAs */}
          <div className="mt-12 flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/work" className="inline-flex items-center justify-center bg-white text-black px-6 py-3 text-base font-semibold hover:bg-gray-200 transition-colors rounded-lg">
              See Our Work
              <FaArrowRight className="w-4 h-4 ml-3" />
            </a>
            <a href="/collaborate" className="inline-flex items-center justify-center border-2 border-gray-400 text-gray-200 px-6 py-3 text-base font-semibold hover:bg-gray-800 transition-colors rounded-lg">
              Start a Partnership
            </a>
          </div>
        </div>
      </section>

      {/* Impact Stats Section */}
      <section className="bg-white text-black px-6 py-20 md:py-24">
        <div className="max-w-6xl mx-auto">
            <h2 className="text-base font-semibold text-gray-500 uppercase tracking-wider text-center mb-12">
                Impact from our Pilot Program
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                {impactStats.map((stat) => (
                    <div key={stat.label} className="py-4 border-l-4 border-gray-200 md:border-l-0">
                        <p className="text-7xl font-extrabold text-black mb-2">
                          <StatCounter value={stat.value} duration={stat.value > 10 ? 2.5 : 1.5} />
                          {stat.suffix}
                        </p>
                        <p className="text-lg font-medium text-gray-600">{stat.label}</p>
                    </div>
                ))}
            </div>
        </div>
      </section>
      
      {/* Our Process Section */}
      <section className="bg-black text-white px-6 py-24 md:py-32">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 max-w-4xl mx-auto">
            <h2 className="text-5xl md:text-6xl font-bold mb-4">Our Intelligence Loop</h2>
            <p className="text-xl text-gray-400">We create value through a proven, three-stage public health intelligence process.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            <div className="text-center p-8">
              <div className="flex items-center justify-center w-20 h-20 bg-gray-800 text-white rounded-full mx-auto mb-6">
                <FaDatabase className="w-8 h-8" />
              </div>
              <h3 className="text-3xl font-bold mb-2">1. Capture</h3>
              <p className="text-lg text-gray-400 leading-relaxed">We deploy robust systems to capture structured health data from the field, ensuring integrity from the source.</p>
            </div>

            <div className="text-center p-8">
              <div className="flex items-center justify-center w-20 h-20 bg-gray-800 text-white rounded-full mx-auto mb-6">
                <FaChartLine className="w-8 h-8" />
              </div>
              <h3 className="text-3xl font-bold mb-2">2. Analyze</h3>
              <p className="text-lg text-gray-400 leading-relaxed">Our analytics engine processes the data to identify patterns, correlations, and early warning signs.</p>
            </div>

            <div className="text-center p-8">
              <div className="flex items-center justify-center w-20 h-20 bg-gray-800 text-white rounded-full mx-auto mb-6">
                <FaUsersViewfinder className="w-8 h-8" />
              </div>
              <h3 className="text-3xl font-bold mb-2">3. Act</h3>
              <p className="text-lg text-gray-400 leading-relaxed">We provide officials with clear, visualized insights, empowering them to take targeted, evidence-based preventive action.</p>
            </div>
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

      {/* CTA Section */}
      <section className="bg-white text-black px-6 py-20 md:py-24">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Let's Build a Healthier Future, Together.
          </h2>
          <p className="text-lg text-gray-700 mb-10 max-w-2xl mx-auto">
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