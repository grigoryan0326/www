import { useNavigate } from "react-router-dom"
import { IoIosArrowBack } from "react-icons/io";
import styles from "./PersonLinkBack.module.scss"

const PersonLinkBack = () => {
  const navigate = useNavigate()

  const handleGoBack = () => {
    navigate(-1)
  }

  return (
    <div
      onClick={handleGoBack}
      className={styles.link}
    >
      <IoIosArrowBack className={styles.link__icon} />
      <span className={styles.link__text}>Go back</span>
    </div>
  )
}
export default PersonLinkBack
