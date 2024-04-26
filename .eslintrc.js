module.exports = {
  ignores: [
    './src/22_Ejercicios_de_TypeScript/**/*',
  ],
  env: {
    browser: true,
    es2022: true,
    node: true,
  },
  extends: 'airbnb-base',
  overrides: [
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  rules: {
    'linebreak-style': 0,
    'no-console': 'off',
    'no-plusplus': ['error', { allowForLoopAfterthoughts: true }],
    'no-alert': 'off',
    'no-multi-spaces': 'off',
  },
};
