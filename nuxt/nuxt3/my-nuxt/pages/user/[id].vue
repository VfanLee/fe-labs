<script setup lang="ts">
const route = useRoute()

console.log(route.params)

const id = ref('')

if (typeof route.params.id === 'string') {
  id.value = route.params.id
}
</script>

<template>
  <div>
    <div>命名路由</div>
    <div>[id]</div>
    <div>{{ id }}</div>
  </div>
</template>

<style lang="scss" scoped></style>
