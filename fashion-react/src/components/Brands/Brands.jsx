import "./Brands.scss"

import hm from "../../img/brands/HM.png"
import obey from "../../img/brands/Obey.png"
import shopify from "../../img/brands/Shopify.png"
import lacoste from "../../img/brands/Lacoste.png"
import levis from "../../img/brands/Levis.png"
import amazon from "../../img/brands/Amazon.png"

const Brands = () => {
  return (
    <section className='brands'>
      <ul className='brandsList'>
        <li className='brandsItem'>
          <img
            src={hm}
            alt='hm'
          />
        </li>
        <li className='brandsItem'>
          <img
            src={obey}
            alt='obey'
          />
        </li>
        <li className='brandsItem'>
          <img
            src={shopify}
            alt='shopify'
          />
        </li>
        <li className='brandsItem'>
          <img
            src={lacoste}
            alt='lacoste'
          />
        </li>
        <li className='brandsItem'>
          <img
            src={levis}
            alt='levis'
          />
        </li>
        <li className='brandsItem'>
          <img
            src={amazon}
            alt='amazon'
          />
        </li>
      </ul>
    </section>
  )
}
export default Brands
