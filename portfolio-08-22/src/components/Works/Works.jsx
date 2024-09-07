import PageBackgroundManager from '../../utils/PageBackgroundManager'
import WorksSlider from '../../UI/WorksSlider/WorksSlider'
import twoRism from '../../assets/gif/2rism.gif'
import './Works.scss'

const Portfolio = () => {
  return (
    <section className='portfolio'>
      <PageBackgroundManager page='works' />
      <h2>Portfolio</h2>
      <p>See my work.</p>
      <WorksSlider />
    </section>
  )
}

export default Portfolio