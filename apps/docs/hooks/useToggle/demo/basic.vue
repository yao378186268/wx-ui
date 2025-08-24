<script setup lang='ts'>
import { useToggle } from '@sz-cis/vue-hooks'

const { value, toggle, setTrue, setFalse, set } = useToggle(true)
</script>

<template>
    <div>
        <div>{{ value }}</div>

        <sr-button type="primary" @click="toggle">toggle</sr-button>
        <sr-button type="primary" @click="set(!value)">set</sr-button>
        <sr-button type="primary" @click="setTrue">setTrue</sr-button>
        <sr-button type="primary" @click="setFalse">setFalse</sr-button>
    </div>
</template>