export default defineNuxtConfig({
  modules: [
    "@unocss/nuxt",
    "@nuxtjs/color-mode",
    "@nuxt/content"
  ],
  content: {
    markdown: {
      mdc: true,
      toc: {
        depth: 2,
        searchDepth: 2
      },
      anchorLinks: {
        depth: 4,
        exclude: [1]
      }
    },
    highlight: {
      theme: "one-dark-pro"
    }
  },
  experimental: {
    reactivityTransform: true,
    viteNode: false
  },
  css: ["@/assets/css/index.scss"],
  colorMode: { classSuffix: "" },
  app: {
    baseURL: "/",
    buildAssetsDir: "/_nuxt/",
    head: {
      meta: [
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        { name: "keywords", content: "colax,个人博客,个人空间" },
        { name: "description", content: "colax的个人博客,colax的个人空间" }
      ],
      script: [
        {
          children: `
            var _hmt = _hmt || [];
            (function() {
              var hm = document.createElement("script");
              hm.src = "https://hm.baidu.com/hm.js?3a91eb11756100f0c4566114f639c8ed";
              var s = document.getElementsByTagName("script")[0]; 
              s.parentNode.insertBefore(hm, s);
            })();
          `
        }
      ],
      link: [{ rel: "icon", type: "image/svg+xml", href: "/favicon.svg" }],
      noscript: [{ children: "Javascript is required" }],
      charset: "utf-8"
    }
  }
});
