<script setup lang="ts">
import { ref } from 'vue'

import MyInput from './MyInput.vue'
import MyDialog from './MyDialog.vue'

const value = ref('')
const visible = ref(false)
</script>

<template>
  <div>
    <el-row>
      <MyInput v-model="value">
        <template #prefix>prefix</template>
        <template #suffix>suffix</template>
        <template #prepend>prepend</template>
        <template #append>append</template>
      </MyInput>
    </el-row>

    <el-row>
      <el-button type="primary" @click="visible = true">打开模态框</el-button>
      <MyDialog v-model="visible">
        <!-- <template #title>title</template> -->
        <template #header>header</template>
        <template #default>default</template>
        <template #footer>footer</template>
      </MyDialog>
    </el-row>
  </div>
</template>

<style scoped>
.el-row {
  margin-bottom: 20px;
}

.el-row:last-child {
  margin-bottom: 0;
}
</style>
