<script setup lang="ts">
import { ref } from 'vue'

import MyInput from './MyInput.vue'
import MyDialog from './MyDialog.vue'

const value = ref('')
const visible = ref(false)
</script>

<template>
  <div>
    <div>
      <MyInput v-model="value">
        <template #prefix>prefix</template>
        <template #suffix>suffix</template>
        <template #prepend>prepend</template>
        <template #append>append</template>
      </MyInput>
    </div>

    <div>
      <button type="button" @click="visible = true">btn</button>
      <MyDialog v-model="visible">
        <!-- <template #title>title</template> -->
        <template #header>header</template>
        <template #default>default</template>
        <template #footer>footer</template>
      </MyDialog>
    </div>
  </div>
</template>
x
