import React, { Component } from "react"
import s from "./Order.module.scss"

export class Order extends Component {
  render() {
    const { img, title, price } = this.props.order || {}
    return (
      <div className={s.order}>
        <img
          className={s.orderImg}
          src={"/goods/" + img}
          alt={title}
        />
        <h2 className={s.orderTitle}>{title}</h2>
        <b className={s.orderPrice}>{price}$</b>
      </div>
    )
  }
}

export default Order
