interface AccountCardProps {
  size: string;
  price: string;
  featured?: boolean;
  benefits?: string[];
  onGetStarted?: () => void;
}

export default function AccountCard({
  size,
  price,
  featured = false,
  benefits = [
    '70% Profit Split',
    '10% Profit Target',
    '5% Daily Drawdown',
    'No Time Limits'
  ],
  onGetStarted,
}: AccountCardProps) {
  return (
    <div
      className={`relative p-8 rounded-2xl border transition-all duration-300 overflow-hidden ${
        featured
          ? 'border-gold bg-gold/5 scale-105 shadow-glow-lg'
          : 'border-white/10 bg-white/5 hover:border-gold/50 hover:bg-white/10'
      }`}
    >
      {/* Background card glow */}
      <div className="absolute inset-0 bg-card-glow pointer-events-none" />

      {/* Ribbon for featured */}
      {featured && (
        <div className="absolute top-4 right-4 px-4 py-1 bg-gold text-black text-xs font-bold rounded-full uppercase tracking-widest">
          Most Popular
        </div>
      )}

      <div className="relative z-10">
        <h3 className="text-xl text-gray-400 mb-2 font-medium">Account Size</h3>
        <div className="text-5xl font-bold mb-6 text-white">${size}</div>

        <ul className="space-y-3 mb-8 text-left text-sm text-gray-300">
          {benefits.map((benefit, idx) => (
            <li key={idx} className="flex items-center gap-3">
              <span className={featured ? 'text-gold' : 'text-gold/60'}>✓</span>
              <span>{benefit}</span>
            </li>
          ))}
        </ul>

        <div className="flex items-center justify-between pt-6 border-t border-white/10">
          <div className="flex items-baseline gap-1">
            <span className="text-3xl font-bold text-white">${price}</span>
            <span className="text-sm text-gray-400">/one-time</span>
          </div>
          <button
            onClick={onGetStarted}
            className={`px-6 py-2 rounded-lg font-bold transition-all duration-300 ${
              featured
                ? 'bg-gold text-black hover:bg-gold/90 shadow-glow'
                : 'bg-white/10 text-white hover:bg-gold hover:text-black'
            }`}
          >
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
}
