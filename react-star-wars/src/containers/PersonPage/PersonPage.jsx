import { useParams } from "react-router"
import React, { Suspense, useEffect, useState } from "react"
import { useSelector } from "react-redux"

import { getApiResource } from "@utils/network"
import { getPeopleImage } from "@services/getPeopleData"
import { API_PERSON } from "@constants/api"

import ErrorMessage from "@components/ErrorMessage/ErrorMessage"
import PersonInfo from "@components/PersonPage/PersonInfo/PersonInfo"
import PersonPhoto from "@components/PersonPage/PersonPhoto/PersonPhoto"
import PersonLinkBack from "@components/PersonPage/PersonLinkBack/PersonLinkBack"
import UiLoading from "@components/UI/UiLoading/UiLoading"

import styles from "./PersonPage.module.scss"

const PersonFilms = React.lazy(() =>
  import("@components/PersonPage/PersonFilms/PersonFilms")
)

const PersonPage = () => {
  const [personInfo, setPersonInfo] = useState(null)
  const [personName, setPersonName] = useState("")
  const [personPhoto, setPersonPhoto] = useState("")
  const [personFilms, setPersonFilms] = useState([])
  const [personFavorite, setPersonFavorite] = useState(false)
  const [error, setError] = useState(false)
  const { id } = useParams()

  const storeData = useSelector((state) => state.favoriteReducer)

  useEffect(() => {
    if (storeData[id]) {
      setPersonFavorite(true)
    } else {
      setPersonFavorite(false)
    }
  }, [storeData, id])

  useEffect(() => {
    ;(async () => {
      try {
        const res = await getApiResource(`${API_PERSON}/${id}`)
        if (res) {
          setPersonInfo([
            { title: "Name", data: res.name },
            { title: "Height", data: res.height },
            { title: "Mass", data: res.mass },
            { title: "Hair Color", data: res.hair_color },
            { title: "Skin Color", data: res.skin_color },
            { title: "Eye Color", data: res.eye_color },
            { title: "Birth Year", data: res.birth_year },
            { title: "Gender", data: res.gender },
          ])
          setPersonName(res.name)
          setPersonPhoto(getPeopleImage(id))
          res.films.length && setPersonFilms(res.films)
        }
      } catch (error) {
        console.log(error.message)
        setError(true)
      }
      setError(false)
    })()
  }, [id])

  return (
    <>
      {!error ? (
        <>
          <PersonLinkBack />
          <div className={styles.container}>
            <span className={styles.person__name}>{personName}</span>
            <div className={styles.wrapper}>
              <PersonPhoto
                personPhoto={personPhoto}
                personName={personName}
                id={id}
                personFavorite={personFavorite}
                setPersonFavorite={setPersonFavorite}
              />
              {personInfo && <PersonInfo personInfo={personInfo} />}
              {personFilms && (
                <Suspense fallback={<UiLoading theme='white' />}>
                  <PersonFilms personFilms={personFilms} />
                </Suspense>
              )}
            </div>
          </div>
        </>
      ) : (
        <ErrorMessage />
      )}
    </>
  )
}
export default PersonPage
