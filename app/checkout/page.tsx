"use client";

import { useSearchParams } from 'next/navigation';

export default function CheckoutPage() {
  const params = useSearchParams();
  const amount = params.get('amount');
  const step = params.get('step');

  return (
    <div className="min-h-screen flex items-center justify-center bg-navy text-white px-4">
      <div className="max-w-md w-full bg-navy/80 p-8 rounded-2xl backdrop-blur-sm border border-white/10">
        <h1 className="text-3xl font-bold mb-4">Checkout Preview</h1>
        <p className="mb-2">
          <strong>Challenge Type:</strong> {step}
        </p>
        <p className="mb-2">
          <strong>Account Amount:</strong> ${amount}
        </p>
        <p className="text-gray-400 mt-4">(This is a simulated checkout page.)</p>
      </div>
    </div>
  );
}