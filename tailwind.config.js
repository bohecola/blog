const { iconsPlugin, getIconCollections  } = require("@egoist/tailwindcss-icons");

/** @type {import('tailwindcss').Config} */
module.exports = {
	darkMode: "class",
	content: [
		"./components/**/*.{js,vue,ts}",
		"./layouts/**/*.vue",
		"./pages/**/*.vue",
		"./plugins/**/*.{js,ts}",
		"./content/**/*.md",
		"./app.vue",
		"./error.vue"
	],
	theme: {
		extend: {
			typography: (theme) => ({
				DEFAULT: {
					css: {
						a: {
							textDecoration: "none",
							borderBottom: `1px solid ${theme("colors.sky.300")}`
						},
						"a:hover": {
							borderBottomWidth: "2px"
						},
						pre: {
							borderRadius: theme("borderRadius.xl"),
							padding: theme("padding.5"),
							boxShadow: theme("boxShadow.md")
						}
					}
				},
				dark: {
					css: {
						a: {
							borderBottomColor: theme("colors.sky.400")
						}
					}
				}
			})
		}
	},
	plugins: [
		require("@tailwindcss/typography"),
		iconsPlugin({
			collections: getIconCollections(["mdi", "ant-design", "carbon", "material-symbols", "la", "ri"]),
			scale: 1.2,
			extraProperties: {
				"vertical-align": "text-bottom"
			}
		})
	]
};
