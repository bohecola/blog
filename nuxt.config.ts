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
      meta: [
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'keywords', content: 'bohecola,个人博客,个人空间' },
        { name: 'description', content: 'bohecola的个人博客,bohecola的个人空间' },
      ],
      script: [
        { 
          children: `
            var _hmt = _hmt || [];
            (function() {
              var hm = document.createElement("script");
              hm.src = "https://hm.baidu.com/hm.js?84cb0c8528bb5b73dce68df6d549118d";
              var s = document.getElementsByTagName("script")[0]; 
              s.parentNode.insertBefore(hm, s);
            })();
          ` 
        }
      ],
      link: [{ rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' }],
      noscript: [{ children: 'Javascript is required' }],
      charset: "utf-8",
    }
  }
})
