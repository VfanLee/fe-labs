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
    // 如果服务器返回新的 token，则更新本地 token
    if (res.headers.authorization) {
      const token = res.headers.authorization.replace('Beader ', '')
      setToken(token)
      instance.defaults.headers.Authorization = `Beader ${token}`
    }
    // 如果服务器返回新的 refreshtoken，则更新本地 refreshtoken
    if (res.headers.refreshtoken) {
      const refreshtoken = res.headers.refreshtoken.replace('Beader ', '')
      setRefreshToken(refreshtoken)
    }
    // 如果无权限（可能 token 过期，也可能 refresh 过期），且不是 refresh-token 请求
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
