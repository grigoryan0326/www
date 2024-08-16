import Arrivals from "./components/Arrivals/Arrivals"
import Brands from "./components/Brands/Brands"
import Header from "./components/Header/Header"
import Promo from "./components/Promo/Promo"
import "./styles/App.scss"

function App() {
  return (
    <div className='App'>
      <Header />
      <Promo />
      <Brands />
      <Arrivals />
    </div>
  )
}

export default App
