/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        indigo: {
          50: '#f5f7ff',
          100: '#ebf0fe',
          200: '#ced9fd',
          300: '#a1b5fa',
          400: '#708cf5',
          500: '#4f69ed',
          600: '#3c4ed8',
          700: '#313ebc',
          800: '#2c3599',
          900: '#28317a',
          950: '#181c48',
        },
      },
    },
  },
  plugins: [],
}
