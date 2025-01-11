/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          primary: '#00A6D1',    // Brighter, more vibrant blue
          secondary: '#0088AB',  // Darker shade for hover states
          light: '#E6F6FA',     // Light teal for backgrounds
          accent: '#FFD700',    // Gold accent color
        }
      }
    },
  },
  plugins: [],
};