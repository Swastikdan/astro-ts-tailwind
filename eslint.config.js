import globals from 'globals';
import pluginJs from '@eslint/js';
import tseslint from 'typescript-eslint';
import pluginReactConfig from 'eslint-plugin-react/configs/recommended.js';
import { fixupConfigRules } from '@eslint/compat';
export default [
  { files: ['**/*.{js,mjs,cjs,ts,jsx,tsx}'] },
  { languageOptions: { parserOptions: { ecmaFeatures: { jsx: true } } } },
  { languageOptions: { globals: { ...globals.browser, ...globals.node } } },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  ...fixupConfigRules(pluginReactConfig),
  ...eslintPluginAstro.configs.recommended,
  { parserOptions: { ecmaVersion: 'latest', sourceType: 'module' } },
  {
    rules: {
      semi: ['error', 'always'],
      quotes: ['error', 'double', { allowTemplateLiterals: true }],
      '@typescript-eslint/triple-slash-reference': 'off'
    }
  },
  {
    overrides: [
      {
        files: ['*.astro'],
        parser: 'astro-eslint-parser',
        parserOptions: { parser: '@typescript-eslint/parser', extraFileExtensions: ['.astro'] },
        rules: {}
      }
    ]
  }
];
