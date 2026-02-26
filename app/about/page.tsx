import Navbar from "@/component/layout/Navbar";
import Footer from "@/component/layout/Footer";

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main className="pt-24 min-h-screen bg-navy text-white">
        <section className="max-w-4xl mx-auto px-4 py-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">About <span className="text-gold">FUNDmePIPS</span></h1>
          <p className="text-gray-400 text-lg mb-12">Empowering traders with capital and trust since 2024.</p>

          <div className="space-y-8">
            <div>
              <h2 className="text-2xl font-bold text-gold mb-4">Our Mission</h2>
              <p className="text-gray-300 leading-relaxed">To provide skilled traders immediate access to funded trading capital without the typical gatekeeping of traditional prop firms. We believe in transparency, fair profit splits, and empowering traders to keep what they earn.</p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gold mb-4">Why We're Different</h2>
              <ul className="space-y-3 text-gray-300">
                <li>✓ <strong>70/30 Profit Split</strong> – Industry-leading split puts money in your pocket</li>
                <li>✓ <strong>No Time Limits</strong> – Trade at your pace, no pressure</li>
                <li>✓ <strong>Instant Funding</strong> – Account live within hours of approval</li>
                <li>✓ <strong>Transparent Rules</strong> – No hidden clauses or surprise restrictions</li>
                <li>✓ <strong>Real Payouts</strong> – Fast withdrawals every trading day</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gold mb-4">Our Team</h2>
              <p className="text-gray-300 leading-relaxed">Founded by traders, for traders. We understand the challenges of proprietary trading and built FUNDmePIPS to be the firm we wished existed when we started.</p>
            </div>

            <div className="bg-gold/10 border border-gold/30 p-8 rounded-xl">
              <h3 className="text-lg font-bold text-gold mb-4">Backed by Industry Leaders</h3>
              <p className="text-gray-300">FUNDmePIPS operates under strict regulatory compliance with real capital reserves to back every funded account.</p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}