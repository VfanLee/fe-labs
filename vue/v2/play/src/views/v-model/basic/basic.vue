<template>
  <div>
    <div>
      <MyInput v-model="textValue" />
      <p>textValue: {{ textValue }}</p>
    </div>

    <div>
      <MyCheckbox v-model="checkValue" label="checkbox" />
      <p>checkValue: {{ checkValue }}</p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      textValue: "",
      checkValue: false,
    };
  },
  components: {
    MyInput: () => import("./MyInput.vue"),
    MyCheckbox: () => import("./MyCheckbox.vue"),
  },
};
</script>
