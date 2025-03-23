<script setup lang="ts">
import type { BlogModel } from '@/server/model/blog'

useHead({
  title: 'Blog Page',
})

const data = ref<BlogModel[]>([])

const featchData = async () => {
  try {
    const result = await $fetch('/api/blog')
    data.value = result.data as BlogModel[]
  } catch (error) {
    alert('Featch data error')
  }
}

const handleDelete = async (data: BlogModel) => {
  await $fetch(`/api/blog/${data.id}`, {
    method: 'DELETE',
  })
  featchData()
}

onMounted(() => {
  featchData()
})
</script>

<template>
  <el-row class="blog-page" :gutter="20">
    <el-col :span="12" :offset="6">
      <el-row justify="end">
        <el-button type="primary" @click="$router.push('/blog/create')">创建博客</el-button>
      </el-row>
    </el-col>
    <el-col :span="12" :offset="6">
      <el-table :data="data" style="width: 100%">
        <el-table-column label="#" prop="id" />
        <el-table-column label="标题" prop="title" />
        <el-table-column label="内容" prop="content" />
        <el-table-column align="right">
          <template #default="{ $index, row }">
            <el-button size="small" type="success" @click="$router.push({ path: `/blog/${row.id}` })">查看</el-button>
            <el-button
              size="small"
              type="warning"
              @click="$router.push({ path: '/blog/create', query: { id: row.id } })"
            >
              编辑
            </el-button>
            <el-button size="small" type="danger" @click="handleDelete(row)">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
    </el-col>
  </el-row>
</template>
