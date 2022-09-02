import { defineNuxtConfig } from 'nuxt'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  modules: ['@storyblok/nuxt', '@nuxtjs/tailwindcss'],
  storyblok: {
    accessToken: process.env.STORYBLOK_API_PREVIEW,
    apiOptions: { region: 'us' },
    usePlugin: false
  }
})
