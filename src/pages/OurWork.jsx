export default function OurWork() {
  return (
    <div className="min-h-screen bg-white">
      <section className="relative min-h-[60vh] flex items-center bg-gradient-to-b from-gray-50 to-white">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-gray-100 to-transparent opacity-70"></div>
        <div className="relative w-full px-6">
          <div className="max-w-7xl mx-auto">
            <div className="space-y-8">
              <div className="max-w-3xl">
                <h2 className="text-base md:text-lg font-semibold text-gray-600 uppercase tracking-wider mb-4">Making Data Work</h2>
                <h1 className="text-4xl md:text-5xl font-bold leading-tight">
                  Our Work &
                  <span className="block mt-2 bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent">
                    Pilot Projects
                  </span>
                </h1>
              </div>
              <div className="max-w-6xl">
                <p className="text-xl text-gray-700 leading-relaxed mb-6">
                  We are working to strengthen public health data systems through pilot initiatives in Maharashtra. Our focus is on improving how health data is collected, analyzed, and translated into meaningful insights.
                </p>
                <p className="text-xl text-gray-700 leading-relaxed">
                  HealthMobilia’s pilot in Washim District engages existing government health networks to build a foundation for better public health intelligence. The goal is simple: to make local health data visible, usable, and actionable for officials making everyday decisions.
                </p>
              </div>
              <div className="h-1 w-32 bg-black"></div>
            </div>
          </div>
        </div>
      </section>
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16">
          <div className="space-y-8">
            <h2 className="text-3xl font-bold mb-4">Pilot Overview: Washim District</h2>
            <p className="text-lg text-gray-700">
              HealthMobilia is conducting an early-stage pilot in Washim District, Maharashtra, covering a population of over 1.1 Million across 25+ PHCs. Our work focuses on:
            </p>
            <ul className="list-disc list-inside text-gray-600">
              <li>Building reliable, structured data flows from the field to PHC dashboards</li>
              <li>Testing data interoperability and analytics readiness</li>
              <li>Supporting district-level planning with data-led insights</li>
            </ul>
            <p className="text-lg text-gray-700">
              The pilot currently emphasizes Non-Communicable Diseases (NCDs) including PCOS and mental health to demonstrate how early trends can inform prevention and intervention strategies.
            </p>
          </div>
          <div className="space-y-8">
            <h2 className="text-3xl font-bold mb-4">Platform Overview</h2>
            <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-2">NiSha</h3>
              <p className="text-gray-700">A digital platform designed to simplify community health data capture and trend visualization, beginning with PCOS and mental health indicators.</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-2">HeyMetrrica</h3>
              <p className="text-gray-700">A data analytics layer that transforms field data into insights for officials, highlighting gaps, correlations, and opportunities for targeted action.</p>
            </div>
          </div>
        </div>
      </section>
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">Early Learnings & Impact</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-4">Community Engagement</h3>
              <p className="text-gray-600">Working within existing government systems has ensured transparency, adaptability, and faster feedback from the field.</p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-4">Data Visibility</h3>
              <p className="text-gray-600">Structured data collection has already begun to surface valuable insights about community-level health conditions and reporting gaps.</p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-4">Scalable Public Health Models</h3>
              <p className="text-gray-600">Lessons from Washim are shaping scalable, tech-enabled frameworks that can be replicated across other districts.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}