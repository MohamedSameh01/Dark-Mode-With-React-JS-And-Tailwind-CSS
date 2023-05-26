/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode:'class',
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      
      backgroundImage: {
        heroLight: "url('/src/assets/images/bg-light.svg')",
        heroDark: "url('/src/assets/images/bg-dark.svg')",
      },

      colors: {
        primary: '#232129',
        accent: {
          DEFAULT: '#6738E1',
          hover: '#5A26DF',
        },
        grey: '#494455'
      },
      
    },
  },
  plugins: [],
  backgroundImage: {
    heroLight: "url('/src/assets/images/bg-light.svg')",
    heroDark: "url('/src/assets/images/bg-dark.svg')",
  },
}