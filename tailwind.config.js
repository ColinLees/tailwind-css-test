module.exports = {
  theme: {
    extend: {},
    fontFamily: {
      'title': ['Source Sans Pro', 'sans-serif'],
      'body': ['Noto Sans', 'Arial', 'sans-serif']
    }
  },
  variants: {},
  plugins: [
    require('tailwindcss-multi-column')()
  ],
}
