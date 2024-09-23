import { useEffect } from "react"
import PageBackgroundManager from "../../utils/PageBackgroundManager"
import { BsFillMortarboardFill } from "react-icons/bs"
import { LuLanguages } from "react-icons/lu"
import { AM } from "country-flag-icons/react/3x2"
import { RU } from "country-flag-icons/react/3x2"
import { US } from "country-flag-icons/react/3x2"
import "./About.scss"
import TakeATourBtn from "../../UI/TakeATourBtn/TakeATourBtn"

const About = () => {
  // useEffect(() => {
  //   const options = {
  //     threshold: 0.5,
  //   }

  //   const rightCallback = (entries) =>
  //     entries.forEach((entry, i) => {
  //       if (entry.isIntersecting) {
  //         entry.target.classList.add("scrolledFromRight")
  //       }
  //     })
  //   const leftCallback = (entries) =>
  //     entries.forEach((entry) => {
  //       if (entry.isIntersecting) {
  //         entry.target.classList.add("scrolledFromLeft")
  //       }
  //     })

  //   const opacityCallback = (entries) =>
  //     entries.forEach((entry) => {
  //       if (entry.isIntersecting) {
  //         entry.target.classList.add("opacity")
  //       }
  //     })

  //   const leftObserver = new IntersectionObserver(leftCallback, options)
  //   const rightObserver = new IntersectionObserver(rightCallback, options)
  //   const opacityObserver = new IntersectionObserver(opacityCallback, options)

  //   document.querySelectorAll(".left").forEach((item) => {
  //     leftObserver.observe(item)
  //     opacityObserver.observe(item)
  //   })

  //   document.querySelectorAll(".right").forEach((item) => {
  //     rightObserver.observe(item)
  //     opacityObserver.observe(item)
  //   })
  // }, [])

  useEffect(() => {
    const options = {
      threshold: 0.5,
    }

    const callback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // Убираем класс opacity, если элемент в зоне видимости
          entry.target.classList.remove("opacity")

          if (entry.target.classList.contains("left")) {
            entry.target.classList.add("scrolledFromLeft")
          } else if (entry.target.classList.contains("right")) {
            entry.target.classList.add("scrolledFromRight")
          }
        } else {
          // Добавляем класс opacity, если элемент вышел за пределы видимости
          entry.target.classList.add("opacity")
        }
      })
    }

    const observer = new IntersectionObserver(callback, options)

    // Используем единый запрос для элементов с классами "left" и "right"
    const items = document.querySelectorAll(".left, .right")
    items.forEach((item) => observer.observe(item))

    return () => {
      // Очищаем наблюдатели при размонтировании компонента
      items.forEach((item) => observer.unobserve(item))
    }
  }, [])

  return (
    <section className='about'>
      <PageBackgroundManager page='about' />
      <div className='aboutTitleWrapper'>
        <h1 className='aboutTitle'>Who I am?</h1>
        <p className='aboutTitleText'>
          I’m a dedicated 24-year-old student from
          <a
            href='https://en.wikipedia.org/wiki/Armenia'
            target='_blank'
            rel='noreferrer'
            className='aboutTitleCountry'
          >
            <span> Armenia </span>
          </a>
          with a strong passion for web development, eager to kickstart my
          professional journey as a frontend developer. My foundation in HTML,
          CSS, JavaScript, and React.js is solid, and I am continuously striving
          to expand my knowledge and skills. Though I’m still early in my career
          and not yet an expert, my motivation to grow and excel in this field
          drives me forward. I’m looking for an opportunity where I can
          contribute to meaningful projects, collaborate with talented teams,
          and continually enhance my abilities to reach new heights in my
          career.
        </p>
        <a
          href='#info'
          className='aboutTitleBtn'
        >
          <TakeATourBtn />
        </a>
      </div>
      <div
        className='aboutInfoWrapper'
        id='info'
      >
        <div className='infoEducation left'>
          <h2 className='infoEducationTitle'>
            Education <BsFillMortarboardFill className='infoIcon' />
          </h2>
          <p className='educationItem'>
            Heratsi High School{" "}
            <span className='coloredItemSpan'>Economics </span>
            <span className='coloredItemSpan'>(2014-2017)</span>
          </p>
          <p className='educationItem'>
            ASUE <span className='coloredItemSpan'>Finance </span>
            <span className='coloredItemSpan'>Bechelor degree (2017-2021)</span>
          </p>
        </div>
        <div className='infoLanguages right'>
          <h2 className='infoLanguagesTitle'>
            Languages <LuLanguages className='infoIcon' />
          </h2>
          <p className='languagesItem'>
            <AM className='flag' />
            Armenian <span className='languagesItemColored'>(Native)</span>
          </p>
          <p className='languagesItem'>
            <US className='flag' />
            English <span className='languagesItemColored'>(Advanced)</span>
          </p>
          <p className='languagesItem'>
            <RU className='flag' />
            Russian <span className='languagesItemColored'>(Fluent)</span>
          </p>
        </div>
      </div>
      <h3 className='aboutContentTitle'>
        Strangely enough, I possess some skills.
      </h3>
      <div className='aboutContentWrapper'>
        <div className='aboutContentHard'>
          <h2 className='aboutContentHardTitle left'>Hard Skills</h2>
          <ul className='aboutContentHardList'>
            <li className='aboutContentHardItem left'>HTML5, JSX</li>
            <li className='aboutContentHardItem left'>
              CSS (CSS3),SASS (SCSS)
            </li>
            <li className='aboutContentHardItem left'>JavaScript (ES6+)</li>
            <li className='aboutContentHardItem left'>
              Basic understanding TypeScript
            </li>
            <li className='aboutContentHardItem left'>React.js</li>
            <li className='aboutContentHardItem left'>Redux (Redux Toolkit)</li>
            <li className='aboutContentHardItem left'>Next.js</li>
            <li className='aboutContentHardItem left'>Version Control (Git)</li>
            <li className='aboutContentHardItem left'>
              Figma, Adobe Photoshop, Avocode
            </li>
            <li className='aboutContentHardItem left'>Responsive Design</li>
            <li className='aboutContentHardItem left'>
              Cross-Browser Compatibility
            </li>
            <li className='aboutContentHardItem left'>Basic SEO Principles</li>
            <li className='aboutContentHardItem left'>
              Basic UI/UX Principles
            </li>
            <li className='aboutContentHardItem left'>Package Managers</li>
            <li className='aboutContentHardItem left'>
              Performance Optimization
            </li>
          </ul>
        </div>
        <div className='aboutContentSoft'>
          <h2 className='aboutContentSoftTitle right'>Soft Skills</h2>
          <ul className='aboutContentSoftList'>
            <li className='aboutContentSoftItem right'>Teamwork</li>
            <li className='aboutContentSoftItem right'>Learning Agility</li>
            <li className='aboutContentSoftItem right'>Problem-Solving</li>
            <li className='aboutContentSoftItem right'>Creativity</li>
            <li className='aboutContentSoftItem right'>Critical Thinking</li>
            <li className='aboutContentSoftItem right'>Communication Skills</li>
            <li className='aboutContentSoftItem right'>Attention to Detail</li>
            <li className='aboutContentSoftItem right'>Time Management</li>
            <li className='aboutContentSoftItem right'>Empathy</li>
            <li className='aboutContentSoftItem right'>Patience</li>
            <li className='aboutContentSoftItem right'>Accountability</li>
            <li className='aboutContentSoftItem right'>Collaboration</li>
            <li className='aboutContentSoftItem right'>Curiosity</li>
            <li className='aboutContentSoftItem right'>Self-Motivation</li>
            <li className='aboutContentSoftItem right'>Perseverance</li>
          </ul>
        </div>
      </div>
    </section>
  )
}
export default About
