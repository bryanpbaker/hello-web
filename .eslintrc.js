module.exports = {
    "extends": ["airbnb", "plugin:prettier/recommended"],
    "rules": {
      "import/no-unresolved": "off",
      "import/extensions": "off",
      "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx"] }]
    },
    "settings": {
      "import/extensions": ["js", "jsx"]
    }
};