module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
    './src/containers/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        dodgeBlue: {
          50: '#CFE8FC',
          100: '#BCDFFB',
          200: '#95CDF9',
          300: '#6EBBF7',
          400: '#48A8F5',
          500: '#2196F3',
          600: '#0B79D1',
          700: '#085A9B',
          800: '#063B66',
          900: '#031C31',
        },
      },
    },
    fontFamily: {
      sans: ['Quicksand', 'sans-serif'],
    },
  },
  plugins: [require('@tailwindcss/typography'), require('@tailwindcss/forms')],
};
