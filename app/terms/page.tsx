import Navbar from "@/component/layout/Navbar";
import Footer from "@/component/layout/Footer";

export default function TermsPage() {
  return (
    <>
      <Navbar />
      <main className="pt-24 min-h-screen bg-navy text-white">
        <section className="max-w-4xl mx-auto px-4 py-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Terms of <span className="text-gold">Service</span></h1>
          <p className="text-gray-400 text-sm mb-12">Last updated: February 2026</p>

          <div className="space-y-8">
            <div>
              <h2 className="text-2xl font-bold text-gold mb-4">1. Account Terms</h2>
              <p className="text-gray-300 leading-relaxed">By creating an account, you agree to be at least 18 years old, provide accurate information, and accept all trading risks. You are solely responsible for maintaining account security.</p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gold mb-4">2. Trading Rules</h2>
              <p className="text-gray-300 mb-2 leading-relaxed">All traders must comply with daily and maximum drawdown limits, profit targets, and trading restrictions outlined in your account agreement. Violations may result in account restriction or forfeit of profits.</p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gold mb-4">3. Profit Split</h2>
              <p className="text-gray-300 leading-relaxed">FUNDmePIPS retains a 30% commission on all profits generated. The remaining 70% is paid to traders according to our payout schedule. Losses are borne solely by the trader.</p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gold mb-4">4. Risk Disclaimer</h2>
              <p className="text-gray-300 leading-relaxed">Trading is high-risk. Past performance does not guarantee future results. You may lose your entire trading account. FUNDmePIPS is not responsible for trading losses resulting from your decisions.</p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gold mb-4">5. Prohibited Activities</h2>
              <ul className="space-y-2 text-gray-300 list-disc list-inside">
                <li>Automated bots or algorithmic trading (without approval)</li>
                <li>Account sharing or multi-accounting</li>
                <li>News trading or economic event manipulation</li>
                <li>Exploitation of platform glitches</li>
                <li>Any illegal or fraudulent activity</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gold mb-4">6. Account Termination</h2>
              <p className="text-gray-300 leading-relaxed">We reserve the right to terminate accounts that violate these terms. Termination may result in forfeiture of trading capital and profits.</p>
            </div>

            <div className="bg-gold/10 border border-gold/30 p-6 rounded-xl">
              <p className="text-gray-300 mb-3">For questions or disputes regarding these terms, contact:</p>
              <p className="text-gold font-bold">legal@fundmepips.com</p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}