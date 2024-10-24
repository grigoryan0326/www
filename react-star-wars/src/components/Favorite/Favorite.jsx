import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { useSelector } from "react-redux"
import { MdBookmark } from "react-icons/md"
import styles from "./Favorite.module.scss"

const Favorite = () => {
  const [count, setCount] = useState(0)

  const storeData = useSelector((state) => state.favoriteReducer)

  useEffect(() => {
    const length = Object.keys(storeData).length
    
    length.toString().length > 2 ? setCount("...") : setCount(length)
  }, [storeData])

  return (
    <Link
      to='/favorites'
      className={styles.link}
    >
      <span className={styles.counter}>{count}</span>
      <MdBookmark className={styles.icon} />
    </Link>
  )
}
export default Favorite
