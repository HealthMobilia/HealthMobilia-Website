export default function TermsOfService() {
  return (
    <div className="min-h-screen bg-white text-black antialiased" lang="en">
      
      {/* Legal Content Section */}
      <section className="bg-white text-black px-6 py-16 md:py-24">
        <div className="max-w-4xl mx-auto">
          {/* Page Title */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-black mb-12 border-b border-gray-200 pb-6">
            Terms of Service
          </h1>

          {/* Legal Text */}
          <article className="prose prose-lg max-w-none text-gray-700 prose-headings:text-black prose-a:text-black prose-a:font-medium hover:prose-a:text-gray-700 prose-strong:text-black">
            <p className="text-sm text-gray-500">Last Updated: [07/11/2025]</p>
            
            <h2>1. Agreement to Terms</h2>
            <p>By accessing or using our Site, you agree to be bound by these Terms. If you disagree with any part of the terms, then you may not access the Site.</p>

            <h2>2. Intellectual Property</h2>
            <p>The Site and its original content, features, and functionality are and will remain the exclusive property of HealthMobilia Pvt. Ltd. This includes, but is not limited to, all text, graphics, logos, and the names of our products such as "NiSha" and "HeyMetrrica." Our content is protected by copyright and other laws of India and foreign countries.</p>

            <h2>3. Disclaimer of Warranties (Medical Disclaimer)</h2>
            <p className="font-bold">The information provided on this Site (including our "Founders' Story," "Our Work" pages, and any blog posts) is for informational and educational purposes only.</p>
            <p><strong>It is not, and is not intended to be, a substitute for professional medical advice, diagnosis, or treatment.</strong> Never disregard professional medical advice or delay in seeking it because of something you have read on this Site. HealthMobilia is not a healthcare provider.</p>

            <h2>4. Limitation of Liability</h2>
            <p>In no event shall HealthMobilia Pvt. Ltd., nor its directors or employees, be liable for any damages (direct, indirect, or consequential) arising out of, or in any way connected with, your use of this Site or your reliance on any information provided on the Site. You use the Site at your own risk.</p>

            <h2>5. Links to Other Websites</h2>
            <p>Our Site may contain links to third-party websites (such as LinkedIn or Twitter) that are not owned or controlled by HealthMobilia. We have no control over, and assume no responsibility for, the content, privacy policies, or practices of any third-party sites.</p>

            <h2>6. Governing Law</h2>
            <p>These Terms shall be governed in accordance with the laws of India, without regard to its conflict of law provisions. Any disputes arising from these Terms will be subject to the exclusive jurisdiction of the courts located in Maharashtra, India.</p>

            <h2>7. Contact Us</h2>
            <p>If you have any questions about these Terms, please contact us at: <a href="mailto:contact@healthmobilia.com">contact@healthmobilia.com</a></p>
          </article>
        </div>
      </section>
    </div>
  );
}