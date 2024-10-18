import styles from "./PersonPhoto.module.scss"

const PersonPhoto = ({ personPhoto, personName }) => {
  return (
    <div className={styles.container}>
      <img
        className={styles.photo}
        src={personPhoto}
        alt={personName}
      />
    </div>
  )
}
export default PersonPhoto
