module.exports = {
  env: {
    node: true,
    commonjs: true,
    es2021: true,
    browser: true,
    jest: true
  },
  extends: [
    'eslint:recommended'
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module'
  },
  rules: {
    indent: ['warn', 2],
    'linebreak-style': ['warn', 'unix'],
    quotes: ['warn', 'single'],
    semi: ['warn', 'never'],
    'no-trailing-spaces': 'warn',
    'object-curly-spacing': ['warn', 'always'],
    'arrow-spacing': ['warn', { before: true, after: true }]
  },
}