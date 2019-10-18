export const theme = {
  extend: {
    container: {
      center: true
    },
    screens: {
      'xs': { 'max': '639px' }
    }
  },
  fontFamily: {
    sans: ['Source Sans Pro', 'sans-serif']
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
        '&:focus': {
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
        '&:focus': {
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
};
export const variants = {};
export const plugins = [
  require('@tailwindcss/custom-forms'),
  require('tailwindcss-multi-column')()
];
