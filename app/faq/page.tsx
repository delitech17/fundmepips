'use client';

import Navbar from "@/component/layout/Navbar";
import Footer from "@/component/layout/Footer";
import { useState } from "react";

export default function FAQPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    { q: 'How long does account approval take?', a: 'Most accounts are approved and funded within 2-4 hours of completing your profile and passing verification.' },
    { q: 'What trading platforms do you support?', a: 'We support MT4, MT5, ThinkorSwim, and most major trading platforms. Full integration guide available in your dashboard.' },
    { q: 'Can I trade crypto, stocks, and forex?', a: 'Yes! Trade any asset class on any market. No restrictions. Full 24/5 trading with leverage up to 1:100.' },
    { q: 'What happens if I breach the rules?', a: 'Your account gets restricted temporarily. We offer free resets to help you get back on track—no hidden penalties.' },
    { q: 'How do I request a payout?', a: 'Submit withdrawal requests via your FUNDmePIPS dashboard. We process Monday-Friday with payouts within 2-5 business days.' },
    { q: 'Is there a minimum trading volume?', a: 'No minimum volume required. Trade at your pace. Profit targets vary by account size but scale fairly.' },
    { q: 'Can multiple people trade one account?', a: 'Account is for individual use only. Each trader gets their own account and profit split.' },
    { q: 'What if I lose everything?', a: 'You can request a free account reset to try again. Resets available once per funded account.' },
  ];

  return (
    <>
      <Navbar />
      <main className="pt-24 min-h-screen bg-navy text-white">
        <section className="max-w-3xl mx-auto px-4 py-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Frequently Asked <span className="text-gold">Questions</span></h1>
          <p className="text-gray-400 text-lg mb-12">Got questions? We've got answers.</p>

          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <div key={idx} className="border border-gold/30 rounded-lg overflow-hidden bg-navy/50">
                <button
                  onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                  className="w-full p-4 text-left font-semibold text-gold hover:bg-gold/10 transition-colors flex justify-between items-center"
                >
                  {faq.q}
                  <span>{openIndex === idx ? '−' : '+'}</span>
                </button>
                {openIndex === idx && (
                  <div className="p-4 bg-navy/80 text-gray-300">{faq.a}</div>
                )}
              </div>
            ))}
          </div>

          <div className="bg-gold/10 border border-gold/30 p-8 rounded-xl mt-12 text-center">
            <h3 className="text-lg font-bold text-gold mb-2">Still Have Questions?</h3>
            <p className="text-gray-300">Contact our support team at support@fundmepips.com</p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}