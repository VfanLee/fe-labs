export function getToken() {
  return localStorage.getItem('token')
}

export function setToken(token) {
  localStorage.setItem('token', token)
}

export function getRefreshToken(token) {
  return localStorage.getItem('refresh')
}

export function setRefreshToken(token) {
  localStorage.setItem('refresh', token)
}
