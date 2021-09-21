/*
 ** TailwindCSS Configuration File
 */
module.exports = {
  plugins: [
    require('@tailwindcss/typography'),
  ],
  purge: {
    enabled: process.env.NODE_ENV === 'production',
    content: [
      'components/**/*.vue',
      'layouts/**/*.vue',
      'pages/**/*.vue',
      'plugins/**/*.js',
      'nuxt.config.js',
    ],
  },
  theme: {
    extend: {
      fontFamily: {
        stolzl: ['Stolzl'],
      },
      colors: {
        'ct-blue': '#0799ce',
      },
    },
  },
  variants: {},
};
