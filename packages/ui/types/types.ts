// 组件库配置选项
export interface WxUiOptions {
    prefix?: string; // 组件前缀，默认 'wx'
}

// 组件原始名称（与组件文件名对应）
export type ComponentName = 'Button' /* | 'Input' | 'Dialog' */; // 按需添加其他组件

// 组件映射类型
export interface ComponentItem {
    name: string; // 组件原始名称（如 'Button'）
    component: any; // 组件实例
}
