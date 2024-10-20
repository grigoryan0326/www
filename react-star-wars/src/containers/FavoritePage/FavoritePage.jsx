import { useSelector } from "react-redux"
import { useEffect, useState } from "react"
import cn from "classnames"
import PeopleList from "@components/PeoplePage/PeopleList/PeopleList"
import styles from "./FavoritePage.module.scss"

const FavoritePage = () => {
  const [people, setPeople] = useState([])
  const storeData = useSelector((state) => state.favoriteReducer)

  useEffect(() => {
    const arr = Object.entries(storeData)

    if (arr.length) {
      const res = arr.map(([key, value]) => ({
        name: value.name,
        id: key,
        image: value.photo,
      }))

      setPeople(res)
    }
  }, [storeData])

  return (
    <div className={styles.container}>
      <h1 className={cn(styles.name, "header__text")}>Favorites</h1>
      {people.length ? (
        <PeopleList people={people} />
      ) : (
        <h2 className={styles.text}>Nothing to show!</h2>
      )}
    </div>
  )
}
export default FavoritePage
