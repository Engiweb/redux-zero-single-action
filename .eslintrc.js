module.exports = {
  root: true,
  env: {
    node: true,
    jest: true
  },
  parser: '@babel/eslint-parser',
  parserOptions: {
    sourceType: 'module',
    allowImportExportEverywhere: false,
    ecmaFeatures: {
      globalReturn: false,
    }
  },
  extends: [
    'eslint-config-airbnb-base',
    'eslint:recommended',
    'plugin:security/recommended',
  ],
  plugins: [
    'import',
    'security',
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
    React: 'writable',
    localStorage: true
  },
  rules: {
    'import/prefer-default-export': 0,
    'linebreak-style': ['error', 'unix'],
    'comma-dangle': ['error', 'only-multiline'],
    quotes: [2, 'single', { avoidEscape: true }],
    'no-nested-ternary': 0,
    'no-underscore-dangle': 0,
    'class-methods-use-this': 0,
    'no-case-declarations': 0,
    'import/extensions': 0,
    'no-restricted-syntax': 0,
    'guard-for-in': 0,
    'no-await-in-loop': 0,
    'no-continue': 0,
    'max-len': [2, 200, 4, { ignoreUrls: true }],
    semi: [2, 'never'],
    radix: 0,
    'security/detect-object-injection': 0,
    'no-plusplus': 0,
    'consistent-return': 0
  }
}
