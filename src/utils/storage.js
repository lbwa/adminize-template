const TOKEN_KEY = '__token__'

function setValueToLocal (key, val) {
  const normalizeVal = typeof val === 'string'
    ? val
    : JSON.stringify(val)
  localStorage.setItem(key, normalizeVal)
}

export function setTokenToLocal (token) {
  setValueToLocal(TOKEN_KEY, token)
}

export function getTokenFromLocal () {
  return localStorage.getItem(TOKEN_KEY)
}

export function removeTokenFromLocal () {
  localStorage.removeItem(TOKEN_KEY)
}
