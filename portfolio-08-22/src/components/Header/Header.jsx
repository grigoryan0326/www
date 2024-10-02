import React, { useState } from "react"
import { NavLink } from "react-router-dom"
import LogoReplacement from "../../UI/LogoReplace/LogoReplacement.jsx"
import ThemeSwitcher from "../../UI/ThemeSwitcher/ThemeSwitcher.jsx"
import Burger from "../../UI/Burger/Burger.jsx"
import s from "./Header.module.scss"

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen((prevState) => !prevState)
  }

  const navItems = [
    { path: "/", label: "Home" },
    { path: "/about", label: "About" },
    { path: "/contacts", label: "Contacts" },
    { path: "/works", label: "Works" },
  ]

  return (
    <header className={s.header}>
      <div className={s.headerLogo}>
        <LogoReplacement />
      </div>
      <div className={s.headerChangeTheme}>
        <ThemeSwitcher />
      </div>
      <div className={s.headerNavigation}>
        <nav>
          <ul className={s.navigationList}>
            {navItems.map(({ path, label }) => (
              <li
                key={path}
                className={s.listItem}
              >
                <NavLink
                  to={path}
                  className={({ isActive }) =>
                    isActive ? `${s.button} ${s.buttonActive}` : s.button
                  }
                >
                  <span className={s.actualText}>&nbsp;{label}&nbsp;</span>
                  <span
                    aria-hidden='true'
                    className={s.hoverText}
                  >
                    &nbsp;{label}&nbsp;
                  </span>
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
      </div>
      <div className={s.headerBurger}>
        <Burger
          toggleMenu={toggleMenu}
          setIsMenuOpen={setIsMenuOpen}
          isMenuOpen={isMenuOpen}
          aria-expanded={isMenuOpen}
          aria-controls='burger-navigation'
        />
        <nav
          className={`${s.burgerNavigation} ${
            isMenuOpen ? s.burgerNavigationOpen : ""
          }`}
        >
          <ul className={s.burgerNavigationList}>
            {navItems.map(({ path, label }) => (
              <li
                key={path}
                className={s.burgerListItem}
              >
                <NavLink
                  to={path}
                  className={({ isActive }) => (isActive ? s.active : "")}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {label}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header
