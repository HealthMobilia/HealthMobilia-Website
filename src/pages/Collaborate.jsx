export default function Collaborate() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="relative bg-gradient-to-b from-gray-50 to-white overflow-hidden">
  <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-gray-100 to-transparent opacity-70"></div>
  <div className="relative max-w-7xl mx-auto px-6 py-12 md:py-20 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h1 className="text-3xl md:text-5xl font-bold leading-tight text-black">
              Partner with 
              <span className="block mt-2 text-transparent bg-clip-text bg-gradient-to-r from-gray-900 to-gray-600">HealthMobilia</span>
            </h1>
            <p className="text-lg text-gray-700 max-w-2xl">
              We collaborate with district health authorities and public systems to improve how health data is collected, analyzed, and used for preventive care planning.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 mt-6">
              <a
                href="mailto:partners@healthmobilia.org"
                className="inline-block bg-black text-white px-6 py-3 font-medium rounded hover:bg-gray-800 transition-colors"
              >
                Partner With Us
              </a>
              <a
                href="#pilot"
                className="inline-block border border-gray-800 text-gray-900 px-6 py-3 font-medium rounded hover:bg-gray-100 transition-colors"
              >
                Learn About the Pilot
              </a>
            </div>
          </div>

          <div className="hidden lg:block relative">
            <div className="absolute -right-8 -top-8 w-80 h-80 bg-gray-100 rounded-xl opacity-60 filter blur-2xl"></div>
            <div className="relative z-10 bg-gray-50 border border-gray-200 rounded-xl shadow-2xl overflow-hidden">
              <div className="p-8">
                <div className="h-48 bg-gray-200 rounded-md flex items-center justify-center">
                  <div className="text-gray-400">Illustration / Device Mockup</div>
                </div>
                <div className="mt-6 space-y-3">
                  {/* <p className="text-gray-700">NiSha & HeyMetrrica early platforms enabling field validation, interoperability and community-focused insights.</p> */}
                  <p className="text-sm text-gray-500">Pilot deployments, iterative improvements, and local partnerships form the backbone of our approach.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pilot Overview */}
      <section id="pilot" className="px-6 py-16 md:py-24">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Pilot Overview</h2>
              <p className="text-gray-700 text-lg leading-relaxed">
                HealthMobilia is conducting an early-stage pilot in Washim District, Maharashtra, across 25 Primary Health Centres (PHCs) serving a population of more than 1.1 Million.</p>

              <div className="mt-6 space-y-4 text-gray-700">
                <p>
                  The pilot strengthens public health data systems with a focus on Non-Communicable Diseases (NCDs) such as PCOS and mental health, areas that often remain underrepresented in routine reporting.
                </p>
                <p>
                  Working with the District Health Office (DHO), Washim, this pilot validates field-level workflows, data consistency, and visualization models that can guide district and state-level health planning.
                </p>
              </div>
            </div>

            <div>
              <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 shadow">
                <h3 className="font-semibold text-lg mb-3">Pilot Highlights</h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start gap-3">
                    <span className="mt-1 w-3 h-3 bg-black rounded-full"></span>
                    Field validation of early platform workflows
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1 w-3 h-3 bg-black rounded-full"></span>
                    Interoperability testing with local health systems
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1 w-3 h-3 bg-black rounded-full"></span>
                    Capacity-building with PHC staff and health authorities
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}