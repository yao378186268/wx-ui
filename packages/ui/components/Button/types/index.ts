import type { ButtonProps as ElButtonProps } from 'element-plus';

// 扩展 Element Plus 的 ButtonProps，添加自定义属性
export interface ButtonProps extends Partial<ElButtonProps> {
    // 这里可以添加你的自定义属性（如果有）
    // 例如：customProp?: string;
}
