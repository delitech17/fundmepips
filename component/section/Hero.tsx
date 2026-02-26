import { ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-screen pt-32 pb-24 px-4 overflow-hidden bg-navy/80">
      {/* Background glow effect */}
      <div className="absolute inset-0 bg-hero-glow pointer-events-none" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left side - Text content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-6xl md:text-7xl font-900 tracking-tighter text-white leading-[1.1]">
                FUNDme<span className="bg-gold-gradient bg-clip-text text-transparent">PIPS</span>
              </h1>
              <p className="text-2xl md:text-3xl font-bold text-gray-300">
                <span className="bg-gradient-to-r from-gold via-yellow-400 to-gold bg-clip-text text-transparent">
                  Keep Your Pips
                </span>
                <br />
                <span className="text-white">Trade For Profits</span>
              </p>
            </div>

            <p className="text-lg text-gray-400 max-w-lg leading-relaxed">
              Get instant funded with up to $100k. Trade with 70% profit split. No tricks, no games—just pure trading capital and the leverage you deserve.
            </p>

            {/* Profit Split Badge */}
            <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full border border-gold/30 bg-gold/5 backdrop-blur-sm">
              <div className="flex items-baseline gap-2">
                <span className="text-lg font-bold text-gold">70%</span>
                <span className="text-xs text-gray-400">Trader / 30% Firm</span>
              </div>
            </div>

            {/* CTA Button */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <button className="group bg-gold hover:bg-gold/90 text-black px-8 py-4 rounded-full font-bold text-lg transition-all duration-300 flex items-center justify-center gap-2 shadow-glow hover:shadow-glow-lg">
                Get Funded Now
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="border border-gold/50 hover:border-gold text-white px-8 py-4 rounded-full font-bold text-lg transition-all duration-300 bg-white/5 hover:bg-white/10">
                Learn More
              </button>
            </div>

            {/* Trust indicators */}
            <div className="pt-4 space-y-2 text-sm text-gray-400">
              <p>✓ Instant Account Setup</p>
              <p>✓ Real-time Profit Payouts</p>
              <p>✓ 5% Daily Drawdown | 10% Max Drawdown</p>
            </div>
          </div>

          {/* Right side - Visual accent */}
          <div className="hidden md:block relative">
            <div className="relative w-full h-96">
              {/* Outer glow circle */}
              <div className="absolute inset-0 bg-gold/10 rounded-full blur-3xl" />
              
              {/* Glass card effect */}
              <div className="absolute inset-8 border border-gold/30 rounded-3xl bg-gradient-to-br from-gold/10 via-transparent to-transparent backdrop-blur-sm" />
              
              {/* Inner accent */}
              <div className="absolute inset-12 border border-gold/20 rounded-2xl" />
              
              {/* Content inside */}
              <div className="absolute inset-0 flex flex-col items-center justify-center space-y-6 p-8">
                <div className="text-center">
                  <p className="text-gold text-sm font-bold uppercase tracking-widest mb-2">Trading Capital</p>
                  <p className="text-5xl font-bold text-white">$100K</p>
                </div>
                
                <div className="w-full h-px bg-gradient-to-r from-transparent via-gold to-transparent" />
                
                <div className="text-center">
                  <p className="text-gray-400 text-sm mb-2">Profit Split Program</p>
                  <div className="flex justify-center gap-4 text-sm font-bold">
                    <div>
                      <p className="text-gold text-lg">70%</p>
                      <p className="text-gray-400">Yours</p>
                    </div>
                    <div className="text-gray-600">•</div>
                    <div>
                      <p className="text-lg text-gray-400">30%</p>
                      <p className="text-gray-400">Firm</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
