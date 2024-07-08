import globals from 'globals';
import pluginJs from '@eslint/js';
import tseslint from 'typescript-eslint';
import eslintPluginAstro from 'eslint-plugin-astro';
export default [
  { files: ['**/*.{js,mjs,cjs,ts}'] },
  { languageOptions: { globals: globals.browser } },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  ...eslintPluginAstro.configs.recommended,
  { parserOptions: { ecmaVersion: 'latest', sourceType: 'module' } },
  { rules: { semi: ['error', 'always'], quotes: ['error', 'double', { allowTemplateLiterals: true }], '@typescript-eslint/triple-slash-reference': 'off' } },
  {
    overrides: [
      {
        files: ['*.astro'],
        parser: 'astro-eslint-parser',
        parserOptions: { parser: '@typescript-eslint/parser', extraFileExtensions: ['.astro'] },
        rules: {},
      },
    ],
  },
];

