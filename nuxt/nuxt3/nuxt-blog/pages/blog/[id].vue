<script setup lang="ts">
const route = useRoute()

const id = computed(() => route.params.id)
const form = reactive({
  title: '',
  content: '',
})

const fetchData = async () => {
  const res = await $fetch(`/api/blog/${id.value}`)
  form.title = res.data.title
  form.content = res.data.content
}

onMounted(() => {
  fetchData()
})
</script>

<template>
  <el-row class="blog-detail-page" :gutter="20">
    <el-col :span="12" :offset="6">
      <el-form ref="formRef" :model="form">
        <el-form-item label="标题" prop="title">
          <el-input v-model="form.title" readonly />
        </el-form-item>
        <el-form-item label="内容" prop="content">
          <el-input type="textarea" v-model="form.content" readonly />
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="$router.push('/blog')">返回</el-button>
        </el-form-item>
      </el-form>
    </el-col>
  </el-row>
</template>

<style lang="scss" scoped></style>
