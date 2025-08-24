import { onUnmounted } from 'vue'

export function useInterval() {
  let intervalId: number | null = null

  const set = (callback: () => void, delay: number) => {
    clear()
    intervalId = setInterval(callback, delay)
  }

  const clear = () => {
    if (intervalId) {
      clearInterval(intervalId)
      intervalId = null
    }
  }

  onUnmounted(clear)

  return {
    set,
    clear
  }
}