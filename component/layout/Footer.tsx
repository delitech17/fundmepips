import { Mail, Linkedin, Twitter } from 'lucide-react';

export interface FooterProps {
  companyName?: string;
  tagline?: string;
  year?: number;
  links?: {
    trading: Array<{ label: string; href: string }>;
    company: Array<{ label: string; href: string }>;
    legal: Array<{ label: string; href: string }>;
  };
  social?: Array<{ icon: React.ReactNode; href: string; label: string }>;
}

export default function Footer({
  companyName = 'FUNDmePIPS',
  tagline = 'Premium trading capital for serious traders. 70/30 profit split, unlimited potential.',
  year,
  links,
  social
}: FooterProps = {}) {
  const currentYear = year || new Date().getFullYear();
  
  const defaultLinks = {
    trading: [
      { label: 'Challenge Models', href: '/challenge' },
      { label: 'Rules & Requirements', href: '/rules' },
      { label: 'Payouts Schedule', href: '/payouts' }
    ],
    company: [
      { label: 'About Us', href: '/about' },
      { label: 'FAQ', href: '/faq' },
      { label: 'Affiliates', href: '/affiliates' }
    ],
    legal: [
      { label: 'Privacy Policy', href: '/privacy' },
      { label: 'Terms of Service', href: '/terms' },
      { label: 'Risk Disclosure', href: '/risk' }
    ]
  };
  
  const footerLinks = links || defaultLinks;
  const socialLinks = social || [
    { icon: <Mail className="w-5 h-5" />, href: 'mailto:contact@fundmepips.com', label: 'Email' },
    { icon: <Twitter className="w-5 h-5" />, href: 'https://twitter.com/fundmepips', label: 'Twitter' },
    { icon: <Linkedin className="w-5 h-5" />, href: 'https://linkedin.com/company/fundmepips', label: 'LinkedIn' }
  ];

  return (
    <footer className="border-t border-white/10 bg-navy-light/50 backdrop-blur-sm" role="contentinfo" aria-label="Footer">
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold">
              FUNDme<span className="text-gold">PIPS</span>
            </h3>
            <p className="text-gray-400 text-sm">
              {tagline}
            </p>
          </div>

          {/* Trading Links */}
          <nav className="space-y-4" aria-label="Trading navigation">
            <h4 className="font-semibold text-white">Trading</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              {footerLinks.trading.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="hover:text-gold transition focus:outline-none focus:ring-2 focus:ring-gold rounded px-1">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Company Links */}
          <nav className="space-y-4" aria-label="Company navigation">
            <h4 className="font-semibold text-white">Company</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              {footerLinks.company.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="hover:text-gold transition focus:outline-none focus:ring-2 focus:ring-gold rounded px-1">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Social Links */}
          <div className="space-y-4">
            <h4 className="font-semibold text-white">Connect</h4>
            <nav aria-label="Social media links" className="flex gap-4">
              {socialLinks.map((social, idx) => (
                <a
                  key={idx}
                  href={social.href}
                  aria-label={social.label}
                  title={social.label}
                  className="w-10 h-10 flex items-center justify-center rounded-lg border border-white/10 hover:border-gold/50 hover:bg-gold/10 transition-all focus:outline-none focus:ring-2 focus:ring-gold"
                >
                  {social.icon}
                </a>
              ))}
            </nav>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent mb-8" />

        {/* Bottom */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-gray-400">
          <p>&copy; {currentYear} {companyName}. All rights reserved.</p>
          <nav className="flex gap-6" aria-label="Legal and policies">
            {footerLinks.legal.map((link) => (
              <a key={link.href} href={link.href} className="hover:text-gold transition focus:outline-none focus:ring-2 focus:ring-gold rounded px-1">
                {link.label}
              </a>
            ))}
          </nav>
        </div>
      </div>
    </footer>
  );
}
