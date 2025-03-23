<script setup lang="ts">
useHead({
  title: 'Blog Create Page',
})

const router = useRouter()
const route = useRoute()

const id = computed(() => route.query.id)
const formRef = ref()
const form = reactive<{
  id?: string
  title: string
  content: string
}>({
  id: undefined,
  title: '',
  content: '',
})
const formRules = reactive({
  title: [
    {
      required: true,
      message: '请输入标题',
      trigger: 'blur',
    },
  ],
  content: [
    {
      required: true,
      message: '请输入内容',
      trigger: 'blur',
    },
  ],
})

const handleCreate = async () => {
  await $fetch('/api/blog', {
    method: 'POST',
    body: form,
  })
}

const handleUpdate = async () => {
  await $fetch(`/api/blog/${id.value}`, {
    method: 'PUT',
    body: form,
  })
}

const handleSubmit = async (formRef: any) => {
  formRef.validate(async (valid: any) => {
    if (valid) {
      if (id.value) {
        await handleUpdate()
      } else {
        await handleCreate()
      }

      router.replace('/blog')
    }
  })
}

const getBlogDetail = async () => {
  const res = await $fetch(`/api/blog/${id.value}`, {
    method: 'GET',
  })
  form.title = res.data.title
  form.content = res.data.content
}

onMounted(() => {
  if (id.value) {
    getBlogDetail()
  }
})
</script>

<template>
  <el-row class="blog-create-page" :gutter="20">
    <el-col :span="12" :offset="6">
      <el-form ref="formRef" :model="form" :rules="formRules">
        <el-form-item label="标题" prop="title">
          <el-input v-model="form.title" required />
        </el-form-item>
        <el-form-item label="内容" prop="content">
          <el-input type="textarea" v-model="form.content" required />
        </el-form-item>
        <el-form-item>
          <el-button @click="$router.replace('/blog')">返回</el-button>
          <el-button type="primary" @click="handleSubmit(formRef)">提交</el-button>
        </el-form-item>
      </el-form>
    </el-col>
  </el-row>
</template>
