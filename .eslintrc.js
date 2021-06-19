
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
  plugins: [
    'jsdoc'
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 12,
    sourceType: 'module'
  },
  rules: {
    'jsdoc/check-access': 1,
    'jsdoc/check-alignment': 1,
    'jsdoc/check-tag-names': 1,
    'jsdoc/check-types': 1,
    'jsdoc/empty-tags': 1,
    'jsdoc/implements-on-classes': 1,
    'jsdoc/multiline-blocks': 1,
    'jsdoc/newline-after-description': 1,
    'jsdoc/no-multi-asterisks': 1,
    'jsdoc/no-undefined-types': 1,
    'jsdoc/require-jsdoc': 1,
    'jsdoc/require-param': 1,
    'jsdoc/require-param-description': 1,
    'jsdoc/require-param-name': 1,
    'jsdoc/require-param-type': 1,
    'jsdoc/require-property': 1,
    'jsdoc/require-property-description': 1,
    'jsdoc/require-property-name': 1,
    'jsdoc/require-property-type': 1,
    'jsdoc/require-returns': 1,
    'jsdoc/require-returns-check': 1,
    'jsdoc/require-returns-description': 1,
    'jsdoc/require-returns-type': 1,
    'jsdoc/require-yields': 1,
    'jsdoc/require-yields-check': 1,
    'jsdoc/tag-lines': 1,
    'jsdoc/valid-types': 1,
    'jsdoc/require-file-overview': 1,
    'jsdoc/require-description': 1,
    'jsdoc/require-description-complete-sentence': 1,
    'jsdoc/check-indentation': 1,
    'indent': ['warn', 2],
    'linebreak-style': ['warn', 'unix'],
    'quotes': ['warn', 'single'],
    'semi': ['warn', 'never'],
    'no-trailing-spaces': 'warn',
    'object-curly-spacing': ['warn', 'always'],
    'arrow-spacing': ['warn', { before: true, after: true }],
    'multiline-comment-style': ['error'],
    'comma-spacing': ['warn', { 'before': false, 'after': true }],
    'array-bracket-spacing': ['warn', 'never'],
    'eol-last': 1,
    'comma-dangle': ['warn', 'never']
  }
}
