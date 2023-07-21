/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'poppins' : ['Poppins'],
      },
      colors: {
        'primary' : '#090580',
        'secondary' : '#01468C'
      },
      backgroundImage: {
        'landingbg': "url('/src/assets/landing-bg.png')",
        'footerbg' : "url('/src/assets/footer-bg.png')"
      }
    },
  },
  plugins: [],
}

