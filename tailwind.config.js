/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#1E3A8A', // Deep Blue
        secondary: '#3B82F6', // Soft Blue
        accent: '#F97316', // Warm Orange
        background: '#F3F4F6', // Light Gray
        text: '#111827', // Almost Black
        white: '#FFFFFF', // Pure White for backgrounds
        darkGray: '#4C566A', // Custom Dark Gray
        softWhite: '#ECEFF4', // Custom Soft White
        softBlue: '#88C0D0', // Custom Soft Blue
        mutedGold: '#EBCB8B', // Custom Muted Gold
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        heading: ['Roboto Slab', 'serif'],
      },
      fontSize: {
        md: '1rem', // Custom Medium Size
      },
      zIndex: {
        '60': '60', // Custom z-index value
      },
    },
  },
  plugins: [],
};
