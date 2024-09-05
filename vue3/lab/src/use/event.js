import { onMounted, onUnmounted } from 'vue'

export function useEventListener(target, event, callback) {
  // 一个组合式函数也可以挂靠在所属组件的生命周期上
  onMounted(() => target.addEventListener(event, callback))
  onUnmounted(() => target.removeEventListener(event, callback))
}
