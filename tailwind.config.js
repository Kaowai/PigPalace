/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      backgroundPosition: {
        'left-bottom': 'left bottom -12rem',
      },
      screens: {
        xs: '475px',
      },
      fontSize: {
        h1: '3rem',
      },
      height: {
        header: '560px',
        rate: '400px',
      },
      colors: {
        primary10: '#4EB577',
        primary20: '#558B6B',
        primary30: '#496052',
        primary40: '#2F3631',
        primary50: '#24332A',
        primary60: '#1B3325',
        secondary10: '#F2F2F2',
        secondary20: '#EAEAEA',
        secondary30: '#C8C8C8',
        secondary40: '#A6A6A6',
        secondary50: '#848484',
        secondary60: '#49454F',
        warning10: '#E65549',
        other10: '#6A26DA',
        other20: '#2C7A51',
        other30: '#EBFAED',
        other40: '#FFFEF3',
        textsecondary: '#637381'
      }
    },
  },
  plugins: [require("tailwind-scrollbar")],
}

