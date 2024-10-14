import { RiShoppingBasket2Fill } from "react-icons/ri"
import { IoCloseCircleSharp } from "react-icons/io5"
import s from "./Header.module.scss"
import { useState } from "react"
import Order from "../Order/Order"

const showOrders = (orders, onDelete) => {
  return orders.map((order) => {
    return (
      <Order
        onDelete={onDelete}
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

const Header = ({ orders, onDelete }) => {
  const [cardOpen, setCardOpen] = useState(false)
  let price = 0

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
          <div className={s.shopCardText}>{orders.length}</div>
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
              {orders.length > 0 ? showOrders(orders, onDelete) : showNothing()}
              {orders.forEach((order) => (price += order.price))}
              <p className={s.price}>
                Price: <span>{price.toFixed(2)}$</span>
              </p>
            </div>
          )}
        </div>
      </div>
      <div className={s.presentation}></div>
    </header>
  )
}

export default Header
