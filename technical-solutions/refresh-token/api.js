import request from './request'
export function login() {
  return request.post('/login')
}
// 等等其他请求...

export * from './refreshToken'
