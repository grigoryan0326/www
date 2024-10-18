import PropTypes from "prop-types"
import { Link } from "react-router-dom"
import UiButton from "@ui/UiButton/UiButton"
import styles from "./PeopleNavigation.module.scss"

const PeopleNavigation = ({ counterPage, nextPage, prevPage }) => {
  return (
    <div className={styles.container}>
      <Link
        to={`/people/?page=${counterPage - 1}`}
        className={styles.link}
      >
        <UiButton
          text='Previous'
          disabled={!prevPage}
        />
      </Link>
      <Link
        to={`/people/?page=${counterPage + 1}`}
        className={styles.link}
      >
        <UiButton
          text='Next'
          disabled={!nextPage}
        />
      </Link>
    </div>
  )
}

PeopleNavigation.propTypes = {
  getResource: PropTypes.func,
  counterPage: PropTypes.number,
  nextPage: PropTypes.string,
  prevPage: PropTypes.string,
}
export default PeopleNavigation
