module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'airbnb-base',
  ],
  parserOptions: {
    ecmaVersion: 12,
  },
  rules: {
    'max-len': ['error', { code: 180 }],
    'no-unused-vars': 'off',
    'no-undef': 'off',
    'no-console': 'off',
    'class-methods-use-this': 'off',
    'max-classes-per-file': 'off',
    'no-empty': 'off',
    'no-param-reassign': 'off',
  },
};
