import { FlatCompat } from '@eslint/eslintrc';
import js from '@eslint/js';
import tsParser from '@typescript-eslint/parser';
import parser from 'astro-eslint-parser';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const compat = new FlatCompat({
	baseDirectory: __dirname,
	recommendedConfig: js.configs.recommended,
	allConfig: js.configs.all,
});

export default [
	{
		ignores: ['**/dist'],
	},
	...compat.extends('eslint:recommended'),
	{
		languageOptions: {
			ecmaVersion: 'latest',
			sourceType: 'script',
		},
	},
	...compat.extends('plugin:astro/recommended').map((config) => ({
		...config,
		files: ['**/*.astro'],
	})),
	{
		files: ['**/*.astro'],

		languageOptions: {
			parser: parser,
			ecmaVersion: 5,
			sourceType: 'script',

			parserOptions: {
				parser: '@typescript-eslint/parser',
				extraFileExtensions: ['.astro'],
			},
		},

		rules: {
			'prefer-const': 'error',
		},

		processor: 'astro/client-side-ts',
	},
	...compat.extends('plugin:@typescript-eslint/recommended').map((config) => ({
		...config,
		files: ['**/*.ts', '**/*.tsx'],
	})),
	{
		files: ['**/*.ts', '**/*.tsx'],

		languageOptions: {
			parser: tsParser,
			ecmaVersion: 5,
			sourceType: 'script',

			parserOptions: {
				project: './tsconfig.json',
			},
		},
	},
];
