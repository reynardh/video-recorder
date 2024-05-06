import colors from 'tailwindcss/colors'

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          ...colors.red
        }
      }
    },

    fontFamily: {
      sans: ['Inter Variable', 'sans-serif']
    }
  },

  plugins: [require('@tailwindcss/forms'), require('@tailwindcss/typography')]
}
