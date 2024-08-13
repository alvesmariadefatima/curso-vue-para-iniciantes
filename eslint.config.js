/** @type {import('eslint').Linter.Config} */
const config = {
    root: true,
    env: {
      node: true
    },
    extends: [
      'plugin:vue/vue3-essential',
      '@vue/standard'
    ],
    parserOptions: {
      parser: '@babel/eslint-parser'
    },
    rules: {
      'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
      'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
      'eol-last': ['error', 'always'],
      'indent': ['error', 4]
    }
  };
  
  module.exports = config;
  