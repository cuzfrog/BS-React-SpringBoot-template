module.exports = {
  "env": {
    "browser": true,
    "es6": true
  },
  "extends": [
    "plugin:react/recommended",
    "plugin:@typescript-eslint/eslint-recommended",
    "plugin:@typescript-eslint/recommended",
  ],
  "globals": {
    "Atomics": "readonly",
    "SharedArrayBuffer": "readonly"
  },
  "parser": "@typescript-eslint/parser",
  "parserOptions": {
    "project": './tsconfig.json',
    "ecmaFeatures": {
      "jsx": true
    },
    "ecmaVersion": 2018,
    "sourceType": "module"
  },
  "plugins": [
    "react",
    "@typescript-eslint"
  ],
  "settings": {
    "react": {
      "version": "detect",
    },
  },
  "rules": {
    "@typescript-eslint/semi": ["warn", "always"],
    "@typescript-eslint/quotes": ["warn", "double"],
    "@typescript-eslint/explicit-function-return-type": "off",
    "@typescript-eslint/no-use-before-define": "off",
    "@typescript-eslint/no-inferrable-types": "off",
    "@typescript-eslint/no-explicit-any": "off",
    "@typescript-eslint/no-empty-function": "warn",
    "@typescript-eslint/member-delimiter-style": "off",
    "react/jsx-no-undef": "off",
    "@typescript-eslint/no-unused-vars": "off",
  },
};
