<script setup lang="ts">
const res1 = await $fetch('https://jsonplaceholder.typicode.com/todos/1')
console.log('res1', res1)

const res2 = await useAsyncData('xxx', () => $fetch('https://jsonplaceholder.typicode.com/todos/1'))
console.log('res2', res2)

const { refresh, status } = await useFetch('https://jsonplaceholder.typicode.com/todos/1', { lazy: true })

// useLazyFetch()
</script>

<template>
  <h1>About</h1>
  <p>{{ status }}</p>
</template>
