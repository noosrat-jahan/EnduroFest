/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        roboto: ['Roboto', 'ui-sans-serif', 'system-ui'], // Add Roboto as the default sans-serif font
        montserrat: ['Montserrat', 'ui-sans-serif', 'system-ui'], // Add Montserrat as the default sans-serif font
      },
    },
  },
  plugins: [require('daisyui'),],
}

