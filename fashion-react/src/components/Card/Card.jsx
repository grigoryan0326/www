import "./Card.scss"
import arrow from "../../img/icons/arrow.svg"

const Card = ({ title, img }) => {
  return (
    <div className='card'>
      <img
        className='cardImg'
        src={img}
        alt={img}
      />
      <div className="cardInfo">
        <div className='cardInfoLeft'>
          <h3 className='cardTitle'>{title}</h3>
          <p className='cardExplore'>Explore Now!</p>
        </div>
        <div className='cardInfoRight'>
          <img
            src={arrow}
            alt='arrow'
          />
        </div>
      </div>
    </div>
  )
}
export default Card
