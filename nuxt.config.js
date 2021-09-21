const { theme } = require('./tailwind.config');
import axios from 'axios';

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
  plugins: [
    '~/plugins/composition-api.js',
    '~/plugins/storyblok-rich-text-renderer.js',
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: ['~/components', '~/components/icons', '~/components/blok'],

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    [
      'storyblok-nuxt',
      {
        accessToken: 'KN2YufxCB1iYO9PLd3QzzAtt',
        cacheProvider: 'memory',
      },
    ],
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

  generate: {
    routes: function (callback) {
      const token = `KN2YufxCB1iYO9PLd3QzzAtt`;
      const version = 'published';
      let cache_version = 0;

      let toIgnore = ['home', 'en/settings'];

      // other routes that are not in Storyblok with their slug.
      let routes = ['/']; // adds / directly

      // Load space and receive latest cache version key to improve performance
      axios
        .get(`https://api.storyblok.com/v1/cdn/spaces/me?token=${token}`)
        .then((space_res) => {
          // timestamp of latest publish
          cache_version = space_res.data.space.version;

          // Call for all Links using the Links API: https://www.storyblok.com/docs/Delivery-Api/Links
          axios
            .get(
              `https://api.storyblok.com/v1/cdn/links?token=${token}&version=${version}&cv=${cache_version}&per_page=100`
            )
            .then((res) => {
              Object.keys(res.data.links).forEach((key) => {
                if (!toIgnore.includes(res.data.links[key].slug)) {
                  routes.push('/' + res.data.links[key].slug);
                }
              });

              callback(null, routes);
            });
        });
    },
  },
};
