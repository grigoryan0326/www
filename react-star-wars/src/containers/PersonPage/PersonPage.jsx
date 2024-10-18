import { useParams } from "react-router"
import { getApiResource } from "@utils/network"
import { getPeopleImage } from "@services/getPeopleData"
import { useEffect, useState } from "react"
import { API_PERSON } from "../../constants/api"
import ErrorMessage from "@components/ErrorMessage/ErrorMessage"
import styles from "./PersonPage.module.scss"
import PersonInfo from "../../components/PersonPage/PersonInfo/PersonInfo"
import PersonPhoto from "../../components/PersonPage/PersonPhoto/PersonPhoto"

const PersonPage = () => {
  const [personInfo, setPersonInfo] = useState(null)
  const [personName, setPersonName] = useState("")
  const [personPhoto, setPersonPhoto] = useState("")
  const [error, setError] = useState(false)
  const { id } = useParams()

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
        }
      } catch (error) {
        console.log(error.message)
        setError(true)
      }
      setError(false)
    })()
  }, [id])

  return !error ? (
    <div className={styles.container}>
      <span className={styles.person__name}>{personName}</span>
      <div className={styles.wrapper}>
        <PersonPhoto
          personPhoto={personPhoto}
          personName={personName}
        />
        {personInfo && <PersonInfo personInfo={personInfo} />}
      </div>
    </div>
  ) : (
    <ErrorMessage />
  )
}
export default PersonPage
