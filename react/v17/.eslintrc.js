module.exports = {
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      extends: ['pipenet-typescript-react', 'plugin:prettier/recommended'],
      rules: {
        'max-params': ['error', 5],
        '@typescript-eslint/no-explicit-any': [2, 'always'],
      },
    },
    {
      files: ['*.js', '*.jsx'],
      extends: ['pipenet-react', 'plugin:prettier/recommended'],
      rules: {
        'one-var': [0],
        'no-invalid-this': [0],
        'max-params': ['error', 5],
        'generator-star-spacing': [0],
        'some-rule-name': 'off',
        complexity: ['error', { max: 100 }],
        'prettier/prettier': ['error', { endOfLine: 'auto' }],
        semi: [2, 'always'],
      },
    },
  ],
  ignorePatterns: ['/src/**/locale/*.js', '/src/**/locale/*.ts', '/src/shared/api/'],
  parserOptions: {
    sourceType: 'module',
    ecmaVersion: 2015,
    ecmaFeatures: {
      legacyDecorators: true,
      jsx: true,
    },
  },
  env: {
    node: true,
    jest: true,
    browser: true,
  },
  globals: {
    moment: true,
    Hope: true,
    __ANT_PREFIX__: true,
  },
  settings: {
    react: {
      version: 'detect',
    },
    'import/resolver': {
      node: {
        paths: ['/src', '/typings'],
      },
      webpack: {
        alias: {
          map: [['@', './src/']],
        },
        extensions: ['.ts', '.tsx', 'd.ts', '.js', '.jsx', '.native.js'],
      },
      typescript: {
        alwaysTryTypes: true,
      },
    },
  },
};
