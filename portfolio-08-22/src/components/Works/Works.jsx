import PageBackgroundManager from "../../utils/PageBackgroundManager"
import WorksSlider from "../../UI/WorksSlider/WorksSlider"
import genie from "../../assets/img/genie.png"
import "./Works.scss"

const Works = () => {
  return (
    <section className='works'>
      <PageBackgroundManager page='works' />
      <div className='worksInfo'>
        <h2 className='worksInfoTitle'>Works</h2>
        <p className='worksInfoText'>Here are some of my Pet Projects.</p>
      </div>
      <div className='worksQuote'>
        ” I'll grant your three wishes, but I'll do it badly. ”
        <div className='worksQuoteAuthor'>
          <span className='worksQuoteAuthorText'> — Jr. Genie</span>
          <img
            src={genie}
            alt='Genie'
            className='worksQuoteImg'
          />
        </div>
      </div>
      <WorksSlider />
    </section>
  )
}

export default Works
