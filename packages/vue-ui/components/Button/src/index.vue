<script setup lang="ts">
import type { ConfigProviderProps } from 'element-plus'
import type { ButtonProps } from '../types'

const { size, ...restProps } = defineProps<ButtonProps>()

const srTableSize = inject<Ref<ConfigProviderProps['size']>>('srTableSize')

const newSize = computed(() => srTableSize?.value || size)
</script>

<template>
    <el-button v-bind="{ ...$attrs, ...restProps }" :size="newSize">
        <!-- 自定义默认内容 -->
        <slot></slot>
        <!-- 自定义加载中组件 -->
        <template v-if="$slots.loading" #loading="scope">
            <slot name="loading" v-bind="scope"></slot>
        </template>
        <!-- 自定义图标组件 -->
        <template v-if="$slots.icon" #icon="scope">
            <slot name="icon" v-bind="scope"></slot>
        </template>
    </el-button>
</template>
