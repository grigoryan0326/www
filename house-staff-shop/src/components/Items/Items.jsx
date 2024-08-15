import React, { Component } from "react"
import Item from "./Item/Item"
import s from "./Items.module.scss"

export class Items extends Component {
  render() {
    return (
      <main className={s.main}>
        {this.props.items.map((item) => {
          return (
            <Item
              className={s.item}
              item={item}
              key={item.id}
              onAdd={this.props.onAdd}
              onShowItem={this.props.onShowItem}
            />
          )
        })}
      </main>
    )
  }
}

export default Items
