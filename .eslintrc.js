module.exports = {
	extends: [
		"@bohecola",
		"@nuxt"
	],
	rules: {
		"quote-props": ["error", "as-needed"],
		"object-curly-newline": ["error", {
			ObjectExpression: { multiline: true, consistent: true },
			ObjectPattern: { multiline: true },
			ImportDeclaration: { multiline: true },
			ExportDeclaration: { multiline: true, minProperties: 3 }
		}],
		"vue/no-multiple-template-root": "off",
		"vue/multi-word-component-names": "off"
	}
};
