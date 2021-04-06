module.exports = {
    "env": {
        "browser": true,
        "es2021": true,
        "node": true,
        "cypress/globals": true
    },
    "parserOptions": {
        "ecmaVersion": 2020,
        "sourceType": "module", // Allows for the use of imports
        "ecmaFeatures": {
            "jsx": true, // Allows for the parsing of JSX
            "ts": true,
        },
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
        "plugin:cypress/recommended",
    ],
    "overrides": [
        {
            "files": ["cypress/**/*.ts"],
            "excludedFiles": "*.json",
            "rules": {
                "quotes": ["error", "single"]
            }
        }
    ]
};
