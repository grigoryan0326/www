import PropTypes from "prop-types"
import cn from "classnames"

import {
  useTheme,
  THEME_LIGHT,
  THEME_DARK,
  THEME_NEUTRAL,
} from "@context/ThemeProvider"

import imgLightSide from "./img/light-side.jpg"
import imgDarkSide from "./img/dark-side.jpg"
import imgFalcon from "./img/falcon.jpg"

import styles from "./ChooseSide.module.scss"

const ChooseSideItem = ({ onClick, text, img, classes }) => {
  return (
    <div
      className={cn(styles.item, classes)}
      onClick={onClick}
    >
      <div className={styles.item__header}>{text}</div>
      <img
        src={img}
        alt={text}
        className={styles.item__img}
      />
    </div>
  )
}

const ChooseSide = () => {
  const isTheme = useTheme()

  return (
    <div className={styles.container}>
      <ChooseSideItem
        onClick={() => isTheme.change(THEME_DARK)}
        text='Dark Side'
        img={imgDarkSide}
        classes={styles.item__dark}
      />
      <ChooseSideItem
        onClick={() => isTheme.change(THEME_LIGHT)}
        text='Light Side'
        img={imgLightSide}
        classes={styles.item__light}
      />
      <ChooseSideItem
        onClick={() => isTheme.change(THEME_NEUTRAL)}
        text="I'm Han Solo"
        img={imgFalcon}
        classes={styles.item__neutral}
      />
    </div>
  )
}

ChooseSide.propTypes = {
  theme: PropTypes.string,
}

ChooseSideItem.propTypes = {
  onClick: PropTypes.func,
  text: PropTypes.string,
  img: PropTypes.string,
  classes: PropTypes.string,
}

export default ChooseSide
