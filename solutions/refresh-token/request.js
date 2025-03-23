import { getToken, setToken, setRefreshToken } from './token'
import { refreshtoken, isRefreshRequest } from './api'

const instance = axios.create({
  baseURL: 'https://example.com/api/',
  timeout: 3000,
  headers: {
    Authorization: `Beader ${getToken()}`,
  },
})

instance.interceptors.request.use(
  function (config) {
    return config
  },
  function (error) {
    return Promise.reject(error)
  },
)

// 响应拦截器
instance.interceptors.response.use(
  async function (res) {
    if (res.headers.authorization) {
      const token = res.headers.authorization.replace('Beader ', '')
      setToken(token)
      instance.defaults.headers.Authorization = `Beader ${token}`
    }
    if (res.headers.refreshtoken) {
      const refreshtoken = res.headers.refreshtoken.replace('Beader ', '')
      setRefreshToken(refreshtoken)
    }

    // 如果无权限，且不是 refresh-token 请求
    if (res.data.code === 401 && !isRefreshRequest(res.config)) {
      // 刷新 token
      const isSuccess = await refreshtoken()
      // 是否成功刷新了 token
      if (isSuccess) {
        // 重新请求
        res.config.headers.Authorization = `Beader ${getToken()}`
        const res = await instance.request(res.config)
        return res.data
      } else {
        // 无权限
        console.log('回到登录页，重新登录')
        return res.data
      }
    }

    return res.data
  },
  function (error) {
    return Promise.reject(error)
  },
)

export default instance
