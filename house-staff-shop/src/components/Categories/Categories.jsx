import React, { Component } from "react"
import s from "./Categories.module.scss"

export class Categories extends Component {
  constructor(props) {
    super(props)
    this.state = {
      categories: [
        {
          key: "all",
          name: "All",
        },
        {
          key: "Living Room",
          name: "Living Room",
        },
        {
          key: "Entryway",
          name: "Entryway",
        },
        {
          key: "Outdoor",
          name: "Outdoor",
        },
        {
          key: "Office",
          name: "Office",
        },
        {
          key: "Kitchen",
          name: "Kitchen",
        },
        {
          key: "Bedroom",
          name: "Bedroom",
        },
        {
          key: "Dining Room",
          name: "Dining Room",
        },
      ],
    }
  }
  render() {
    return (
      <div className={s.categories}>
        {this.state.categories.map((category) => {
          return (
            <div
              className={s.category}
              key={category.key}
              onClick={() => this.props.chooseCategory(category.key)}
            >
              {category.name}
            </div>
          )
        })}
      </div>
    )
  }
}

export default Categories
