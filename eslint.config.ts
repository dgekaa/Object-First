import js from '@eslint/js';
import globals from 'globals';
import tsEslint from '@typescript-eslint/eslint-plugin';
import tsParser from '@typescript-eslint/parser';
import prettierConfig from 'eslint-config-prettier';

interface ESLintConfig {
  ignores?: string[];
  files?: string[];
  plugins?: Record<string, unknown>;
  parser?: unknown;
  parserOptions?: Record<string, unknown>;
  rules?: Record<string, unknown>;
  languageOptions?: {
    ecmaVersion?: number;
    globals?: Record<string, boolean>;
    parser?: unknown;
  };
}

const config: ESLintConfig[] = [
  {
    ignores: ['dist'],
  },
  {
    files: ['**/*.{ts,tsx}'],
    plugins: {
      '@typescript-eslint': tsEslint,
      prettier: require('eslint-plugin-prettier'),
    },
    languageOptions: {
      ecmaVersion: 2020,
      globals: {
        ...globals.browser,
        ...globals.node,
      },
      parser: tsParser,
    },
    rules: {
      ...js.configs.recommended.rules,
      ...prettierConfig.rules,
      'prettier/prettier': 'error',
      '@typescript-eslint/ban-ts-comment': [
        'error',
        {
          'ts-ignore': false,
          'ts-expect-error': false,
          'ts-nocheck': false,
          'ts-check': false,
        },
      ],
      '@typescript-eslint/no-explicit-any': 'error',
      '@typescript-eslint/consistent-type-assertions': [
        'error',
        {
          assertionStyle: 'never',
        },
      ],
      '@typescript-eslint/explicit-function-return-type': 'error',
      '@typescript-eslint/no-unused-vars': [
        'error',
        {
          argsIgnorePattern: '^_',
          varsIgnorePattern: '^_',
          caughtErrorsIgnorePattern: '^_',
        },
      ],
      'no-unused-vars': 'off',
      'no-console': 'warn',
      'no-debugger': 'error',
    },
  },
];

export default config;
