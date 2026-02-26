import Navbar from "@/component/layout/Navbar";
import Footer from "@/component/layout/Footer";

export default function AffiliatesPage() {
  return (
    <>
      <Navbar />
      <main className="pt-24 min-h-screen bg-navy text-white">
        <section className="max-w-4xl mx-auto px-4 py-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Affiliate <span className="text-gold">Program</span></h1>
          <p className="text-gray-400 text-lg mb-12">Earn recurring commissions by referring traders to FUNDmePIPS. No monthly limits.</p>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="bg-navy/80 border border-gold/30 p-6 rounded-xl">
              <h3 className="text-xl font-bold text-gold mb-2">30% Recurring</h3>
              <p className="text-gray-300">Earn 30% commission on each referred trader's 30% firm split.</p>
            </div>
            <div className="bg-navy/80 border border-gold/30 p-6 rounded-xl">
              <h3 className="text-xl font-bold text-gold mb-2">Lifetime Payouts</h3>
              <p className="text-gray-300">Get paid as long as your referrals trade. No expiration.</p>
            </div>
            <div className="bg-navy/80 border border-gold/30 p-6 rounded-xl">
              <h3 className="text-xl font-bold text-gold mb-2">Real Dashboard</h3>
              <p className="text-gray-300">Track clicks, signups, and earnings in real-time.</p>
            </div>
          </div>

          <h2 className="text-2xl font-bold text-gold mb-4">How It Works</h2>
          <ol className="space-y-3 text-gray-300 list-decimal list-inside mb-12">
            <li>Sign up as an affiliate (free)</li>
            <li>Get unique referral link and promo materials</li>
            <li>Share with your audience (blog, YouTube, Twitter, etc.)</li>
            <li>Earn commission on every successful referral</li>
            <li>Get paid weekly via Stripe or bank transfer</li>
          </ol>

          <div className="bg-gold/10 border border-gold/30 p-8 rounded-xl mb-8">
            <h3 className="text-lg font-bold text-gold mb-4">Affiliate Benefits</h3>
            <ul className="space-y-2 text-gray-300">
              <li>✓ High commission rate (industry-leading 30%)</li>
              <li>✓ Marketing materials and banners provided</li>
              <li>✓ Dedicated affiliate manager support</li>
              <li>✓ Weekly payouts with no minimums</li>
              <li>✓ Lifetime recurring commissions</li>
            </ul>
          </div>

          <div className="text-center">
            <button className="bg-gold hover:bg-gold/90 text-black px-8 py-3 rounded-full font-bold transition-all duration-300">
              Apply to Affiliate Program
            </button>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}