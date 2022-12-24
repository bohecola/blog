module.exports = {
  extends: [
    "@nuxtjs/eslint-config-typescript"
  ],
  rules: {
    "vue/multi-word-component-names": "off",
    "vue/no-multiple-template-root": "off",
    "vue/require-default-prop": "off",
    "@typescript-eslint/no-unused-vars": "off",
    "no-tabs": "off",
    quotes: ["error", "double"],
    semi: ["error", "always"]
  }
};
