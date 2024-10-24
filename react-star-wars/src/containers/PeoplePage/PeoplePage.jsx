import { useCallback, useEffect, useState } from "react"
import { getApiResource } from "@utils/network"
import { API_PEOPLE } from "@constants/api"
import { getPeopleId, getPeopleImage } from "@services/getPeopleData"
import PeopleList from "@components/PeoplePage/PeopleList/PeopleList"
import ErrorMessage from "@components/ErrorMessage/ErrorMessage"
import PeopleNavigation from "@components/PeoplePage/PeopleList/PeopleNavigation/PeopleNavigation"
import UiLoading from "@components/UI/UiLoading/UiLoading"
import { useQueryParams } from "@hooks/useQueryParams"
import styles from "./PeoplePage.module.scss"

const PeoplePage = () => {
  const [people, setPeople] = useState([])
  const [errorApi, setErrorApi] = useState(false)
  const [isLoading, setIsLoading] = useState(true)
  const [prevPage, setPrevPage] = useState(null)
  const [nextPage, setNextPage] = useState(null)
  const [counterPage, setCounterPage] = useState(1)

  const query = useQueryParams()
  const queryPage = query.get("page")

  
  const getResource = useCallback(
    async (url) => {
      setIsLoading(true)
      
      const res = await getApiResource(url)
      
      if (res) {
        const peopleList = res.results.map(({ name, url }) => {
          const id = getPeopleId(url)
          const image = getPeopleImage(id)
          
          return { name, image, id }
        })
        setPeople(peopleList)
        setPrevPage(res.previous)
        setNextPage(res.next)
        setCounterPage(queryPage)
        setErrorApi(false)
      } else {
        setErrorApi(true)
      }
      setIsLoading(false)
    },
    [queryPage]
  )

  useEffect(() => {
    getResource(API_PEOPLE + queryPage)
  }, [queryPage, getResource])

  return (
    <>
      <PeopleNavigation
        counterPage={Number(counterPage)}
        nextPage={nextPage}
        prevPage={prevPage}
      />
      {errorApi && <ErrorMessage />}
      {isLoading ? <UiLoading /> : <PeopleList people={people} />}
    </>
  )
}

export default PeoplePage
