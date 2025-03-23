export default defineNuxtRouteMiddleware((to, from) => {
  const whiteList = ['/login', '/register', '/', '/about']
  if (!whiteList.includes(to.path)) {
    ElMessage.error('请先登录')
    return navigateTo('/login')
  }
})
