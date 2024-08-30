import { Link } from "react-router-dom"
import s from "./HireMe.module.scss"

const HireMe = () => {
  return (
    <Link to='/contacts' className={s.link}>
      <button className={s.button + " " + s.type1}></button>
    </Link>
  )
}
export default HireMe
