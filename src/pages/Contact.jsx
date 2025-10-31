export default function Contact() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      {/* <section className="relative min-h-[60vh] flex items-center bg-gradient-to-b from-gray-50 to-white overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-gray-100 to-transparent opacity-70"></div>
        <div className="relative w-full px-6">
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div>
                <h2 className="text-base md:text-lg font-semibold text-gray-600 uppercase tracking-wider mb-4">Get in Touch</h2>
                <h1 className="text-4xl md:text-5xl font-bold leading-tight">
                  Contact
                  <span className="block mt-2 bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent">
                    HealthMobilia
                  </span>
                </h1>
              </div>
              <p className="text-xl text-gray-700 leading-relaxed max-w-xl">
                We're here to discuss how data intelligence can strengthen your public health initiatives. Reach out to learn more about our pilots and partnerships.
              </p>
              <div className="h-1 w-32 bg-black"></div>
            </div>

            <div className="hidden lg:block relative">
              <div className="absolute -right-8 -top-8 w-80 h-80 bg-gray-100 rounded-xl opacity-60 filter blur-2xl"></div>
              <div className="relative z-10 bg-gray-50 border border-gray-200 rounded-xl shadow-2xl p-8">
                <div className="space-y-4 text-gray-600">
                  <p className="font-medium">Office Hours</p>
                  <p>Mon - Fri, 9:00 AM - 6:00 PM IST</p>
                  <p className="font-medium mt-6">Working Policy</p>
                  <p>We are 100% Remote</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> */}

      {/* Contact Details */}
      <section className="px-6 py-16 md:py-20">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
          <div className="space-y-6">
            <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
              <h3 className="text-xl font-bold mb-3">HealthMobilia</h3>
              <p className="text-gray-700">
                Shelubazar, Maharashtra<br />
                PIN Code 444402
              </p>
              <div className="mt-4 text-gray-700">
                <p className="font-medium">Email</p>
                <a href="mailto:contact@healthmobilia.com" className="text-gray-800 hover:underline">contact@healthmobilia.com</a>
              </div>
              <div className="mt-3 text-gray-700">
                <p className="font-medium">Phone</p>
                <a href="tel:+911234567890" className="text-gray-800 hover:underline">+91 9657953795</a>
              </div>
              <div className="mt-6 text-sm text-gray-500">
                <p>Office Hours: Mon - Fri, 9:00 AM - 6:00 PM IST</p>
              </div>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h4 className="font-semibold mb-3">Working Policy</h4>
              <p className="text-gray-700">We are 100% Remote</p>
            </div>
          </div>

          <div>
            <div className="border border-gray-200 rounded-lg overflow-hidden">
              <iframe
                title="Washim District map"
                src="https://www.google.com/maps?q=Shelu+Bazar+Maharashtra&output=embed"
                className="w-full h-80 md:h-96 border-0"
                loading="lazy"
              />
            </div>

            <div className="mt-6 text-sm text-gray-600">
              <p>For more information, please email at <a href="mailto:contact@healthmobilia.com" className="text-gray-800 hover:underline">contact@healthmobilia.com</a></p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
