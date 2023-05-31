module.exports = {
  env: {
    browser: false,
    es2021: true,
    mocha: true,
    node: true,
  },
  extends: ['standard', 'prettier', 'plugin:node/recommended'],
  parserOptions: {
    ecmaVersion: 12,
  },
  rules: {
    'node/no-unsupported-features/es-syntax': [
      'error',
      { ignores: ['modules'] },
    ],
    'node/no-unpublished-require': [
      'warn',
      { allowModules: ['hardhat', 'chai', '@nomicfoundation/hardhat-toolbox'] },
    ],
    'node/no-unpublished-import': ['warn'],
    'node/no-missing-import': ['warn'],
    'no-lone-blocks': ['off'],
    'no-unused-vars': ['warn'],
    'node/no-extraneous-require': [
      'error',
      {
        allowModules: ['dotenv'],
      },
    ],
  },
  settings: {
    node: { tryExtensions: ['.js', '.json', '.node', '.ts', '.d.ts'] },
  },
};
