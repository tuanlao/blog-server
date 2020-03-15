module.exports = {
  env: {
    es6: true,
    node: true,
  },
  extends: ['airbnb-base', 'plugin:prettier/recommended', 'prettier'],
  parser: 'babel-eslint',
  parserOptions: {
    ecmaFeatures: { impliedStrict: true },
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  rules: {},
  settings: {
    'import/resolver': {
      node: { moduleDirectory: ['src', 'node_modules'] },
    },
  },
};
