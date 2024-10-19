import PropTypes from "prop-types"
import cn from "classnames"
import styles from "./UiLoading.module.scss"

const UiLoading = ({ theme = "white", classes = "" }) => {
  return (
    <div
      className={cn(styles.loader, classes)}
      style={{ borderLeftColor: theme }}
    ></div>
  )
}

UiLoading.prototypes = {
  theme: PropTypes.string,
  classes: PropTypes.string,
}
export default UiLoading
