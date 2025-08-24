import { ref } from 'vue'

export function useCounter(initialValue: number = 0, options?: {
  min?: number
  max?: number
}) {
  const count = ref(initialValue)
  
  const increment = (delta: number = 1) => {
    const newValue = count.value + delta
    if (options?.max !== undefined && newValue > options.max) {
      count.value = options.max
    } else {
      count.value = newValue
    }
  }
  
  const decrement = (delta: number = 1) => {
    const newValue = count.value - delta
    if (options?.min !== undefined && newValue < options.min) {
      count.value = options.min
    } else {
      count.value = newValue
    }
  }
  
  const set = (value: number) => {
    if (options?.min !== undefined && value < options.min) {
      count.value = options.min
    } else if (options?.max !== undefined && value > options.max) {
      count.value = options.max
    } else {
      count.value = value
    }
  }
  
  const reset = () => {
    count.value = initialValue
  }
  
  return {
    count,
    increment,
    decrement,
    set,
    reset
  }
}