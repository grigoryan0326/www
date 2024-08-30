import PageBackgroundManager from '../../utils/PageBackgroundManager'
import work1 from '../../assets/gif/Recording2024-08-30160614-ezgif.com-optimize.gif'
import './Works.scss'

const Portfolio = () => {
  return (
    <section className='portfolio'>
      <PageBackgroundManager page='works' />
      <h2>Portfolio</h2>
      <p>See my work.</p>
      <img src={work1} alt="2rism" />
    </section>
  )
}

export default Portfolio