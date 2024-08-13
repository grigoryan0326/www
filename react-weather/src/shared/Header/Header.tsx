import GlobalSvgSelector from "../../assets/icons/global/GlobalSvgSelector"
import Select from "react-select"
import s from "./Header.module.scss"

type Props = {}
const Header = (props: Props) => {
  const options = [
    { value: "city-1", label: "Saint Petersburg" },
    { value: "city-2", label: "Moscow" },
    { value: "city-3", label: "Novgorod" },
  ]

  const colorStyles = {
    control: (styles: any) => ({
      ...styles,
      backgroundColor: "#4F4F4F",
      width: "194px",
      height: "37px",
      border: "none",
      borderRadius: "10px",
      zIndex: 100,
      outline: "none",
      color: 'white'
    }),
    option: (styles: any) => ({
      ...styles,
      backgroundColor: '#4f4f4f',
      color: 'white',
      border: "none",
      zIndex: 100,
      outline: "none",
    }),
    listbox: (styles: any) => ({
      ...styles,
      padding: 0,
      borderRadius: '10px'
    })
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
        <div className={s.changeTheme}>
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
