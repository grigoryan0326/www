export const getLocalStorage = (key) => {
  const data = localStorage.getItem(key)
  if(data) return JSON.parse(data)
  return {}
}

export const setLocalStorage = (key, value) => {
  localStorage.setItem(key, JSON.stringify(value))
}