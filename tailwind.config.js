module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
    screens: {
      'sm': '280px',
      'md': '520px',
      'lg': '770px',
      'xl': '1280px',
      '2xl': '1536px',
    }
  },
  plugins: [require('@tailwindcss/forms')],
 };