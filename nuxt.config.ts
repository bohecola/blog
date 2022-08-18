import { defineNuxtConfig } from 'nuxt'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  modules: [
    '@unocss/nuxt',
    '@nuxtjs/color-mode'
  ],
  experimental: {
    reactivityTransform: true,
    viteNode: false,
  },
  css: ['@/assets/css/index.scss'],
  colorMode: {
    classSuffix: '',
  },
  runtimeConfig: {
    public: {
      baseURL: process.env.NODE_ENV === 'development'
        ? 'http://localhost:3000/api/posts'
        : 'https://canday.site:3000/api/posts'
    }
  },
  app: {
    baseURL: "/",
    buildAssetsDir: '/_nuxt/',
    head: {
      title: 'Test',
      meta: [{ name: 'viewport', content: 'width=device-width, initial-scale=1' }],
      link: [{ rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' }],
      noscript: [{ children: 'Javascript is required' }],
      charset: "utf-8",
    } 
  }
})
