import Card from "../Card/Card"
import cat1 from "../../img/categories/cat-01.jpg"
import cat2 from "../../img/categories/cat-02.jpg"
import cat3 from "../../img/categories/cat-03.jpg"
import "./Arrivals.scss"

const Arrivals = () => {
  return (
    <div className='container'>
      <section className='arrivals'>
        <h2 className='arrivalsTitle'>NEW ARRIVALS</h2>
        <div className='arrivalsCards'>
          <Card
            img={cat1}
            title='Hoodies & Sweetshirt'
          />
          <Card
            img={cat2}
            title='Coats & Parkas'
          />
          <Card
            img={cat3}
            title='Tees & T-Shirt'
          />
        </div>
      </section>
    </div>
  )
}
export default Arrivals
