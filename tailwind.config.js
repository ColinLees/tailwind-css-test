module.exports = {
  theme: {
    extend: {
      screens: {
        'xs': {'max': '639px'}
      },
      backgroundColor: {
        'd-10': 'rgba(0, 0, 0, 0.10)',
        'd-15': 'rgba(0, 0, 0, 0.15)',
        'd-20': 'rgba(0, 0, 0, 0.20)',
        'd-25': 'rgba(0, 0, 0, 0.25)',
        'l-10': 'rgba(255, 255, 255, 0.10)'
      }
    },
    fontFamily: {
      'title': ['Source Sans Pro', 'sans-serif'],
      'body': ['Noto Sans', 'Arial', 'sans-serif']
    }
  },
  variants: {},
  plugins: [
    require('tailwindcss-multi-column')(),
    require('postcss-nesting')
  ],
}
