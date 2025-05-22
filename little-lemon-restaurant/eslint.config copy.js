import js from '@eslint/js'
import css from '@eslint/css'
import { defineConfig } from 'eslint/config'
import prettier from 'eslint-config-prettier'
import pluginReact from 'eslint-plugin-react'
import prettierPlugin from 'eslint-plugin-prettier'
import globals from 'globals'
import path from 'path'
import { fileURLToPath } from 'url'
import { FlatCompat } from '@eslint/eslintrc'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const compat = new FlatCompat({ baseDirectory: __dirname })

export default defineConfig([
  {
    ignores: ['node_modules', 'dist'],
  },
  ...compat.extends([
    js.configs.recommended,
    pluginReact.configs.recommended,
    prettier,
  ]),
  {
    files: ['**/*.{js,mjs,cjs,jsx}'],
    languageOptions: {
      globals: globals.browser,
      parser: '@babel/eslint-parser',
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
        requireConfigFile: false,
        babelOptions: {
          presets: ['@babel/preset-react'],
        },
      },
    },
    plugins: {
      react: pluginReact,
      prettier: prettierPlugin,
    },
    rules: {
      'prettier/prettier': 'error',
      'react/react-in-jsx-scope': 'off',
    },
    settings: {
      react: {
        version: 'detect',
      },
    },
  },
  {
    files: ['**/*.css'],
    languageOptions: {
      parser: css.parser,
    },
    plugins: {
      css: css,
    },
    extends: [css.configs.recommended],
    rules: {
      'css/use-baseline': 'warn',
    },
  },
])
