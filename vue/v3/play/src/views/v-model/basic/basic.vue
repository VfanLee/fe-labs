<script setup lang="ts">
import { ref } from 'vue'
import MyInput from './MyInput.vue'
import MyCheck from './MyCheck.vue'

const textValue = ref('')
const checkValue = ref(false)
</script>

<template>
  <div>
    <MyInput v-model="textValue" />
    <p>textValue: {{ textValue }}</p>
  </div>

  <div>
    <MyCheck v-model="checkValue" label="checkbox" />
    <p>checkValue: {{ checkValue }}</p>
  </div>
</template>
