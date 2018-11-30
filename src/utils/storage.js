const TOKEN_KEY = '__tk__'
const USERNAME_KEY = '__usn__'

function setValueToLocal (key, val, storage) {
  const normalizeVal = typeof val === 'string'
    ? val
    : JSON.stringify(val)
  storage.setItem(key, normalizeVal)
}

function createStorageUtils (key, storage = localStorage) {
  return {
    setItem (value) {
      setValueToLocal(key, value, storage)
    },
    getItem () {
      return storage.getItem(key)
    },
    removeItem () {
      storage.removeItem(key)
    }
  }
}

export const tokenFromLocal = createStorageUtils(TOKEN_KEY, localStorage)

export const usernameFromStorage = createStorageUtils(USERNAME_KEY, localStorage)
