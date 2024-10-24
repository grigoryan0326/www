import PropTypes from "prop-types"
import styles from "./SearchPageInfo.module.scss"
import { Link } from "react-router-dom"

const SearchPageInfo = ({ people }) => {
  return (
    <div className={styles.container}>
      {people.length ? (
        <ul className={styles.list}>
          {people.map(({ name, image, id }) => (
            <li
              key={id}
              className={styles.list__item}
            >
              <Link
                to={`/people/${id}`}
                className={styles.list__link}
              >
                <img
                  src={image}
                  alt={name}
                  className={styles.list__img}
                />
                <p className={styles.list__name}>{name}</p>
              </Link>
            </li>
          ))}
        </ul>
      ) : (
        <h2 className={styles.noResults}>No results</h2>
      )}
    </div>
  )
}

SearchPageInfo.propTypes = {
  people: PropTypes.array,
}

export default SearchPageInfo
