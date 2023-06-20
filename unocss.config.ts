import { defineConfig,
	presetAttributify,
	presetIcons,
	presetTypography,
	presetUno,
	presetWebFonts,
	transformerDirectives,
	transformerVariantGroup } from "unocss";

export default defineConfig({
	shortcuts: [
		// ["btn", "px-4 py-1 rounded inline-block bg-teal-600 text-white cursor-pointer hover:bg-teal-700 disabled:cursor-default disabled:bg-gray-600 disabled:opacity-50"],
		["icon-btn", "inline-block cursor-pointer select-none opacity-75 transition duration-200 ease-in-out hover:opacity-100 hover:text-teal-600"],
		["tag", "px-2 py-1 rounded cursor-pointer"],
		["btn", "px-4 py-1 inline-block rounded cursor-pointer"],
		["cyan-normal", "text-cyan-7 bg-cyan-7 hover:text-cyan-6 dark:text-cyan-6 dark:hover:text-cyan-5 bg-opacity-20"],
		["cyan-active", "text-cyan-4 bg-cyan-7 hover:bg-cyan-6 dark:text-cyan-5 dark:bg-cyan-9 dark:hover:bg-cyan-8"],
		["sky-normal", "text-sky-7 bg-sky-7 hover:text-sky-6 dark:text-sky-6 dark:hover:text-sky-5 bg-opacity-20"],
		["sky-active", "text-sky-4 bg-sky-7 hover:bg-sky-6 dark:text-sky-5 dark:bg-sky-9 dark:hover:bg-sky-8"],
		["green-normal", "text-green-7 bg-green-7 hover:text-green-6 dark:text-green-6 dark:hover:text-green-5 bg-opacity-20"],
		["green-active", "text-green-4 bg-green-7 hover:bg-green-6 dark:text-green-5 dark:bg-green-9 dark:hover:bg-green-8"]
	],
	presets: [
		presetUno(),
		presetAttributify(),
		presetIcons({ scale: 1.2 }),
		presetTypography(),
		presetWebFonts({
			fonts: {
				sans: "DM Sans",
				serif: "DM Serif Display",
				mono: "DM Mono"
			}
		})
	],
	transformers: [
		transformerDirectives(),
		transformerVariantGroup()
	]
});
