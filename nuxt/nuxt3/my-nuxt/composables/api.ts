export const apiCore = (url: string, options) => {
  const config = useRuntimeConfig()

  return useFetch(url, {
    baseURL: config.public.apiBase,
    onRequest(ctx) {
      const options = ctx.options
      const token = localStorage.getItem('token')
      options.headers = {
        ...options.headers,
        Authorization: `Bearer ${token}`,
      }
    },
  })
}

export const getApi = (url, options) => {
  return apiCore(url, options)
}
