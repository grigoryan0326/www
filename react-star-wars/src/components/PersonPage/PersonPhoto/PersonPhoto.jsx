import PropTypes from "prop-types"
import { useDispatch } from "react-redux"
import { MdBookmarkAdd } from "react-icons/md"
import { MdBookmarkRemove } from "react-icons/md"

import { setFavorite, deleteFavorite } from "@store/actions"

import styles from "./PersonPhoto.module.scss"

const PersonPhoto = ({
  personPhoto,
  personName,
  id,
  personFavorite,
  setPersonFavorite,
}) => {
  const dispatch = useDispatch()

  const dispatchPersonFavorite = () => {
    if (personFavorite) {
      dispatch(deleteFavorite(id))
      setPersonFavorite(false)
    } else {
      dispatch(
        setFavorite({
          [id]: {
            name: personName,
            photo: personPhoto,
          },
        })
      )
      setPersonFavorite(true)
    }
  }
  return (
    <div className={styles.container}>
      <img
        className={styles.photo}
        src={personPhoto}
        alt={personName}
      />
      <div
        onClick={dispatchPersonFavorite}
        className={styles.btn}
      >
        {personFavorite ? (
          <MdBookmarkRemove className={styles.btn__remove} />
        ) : (
          <MdBookmarkAdd className={styles.btn__add} />
        )}
      </div>
    </div>
  )
}

PersonPhoto.propTypes = {
  personPhoto: PropTypes.string,
  personName: PropTypes.string,
  id: PropTypes.string,
  personFavorite: PropTypes.bool,
  setPersonFavorite: PropTypes.func,
}

export default PersonPhoto
