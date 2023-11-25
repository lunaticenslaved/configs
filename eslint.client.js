module.exports = {
    extends: [
        "plugin:react/recommended",
        "plugin:react/jsx-runtime",
        "plugin:react-hooks/recommended",
        './eslint.base.js'
    ],
    parserOptions: {
        sourceType: 'module',
    },
    env: {
        browser: true,
    },
    settings: {
        react: {
            version: "detect"
        }
    },
    plugins: ["react", "react-hooks"],
    rules: {
        "react-hooks/exhaustive-deps": "warn",
        "@typescript-eslint/no-namespace": 0
    },
};
