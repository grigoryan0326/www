import React, { Component } from "react"
import s from "./ShowFullItem.module.scss"

export class ShowFullItem extends Component {
  render() {
    const { img, title, desc, price } = this.props.item || {}
    return (
      <div className={s.fullItem}>
        <div
          className={s.item}
          onClick={() => this.props.onShowItem(this.props.item)}
        >
          <div className={s.imgWrapper}>
            {img && (
              <img
                className={s.itemImg}
                src={"/goods/" + img}
                alt={title}
              />
            )}
          </div>
          <div className={s.itemInfo}>
            <h2 className={s.itemTitle}>{title}</h2>
            <p className={s.itemDesc}>{desc}</p>
            <b className={s.itemPrice}>{price}$</b>
            <div
              className={s.addToCard}
              title='Add to Card'
              onClick={() => this.props.onAdd(this.props.item)}
            >
              +
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default ShowFullItem
