<script setup lang="ts">
import 'element-plus/dist/index.css'

import { ElDialog } from 'element-plus'

defineOptions({
  inheritAttrs: false,
})

const slots = defineSlots()
</script>

<template>
  <el-dialog v-bind="$attrs">
    <template v-for="(_, name) in slots" #[name]>
      <slot :name="name"></slot>
    </template>
  </el-dialog>
</template>
