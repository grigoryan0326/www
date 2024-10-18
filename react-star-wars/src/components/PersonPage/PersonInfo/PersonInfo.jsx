import PropTypes from "prop-types"
import styles from "./PersonInfo.module.scss"

const PersonInfo = ({ personInfo }) => {
  return (
    <div className={styles.container}>
      <ul className={styles.list}>
        {personInfo.map(({ title, data }) => (
          <li
            key={title}
            className={styles.list__item}
          >
            <p className={styles.list__title}>
              <span className={styles.item__title}>{title}:</span>
              {data}
            </p>
          </li>
        ))}
      </ul>
    </div>
  )
}

PersonInfo.propTypes = {
  personInfo: PropTypes.array,
}

export default PersonInfo
