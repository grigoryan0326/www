import s from "./Header.module.scss"

const Header = () => {
  return (
    <header>
      <div className={s.headerWrapper}>
        <span className={s.logo}>House Staff</span>
        <ul className={s.nav}>
          <li>About us</li>
          <li>Contacts</li>
          <li>Cabinet</li>
        </ul>
      </div>
      <div className={s.presentation}></div>
    </header>
  )
}

export default Header
