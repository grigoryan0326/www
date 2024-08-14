import GlobalSvgSelector from "../../assets/icons/global/GlobalSvgSelector"
import Select from "react-select"
// import { useContext } from "react"
// import ThemeContext from "../../context/ThemeContext"
import s from "./Header.module.scss"
import { useTheme } from "../../hooks/useTheme"
import { Theme } from "../../context/ThemeContext"

type Props = {}
const Header = (props: Props) => {
  // const { theme, setTheme } = useContext(ThemeContext)
  const theme = useTheme()

  const options = [
    { value: "city-1", label: "Saint Petersburg" },
    { value: "city-2", label: "Moscow" },
    { value: "city-3", label: "Novgorod" },
  ]

  const colorStyles = {
    control: (styles: any) => ({
      ...styles,
      backgroundColor:
        theme.theme === Theme.DARK ? "#4F4F4F" : "rgba(71,147,255, .2)",
      width: "194px",
      height: "37px",
      border: "none",
      borderRadius: "10px",
      zIndex: 100,
      outline: "none",
      color: "white",
    }),
    singleValue: (styles: any) => ({
      ...styles,
      color: theme.theme === Theme.DARK ? "#fff" : "#000",
    }),
    option: (styles: any) => ({
      ...styles,
      backgroundColor: "transparent",
      color: theme.theme === Theme.DARK ? "#fff" : "#000",
      border: "none",
      zIndex: 100,
      outline: "none",
    }),
    listbox: (styles: any) => ({
      ...styles,
      padding: 0,
      borderRadius: "10px",
    }),
    indicatorSeparator: (styles: any) => ({
      ...styles,
      backgroundColor:
        theme.theme === Theme.DARK ? "#fff" : "rgba(71,147,255, .5)",
    }),
    menu: (styles: any) => ({
      ...styles,
      backgroundColor:
        theme.theme === Theme.DARK ? " #4f4f4f" : "rgba(71,147,255, .2)",
    }),
  }

  function changeTheme() {
    theme.changeTheme(theme.theme === Theme.LIGHT ? Theme.DARK : Theme.LIGHT)
  }

  return (
    <header className={s.header}>
      <div className={s.wrapper}>
        <div className={s.logo}>
          <GlobalSvgSelector id='header-logo' />
        </div>
        <div className={s.title}>React Weather</div>
      </div>
      <div className={s.wrapper}>
        <div
          className={s.changeTheme}
          onClick={changeTheme}
        >
          <GlobalSvgSelector id='change-theme' />
        </div>
        <Select
          options={options}
          styles={colorStyles}
          defaultValue={options[0]}
        />
      </div>
    </header>
  )
}

export default Header
