import React from "react"
import Header from "./components/Header/Header"
import Footer from "./components/Footer/Footer"
import Items from "./components/Items/Items"
import ShowFullItem from "./components/ShowFullItem/ShowFullItem"
import Categories from "./components/Categories/Categories"
import "./App.scss"

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      orders: [],
      currentItems: [],
      showFullItem: false,
      fullItem: {},
      items: [
        {
          id: 1,
          title: "Modern Sofa",
          img: "modern-sofa.jpeg",
          desc: "A stylish and comfortable modern sofa.",
          category: "Living Room",
          price: 499.99,
        },
        {
          id: 2,
          title: "Dining Table Set",
          img: "Dining-Table-Set.jpeg",
          desc: "A contemporary dining table set with 6 chairs.",
          category: "Dining Room",
          price: 899.99,
        },
        {
          id: 3,
          title: "Office Chair",
          img: "Office-Chair.jpeg",
          desc: "Ergonomic office chair with adjustable height.",
          category: "Office",
          price: 199.99,
        },
        {
          id: 4,
          title: "Queen Bed Frame",
          img: "Queen-Bed-Frame.jpeg",
          desc: "Solid wood queen bed frame with a minimalist design.",
          category: "Bedroom",
          price: 399.99,
        },
        {
          id: 5,
          title: "Wardrobe",
          img: "Wardrobe.jpeg",
          desc: "Spacious wardrobe with sliding doors and plenty of storage.",
          category: "Bedroom",
          price: 699.99,
        },
        {
          id: 6,
          title: "Coffee Table",
          img: "Coffee-Table.jpeg",
          desc: "Elegant glass coffee table for the living room.",
          category: "Living Room",
          price: 149.99,
        },
        {
          id: 7,
          title: "Bookshelf",
          img: "Bookshelf.jpeg",
          desc: "Tall wooden bookshelf with multiple shelves.",
          category: "Office",
          price: 249.99,
        },
        {
          id: 8,
          title: "Recliner Chair",
          img: "Recliner-Chair.jpeg",
          desc: "Comfortable recliner chair with plush upholstery.",
          category: "Living Room",
          price: 349.99,
        },
        {
          id: 9,
          title: "Nightstand",
          img: "Nightstand.jpeg",
          desc: "Wooden nightstand with a drawer and shelf.",
          category: "Bedroom",
          price: 129.99,
        },
        {
          id: 10,
          title: "Bar Stool",
          img: "Bar-Stool.jpeg",
          desc: "Modern bar stool with a leather seat and metal frame.",
          category: "Dining Room",
          price: 89.99,
        },
        {
          id: 11,
          title: "TV Stand",
          img: "TV-Stand.jpeg",
          desc: "Sleek TV stand with open shelves for storage.",
          category: "Living Room",
          price: 279.99,
        },
        {
          id: 12,
          title: "Armchair",
          img: "Armchair.jpeg",
          desc: "Comfortable armchair with soft upholstery.",
          category: "Living Room",
          price: 299.99,
        },
        {
          id: 13,
          title: "Dresser",
          img: "Dresser.jpeg",
          desc: "Spacious dresser with 6 drawers and a modern design.",
          category: "Bedroom",
          price: 459.99,
        },
        {
          id: 14,
          title: "Kitchen Island",
          img: "Kitchen-Island.jpeg",
          desc: "Wooden kitchen island with storage and countertop space.",
          category: "Kitchen",
          price: 549.99,
        },
        {
          id: 15,
          title: "Bookshelf Divider",
          img: "Bookshelf-Divider.jpeg",
          desc: "Open bookshelf divider perfect for organizing and separating spaces.",
          category: "Office",
          price: 329.99,
        },
        {
          id: 16,
          title: "Patio Table",
          img: "Patio-Table.jpeg",
          desc: "Outdoor patio table with weather-resistant materials.",
          category: "Outdoor",
          price: 199.99,
        },
        {
          id: 17,
          title: "Futon Sofa Bed",
          img: "Futon-Sofa-Bed.jpeg",
          desc: "Convertible futon sofa bed with fabric upholstery.",
          category: "Living Room",
          price: 399.99,
        },
        {
          id: 18,
          title: "Entryway Bench",
          img: "Entryway-Bench.jpeg",
          desc: "Wooden entryway bench with shoe storage underneath.",
          category: "Entryway",
          price: 179.99,
        },
        {
          id: 19,
          title: "Console Table",
          img: "Console-Table.jpeg",
          desc: "Slim console table with a drawer and shelf.",
          category: "Living Room",
          price: 229.99,
        },
        {
          id: 20,
          title: "Chaise Lounge",
          img: "Chaise-Lounge.jpeg",
          desc: "Elegant chaise lounge chair with soft fabric.",
          category: "Living Room",
          price: 599.99,
        },
      ],
    }
    this.state.currentItems = this.state.items
    this.chooseCategory = this.chooseCategory.bind(this)
    this.addToOrder = this.addToOrder.bind(this)
    this.deleteFromOrder = this.deleteFromOrder.bind(this)
    this.onShowItem = this.onShowItem.bind(this)
  }
  render() {
    return (
      <div className='App'>
        <div className='wrapper'>
          <Header
            orders={this.state.orders}
            onDelete={this.deleteFromOrder}
          />
          <Categories chooseCategory={this.chooseCategory} />
          <Items
            items={this.state.currentItems}
            onAdd={this.addToOrder}
            onShowItem={this.onShowItem}
          />
          {this.state.showFullItem && (
            <ShowFullItem
              item={this.state.fullItem}
              onAdd={this.addToOrder}
              onShowItem={this.onShowItem}
            />
          )}
          <Footer />
        </div>
      </div>
    )
  }

  onShowItem(item) {
    this.setState({ fullItem: item })
    this.setState({ showFullItem: !this.state.showFullItem })
  }

  chooseCategory(category) {
    if (category === "all") {
      this.setState({ currentItems: this.state.items })
      return
    }

    this.setState({
      currentItems: this.state.items.filter((el) => el.category === category),
    })
  }

  addToOrder(item) {
    let isInArray = false
    this.state.orders.forEach((order) => {
      if (order.id === item.id) {
        isInArray = true
      }
    })
    if (!isInArray) this.setState({ orders: [...this.state.orders, item] })
  }

  deleteFromOrder(item) {
    console.log("called")
    this.setState({
      orders: this.state.orders.filter((order) => {
        return order.id !== item.id
      }),
    })
  }
}

export default App
