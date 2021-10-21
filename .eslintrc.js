module.exports = {
  root: true,
  extends: ['@react-native-community', 'plugin:testing-library/react'],
  plugins: ['testing-library'],
  rules: {
    'no-console': 'error',
    'comma-dangle': ['error', 'never'],
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'off',
    'testing-library/await-async-query': 'error',
    'testing-library/no-await-sync-query': 'error',
    'testing-library/no-debug': 'warn',
    'testing-library/no-dom-import': 'off',
    'testing-library/prefer-screen-queries': 'off',
    'react-native/no-unused-styles': 2,
    'react-native/no-inline-styles': 0
  },
  overrides: [
    {
      files: ['**/__tests__/**/*.[jt]s?(x)', '**/?(*.)+(spec|test).[jt]s?(x)'],
      extends: ['plugin:testing-library/react']
    }
  ],
  settings: {
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts', '.tsx']
    },
    'import/resolver': {
      typescript: {
        alwaysTryTypes: true
      }
    }
  }
};
