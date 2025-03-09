<script setup lang="ts">
defineOptions({
  name: 'MultiInput',
})

defineProps<{
  modelValue: string
  header: string
  body: string
  footer: string
}>()

const emit = defineEmits<{
  'update:modelValue': [value: string]
  'update:header': [value: string]
  'update:body': [value: string]
  'update:footer': [value: string]
}>()
</script>

<template>
  <div class="multi-input">
    <input
      type="text"
      :value="modelValue"
      @input="(e) => emit('update:modelValue', (e.target as HTMLInputElement).value)"
    />
    <input
      type="text"
      :value="header"
      @input="(e) => emit('update:header', (e.target as HTMLInputElement).value)"
    />
    <input
      type="text"
      :value="body"
      @input="(e) => emit('update:body', (e.target as HTMLInputElement).value)"
    />
    <input
      type="text"
      :value="footer"
      @input="(e) => emit('update:footer', (e.target as HTMLInputElement).value)"
    />
  </div>
</template>

<style lang="scss" scoped>
.multi-input {
  display: flex;
  gap: 8px;
  input {
    height: 30px;
    line-height: 30px;
    border-width: 1px;
    border-radius: 8px;
  }
}
</style>
