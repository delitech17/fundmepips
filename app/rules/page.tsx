import Navbar from "@/component/layout/Navbar";
import Footer from "@/component/layout/Footer";

export default function RulesPage() {
  const rules = [
    { category: 'Drawdown Limits', items: ['Daily Loss: 3-5%', 'Max Drawdown: 7-10%', 'Resets daily'] },
    { category: 'Trading Rules', items: ['Trade 24/7 (forex, stocks, crypto)', 'No news trading restrictions', 'Unlimited profit target', 'No time limit'] },
    { category: 'Account Management', items: ['Min trade size: 0.01 lots', 'Max lot size: unrestricted', 'Leverage: up to 1:100', 'Hedging allowed'] },
    { category: 'Payout Rules', items: ['Reach profit target = instant payout', '70% profit split to trader', 'Withdrawals every Monday-Friday', 'No hidden fees'] },
  ];

  return (
    <>
      <Navbar />
      <main className="pt-24 min-h-screen bg-navy text-white">
        <section className="max-w-5xl mx-auto px-4 py-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Trading <span className="text-gold">Rules & Requirements</span></h1>
          <p className="text-gray-400 text-lg mb-12">Clear, transparent rules. No surprises. Just trading.</p>

          <div className="grid md:grid-cols-2 gap-8">
            {rules.map((section) => (
              <div key={section.category} className="bg-navy/80 border border-gold/30 p-6 rounded-xl">
                <h3 className="text-xl font-bold text-gold mb-4">{section.category}</h3>
                <ul className="space-y-2 text-gray-300">
                  {section.items.map((item) => (
                    <li key={item}>✓ {item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="bg-gold/10 border border-gold/30 p-8 rounded-xl mt-12">
            <h2 className="text-2xl font-bold text-gold mb-4">Important Note</h2>
            <p className="text-gray-300">Violating rules results in account restriction. Free resets are available. Always trade within limits and manage risk responsibly.</p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}