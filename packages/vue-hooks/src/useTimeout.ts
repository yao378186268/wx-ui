import { onUnmounted } from 'vue'

export function useTimeout() {
  let timeoutId: number | null = null

  const set = (callback: () => void, delay: number) => {
    clear()
    timeoutId = setTimeout(callback, delay)
  }

  const clear = () => {
    if (timeoutId) {
      clearTimeout(timeoutId)
      timeoutId = null
    }
  }

  onUnmounted(clear)

  return {
    set,
    clear
  }
}