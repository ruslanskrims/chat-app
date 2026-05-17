import { ref, watch, onUnmounted } from 'vue'

export function useError(delay: number = 2000) {
  const errorMessage = ref('')
  let timeoutId: ReturnType<typeof setTimeout> | null = null

  const setError = (message: string) => {
    errorMessage.value = message
  }

  const clearError = () => {
    if (timeoutId) {
      clearTimeout(timeoutId)
      timeoutId = null
    }
    errorMessage.value = ''
  }

  watch(errorMessage, (newValue) => {
    if (newValue) {
      if (timeoutId) clearTimeout(timeoutId)
      timeoutId = setTimeout(() => {
        errorMessage.value = ''
      }, delay)
    }
  })

  onUnmounted(() => {
    if (timeoutId) clearTimeout(timeoutId)
  })

  return {
    errorMessage,
    setError,
    clearError,
  }
}
