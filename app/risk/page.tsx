import Navbar from "@/component/layout/Navbar";
import Footer from "@/component/layout/Footer";

export default function RiskPage() {
  return (
    <>
      <Navbar />
      <main className="pt-24 min-h-screen bg-navy text-white">
        <section className="max-w-4xl mx-auto px-4 py-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Risk <span className="text-gold">Disclosure</span></h1>
          <p className="text-gray-400 text-lg mb-12">Important: Read this before you start trading.</p>

          <div className="space-y-8">
            <div className="bg-red-900/20 border border-red-500/30 p-6 rounded-xl">
              <h2 className="text-2xl font-bold text-red-400 mb-4">⚠ High Risk Warning</h2>
              <p className="text-gray-300 leading-relaxed">Trading is extremely risky. You may lose your entire funded capital. The leverage we provide can amplify both profits and losses. Past performance does NOT guarantee future results.</p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gold mb-4">Risks You Should Understand</h2>
              <div className="space-y-3 text-gray-300">
                <p><strong className="text-gold">Market Risk:</strong> Currency and asset prices can move against you unexpectedly, especially during news events or geopolitical events.</p>
                <p><strong className="text-gold">Leverage Risk:</strong> Trading with 1:100 leverage means small moves can wipe out your account. A 1% adverse move = 100% loss.</p>
                <p><strong className="text-gold">Liquidity Risk:</strong> During extreme market conditions, you may not be able to close positions at desired prices.</p>
                <p><strong className="text-gold">Technical Risk:</strong> Platform crashes, internet outages, or broker issues could prevent you from exiting positions.</p>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gold mb-4">Drawdown Rules Exist For Your Protection</h2>
              <p className="text-gray-300 leading-relaxed mb-4">A 5% daily drawdown and 10% max drawdown limit forces you to stop trading once losses reach these thresholds. This prevents emotional trading and catastrophic losses.</p>
              <ul className="space-y-2 text-gray-300 list-disc list-inside">
                <li>If you hit 5% daily loss, your account is frozen for the day</li>
                <li>If you hit 10% max loss, your account is temporarily restricted</li>
                <li>You can request a free reset and try again</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gold mb-4">FUNDmePIPS Is NOT</h2>
              <ul className="space-y-2 text-gray-300 list-disc list-inside">
                <li>Responsible for your trading losses</li>
                <li>Liable for trading platform issues or downtime</li>
                <li>Guaranteeing any profits or returns</li>
                <li>Providing financial or investment advice</li>
                <li>Insuring your trading capital</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gold mb-4">Trading Responsibly</h2>
              <ul className="space-y-2 text-gray-300 list-disc list-inside">
                <li>Only trade with capital you can afford to lose</li>
                <li>Start with smaller account sizes to build experience</li>
                <li>Use proper risk management (stop losses, position sizing)</li>
                <li>Keep emotion out of trading decisions</li>
                <li>Never risk more than 1-2% per trade</li>
              </ul>
            </div>

            <div className="bg-gold/10 border border-gold/30 p-6 rounded-xl">
              <p className="text-gray-300"><strong>By creating a FUNDmePIPS account, you acknowledge that you have read and fully understand these risks.</strong> We recommend consulting with a financial advisor if you have questions about whether trading is right for you.</p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}