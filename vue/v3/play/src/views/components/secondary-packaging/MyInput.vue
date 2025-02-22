<script setup lang="ts">
defineOptions({
  name: 'MyInput',
  inheritAttrs: false,
})

const slots = defineSlots()
</script>

<template>
  <el-input v-bind="$attrs">
    <template v-for="(_, name) in slots" #[name]>
      <slot :name="name"></slot>
    </template>
  </el-input>
</template>
