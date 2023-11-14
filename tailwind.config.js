/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    fontFamily: {
      montserrat: ['Montserrat', 'sans-serif'],
      poppins: ['Poppins', 'sans-serif'],
      rubik: ['Rubik', 'sans-serif'],
      openSans: ['OpenSans', 'sans-serif'],
    },
    extend: {
      animation: {
        'spin-fast': 'spin 500ms linear infinite',
      },
      colors: {
        'bg-card-light-primary-color': 'var(--bg-card-light-primary-color)',
        'border-light-primary-color': 'var(--border-light-primary-color)',
        'bg-light-secondary-color': 'var(--bg-light-secondary-color)',
        'light-primary-hover-color': 'var(--light-primary-hover-color)',
      },
    },
  },
  plugins: [require('tailwind-scrollbar-hide')],
};
