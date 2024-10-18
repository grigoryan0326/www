import PropTypes from "prop-types"
import cn from "classnames"
import styles from "./UiButton.module.scss"

const UiButton = ({ text, disabled, theme = "dark", classes='' }) => {
  return (
    <button
      className={cn(styles.button, styles[theme], classes)}
      disabled={disabled}
    >
      {text}
    </button>
  )
}

UiButton.propTypes = {
  text: PropTypes.string,
  disabled: PropTypes.bool,
  theme: PropTypes.string,
  classes: PropTypes.string,
}

export default UiButton
