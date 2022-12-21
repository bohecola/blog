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
      theme: "material-palenight"
    }
  },
  router: {
    options: {
      // linkActiveClass: "active"
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
        { name: "keywords", content: "bohecola,个人博客,个人空间" },
        { name: "description", content: "bohecola的个人博客,bohecola的个人空间" }
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
      link: [{ rel: "icon", type: "image/svg+xml", href: "/favicon.svg" }],
      noscript: [{ children: "Javascript is required" }],
      charset: "utf-8"
    }
  }
});
