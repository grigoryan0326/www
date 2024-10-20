import { NavLink } from "react-router-dom"
import Favorite from "../Favorite/Favorite"
import styles from "./Header.module.scss"

const Header = () => {
  return (
    <header className={styles.container}>
      <ul className={styles.list__container}>
        <li className={styles.list__item}>
          <NavLink to='/'>Home</NavLink>
        </li>
        <li className={styles.list__item}>
          <NavLink to='/people/?page=1'>People</NavLink>
        </li>
        <li className={styles.list__item}>
          <NavLink to='/not-found'>Not Found</NavLink>
        </li>
      </ul>
      <Favorite />
    </header>
  )
}
export default Header
