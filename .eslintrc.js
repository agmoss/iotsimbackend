module.exports = {
    env: {
        browser: true,
        node: true,
        es6: true,
    },
    extends: ["standard", "prettier"],
    globals: {
        Atomics: "readonly",
        SharedArrayBuffer: "readonly",
    },
    parserOptions: {
        ecmaVersion: 2018,
        sourceType: "module",
    },
    rules: {
        "no-console": "off",
        camelcase: "off",
    },
};
