import styles from "./ErrorMessage.module.scss"

const ErrorMessage = () => {
  return (
    <div>
      <p className={styles.text}>
        The dark side of the force has won. <br />
        We can't display data. <br />
        Come back when we fix everything.
      </p>
    </div>
  )
}
export default ErrorMessage
