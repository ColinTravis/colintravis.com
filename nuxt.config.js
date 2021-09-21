const { theme } = require('./tailwind.config');

const meta = {
  title: 'ColinTravis',
  description: 'Colin Travis: Maker, Developer',
  url: 'https://colintravis.com',
  image: '/logos/ct_logo_dark.png',
};

export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: meta.title,
    htmlAttrs: {
      lang: 'en-US',
      prefix: 'og: http://ogp.me/ns#',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { 'http-equiv': 'x-ua-compatible', content: 'ie=edge,chrome=1' },
      { hid: 'description', name: 'description', content: meta.description },
      { name: 'theme-color', content: theme.extend.colors['ct-blue'] },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'canonical', href: meta.url },
    ],
  },
  loading: false,
  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: ['~/components', '~/components/icons'],

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    'nuxt-seo',
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {},

  // SEO Options
  seo: {
    baseUrl: meta.url,
    title: meta.title,
    description: meta.description,
    image: meta.image,
    openGraph: {
      baseUrl: meta.url,
      title: meta.title,
      description: meta.description,
      image: meta.image,
    },
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    postcss: {
      plugins: {
        'postcss-nested': {},
      },
    },
  },
};
