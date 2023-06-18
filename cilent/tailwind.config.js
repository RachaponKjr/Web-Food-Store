/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors:{
        'cream': '#b69b7d',
        'whip':'#decbb1',
        'mocha':'#382a1d'
      },
      keyframes:{
        slidopen:{
          '0%, 20%':{ borderRadius: '6px' },
          '20%,60%':{ width:'20rem'},
          '60%,100%':{ height:'30rem'}
        }
      },
      animation:{
        slidopen:' slidopen 1s ease-in-out'
      }
      
    },
  },
  plugins: [],
}

