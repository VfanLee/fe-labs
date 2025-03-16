<template>
  <Layout>
    <template #menu>
      <ul>
        <li>
          <RouterLink :to="{ name: 'v-model-basic' }">
            v-model 基础示例
          </RouterLink>
        </li>
        <li>
          <RouterLink :to="{ name: 'v-model-multi-value' }">
            绑定多个 v-model
          </RouterLink>
        </li>
      </ul>
    </template>
  </Layout>
</template>

<script>
export default {
  components: {
    Layout: () => import("@play/components/Layout/index.vue"),
  },
};
</script>

<style></style>
