import DefaultTheme from 'vitepress/theme'
import type { App } from 'vue'
// 导入你的组件库
// import { createWxUi } from '@sz-cis/ui'
// 导入组件库样式（如果有的话）
// import '@sz-cis/ui/dist/style.css'
// element plus 组件库
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

// 可选：导入 Element Plus 图标（如果 UI 库用到了）
import * as ElementPlusIconsVue from '@element-plus/icons-vue'

// import { prefix } from '../../config/index'

// // 自定义组件前缀
// // const SrUi = createWxUi({ prefix })

export default {
    ...DefaultTheme,
    // 全局注册组件库
    enhanceApp({ app }: { app: App }) {
        // 注册 element/icons
        for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
            app.component(key, component)
        }
        // 注册 element plus 组件
        app.use(ElementPlus)
        // 注册 wx-ui 组件
        // app.use(SrUi)
    }
}
