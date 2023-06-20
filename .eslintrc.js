module.exports = {
	extends: [
		"@nuxtjs/eslint-config-typescript"
	],
	rules: {
		// 缩进风格
		indent: ["error", "tab", { SwitchCase: 1 }],
		"no-tabs": ["error", { allowIndentationTabs: true }],
		"no-mixed-spaces-and-tabs": ["off"],
		// 链式调用换行
		"newline-per-chained-call": ["error", { ignoreChainWithDepth: 2 }],
		// 引号风格
		quotes: ["error", "double"],
		// 结尾分号
		semi: ["error", "always"],
		// 末尾逗号
		"comma-dangle": ["error", {
			arrays: "never",
			objects: "never",
			imports: "never",
			exports: "never",
			functions: "never"
		}],
		// 未使用的变量检查
		"no-unused-vars": ["warn"],
		// 块内填充
		"padded-blocks": ["error", {
			blocks: "never",
			classes: "always"
		}],
		// 语句块前空格
		"space-before-blocks": ["error", {
			functions: "always",
			keywords: "always",
			classes: "always"
		}],
		// 强制操作符使用一致的换行符风格
		"operator-linebreak": ["error", "before"],
		// switch冒号左右空格
		"switch-colon-spacing": ["error", { after: true, before: false }],
		// 禁止属性前有空白
		"no-whitespace-before-property": ["error"],
		// 括号左右空白
		"space-in-parens": ["error", "never"],
		// 行尾空白
		"no-trailing-spaces": ["error"],
		// 逗号前后空白
		"comma-spacing": ["error", { before: false, after: true }],
		// 文件结尾换行
		"eol-last": ["error", "always"],
		// 不允许多个空行
		"no-multiple-empty-lines": [
			"error", {
				max: 2,
				maxEOF: 0,
				maxBOF: 0
			}
		],
		// 数组风格配置
		"array-bracket-newline": ["error", "consistent"],
		"array-bracket-spacing": ["error", "never", {
			objectsInArrays: false,
			arraysInArrays: true
		}],
		"array-element-newline": ["error", "consistent"],
		// 对象风格配置
		"object-curly-newline": ["error", {
			ObjectExpression: { multiline: true, consistent: false },
			ObjectPattern: { multiline: true },
			ImportDeclaration: "never",
			ExportDeclaration: { multiline: true, minProperties: 3 }
		}],
		"object-curly-spacing": ["error", "always"],
		"key-spacing": ["error", { beforeColon: false }],
		// 函数风格配置
		"space-before-function-paren": ["error", {
			anonymous: "always",
			named: "never",
			asyncArrow: "always"
		}],
		"arrow-spacing": ["error", { before: true, after: true }],
		// 注释风格配置
		"spaced-comment": ["error", "always", {
			line: {
				markers: ["/"],
				exceptions: ["-"]
			},
			block: {
				markers: ["!"],
				exceptions: ["*"],
				balanced: true
			}
		}],
		// ES6
		// 禁止重复导入
		"no-duplicate-imports": ["error", { includeExports: true }],
		// Vue
		"vue/multi-word-component-names": "off",
		"vue/require-default-prop": "off",
		"vue/require-prop-types": "off",
		"vue/no-multiple-template-root": "off"
	}
};
