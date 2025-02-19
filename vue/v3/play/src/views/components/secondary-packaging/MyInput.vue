<script setup lang="ts">
import 'element-plus/dist/index.css'
import { ElInput } from 'element-plus'

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
