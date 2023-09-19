// import { createResolver } from "@nuxt/kit";
// const { resolve } = createResolver(import.meta.url);

export default defineNuxtConfig({
	modules: [
		"@unocss/nuxt",
		"@nuxtjs/color-mode",
		"@nuxt/content"
	],
	colorMode: {
		preference: "dark",
		classSuffix: ""
	},
	content: {
		markdown: {
			mdc: true,
			toc: {
				depth: 3,
				searchDepth: 3
			},
			anchorLinks: {
				depth: 4,
				exclude: [1]
			}
		},
		highlight: { theme: "one-dark-pro" }
	},
	css: ["@/assets/css/index.scss"],
	app: {
		baseURL: "/",
		buildAssetsDir: "/_nuxt/",
		head: {
			meta: [
				{ name: "viewport", content: "width=device-width, initial-scale=1" },
				{ name: "keywords", content: "bohecola,个人博客,个人空间" },
				{ name: "description", content: "bohecola的个人博客,bohecola的个人空间" }
			],
			link: [{ rel: "icon", type: "image/svg+xml", href: "/favicon.svg" }],
			noscript: [{ children: "Javascript is required" }],
			charset: "utf-8"
		}
	}
});
