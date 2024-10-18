import PropTypes from "prop-types"
import { Link } from "react-router-dom"
import styles from "./PeopleList.module.scss"

const PeopleList = ({ people }) => {
  return (
    <ul className={styles.list__container}>
      {people.map(({ name, id, image }) => (
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
  )
}

PeopleList.propTypes = {
  people: PropTypes.array,
}

export default PeopleList
