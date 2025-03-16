import { defineStore } from 'pinia'

const useCounter = defineStore('counter', () => {
  const count = ref(0)

  const increment = (val: number) => {
    count.value += val
  }

  const decrement = (val: number) => {
    count.value -= val
  }

  const asyncIncrement = (val: number) => {
    setTimeout(() => {
      count.value += val * 100
    }, 3000)
  }

  return {
    count,
    increment,
    decrement,
    asyncIncrement,
  }
})

export default useCounter
