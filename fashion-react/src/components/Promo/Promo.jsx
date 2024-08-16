import promoBg from "../../img/images/header-img.jpg"
import decor from "../../img/icons/decor-yellow.svg"
import "./Promo.scss"

const Promo = () => {
  return (
    <div className='container'>
      <section className='promoWrapper '>
        <div className='promoContent'>
          <div className='promoText'>
            <h2 className='promoTitle'>
              <span className='highlight'>
                <span>LET’S</span>
              </span>{" "}
              EXPLORE
              <span className='highlight-yellow'>
                <span>UNIQUE</span>
              </span>
              CLOTHES.
            </h2>
            <p className='promoSubText'>
              Live for Influential and Innovative fashion!
            </p>
            <div className='promoBtnWrapper'>
              <img
                src={decor}
                alt='decor'
              />
              <button className='promoBtn'>Shop Now</button>
            </div>
          </div>
          <div className='promoImg'>
            <img
              src={promoBg}
              alt='promoBg'
            />
          </div>
        </div>
      </section>
    </div>
  )
}
export default Promo
