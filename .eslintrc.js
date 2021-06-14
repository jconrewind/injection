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
    'max-classes-per-file': ['off'],
    'no-console': 'off',
    'no-plusplus': 'off',
    'no-underscore-dangle': 'off',
    'class-methods-use-this': 'off',
    'no-param-reassign': 'off',
    'no-bitwise': 'off',
    'consistent-return': 'off',
    'no-lonely-if': 'off',
    'no-restricted-syntax': 'off',
    'guard-for-in': 'off',
    'no-return-assign': 'off',
    'import/prefer-default-export': 'off',
    'no-loop-func': 'off',
    'no-await-in-loop': 'off',
    'no-return-await': 'off',
    radix: 'off',
  },
};
