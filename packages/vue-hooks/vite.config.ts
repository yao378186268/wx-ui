/*
 * @Author: 姚成成
 * @Date: 2025-08-24 12:06:49
 * @FilePath: /wx-ui/packages/hooks/vite.config.ts
 * @LastEditTime: 2025-08-24 12:52:37
 * 
 * Copyright (c) 2025 by 用户/公司名, All Rights Reserved. 
 * @Description: 
 * @LastEditors: 姚成成
 */
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import dts from 'vite-plugin-dts'

export default defineConfig({
  plugins: [
    vue(),
    dts({
      insertTypesEntry: true,
      outDir: 'dist',
    }),
  ],
  build: {
    lib: {
      entry: 'src/index.ts',
      name: 'hooks',
      fileName: 'index',
      formats: ['es'],
    },
    rollupOptions: {
      external: ['vue', '@vueuse/core'],
      output: {
        // 输出的包文件名
        entryFileNames: '[name].js',
        //让打包目录和我们目录对应
        preserveModules: true,
        globals: {
          vue: 'Vue',
          '@vueuse/core': 'VueUse',
        },
      },
    },
  },
})