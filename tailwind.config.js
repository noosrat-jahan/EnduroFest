

/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class", // Ensures dark mode works via a CSS class
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
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
      colors: {
        bgprimary: "var(--background-primary)",
        fgprimary: "var(--foreground-primary)",
        title: "var(--homeTitle)",
      },
    },
  },
  plugins: [require('daisyui'),],
};

