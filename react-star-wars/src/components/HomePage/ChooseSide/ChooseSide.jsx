import PropTypes from "prop-types"

import {
  useTheme,
  THEME_LIGHT,
  THEME_DARK,
  THEME_NEUTRAL,
} from "@context/ThemeProvider"

import styles from "./ChooseSide.module.scss"

const ChooseSide = () => {
  const isTheme = useTheme()

  return (
    <div>
      {isTheme.theme}
      <button onClick={() => isTheme.change(THEME_LIGHT)}>Light</button>
      <button onClick={() => isTheme.change(THEME_DARK)}>Dark</button>
      <button onClick={() => isTheme.change(THEME_NEUTRAL)}>Neutral</button>
    </div>
  )
}

ChooseSide.propTypes = {
  theme: PropTypes.string,
}

export default ChooseSide
