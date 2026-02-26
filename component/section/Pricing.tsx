'use client';

import AccountCard from '@/component/ui/AccountCard';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';

// data schema for pricing and rules per challenge type
interface AccountInfo {
  size: string;
  price: string;
}

interface Rules {
  dailyLoss: string;
  maxLoss: string;
  profitTarget: string;
}

interface ChallengeInfo {
  accounts: AccountInfo[];
  rules: Rules;
}

type ChallengeType = '1-step' | '2-step' | '3-step';

const CHALLENGE_DATA: Record<ChallengeType, ChallengeInfo> = {
  '1-step': {
    accounts: [
      { size: '2k', price: '9.99' },
      { size: '5k', price: '39' },
      { size: '10k', price: '79' },
      { size: '25k', price: '179' },
      { size: '50k', price: '289' },
      { size: '100k', price: '370', },
    ],
    rules: {
      dailyLoss: '5%',
      maxLoss: '10%',
      profitTarget: 'Unlimited',
    },
  },
  '2-step': {
    accounts: [
      { size: '2k', price: '14.99' },
      { size: '5k', price: '49' },
      { size: '10k', price: '89' },
      { size: '25k', price: '189' },
      { size: '50k', price: '299' },
      { size: '100k', price: '380' },
    ],
    rules: {
      dailyLoss: '4%',
      maxLoss: '8%',
      profitTarget: 'Unlimited',
    },
  },
  '3-step': {
    accounts: [
      { size: '2k', price: '19.99' },
      { size: '5k', price: '59' },
      { size: '10k', price: '99' },
      { size: '25k', price: '199' },
      { size: '50k', price: '319' },
      { size: '100k', price: '390' },
    ],
    rules: {
      dailyLoss: '3%',
      maxLoss: '7%',
      profitTarget: 'Unlimited',
    },
  },
};

export default function Pricing() {
  const [activeStep, setActiveStep] = useState<ChallengeType>('2-step');
  const [selectedAmount, setSelectedAmount] = useState<number>(
    parseInt(CHALLENGE_DATA['2-step'].accounts[0].size.replace('k', '000'))
  );

  const router = useRouter();

  // update selected amount when challenge type changes
  useEffect(() => {
    const firstSize = CHALLENGE_DATA[activeStep].accounts[0].size;
    setSelectedAmount(parseInt(firstSize.replace('k', '000')));
  }, [activeStep]);

  const handleGetStarted = (size: string) => {
    const amount = parseInt(size.replace('k', '000'));
    setSelectedAmount(amount);
    // simulate checkout navigation
    router.push(`/checkout?amount=${amount}&step=${activeStep}`);
  };

  const ruleInfo = CHALLENGE_DATA[activeStep].rules;

  return (
    <section className="py-24 px-4 bg-navy/80 relative overflow-hidden">
      <div className="absolute inset-0 bg-hero-glow pointer-events-none" />
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Choose Your <span className="text-gold">Challenge</span>
          </h2>
          <p className="text-gray-400 text-lg mb-8">
            70/30 Profit Split. No time limits. Pure trading.
          </p>

          {/* Challenge tabs */}
          <div className="flex justify-center gap-4 mb-8 flex-wrap">
            {(['1-step', '2-step', '3-step'] as const).map((step) => (
              <button
                key={step}
                onClick={() => setActiveStep(step)}
                className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 uppercase text-sm tracking-wider ${
                  activeStep === step
                    ? 'bg-gold text-black shadow-glow'
                    : 'border border-white/20 text-gray-300 hover:border-gold/50'
                }`}
              >
                {step}
              </button>
            ))}
          </div>

          {/* Rule comparison for selected challenge */}
          <motion.div
            key={activeStep}
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            transition={{ duration: 0.4 }}
            className="mb-12 text-gray-300"
          >
            <div className="flex justify-center gap-12 flex-wrap">
              <div>
                <p className="font-semibold">Daily Loss</p>
                <p>{ruleInfo.dailyLoss}</p>
              </div>
              <div>
                <p className="font-semibold">Max Loss</p>
                <p>{ruleInfo.maxLoss}</p>
              </div>
              <div>
                <p className="font-semibold">Profit Target</p>
                <p>{ruleInfo.profitTarget}</p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Account cards grid with animate presence */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeStep}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.3 }}
          >
            {CHALLENGE_DATA[activeStep].accounts.map((acc) => {
              const amountNumber = parseInt(acc.size.replace('k', '000'));
              const isSelected = amountNumber === selectedAmount;
              return (
                <AccountCard
                  key={acc.size}
                  size={acc.size}
                  price={acc.price}
                  featured={isSelected}
                  onGetStarted={() => handleGetStarted(acc.size)}
                />
              );
            })}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}