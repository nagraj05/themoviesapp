/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundColor:{
        nav: '#14181c',
        body:'#1d232a',
        box:'#445566'
      },
      fontFamily:{
        rob: ['Roboto', 'sans-serif'],
        ptsans:['PT Sans Pro', 'sans-serif'],
        pop:['Poppins', 'san-serif'],
        nunito:['Nunito', 'sans-serif'],
      },
      height:{
        '500':'500px',
      },
      width:{
        '350':'350px'
      },
      textColor:{
        nav: '#14181c',
        body:'#1d232a',
        word: '#99aabb'
      }
    },
  },
  plugins: [
    require('tailwind-scrollbar')({ nocompatible: true }),
  ],
}

