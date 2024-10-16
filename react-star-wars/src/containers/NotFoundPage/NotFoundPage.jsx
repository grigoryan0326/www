import notFound from "./img/not-found.png"
import { useLocation } from "react-router"
import styles from "./NotFoundPage.module.scss"

const NotFoundPage = () => {
  let location = useLocation()
  return (
    <div className={styles.notFound__container}>
      <img
        src={notFound}
        alt='404 Not Found'
        className={styles.notFound__img}
      />
      <p className={styles.notFound__text}>
        No match for <u>{location.pathname}</u>
      </p>
    </div>
  )
}
export default NotFoundPage
