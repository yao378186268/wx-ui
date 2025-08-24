import { ref, watch } from 'vue'
import type { Ref } from 'vue'

export function useLocalStorage<T>(key: string, defaultValue: T): Ref<T> {
  const stored = localStorage.getItem(key)
  const value = ref(defaultValue) as Ref<T>
  
  if (stored) {
    try {
      value.value = JSON.parse(stored)
    } catch {
      value.value = defaultValue
    }
  }

  watch(value, (newValue) => {
    localStorage.setItem(key, JSON.stringify(newValue))
  }, { deep: true })

  return value
}