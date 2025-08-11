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
      outDir: 'dist/types', // 类型文件输出目录
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
      formats: ['es', 'umd'], // 同时输出 ESM（用于现代项目）和 UMD（用于传统项目）
    },
    // 处理外部依赖（避免打包 Vue、Element Plus 等）
    rollupOptions: {
      external: ['vue', 'element-plus'], // 这些依赖由用户项目提供
      output: {
        // 为外部依赖提供全局变量映射（UMD 模式需要）
        globals: {
          vue: 'Vue',
          'element-plus': 'ElementPlus'
        },
        exports: 'named'
      },
    },
    // 压缩代码
    minify: 'terser',
  }
});
