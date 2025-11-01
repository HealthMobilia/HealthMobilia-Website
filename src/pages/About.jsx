import founderImg from '../assets/team/hm_photo1.png';

export default function About() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative min-h-[80vh] flex items-center bg-gradient-to-b from-gray-50 to-white">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-gray-100 to-transparent opacity-70"></div>
        
        <div className="relative w-full px-6">
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div>
                <h2 className="text-base md:text-lg font-semibold text-gray-600 uppercase tracking-wider mb-4">Transforming Healthcare</h2>
                <h1 className="text-5xl md:text-7xl font-bold leading-tight">
                  About
                  <span className="block mt-2 bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent">
                    HealthMobilia
                  </span>
                </h1>
              </div>
              <p className="text-xl text-gray-700 leading-relaxed max-w-xl">
                Building the future of proactive public health through data intelligence and predictive analytics, transforming how healthcare serves communities worldwide.
              </p>
              <div className="h-1 w-32 bg-black"></div>
            </div>

            <div className="relative hidden lg:block">
              <div className="absolute top-0 right-0 w-96 h-96 bg-gray-100 rounded-full opacity-50 filter blur-3xl"></div>
              <div className="absolute bottom-0 left-0 w-72 h-72 bg-gray-200 rounded-full opacity-50 filter blur-2xl"></div>
              <div className="relative z-10 aspect-square bg-gray-50 rounded-lg border border-gray-200 shadow-2xl">
                <div className="absolute inset-0 bg-gradient-to-br from-gray-100 to-white opacity-90"></div>
                <div className="relative h-full flex items-center justify-center">
                  <div className="w-24 h-24 border-4 border-black rounded-full"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="px-6 py-20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center">Our Story</h2>
          <div className="max-w-4xl mx-auto">
            <div className="text-lg text-gray-700 leading-relaxed space-y-6">
              <p>
                For years, public health has focused on treatment after illness appears. We saw a deeper problem: an ocean of community-level data was being collected but rarely used to guide preventive care.
              </p>
              <p>
                HealthMobilia was created to close that gap. By turning data into early indicators, we help officials and policymakers identify where care and awareness are needed most.
              </p>
              <p>
                Our current focus is on PCOS, mental health, and non-communicable diseases (NCDs) conditions that quietly shape wellbeing but often go unnoticed in early stages.
              </p>
              <p>
                We believe early understanding leads to early action, and that’s where prevention truly begins.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Founder's Story Section */}
      <section className="bg-gray-50 px-6 py-20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center">Founder's Story</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1">
              <div className="text-lg text-gray-700 leading-relaxed space-y-6">
                <p>
                  HealthMobilia was founded by siblings Hemant and Megha, united by a shared purpose: to bridge science, technology, and social impact in community health.
                </p>
                <p>
                  While studying public health systems and data patterns, they noticed a recurring theme information existed, but insight did not. Field data was collected diligently, yet rarely translated into actionable guidance.
                </p>
                <p>
                  Their response was simple but transformative: build tools that help health systems see early, act early.
                </p>
              </div>
              <div className="mt-8 pt-8 border-t border-gray-200">
                <p className="text-lg font-medium text-black italic">
                  "We're not just building software, we're building a future where healthcare prevents rather than reacts."
                </p>
                <p className="text-gray-600 mt-4">
                  — Hemant and Megha, Founders & Siblings
                </p>
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <div className="relative aspect-square overflow-hidden rounded-lg shadow-xl">
                <img src={founderImg} alt="Founder" className="w-full h-full object-cover" />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6 text-white">
                  <p className="text-lg font-semibold"></p>
                  <p className="text-sm text-gray-200"></p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="px-6 py-20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center">Mission & Vision</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div className="space-y-6">
              <div className="border-l-4 border-black pl-8">
                <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
                <p className="text-lg text-gray-700 leading-relaxed">
                  To empower public health systems with data intelligence that supports preventive action beginning with PCOS, mental health, and NCDs.
                </p>
              </div>
            </div>
            <div className="space-y-6">
              <div className="border-l-4 border-gray-400 pl-8">
                <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
                <p className="text-lg text-gray-700 leading-relaxed">
                  A world where health decisions are guided by data, prevention begins before symptoms, and every community has the means to plan for better wellbeing.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values Section */}
      <section className="bg-black text-white px-6 py-20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center">Our Values</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="border border-gray-700 p-8 hover:border-white transition-colors">
              <h3 className="text-xl font-bold mb-4">Data Integrity</h3>
              <p className="text-gray-300 leading-relaxed">We treat every dataset with respect accuracy and ethics are the foundation of trust.
              </p>
            </div>
            
            <div className="border border-gray-700 p-8 hover:border-white transition-colors">
              <h3 className="text-xl font-bold mb-4">Human-Centered</h3>
              <p className="text-gray-300 leading-relaxed">
                Technology must serve people, not replace them. Our solutions begin with empathy and end with measurable impact.
              </p>
            </div>
            
            <div className="border border-gray-700 p-8 hover:border-white transition-colors">
              <h3 className="text-xl font-bold mb-4">Relentless Curiosity</h3>
              <p className="text-gray-300 leading-relaxed">
                We constantly seek better ways to make health data understandable, predictive, and useful.
              </p>
            </div>
            
            <div className="border border-gray-700 p-8 hover:border-white transition-colors">
              <h3 className="text-xl font-bold mb-4">Partnership</h3>
              <p className="text-gray-300 leading-relaxed">
                We succeed only when our healthcare partners succeed. Their mission becomes our mission.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-gray-50 px-6 py-20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Join us in Building the Future of Preventive Public Health
          </h2>
          <p className="text-xl text-gray-700 mb-12">
            Together, we can turn community data into early insight and early insight into lasting impact.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-black text-white px-8 py-4 font-semibold hover:bg-gray-800 transition-colors">
              Partner With Us
            </button>
            <button className="border border-black text-black px-8 py-4 font-semibold hover:bg-black hover:text-white transition-colors">
              Contact Us
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}