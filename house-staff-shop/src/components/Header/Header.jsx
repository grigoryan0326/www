import { RiShoppingBasket2Fill } from "react-icons/ri"
import { IoCloseCircleSharp } from "react-icons/io5"
import s from "./Header.module.scss"
import { useState } from "react"
import Order from "../Order/Order"

const showOrders = (orders) => {
  return orders.map((order) => {
    return (
      <Order
        order={order}
        key={order.id}
      />
    )
  })
}

const showNothing = () => {
  return (
    <div className={s.empty}>
      <h2>Nothing to show...</h2>
    </div>
  )
}

const Header = ({ orders }) => {
  const [cardOpen, setCardOpen] = useState(false)

  return (
    <header>
      <div className={s.headerWrapper}>
        <span className={s.logo}>House Staff</span>
        <ul className={s.nav}>
          <li>About us</li>
          <li>Contacts</li>
          <li>Cabinet</li>
        </ul>
        <div className={s.shopCardWrapper}>
          {!cardOpen && (
            <RiShoppingBasket2Fill
              className={
                cardOpen ? `${s.shopCard} ${s.active}` : `${s.shopCard}`
              }
              onClick={() => setCardOpen(!cardOpen)}
            />
          )}

          {cardOpen && (
            <IoCloseCircleSharp
              className={
                cardOpen ? `${s.shopCard} ${s.active}` : `${s.shopCard}`
              }
              onClick={() => setCardOpen(!cardOpen)}
            />
          )}

          {cardOpen && (
            <div className={s.shopCardOpened}>
              {orders.length > 0 ? showOrders(orders) : showNothing()}
            </div>
          )}
        </div>
      </div>
      <div className={s.presentation}></div>
    </header>
  )
}

export default Header
