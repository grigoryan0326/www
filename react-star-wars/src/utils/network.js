export const getApiResource = async (url) => {
  try {
    const res = await fetch(url)

    if (!res.ok) {
      console.log("Could not fetch data:", res.status)
      return false
    }

    const data = await res.json()
    return data
  } catch (error) {
    console.error(error.message)
    return false
  }
}

export const makeConcurrentRequest = async (urls) => {
  const results = await Promise.all(urls.map((url) => getApiResource(url)))
  return results
}
