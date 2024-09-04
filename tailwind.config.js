/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      // keyframes: {
      //   slideUnderline: {
      //     '0%, 100%': { transform: 'translateX(0)' }, 
      //     '10%': { transform: 'translateX(20%)' }, 
      //     '5%': { transform: 'translateX(-20%)' }, 
          
      //   },
      // },
      // animation: {
      //   slideUnderline: 'slideUnderline 3s infinite',
      // },
      keyframes: {
        slideUnderline: {
          '0%, 100%': { transform: 'translateX(0)', easing: 'ease-in-out' },
          '20%': { transform: 'translateX(20%)', easing: 'ease-in-out' },
          '40%': { transform: 'translateX(-20%)', easing: 'ease-in-out' },
          '60%': { transform: 'translateX(10%)', easing: 'ease-in-out' },
          '80%': { transform: 'translateX(-10%)', easing: 'ease-in-out' },
        },
      },
      animation: {
        slideUnderline: 'slideUnderline 8s cubic-bezier(0.4, 0, 0.2, 1) infinite',
      },
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

