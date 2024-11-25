import img from './public/bag1.png'
module.exports = {

  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontSize: {
      xl: ['32px', '64px'],
      lg: ['24px', '28px'],
      base: ['16px', '24px'],
      sm: ['14px', '20px'],

    },
    screens: {
      'tablet': '640px',
      // => @media (min-width: 640px) { ... }

      'laptop': '1024px',
      // => @media (min-width: 1024px) { ... }

      'desktop': '1280px',
    },
    extend: {
      backgroundImage: {
        'bag2-pattern': "url('./public/bag1.png')",
        'bag1-pattern': "url('./public/bag2.png')",
      }
    },
  },
  plugins: [],
}