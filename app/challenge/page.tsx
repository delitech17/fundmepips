import Navbar from "@/component/layout/Navbar";
import Footer from "@/component/layout/Footer";

export default function ChallengePage() {
  return (
    <>
      <Navbar />
      <main className="pt-24 min-h-screen bg-navy text-white">
        <section className="max-w-4xl mx-auto px-4 py-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Challenge <span className="text-gold">Models</span></h1>
          <p className="text-gray-400 text-lg mb-8">Choose the challenge that matches your trading style and get instant funded.</p>

          <div className="grid md:grid-cols-3 gap-8 my-12">
            {[
              { name: '1-Step Challenge', desc: 'Reach profit target in single phase', best: 'Experienced traders' },
              { name: '2-Step Challenge', desc: 'Prove consistency across two phases', best: 'Intermediate traders' },
              { name: '3-Step Challenge', desc: 'Three progressive phases, highest payout', best: 'Conservative traders' },
            ].map((c) => (
              <div key={c.name} className="bg-navy/80 border border-gold/30 p-6 rounded-xl">
                <h3 className="text-xl font-bold text-gold mb-2">{c.name}</h3>
                <p className="text-gray-300 mb-4">{c.desc}</p>
                <p className="text-sm text-gray-400">Best for: {c.best}</p>
              </div>
            ))}
          </div>

          <h2 className="text-2xl font-bold mt-12 mb-4">Why Choose FUNDmePIPS?</h2>
          <ul className="space-y-3 text-gray-300">
            <li>✓ Instant account setup with live funding</li>
            <li>✓ 70/30 profit split—keep most of your earnings</li>
            <li>✓ No time limits on your trading</li>
            <li>✓ Real-time payouts</li>
            <li>✓ Free account resets if you breach rules</li>
          </ul>
        </section>
      </main>
      <Footer />
    </>
  );
}