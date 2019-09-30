module.exports = {
  theme: {
    extend: {
      screens: {
        'xs': { 'max': '639px' }
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
    },
    customForms: theme => ({
      default: {
        checkbox: {
          width: theme('spacing.8'),
          height: theme('spacing.8'),
          borderColor: theme('colors.gray[900]'),
          borderWidth: theme('borderWidth.2'),
          borderRadius: theme('borderRadius.none'),
          iconColor: theme('colors.gray[900]'),
          '&:focus' : {
            boxShadow: `0 0 0 2px ${theme('colors.orange[500]')}`,
            borderColor: theme('colors.gray[900]')
          },
          '&:checked': {
            borderColor: theme('colors.gray[900]'),
            backgroundColor: theme('colors.white'),
          },
        },
        radio: {
          width: theme('spacing.8'),
          height: theme('spacing.8'),
          borderColor: theme('colors.gray[900]'),
          borderWidth: theme('borderWidth.2'),
          iconColor: theme('colors.gray[900]'),
          icon: iconColor => `<svg viewBox="0 0 16 16" fill="${iconColor}" xmlns="http://www.w3.org/2000/svg"><circle cx="8" cy="8" r="4"/></svg>`,
          '&:focus' : {
            boxShadow: `0 0 0 2px ${theme('colors.orange[500]')}`,
            borderColor: theme('colors.gray[900]')
          },
          '&:checked': {
            borderColor: theme('colors.gray[900]'),
            backgroundColor: theme('colors.white'),
          },
        }
      }
    })
  },
  variants: {},
  plugins: [
    require('@tailwindcss/custom-forms'),
    require('tailwindcss-multi-column')()
  ],
}
