const TOKEN_KEY = '__token__'

export function setTokenToLocal (token) {
  localStorage.setItem(TOKEN_KEY, token)
}

export function getTokenFromLocal () {
  localStorage.getItem(TOKEN_KEY)
}

export function removeTokenFromLocal () {
  localStorage.removeItem(TOKEN_KEY)
}
