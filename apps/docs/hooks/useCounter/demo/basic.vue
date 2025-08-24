<script setup lang='ts'>
import { useCounter } from '@sz-cis/vue-hooks'

const { count, increment, decrement, set, reset } = useCounter(10, {
    min: 0,
    max: 20
})

const handleIncrement = () => {
    increment()
}

const handleDecrement = () => {
    decrement()
}

const handleSet = () => {
    set(15)
}

const handleReset = () => {
    reset()
}
</script>

<template>
    <div>
        <div>count: {{ count }}</div>
        <sr-button type="primary" @click="handleIncrement">increment</sr-button>
        <sr-button type="primary" @click="handleDecrement">decrement</sr-button>
        <sr-button type="primary" plain @click="handleSet">set</sr-button>
        <sr-button type="danger" plain @click="handleReset">reset</sr-button>
    </div>
</template>