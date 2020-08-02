module.exports = {
  env: {
    browser: true,
    es2020: true,
  },
  extends: ['prettier'],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 11,
    sourceType: 'module',
  },
  plugins: ['prettier'],
  ignorePatterns: ['node_modules/', '.cache/', 'public/', 'dist/'],
  rules: {
    'prettier/prettier': ['error'],

    'import/prefer-default-export': ['off'],
  },
};
