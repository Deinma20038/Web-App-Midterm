module.exports = {
    content: ['./src/**/*.{js,jsx,ts,tsx}'],
    darkMode: 'class',
    theme: {
      fontFamily: {
        display: ['Montserrat'],
        body: ['Montserrat'],
      },
      extend: {
        fontSize: {
          14: '14px',
          'xxs': '10px',
        },
        backgroundColor: {
          'main-bg': 'white',
          'main-dark-bg': '#20232A',
          'secondary-dark-bg': '#33373E',
          'light-gray': '#F7F7F7',
          'half-transparent': 'rgba(0, 0, 0, 0.5)',
        },
        borderWidth: {
          1: '1px',
        },
        borderColor: {
          color: 'rgba(0, 0, 0, 0.1)',
        },
        width: {
          400: '400px',
          760: '760px',
          780: '780px',
          800: '800px',
          1000: '1000px',
          1200: '1200px',
          1400: '1400px',
        },
        height: {
          80: '80px',
        },
        minHeight: {
          590: '590px',
        },
        backgroundImage: {
          'hero-pattern':
            "url('https://i.ibb.co/MkvLDfb/Rectangle-4389.png')",
        },
        colors: {
          yellow: {
            500: '#faa307',
          },
          gray:{
            400:'#7d7d7d'
          },
          orange:{
            400:"#FAE5C0"
          },
        }
      },
    },
    plugins: [],
  };