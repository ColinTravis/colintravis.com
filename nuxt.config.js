import { defineNuxtConfig } from 'nuxt'
const { theme } = require('./tailwind.config')

const meta = {
  title: 'ColinTravis',
  description: 'Colin Travis: Maker, Developer',
  url: 'https://colintravis.com',
  image: '/logos/ct_logo_dark.png'
}

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  app: {
    head: {
      title: meta.title,
      titleTemplate: '%s - Nuxt 3',
      meta: [
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { 'http-equiv': 'x-ua-compatible', content: 'ie=edge,chrome=1' },
        {
          hid: 'description',
          name: 'description',
          content: meta.description
        },
        { name: 'og:image', content: meta.image },
        { name: 'theme-color', content: theme.extend.colors['ct-blue'] }
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
        { rel: 'canonical', href: meta.url }
      ]
    }
  },

  modules: ['@storyblok/nuxt', '@nuxtjs/tailwindcss'],
  storyblok: {
    accessToken: process.env.STORYBLOK_API_PREVIEW,
    apiOptions: { region: 'us' },
    usePlugin: false
  }
})
