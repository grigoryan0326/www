import React, { useState } from "react"
import { NavLink, useLocation } from "react-router-dom"
import LogoReplacement from "../../UI/LogoReplace/LogoReplacement.jsx"
import s from "./Header.module.scss"
import ThemeSwitcher from "../../UI/ThemeSwitcher/ThemeSwitcher.jsx"
import Burger from "../../UI/Burger/Burger.jsx"

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const location = useLocation()

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

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
            <li className={s.listItem}>
              <NavLink
                to='/'
                className={s.active}
              >
                <button
                  className={
                    location.pathname === "/"
                      ? s.button + " " + s.buttonActive
                      : s.button
                  }
                  data-text='Awesome'
                >
                  <span className={s.actualText}>&nbsp;Home&nbsp;</span>
                  <span
                    aria-hidden='true'
                    className={s.hoverText}
                  >
                    &nbsp;Home&nbsp;
                  </span>
                </button>
              </NavLink>
            </li>
            <li className={s.listItem}>
              <NavLink to='/about'>
                <button
                  className={
                    location.pathname === "/about"
                      ? s.button + " " + s.buttonActive
                      : s.button
                  }
                  data-text='Awesome'
                >
                  <span className={s.actualText}>&nbsp;About&nbsp;</span>
                  <span
                    aria-hidden='true'
                    className={s.hoverText}
                  >
                    &nbsp;About&nbsp;
                  </span>
                </button>
              </NavLink>
            </li>
            <li className={s.listItem}>
              <NavLink to='/contacts'>
                <button
                  className={
                    location.pathname === "/contacts"
                      ? s.button + " " + s.buttonActive
                      : s.button
                  }
                  data-text='Awesome'
                >
                  <span className={s.actualText}>&nbsp;Contacts&nbsp;</span>
                  <span
                    aria-hidden='true'
                    className={s.hoverText}
                  >
                    &nbsp;Contacts&nbsp;
                  </span>
                </button>
              </NavLink>
            </li>
            <li className={s.listItem}>
              <NavLink to='/works'>
                <button
                  className={
                    location.pathname === "/works"
                      ? s.button + " " + s.buttonActive
                      : s.button
                  }
                  data-text='Awesome'
                >
                  <span className={s.actualText}>&nbsp;Works&nbsp;</span>
                  <span
                    aria-hidden='true'
                    className={s.hoverText}
                  >
                    &nbsp;Works&nbsp;
                  </span>
                </button>
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
      <div className={s.headerBurger}>
        <Burger
          toggleMenu={toggleMenu}
          setIsMenuOpen={setIsMenuOpen}
          isMenuOpen={isMenuOpen}
        />
        <nav
          className={`${s.burgerNavigation} ${
            isMenuOpen ? s.burgerNavigationOpen : ""
          }`}
        >
          <ul className={s.burgerNavigationList}>
            <li className={s.burgerListItem}>
              <NavLink
                to='/'
                className={location.pathname === "/" ? s.active : ""}
              >
                Home
              </NavLink>
            </li>
            <li className={s.burgerListItem}>
              <NavLink
                to='/about'
                className={location.pathname === "/about" ? s.active : ""}
              >
                About
              </NavLink>
            </li>
            <li className={s.burgerListItem}>
              <NavLink
                to='/contacts'
                className={location.pathname === "/contacts" ? s.active : ""}
              >
                Contacts
              </NavLink>
            </li>
            <li className={s.burgerListItem}>
              <NavLink
                to='/works'
                className={location.pathname === "/works" ? s.active : ""}
              >
                Works
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header
