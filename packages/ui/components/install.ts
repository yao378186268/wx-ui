import { App } from 'vue';
import { WxUiOptions, ComponentItem } from '../types/types';
import Button from './Button';
// import Input from './Input';

// 定义所有组件（原始名称 + 组件实例）
const components: ComponentItem[] = [
    { name: 'Button', component: Button },
    // { name: 'Input', component: Input },
];

// 工厂函数：根据配置生成安装函数
export const createInstaller = (options: WxUiOptions = {}) => {
    // 合并默认配置（默认前缀 'wx'）
    const { prefix = 'wx' } = options;

    // 生成安装函数
    const install = (app: App) => {
        components.forEach(({ name, component }) => {
            // 动态生成带前缀的组件名（如 'wx-button'）
            const componentName = `${prefix}-${name.toLowerCase()}`;
            app.component(componentName, component);
        });
    };

    // 返回安装函数和配置信息
    return {
        install,
        options: { prefix },
        // 精确组件名映射的类型
        componentNames: components.reduce((map, { name }) => {
            map[name] = `${prefix}-${name.toLowerCase()}`;
            return map;
        }, {} as Record<ComponentItem['name'], string>) // 这里指定键为组件原始名称
    };
};

// 默认安装器（使用默认前缀）
export const defaultInstaller = createInstaller();
