module.exports = {
    "env": {
        "browser": true,
        "es2021": true
    },
    "extends": [
        "plugin:react/recommended",
        "standard-with-typescript",
        "airbnb-typescript",
        "airbnb", "plugin:prettier/recommended"
    ],
    "overrides": [
    ],
    "parserOptions": {
        "ecmaVersion": "latest",
        "sourceType": "module",
        "project":"./tsconfig.json",
    },
    "plugins": [
        "react"
    ],
    "rules": {
        "react/jsx-filename-extension": [1, {
            "extensions": [".js", ".jsx",".ts",".tsx"]}
            ]
    }
}
