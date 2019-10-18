export const plugins = [
  require('postcss-import'),
  require('tailwindcss'),
  require('postcss-nested'),
  require('postcss-extend'),
  require('autoprefixer')(['last 15 versions', '> 1%', 'ie 8', 'ie 7'], { cascade: true })
];