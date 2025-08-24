import { ref } from 'vue'

export function useToggle(initialValue: boolean = false) {
  const value = ref(initialValue)
  
  const toggle = () => {
    value.value = !value.value
  }
  
  const set = (newValue: boolean) => {
    value.value = newValue
  }
  
  const setTrue = () => {
    value.value = true
  }
  
  const setFalse = () => {
    value.value = false
  }
  
  return {
    value,
    toggle,
    set,
    setTrue,
    setFalse
  }
}