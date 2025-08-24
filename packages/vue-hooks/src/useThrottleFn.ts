import { onUnmounted } from 'vue'

export function useThrottleFn<T extends (...args: any[]) => any>(
  fn: T,
  delay: number = 300
): (...args: Parameters<T>) => void {
  let lastExecTime = 0
  let timeoutId: number | null = null

  onUnmounted(() => {
    if (timeoutId) {
      clearTimeout(timeoutId)
    }
  })

  return (...args: Parameters<T>) => {
    const now = Date.now()
    
    if (now - lastExecTime >= delay) {
      fn(...args)
      lastExecTime = now
    } else {
      if (timeoutId) {
        clearTimeout(timeoutId)
      }
      timeoutId = setTimeout(() => {
        fn(...args)
        lastExecTime = Date.now()
      }, delay - (now - lastExecTime))
    }
  }
}