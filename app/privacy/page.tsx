import Navbar from "@/component/layout/Navbar";
import Footer from "@/component/layout/Footer";

export default function PrivacyPage() {
  return (
    <>
      <Navbar />
      <main className="pt-24 min-h-screen bg-navy text-white">
        <section className="max-w-4xl mx-auto px-4 py-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Privacy <span className="text-gold">Policy</span></h1>
          <p className="text-gray-400 text-sm mb-12">Last updated: February 2026</p>

          <div className="space-y-8">
            <div>
              <h2 className="text-2xl font-bold text-gold mb-4">1. Information We Collect</h2>
              <p className="text-gray-300 leading-relaxed">We collect information you provide directly (name, email, trading history) and information collected automatically (IP address, browser type, pages visited). This data helps us provide better service and prevent fraud.</p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gold mb-4">2. How We Use Your Data</h2>
              <ul className="space-y-2 text-gray-300 list-disc list-inside">
                <li>Process your funded trading account applications</li>
                <li>Monitor accounts for rule compliance</li>
                <li>Process payouts and withdrawals</li>
                <li>Communicate updates and important notices</li>
                <li>Comply with legal and regulatory requirements</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gold mb-4">3. Data Security</h2>
              <p className="text-gray-300 leading-relaxed">Your data is encrypted in transit and at rest. We use industry-standard security protocols and regularly audit our systems. However, no system is 100% secure.</p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gold mb-4">4. Third-Party Sharing</h2>
              <p className="text-gray-300 leading-relaxed">We do NOT sell your personal data. We share data only with essential service providers (payment processors, hosting providers) under strict NDAs.</p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gold mb-4">5. Your Rights</h2>
              <p className="text-gray-300 leading-relaxed">You have the right to access, rectify, or delete your personal data. Contact privacy@fundmepips.com to exercise these rights.</p>
            </div>

            <div className="bg-gold/10 border border-gold/30 p-6 rounded-xl">
              <p className="text-gray-300">For questions about this Privacy Policy, email: <strong>privacy@fundmepips.com</strong></p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}