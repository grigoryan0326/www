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
      <div className='websitePortfolio'>
        <p className='websitePortfolioText'>
          Here you are on the project page, which represents the pinnacle of my
          progress. This is my portfolio website, where I’ve combined much of
          what I’ve learned to showcase myself and my works in a minimalist, yet
          effective way. It’s a creation I’ve poured my heart into, and I’m
          proud of it. This site not only reflects my technical skills but also
          my journey as a developer—constantly learning, growing, and striving
          for excellence in every detail.
        </p>
        <p className='websitePortfolioSkills'>
          Used skills: HTML, SCSS, JavaScript, React, React-router, Redux
        </p>
        <p className='websitePortfolioEnd'>
          Until our paths cross again, stay inspired.
        </p>
      </div>
    </section>
  )
}

export default Works
