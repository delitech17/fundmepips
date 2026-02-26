/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./component/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: '#0B1426',
        'navy-light': '#121D33',
        gold: '#D4AF37',
      },
      backgroundImage: {
        'hero-glow': 'radial-gradient(ellipse at center, rgba(212, 175, 55, 0.15) 0%, transparent 70%)',
        'card-glow': 'radial-gradient(circle at top right, rgba(212, 175, 55, 0.1) 0%, transparent 60%)',
        'gold-gradient': 'linear-gradient(135deg, #D4AF37 0%, #F3D06C 100%)',
      },
      boxShadow: {
        'glow': '0 0 30px rgba(212, 175, 55, 0.1)',
        'glow-lg': '0 0 60px rgba(212, 175, 55, 0.15)',
      },
      fontWeight: {
        900: '900',
      }
    }
  },
  plugins: [],
}