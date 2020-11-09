module.exports = {
    root: true,
    parser: "@typescript-eslint/parser",
    plugins: ["@typescript-eslint", "prettier"],
    extends: [
      "airbnb-typescript/base",
      "prettier/@typescript-eslint",
      "plugin:prettier/recommended",
    ],
    parserOptions: {
      project: "./tsconfig.json",
      ecmaVersion: 8,
      sourceType: "module",
    },
    env: {
      node: true,
      jest: true,
    },
    rules: {
      "prettier/prettier": "error",
      "no-new": "off",
    },
  };
  