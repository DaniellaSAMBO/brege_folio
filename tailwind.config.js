/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      animation: {
        fadeIn: 'fadeIn 0.3s ease-in-out',
        scaleIn: 'scaleIn 0.3s ease-in-out',
        rotateIn: 'rotateIn 0.3s ease-in-out',
        slideInRight: 'slideInRight 0.3s ease-in-out',
        slideInDown: 'slideInDown 0.3s ease-in-out',
      },
    },
  },
  plugins: [],
};