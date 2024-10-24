import { useCallback, useEffect, useState } from "react"
import { debounce } from "lodash"
import { getApiResource } from "@utils/network"
import { API_SEARCH } from "@constants/api"
import { getPeopleId, getPeopleImage } from "@services/getPeopleData"
import ErrorMessage from "@components/ErrorMessage/ErrorMessage"
import SearchPageInfo from "@components/SearchPage/SearchPageInfo/SearchPageInfo"
import styles from "./SearchPage.module.scss"

const SearchPage = () => {
  const [inputValue, setInputValue] = useState("")
  const [people, setPeople] = useState([])
  const [error, setError] = useState(false)

  const handleSearch = (e) => {
    const value = e.target.value

    setInputValue(value)
    debouncedGetResponse(value)
  }

  useEffect(() => {
    getResponse("")
  }, [])

  const debouncedGetResponse = useCallback(
    debounce((value) => getResponse(value), 300),
    []
  )

  const getResponse = async (param) => {
    const res = await getApiResource(API_SEARCH + param)

    if (res) {
      const peopleList = res.results.map(({ name, url }) => {
        const id = getPeopleId(url)
        const image = getPeopleImage(id)
        return { name, image, id }
      })
      setPeople(peopleList)
      setError(false)
    } else {
      setError(true)
    }
  }

  return (
    <div className={styles.SearchPage}>
      <h1 className='header__text'>Search Page</h1>
      <input
        type='text'
        value={inputValue}
        onChange={handleSearch}
        className={styles.input}
        placeholder="Chapter's name"
      />
      {error ? <ErrorMessage /> : <SearchPageInfo people={people} />}
    </div>
  )
}

export default SearchPage
