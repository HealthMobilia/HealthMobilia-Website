import { 
  FaUsers, 
  FaChartBar, 
  FaNetworkWired, 
  FaMobileAlt, 
  FaCogs,
  FaRegCheckCircle
} from 'react-icons/fa';
import NishaAppPhoto from "../assets/product/nisha.png";
import HeyMetrricaPhto from "../assets/product/heymetrrica.png";
import heroVisual from "../assets/work/work_hero.png";

export default function OurWork() {
  
  // Data for Our Platforms
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

  // Data for Early Impact
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

  return (
    <div className="min-h-screen bg-white text-black">

      {/* Hero Section */}
      <section className="relative min-h-[70vh] bg-gray-50 flex items-center">
        <div className="max-w-7xl mx-auto px-6 py-20 lg:py-0 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Side: Text Content */}
          <div className="space-y-8 z-10">
            <div>
              <h2 className="text-base md:text-lg font-semibold text-gray-600 uppercase tracking-wider mb-4">
                Making Data Work
              </h2>
              <h1 className="text-5xl md:text-7xl font-bold leading-tight text-black">
                <span className="whitespace-nowrap">Our Work in</span>
                <span className="block mt-2 whitespace-nowrap">
                  Public Health
                </span>
              </h1>
            </div>
            <p className="text-xl text-gray-700 leading-relaxed max-w-xl">
              We build data intelligence systems that transform how public health operates—moving from reactive treatment to proactive, data-driven prevention.
            </p>
            <div className="h-1 w-24 bg-black"></div>
          </div>

          {/* Right Side: Visual Element */}
          <div className="relative w-full h-80 lg:h-[450px]">
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
      <section className="bg-black text-white px-6 py-20 md:py-24">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-base font-semibold text-gray-400 uppercase tracking-wider mb-4">
            The Challenge
          </h2>
          <p className="text-3xl md:text-4xl font-bold leading-tight">
            Local health data is often collected but rarely used to guide early, preventive action. We exist to close that gap.
          </p>
        </div>
      </section>

      {/* Our Solution - Platform Showcase */}
      <section className="px-6 py-20 md:py-32 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Our Solution</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We developed a two-part system to connect field data with high-level decision-making.
            </p>
          </div>
          
          <div className="space-y-20">
            {platforms.map((platform, index) => (
              <div 
                key={platform.name}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
                }`}
              >
                {/* Image Side */}
                <div 
                  className={`relative w-full h-80 rounded-lg shadow-2xl overflow-hidden border border-gray-200 ${
                    index % 2 === 1 ? 'lg:col-start-2' : ''
                  }`}
                >
                  <img
                    src={platform.image}
                    alt={`${platform.name} UI Mockup`}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
                
                {/* Text Side */}
                <div className="space-y-6">
                  <div className="flex items-center space-x-4">
                    <div className="p-3 bg-gray-100 rounded-full">
                      {platform.icon}
                    </div>
                    <h3 className="text-3xl font-bold">{platform.name}</h3>
                  </div>
                  <p className="text-lg text-gray-700 leading-relaxed">
                    {platform.description}
                  </p>
                  <ul className="space-y-2">
                    {platform.details.map((detail, i) => (
                      <li key={i} className="flex items-center text-gray-600">
                        <FaRegCheckCircle className="w-4 h-4 text-black mr-3 flex-shrink-0" />
                        {detail}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* The Pilot - Washim District */}
      <section className="bg-gray-50 px-6 py-20 md:py-32">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
            {/* Left Column: Description */}
            <div className="lg:col-span-1 space-y-6">
              <div className="border-l-4 border-black pl-8">
                <h2 className="text-3xl font-bold">Pilot: Washim District</h2>
              </div>
              <p className="text-lg text-gray-700 leading-relaxed">
                Our pilot in Washim, Maharashtra, engages existing government health networks to build a foundation for better public health intelligence.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                The focus is on NCDs, PCOS, and mental health, demonstrating how early data trends can inform vital prevention strategies.
              </p>
            </div>
            
            {/* Right Columns: Key Stats */}
            <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-lg shadow-lg border border-gray-200">
                <p className="text-5xl font-bold text-black mb-2">1.1M+</p>
                <p className="text-lg font-medium text-gray-600">Total Population</p>
              </div>
              <div className="bg-white p-8 rounded-lg shadow-lg border border-gray-200">
                <p className="text-5xl font-bold text-black mb-2">25+</p>
                <p className="text-lg font-medium text-gray-600">PHCs Engaged</p>
              </div>
              <div className="bg-white p-8 rounded-lg shadow-lg border border-gray-200">
                <p className="text-5xl font-bold text-black mb-2">3</p>
                <p className="text-lg font-medium text-gray-600">Core Focus Areas (NCDs, PCOS, Mental Health)</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Early Learnings & Impact Section */}
      <section className="bg-black text-white px-6 py-20 md:py-32">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center">
            Early Impact & Learnings
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {impacts.map((item) => (
              <div
                key={item.title}
                className="bg-gray-900 p-8 rounded-lg border border-gray-700 transition-all duration-300 hover:border-white hover:-translate-y-2"
              >
                <div className="mb-6">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold mb-4">{item.title}</h3>
                <p className="text-gray-300 leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}