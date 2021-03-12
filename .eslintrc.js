module.exports = {
    "env": {
        "browser": true,
        "es2021": true,
        "node": true,
        "cypress/globals": true
    },
    "parserOptions": {
        "ecmaVersion": 12
    },
    "rules": {
        "semi": ["error", "always"],
        "quotes": ["error", "double"],
        "no-unused-vars": "warn",
        "cypress/no-assigning-return-values": "error",
        "cypress/no-unnecessary-waiting": "error",
        "cypress/assertion-before-screenshot": "warn",
        "cypress/no-force": "warn",
        "cypress/no-async-tests": "error"
    },
    "extends": [
        "eslint:recommended",
        "plugin:cypress/recommended"
    ]
};
