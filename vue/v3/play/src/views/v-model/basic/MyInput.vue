<script setup lang="ts">
defineOptions({
  name: 'MyInput',
})

const props = defineProps<{
  modelValue: string
}>()

const emit = defineEmits<{
  'update:moelValue': [value: string]
}>()
</script>

<template>
  <input
    class="custom-input"
    type="text"
    :value="modelValue"
    @input="(e) => emit('update:modelValue', e.target.value)"
  />
</template>

<style scoped>
.custom-input {
  line-height: 32px;
  height: 32px;
  padding: 0px 12px;
  border-width: 1px;
  border-radius: 8px;
  outline: none;

  &:hover {
    border-color: blue;
  }
}
</style>
