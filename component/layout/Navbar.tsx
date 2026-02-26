'use client';

import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { label: 'Models', href: '/challenge' },
    { label: 'Payouts', href: '/payouts' },
    { label: 'FAQ', href: '/faq' },
    { label: 'Affiliates', href: '/affiliates' },
  ];

  return (
    <nav className="fixed top-0 w-full z-50 border-b border-white/10 bg-navy/80 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 h-20 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="text-2xl font-bold tracking-tighter group">
          FUNDme
          <span className="text-gold group-hover:text-gold/80 transition-colors">PIPS</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8 text-sm font-medium">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="text-gray-300 hover:text-gold transition-colors duration-200"
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Desktop CTA Button */}
        <button className="hidden md:block bg-gold hover:bg-gold/90 text-black px-6 py-2 rounded-full font-bold text-sm transition-all duration-300 shadow-glow hover:shadow-glow-lg">
          Client Area
        </button>

        {/* Mobile menu button */}
        <button
          className="md:hidden p-2 hover:bg-white/10 rounded-lg transition-colors"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden border-t border-white/10 bg-navy/95 backdrop-blur-sm">
          <div className="max-w-7xl mx-auto px-4 py-4 space-y-3">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="block px-4 py-2 text-gray-300 hover:text-gold hover:bg-white/5 rounded-lg transition-colors"
              >
                {link.label}
              </Link>
            ))}
            <button className="w-full bg-gold hover:bg-gold/90 text-black px-4 py-2 rounded-lg font-bold transition-colors">
              Client Area
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}