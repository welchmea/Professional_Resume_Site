/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'text-color': '#040404',
        'background': '#FEFEFE',
        'light-green': '#F1F1F1',
        'component-sage': '#B1CBCA',
        'dark-sage': '#98B7B2',
        'light-sage': '#98B7B2',
        'turquoise' : '#0095CC',
        'light-turq': '#6DD1F4',
      }
    },
  },
  plugins: [],
}