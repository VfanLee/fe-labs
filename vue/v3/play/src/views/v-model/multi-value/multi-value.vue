<script setup lang="ts">
import { reactive } from 'vue'
import MultiInput from './MultiInput.vue'

defineOptions({
  name: 'mutil-value',
})

const data = reactive({
  value: '',
  header: '',
  body: '',
  footer: '',
})
</script>

<template>
  <div>
    <MultiInput
      v-model="data.value"
      v-model:header="data.header"
      v-model:body="data.body"
      v-model:footer="data.footer"
    />
    <p>value: {{ data.value }}</p>
    <p>header: {{ data.header }}</p>
    <p>body: {{ data.body }}</p>
    <p>footer: {{ data.footer }}</p>
  </div>
</template>
