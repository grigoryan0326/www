import { useEffect, useState } from "react"
import PropTypes from "prop-types"
import { makeConcurrentRequest } from "@utils/network"
import styles from "./PersonFilms.module.scss"

const PersonFilms = ({ personFilms }) => {
  const [films, setFilms] = useState([])

  useEffect(() => {
    ;(async () => {
      try {
        const data = await makeConcurrentRequest(personFilms)
        setFilms(data)
      } catch (error) {
        console.log(error.message)
      }
    })()
  }, [personFilms])

  return (
    <div className={styles.container}>
      <ul className={styles.list}>
        {films
          .sort((a, b) => a.episode_id - b.episode_id)
          .map(({ title, episode_id }) => (
            <li
              key={title}
              className={styles.list__item}
            >
              <span className={styles.item__id}>Episode {episode_id}</span>
              <span className={styles.list__colon}>:</span>
              <span className={styles.item__title}>{title}</span>
            </li>
          ))}
      </ul>
    </div>
  )
}

PersonFilms.propTypes = {
  personFilms: PropTypes.array,
}

export default PersonFilms
