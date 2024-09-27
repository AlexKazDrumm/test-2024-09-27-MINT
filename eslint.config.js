import typescript from '@typescript-eslint/eslint-plugin';
import parser from '@typescript-eslint/parser';
import stylistic from '@eslint-stylistic/all';

const eslintConfig = [
  {
    files: ['**/*.{ts,tsx}'],
    languageOptions: {
      parser: parser,
      parserOptions: {
        project: './tsconfig.json',
        tsconfigRootDir: __dirname,
      },
    },
    plugins: {
      '@typescript-eslint': typescript,
    },
    rules: {
      ...typescript.configs.recommended.rules,
      '@typescript-eslint/explicit-function-return-type': 'warn',
      '@typescript-eslint/no-unused-vars': ['error', { argsIgnorePattern: '^_' }],
      '@typescript-eslint/no-explicit-any': 'off',
    },
  },
  {
    files: ['**/*.{js,jsx,ts,tsx}'],
    plugins: {
      stylistic,
    },
    rules: {
      ...stylistic.configs.recommended.rules,
      'stylistic/indent': ['error', 2],
      'stylistic/quotes': ['error', 'single'],
      'stylistic/semi': ['error', 'always'],
      'stylistic/max-len': ['warn', { code: 100 }],
    },
  },
  {
    files: ['**/*.{js,jsx,ts,tsx}'],
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
    },
    rules: {
      'no-unused-vars': ['error', { argsIgnorePattern: '^_' }],
    },
  },
];

export default eslintConfig;