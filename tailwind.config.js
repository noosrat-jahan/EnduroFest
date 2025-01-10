/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
        rancho: ['Rancho', 'cursive'],
        roboto: ['Roboto', 'ui-sans-serif', 'system-ui'], // Add Roboto as the default sans-serif font
        montserrat: ['Montserrat', 'ui-sans-serif', 'system-ui'], // Add Montserrat as the default sans-serif font
        poppins: ['Poppins', 'ui-sans-serif', 'system-ui'], // Add poppins as the default sans-serif font
        bebas: ['Bebas Neue', 'ui-sans-serif', 'system-ui'], // Add poppins as the default sans-serif font
      },
    },
  },
  plugins: [require('daisyui'),],
}

