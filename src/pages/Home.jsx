export default function Home() {
  return (
    <div className="min-h-screen bg-white text-gray-800">
      {/* Hero Section */}
      <section className="px-6 py-20 md:py-28">
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
            From Health Data to
            <span className="block text-gray-600">Health Decisions</span>
          </h1>

          <p className="mt-6 text-lg md:text-2xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
            Empowering Public Health Systems To Turn Community Data Into Actionable Insights
          </p>

          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/about" className="inline-block bg-black text-white px-7 py-3 font-semibold hover:bg-gray-800 transition-colors">
              About Us
            </a>
            <a href="/collaborate" className="inline-block border-2 border-black text-black px-7 py-3 font-semibold hover:bg-black hover:text-white transition-colors">
              Partnerships & Collaborations
            </a>
          </div>
        </div>
      </section>

      {/* Intro / Focus */}
      <section className="px-6 py-12">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-10 items-start">
          <div className="lg:col-span-2">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Our Focus</h2>
            <p className="text-gray-700 mb-6 leading-relaxed">
              We’re building technology that helps transform local health data into smarter decisions for prevention and planning.
              Our current focus areas: <strong className="text-gray-900">PCOS</strong>, <strong className="text-gray-900">mental health</strong>, and <strong className="text-gray-900">non-communicable diseases (NCDs)</strong> —
              early indicators that shape long-term wellbeing.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <div className="p-6 border border-gray-200">
                <h3 className="font-semibold mb-2">PCOS</h3>
                <p className="text-sm text-gray-600">Early detection and population-level trends to guide women's health programs.</p>
              </div>
              <div className="p-6 border border-gray-200">
                <h3 className="font-semibold mb-2">Mental Health</h3>
                <p className="text-sm text-gray-600">Signal detection and resource planning for community mental wellbeing.</p>
              </div>
              <div className="p-6 border border-gray-200">
                <h3 className="font-semibold mb-2">NCDs</h3>
                <p className="text-sm text-gray-600">Monitoring lifestyle-related conditions to enable early interventions.</p>
              </div>
            </div>
          </div>

          <aside className="bg-gray-100 p-6">
            <h4 className="text-lg font-bold mb-3">Why It Matters</h4>
            <p className="text-sm text-gray-700 leading-relaxed">
              Every day, thousands of health interactions generate valuable information. Yet most of it remains unseen data that could reveal early signs, guide resources, and strengthen community care.
              We bridge that gap by helping public health systems visualize and understand emerging trends.
            </p>
          </aside>
        </div>
      </section>

      {/* Purpose & Reality */}
      <section className="bg-white px-6 py-16">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div>
            <h3 className="text-2xl font-bold mb-4">Our Purpose</h3>
            <p className="text-gray-700 mb-6 leading-relaxed">
              HealthMobilia exists to make health data meaningful, turning information into early action, and insight into prevention.
            </p>
            <p className="text-gray-700 leading-relaxed">
              We partner with public health teams to operationalize data, so decisions are timely, targeted, and measured.
            </p>
          </div>

          <div>
            <h3 className="text-2xl font-bold mb-4">The Reality We’re Addressing</h3>
            <ul className="list-disc list-inside text-gray-700 space-y-3">
              <li>1 in 5 women in India experience symptoms linked to PCOS.</li>
              <li>Mental health challenges and lifestyle-related diseases are rising quietly among young adults.</li>
              <li>Most early warning signals are buried in routine clinical and community records.</li>
            </ul>

            <p className="mt-6 text-gray-600 text-sm">
              Understanding these patterns early can reshape the way communities approach preventive care. Reallocating resources, designing interventions, and improving long-term outcomes.
            </p>
          </div>
        </div>
      </section>

      {/* Explore / CTAs */}
      <section className="bg-gray-50 px-6 py-16">
        <div className="max-w-4xl mx-auto text-center">
          <h4 className="text-3xl font-bold mb-4">Explore More</h4>
          <p className="text-gray-700 mb-8">Learn about our mission, read about pilots, or get in touch to start a partnership.</p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/about" className="inline-block bg-black text-white px-8 py-3 font-semibold hover:bg-gray-800 transition-colors">About Us →</a>
            <a href="/collaborate" className="inline-block border-2 border-black text-black px-8 py-3 font-semibold hover:bg-black hover:text-white transition-colors">Partnerships & Collaborations →</a>
          </div>
        </div>
      </section>

      {/* Footer Spacer */}
      <div className="h-16" />
    </div>
  );
}