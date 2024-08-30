import PageBackgroundManager from '../../utils/PageBackgroundManager'
import twoRism from '../../assets/gif/2rism.gif'
import './Works.scss'

const Portfolio = () => {
  return (
    <section className='portfolio'>
      <PageBackgroundManager page='works' />
      <h2>Portfolio</h2>
      <p>See my work.</p>
      <img src={twoRism} alt="2rism" className='gif'/>
    </section>
  )
}

export default Portfolio