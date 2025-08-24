/*
 * @Author: 姚成成
 * @Date: 2025-05-27 11:03:08
 * @FilePath: /wx-ui/packages/ui/vite.config.ts
 * @LastEditTime: 2025-08-24 12:52:43
 * 
 * Copyright (c) 2025 by 用户/公司名, All Rights Reserved. 
 * @Description: 
 * @LastEditors: 姚成成
 */
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import path from 'path';
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
import dts from 'vite-plugin-dts'; // 用于生成类型声明文件

export default defineConfig({
  plugins: [
    vue(),
    // 生成类型声明文件（.d.ts）
    dts({
      include: ['src/**/*', 'types.ts', 'index.ts'], // 包含需要生成类型的文件
      insertTypesEntry: true, // 生成入口类型文件
    }),
    // 自动导入
    AutoImport({
      imports: ['vue', 'vue-router', 'pinia'],
      resolvers: [
        ElementPlusResolver(),
      ],
      dts: 'types/auto-imports.d.ts',
      eslintrc: {
        enabled: true, // 启用 ESLint 支持
        filepath: './.eslintrc-auto-import.json', // 生成的配置文件路径
        globalsPropValue: true, // 全局变量属性值
      },
    }),
    // 自动导入组件
    Components({
      resolvers: [
        ElementPlusResolver({
          importStyle: 'sass',
          directives: true,
          version: '2.1.5',
        }),
      ],
      dts: 'types/components.d.ts',
    }),
  ],

  resolve: {
    alias: {
      '@': path.resolve(__dirname, './'),
    },
  },

  // 库模式配置
  build: {
    // 输出目录（默认 dist，可自定义）
    outDir: 'dist',
    // 库模式开关
    lib: {
      // 入口文件（指向我们定义的 index.ts）
      entry: path.resolve(__dirname, 'index.ts'),
      // 组件库名称（全局引入时的变量名）
      name: 'WxUi',
      // 输出文件名格式（支持 es、umd 等）
      fileName: (format) => `wx-ui.${format}.js`,
    },
    // 处理外部依赖（避免打包 Vue、Element Plus 等）
    rollupOptions: {
      external: ['vue', 'element-plus'], // 这些依赖由用户项目提供
      output: [
        {
          // 打包格式
          format: 'es',
          // 输出的包文件名
          entryFileNames: '[name].js',
          //让打包目录和我们目录对应
          preserveModules: true,
          exports: 'named',
          //配置打包根目录
          dir: 'dist',
          // 在 UMD 构建模式下为这些外部化的依赖提供一个全局变量
          globals: {
            antd: 'antd',
            react: 'React',
            'react-dom': 'ReactDOM',
          },
        },
      ],
    },
    // 压缩代码
    minify: 'terser',
  }
});
