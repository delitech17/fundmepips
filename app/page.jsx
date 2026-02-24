export default function Home() {
  return (
    <main className="bg-navy text-white">

      {/* HERO */}
      <section className="min-h-screen flex flex-col justify-center items-center text-center px-6">
        <h1 className="text-5xl font-bold mb-6">
          Get Funded. Trade Smart. <span className="text-gold">Keep 70%</span>
        </h1>
        <p className="max-w-xl text-gray-300 mb-8">
          Choose your challenge. Prove your edge. Scale up to $100,000 in capital.
        </p>
        <div className="flex gap-4">
          <button className="bg-gold text-black px-6 py-3 rounded-lg font-semibold hover:opacity-90">
            Start Challenge
          </button>
          <button className="border border-gold px-6 py-3 rounded-lg hover:bg-gold hover:text-black transition">
            View Pricing
          </button>
        </div>
      </section>

      {/* ACCOUNT PRICING */}
      <section className="py-20 bg-black">
        <h2 className="text-4xl text-center font-bold mb-12">
          Funding Programs
        </h2>

        <div className="grid md:grid-cols-3 gap-8 px-10">

          {[
            { size: "$2,000", price: "$8.99" },
            { size: "$5,000", price: "$39" },
            { size: "$7,000", price: "$55" },
            { size: "$10,000", price: "$79" },
            { size: "$25,000", price: "$179" },
            { size: "$50,000", price: "$289" },
            { size: "$100,000", price: "$370" },
          ].map((plan, index) => (
            <div key={index} className="bg-navy p-6 rounded-xl border border-gray-800 hover:border-gold transition">
              <h3 className="text-2xl font-bold mb-4">{plan.size}</h3>
              <p className="text-gold text-xl mb-4">{plan.price}</p>
              <ul className="text-gray-300 mb-6 space-y-2">
                <li>70% Profit Split</li>
                <li>5% Daily Drawdown</li>
                <li>10% Max Drawdown</li>
                <li>No Time Limit</li>
              </ul>
              <button className="w-full bg-gold text-black py-2 rounded-lg font-semibold">
                Get Started
              </button>
            </div>
          ))}

        </div>
      </section>

      {/* CHALLENGE TYPES */}
      <section className="py-20 bg-navy">
        <h2 className="text-4xl text-center font-bold mb-12">
          Choose Your Path
        </h2>

        <div className="grid md:grid-cols-3 gap-8 px-10">

          <div className="bg-black p-8 rounded-xl border border-gray-800">
            <h3 className="text-2xl font-bold mb-4 text-gold">1-Step</h3>
            <p>10% Target</p>
            <p>5% Daily Loss</p>
            <p>10% Max Loss</p>
          </div>

          <div className="bg-black p-8 rounded-xl border border-gray-800">
            <h3 className="text-2xl font-bold mb-4 text-gold">2-Step</h3>
            <p>8% → 5% Targets</p>
            <p>5% Daily Loss</p>
            <p>10% Max Loss</p>
          </div>

          <div className="bg-black p-8 rounded-xl border border-gray-800">
            <h3 className="text-2xl font-bold mb-4 text-gold">3-Step</h3>
            <p>6% → 5% → 4%</p>
            <p>5% Daily Loss</p>
            <p>10% Max Loss</p>
          </div>

        </div>
      </section>

    </main>
  );
}