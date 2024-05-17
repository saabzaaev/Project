/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: 
    {
      'ph' : {'max' : '440px'}
    },
    extend: {},
  },
  plugins: [],
}