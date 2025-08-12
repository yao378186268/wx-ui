import { defineConfig } from 'vitepress'
import { vitepressDemoPlugin } from 'vitepress-demo-plugin'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
import { prefix } from '../config/index'

const newPrefix = prefix[0].toLocaleUpperCase() + prefix[1]

//  UI 组件库自动导入
const WxUiResolver = (): {
    type: 'component' | 'directive',
    resolve: any
} => {
    return {
        type: 'component',
        resolve: (name: string) => {
            // 匹配带前缀的组件（如 WxButton → wx-button）
            if (name.startsWith(newPrefix)) {
                // 转换为小写并添加连字符（WxButton → wx-button）
                const componentName = name.replace(newPrefix, '')
                // 返回组件路径（根据你的实际目录结构调整）
                return {
                    from: '@sz-cis/ui', // 你的 UI 组件库包名
                    name: componentName // 组件在库中的导出名称
                };
            }
        }
    };
};

export default defineConfig({
    // 站点基本信息
    title: 'WX组件库',
    description: '基于 Element Plus 的二次封装组件库',
    base: '/',
    head: [['link', { rel: 'icon', href: '/images/vitepress-logo-mini.svg' }]],

    // 主题配置
    themeConfig: {
        nav: [
            { text: '首页', link: '/' },
            { text: '组件', link: '/components/Button/' }
        ],
        sidebar: {
            '/components/': [
                {
                    text: '基础组件',
                    items: [
                        { text: 'Button 按钮', link: '/components/Button/' }
                        // 其他组件...
                    ]
                }
            ]
        }
    },

    // 代码预览插件
    markdown: {
        config(md) {
            md.use(vitepressDemoPlugin)
        },
    },

    // Vite 配置（关键：引入组件库）
    vite: {
        resolve: {
            // 确保能正确解析组件库
            alias: [
                // { find: '@sz-cis/ui', replacement: '../../../packages/components' }
            ]
        },
        plugins: [
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
            }) as any,
            Components({
                resolvers: [
                    ElementPlusResolver(), // 保留 Element Plus 解析器
                    WxUiResolver() // 添加自定义 UI 组件解析器
                ],
                dts: 'types/components.d.ts', // 自动生成类型声明文件
            })
        ]
    }
})
