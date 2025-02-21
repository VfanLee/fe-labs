<template>
  <div>
    <MultiInput
      v-model="data.value"
      :header.sync="data.header"
      :body.sync="data.body"
      :footer.sync="data.footer"
    />
    <p>value: {{ data.value }}</p>
    <p>header: {{ data.header }}</p>
    <p>body: {{ data.body }}</p>
    <p>footer: {{ data.footer }}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      data: {
        value: "",
        header: "",
        body: "",
        footer: "",
      },
    };
  },
  components: {
    MultiInput: () => import("./MultiInput.vue"),
  },
};
</script>
