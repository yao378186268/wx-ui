<script setup lang="ts">
import { useFocus } from '@sz-cis/vue-hooks'
import { shallowRef } from 'vue'

const input = shallowRef()
const { focused } = useFocus(input)

const handleFocus = () => {
    focused.value = true
}
</script>

<template>
    <div>
        <div style="border: 1px solid;margin-bottom: 10px;">
            <input ref="input" type="text" placeholder="请输入内容">
        </div>

        <sr-button type="primary" @click="handleFocus">
            Click me to focus input below
        </sr-button>

    </div>
</template>
