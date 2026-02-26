import { Check, X } from 'lucide-react';

interface ComparisonItem {
  feature: string;
  value: string | boolean;
  tooltip?: string;
}

const RULES: ComparisonItem[] = [
  { feature: 'Daily Drawdown Limit', value: '5%' },
  { feature: 'Maximum Drawdown', value: '10%' },
  { feature: 'Profit Target', value: 'Unlimited' },
  { feature: 'Time Limit', value: 'None' },
  { feature: 'Trading Hours', value: '24/7' },
  { feature: 'Account Suspension', value: 'Rules Breach Only' },
  { feature: 'Instant Payouts', value: true },
  { feature: 'Free Account Reset', value: true },
  { feature: 'Multiple Accounts', value: true },
];

export default function Comparison() {
  return (
    <section className="py-24 px-4 bg-navy/80 relative overflow-hidden">
      {/* Background accent */}
      <div className="absolute inset-0 bg-hero-glow pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Clear <span className="text-gold">Trading Rules</span>
          </h2>
          <p className="text-gray-400 text-lg">No hidden conditions. No surprises. Just trading.</p>
        </div>

        {/* Grid layout for rules */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {RULES.map((item, idx) => (
            <div
              key={idx}
              className="p-6 rounded-xl border border-white/10 bg-white/5 hover:border-gold/30 hover:bg-white/10 transition-all duration-300 backdrop-blur-sm"
            >
              <div className="flex items-start justify-between gap-4">
                <div className="flex-1">
                  <h3 className="text-sm font-semibold text-gray-300 mb-2">{item.feature}</h3>
                  <p className="text-lg font-bold text-white">
                    {typeof item.value === 'boolean' ? (
                      <span className="flex items-center gap-2">
                        {item.value ? (
                          <>
                            <Check className="w-5 h-5 text-gold" />
                            <span>Yes</span>
                          </>
                        ) : (
                          <>
                            <X className="w-5 h-5 text-gray-500" />
                            <span>No</span>
                          </>
                        )}
                      </span>
                    ) : (
                      item.value
                    )}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom emphasis */}
        <div className="mt-16 p-8 rounded-2xl border border-gold/30 bg-gold/5 backdrop-blur-sm text-center">
          <p className="text-gray-300 mb-3">
            All accounts include our full suite of tools, real-time analytics, and dedicated support.
          </p>
          <p className="text-sm text-gray-400">
            70% profit split applies to all account sizes. No commission, no hidden fees.
          </p>
        </div>
      </div>
    </section>
  );
}
