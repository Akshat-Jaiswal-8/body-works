/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily : {
      'poppins' : ['Poppins' , 'sans-serif'],
      'rubik' : ['Rubik' , 'sans-serif'],
      'openSans' : ['OpenSans' , 'sans-serif'],
    },
    extend: {},
  },
  plugins: [],
}
