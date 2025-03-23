import { getRefreshToken } from './token'

// 并发处理：在刷新token过程中，防止请求重复刷新 token
let promise

// 通过 refreshtoken（长 token）获取 token（短 token）
export async function refreshtoken() {
  if (promise) {
    return promise
  }
  promise = new Promise(async (resolve, reject) => {
    const res = await request.get('/refresh-token', {
      headers: {
        Authorization: 'Bearer ' + getRefreshToken(),
      },
      __isRefreshToken: true,
    })
    // 是是否成功刷新了 token
    resolve(res.code === 20000)
  }).finally(() => {
    promise = null
  })
  return promise
}

// 判断是否是 refresh-token 请求
export function isRefreshRequest(config) {
  return !!config.__isRefreshToken
}
