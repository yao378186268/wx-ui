import { createInstaller, defaultInstaller } from './components/install';
import { WxUiOptions } from './types/types';
import Button from './components/Button';
// import Input from './Input';

// 按需导出组件（原始组件，不带前缀）
export { Button };
// export { Input };

// 导出工厂函数（允许用户自定义配置）
export const createWxUi = (options: WxUiOptions) => {
    return createInstaller(options);
};

// 默认导出（使用默认前缀）
export default {
    ...defaultInstaller,
    // 保留默认安装方法，兼容 Vue.use()
    install: defaultInstaller.install
};

// 导出类型
export * from './types/types';
export * from './components/Button';
// export * from './Input';
