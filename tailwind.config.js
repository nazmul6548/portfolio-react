/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary-gradient-start': '#0f0715',
        'primary-gradient-end': '#2A1454',
      },
      backgroundImage: {
        'primary-gradient': 'linear-gradient(to right, #0f0715, #2a1454)',
      },
    },
  },
  plugins: [
    require('daisyui'),
  ],
}

