module.exports = {
  purge: [
    './resources/**/*.blade.php',
    './resources/**/*.js',
    './resources/**/*.vue',

  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
        scale: {
            '-1': '-1'
        }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
