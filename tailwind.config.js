module.exports = {
  theme: {
    extend: {},
    fontFamily: {
      'title': ['Source Sans Pro', 'sans-serif'],
      'body': ['Noto Sans', 'Arial', 'sans-serif']
    },
    screens: {
      'xs': {'max': '639px'},
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
    }
  },
  variants: {},
  plugins: [
    require('tailwindcss-multi-column')(),
    require('postcss-nesting')
  ],
}
