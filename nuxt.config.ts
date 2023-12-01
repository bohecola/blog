export default defineNuxtConfig({
	devtools: { enabled: false },
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
	},
	runtimeConfig: {
		public: {
			env: process.env.NODE_ENV
		}
	},
	css: ["@/assets/css/index.scss"],
	postcss: {
		plugins: {
			tailwindcss: {},
			autoprefixer: {}
		}
	},
	modules: [
		"@nuxtjs/color-mode",
		"@nuxtjs/google-fonts",
		"@nuxt/content"
	],
	colorMode: {
		preference: "system",
		classSuffix: ""
	},
	googleFonts: {
		families: {
			"DM Mono": {
				wght: [300, 400, 500],
				ital: [300, 400, 500]
			}
		},
		outputDir: "assets/google-fonts",
		stylePath: "css/google-fonts.css"
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
		highlight: {
			theme: {
				default: "vitesse-light",
				dark: "vitesse-dark"
			}
		}
	}
});
