module.exports = {
  // purge: ['./components/**/*.tsx', './pages/**/*.tsx', './icons/**/*.tsx'],
  theme: {
    fontFamily: {
      pop: ['Poppins',],
      int: ['Inter',],
      crim: ['Crimson Text']
    },
    colors: {
      white: '#ffff',
      blue: {
        dark: '#234361',
        default: '#234361',
        light: '#00A1FC'
      },
      red: '#D33F49',
      grey: {
        dark: '#E3E9EC',
        default: '#EFF3F5',
        light: '#EFF3F5'
      },
      green: '#5AEA90'
    },
    extend: {

    },
  },
  variants: {
    opacity: ['group-hover', 'responsive', 'hover', 'focus']
  },
}
