/*
 * @Author: 姚成成
 * @Date: 2025-07-31 01:20:12
 * @FilePath: /wx-ui/packages/eslint-config/base.js
 * @LastEditTime: 2025-08-24 15:14:52
 * 
 * Copyright (c) 2025 by 用户/公司名, All Rights Reserved. 
 * @Description: 
 * @LastEditors: 姚成成
 */
import js from '@eslint/js';
import eslintConfigPrettier from 'eslint-config-prettier';
import turboPlugin from 'eslint-plugin-turbo';
import tseslint from 'typescript-eslint';
import onlyWarn from 'eslint-plugin-only-warn';

/**
 * A shared ESLint configuration for the repository.
 *
 * @type {import("eslint").Linter.Config[]}
 * */
export const config = [
  js.configs.recommended,
  eslintConfigPrettier,
  ...tseslint.configs.recommended,
  {
    plugins: {
      turbo: turboPlugin
    },
    rules: {
      'turbo/no-undeclared-env-vars': 'warn',
      '@typescript-eslint/explicit-module-boundary-types': 'off'
    }
  },
  {
    plugins: {
      onlyWarn
    }
  },
  {
    ignores: ['dist/**']
  }
];
