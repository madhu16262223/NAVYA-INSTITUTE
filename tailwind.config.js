export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        navy: { DEFAULT: '#0B2A5B', 900: '#071B3D' },
        brand: { DEFAULT: '#0B5ED7', 600: '#0A4FB4' },
        accent: { DEFAULT: '#FF850A', 600: '#E67300' },
        mist: '#F3F8FE',
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', '"Noto Sans Telugu"', 'system-ui', 'sans-serif'],
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-8px)' },
        },
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        'marquee-reverse': {
          '0%': { transform: 'translateX(-50%)' },
          '100%': { transform: 'translateX(0%)' },
        },
      },
      animation: {
        float: 'float 6s ease-in-out infinite',
        marquee: 'marquee 30s linear infinite',
        'marquee-reverse': 'marquee-reverse 30s linear infinite',
      },
      boxShadow: {
        card: '0 1px 2px rgba(11,42,91,.06), 0 8px 24px -12px rgba(11,42,91,.18)',
        glow: '0 0 20px -3px rgba(11,94,215,0.25)',
      },
    },
  },
  plugins: [],
};
