<script setup lang="ts">
definePageMeta({
  middleware: [
    function (to, from) {
      // Custom inline middleware
    },
    'test',
  ],
})
</script>

<template>
  <div>个人中心</div>
</template>
