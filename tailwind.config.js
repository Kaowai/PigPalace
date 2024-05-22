const { warning } = require('framer-motion');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    theme: {
      borderWidth: {
        
      }
    },
    extend: {
      backgroundPosition: {
        'left-bottom': 'left bottom -12rem',
      },
      opacity: {
        '10': '0.1',
        '20': '0.2',
        '30': '0.3',
        '40': '0.4',
        '50': '0.5',
        '60': '0.6',
        '70': '0.7',
        '80': '0.8',
        '90': '0.9',
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
      spacing: {
        '64': '16rem',
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

        // text
        textsecondary: '#637381',
        textdisable: '#919EAB',
        textprimary: '#212B36',

        // background 
        disablebg: '#3919EAB',
        viewbg: '#00B8D9',
        viewbg_hover: '#006C9C',
        success_bg: '#22C55E',
        success_bg_hover: '#118D57',
        info_bg: '#00B8D9',
        primary_main: '#00A76F',
        login: '#F0F2F4',
        login1: '#f5f7f9',
        // warning
        warningdark: '#B76E00',
        warningbackground: '#FFAB0029',
        primary_dark: '#007867', 
        bg_orange: '#ff8036',

        // success
        successlight: '#22C55E',
        successbackground: '#22C55E29',
        warningmain: '#FFAB00',
        success_dark: '#118D57',
        facebook: '#4267B2'
      }
    },
  },
  plugins: [require("tailwind-scrollbar")],
}

