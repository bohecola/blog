const defaultTheme = require("tailwindcss/defaultTheme");
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
							borderRadius: theme("borderRadius.md"),
							padding: theme("padding.5"),
							borderWidth: "1px",
							borderColor: "#ECEBE8",
							backgroundColor: "#F6F5F4"
						}
					}
				},
				invert: {
					css: {
						a: {
							borderBottomColor: theme("colors.sky.400")
						},
						pre: {
							borderColor: "#201E1B",
							backgroundColor: "#121110"
						}
					}
				}
			}),
			fontFamily: {
				mono: ["DM Mono", ...defaultTheme.fontFamily.mono]
			},
			backgroundImage: {
				"grid-texture": "url('@/assets/img/grid.svg')"
			}
		}
	},
	plugins: [
		require("@tailwindcss/typography"),
		iconsPlugin({
			collections: getIconCollections(["mdi", "ant-design", "carbon", "material-symbols", "ri"]),
			scale: 1.2,
			extraProperties: {
				"vertical-align": "text-bottom"
			}
		})
	]
};
