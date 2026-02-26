import Navbar from "@/component/layout/Navbar";
import Footer from "@/component/layout/Footer";

export default function PayoutsPage() {
  return (
    <>
      <Navbar />
      <main className="pt-24 min-h-screen bg-navy text-white">
        <section className="max-w-4xl mx-auto px-4 py-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Payouts <span className="text-gold">Schedule</span></h1>
          <p className="text-gray-400 text-lg mb-12">Fast, transparent withdrawals. Get paid for your trading performance.</p>

          <div className="bg-navy/80 border border-gold/30 p-8 rounded-xl mb-8">
            <h2 className="text-2xl font-bold text-gold mb-4">How Payouts Work</h2>
            <ol className="space-y-4 text-gray-300 list-decimal list-inside">
              <li>Trade and reach your profit target</li>
              <li>Submit payout request via dashboard</li>
              <li>We verify your account and trades</li>
              <li>70% of profits transferred to your account</li>
              <li>Withdrawal via bank transfer (2-5 business days)</li>
            </ol>
          </div>

          <h2 className="text-2xl font-bold mb-4">Payout Frequency</h2>
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="bg-navy/80 border border-gold/30 p-6 rounded-xl">
              <h3 className="text-lg font-bold text-gold mb-2">Standard Payouts</h3>
              <p className="text-gray-300">Every Monday to Friday</p>
              <p className="text-sm text-gray-400 mt-2">Processing time: 2-5 business days</p>
            </div>
            <div className="bg-navy/80 border border-gold/30 p-6 rounded-xl">
              <h3 className="text-lg font-bold text-gold mb-2">Minimum Withdrawal</h3>
              <p className="text-gray-300">$100 minimum</p>
              <p className="text-sm text-gray-400 mt-2">No maximum limits</p>
            </div>
          </div>

          <div className="bg-gold/10 border border-gold/30 p-8 rounded-xl">
            <h3 className="text-lg font-bold text-gold mb-2">No Hidden Fees</h3>
            <p className="text-gray-300">We don't charge withdrawal fees. 70/30 split is all you pay.</p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}