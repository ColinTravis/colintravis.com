/*
 ** TailwindCSS Configuration File
 */
module.exports = {
  purge: {
    enabled: process.env.NODE_ENV === "production",
  },
  content: ['storyblok/**/*.{vue,js}', 'pages/**/*.vue'],
  theme: {
    extend: {},
  },
};
