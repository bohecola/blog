module.exports = {
	extends: [
		"@bohecola",
		"@nuxt"
	],
	rules: {
		"quote-props": ["error", "as-needed"],
		"vue/no-multiple-template-root": "off",
		"object-curly-newline": ["error", {
			ObjectExpression: { multiline: true, consistent: true },
			ObjectPattern: { multiline: true },
			ImportDeclaration: { multiline: true },
			ExportDeclaration: { multiline: true, minProperties: 3 }
		}]
	}
};
