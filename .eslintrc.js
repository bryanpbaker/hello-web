module.exports = {
    "extends": ["airbnb", "plugin:prettier/recommended"],
    "rules": {
      "import/no-unresolved": "off",
      "import/extensions": "off",
      "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx"] }],
      "prettier/prettier": ["error", { "singleQuote": true }]
    },
    "settings": {
      "import/extensions": ["js", "jsx"]
    }
};