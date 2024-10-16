import PropTypes from "prop-types"
import { Link } from "react-router-dom"
import styles from "./PeopleNavigation.module.scss"

const PeopleNavigation = ({  counterPage, nextPage, prevPage }) => {
  return (
    <div className={styles.container}>
      <Link
        to={`/people/?page=${counterPage - 1}`}
        className={styles.link}
      >
        <button
          className={styles.button}
          disabled={!prevPage}
        >
          Previous
        </button>
      </Link>
      <Link
        to={`/people/?page=${counterPage + 1}`}
        className={styles.link}
      >
        <button
          className={styles.button}
          disabled={!nextPage}
        >
          Next
        </button>
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
