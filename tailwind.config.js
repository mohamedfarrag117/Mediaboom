/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "website-bg": 'url("./public/website-bg.jpg")',
        "content-bg": 'url("./public/content.jpg")',
        "contact-band": 'url("./public/contact_band.jpg")',
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        essonnes: ["Essonnes Display", "serif"],
        nunito: ["Nunito Sans", "sans-serif"],
      },
    },
  },
  plugins: [],
};
