import { useEffect } from "react"
import { BsFillMortarboardFill } from "react-icons/bs"
import { LuLanguages } from "react-icons/lu"
import { AM } from "country-flag-icons/react/3x2"
import { RU } from "country-flag-icons/react/3x2"
import { US } from "country-flag-icons/react/3x2"
import PageBackgroundManager from "../../utils/PageBackgroundManager"
import TakeATourBtn from "../../UI/TakeATourBtn/TakeATourBtn"
import "./About.scss"

const About = () => {
  const skills = {
    hardSkills: [
      "HTML5, JSX",
      "CSS (CSS3), SASS (SCSS)",
      "JavaScript (ES6+)",
      "Basic understanding TypeScript",
      "React.js",
      "Redux (Redux Toolkit)",
      "Next.js",
      "Version Control (Git)",
      "Figma, Adobe Photoshop, Avocode",
      "Responsive Design",
      "Cross-Browser Compatibility",
      "Basic SEO Principles",
      "Basic UI/UX Principles",
      "Package Managers",
      "Performance Optimization",
    ],
    softSkills: [
      "Teamwork",
      "Learning Agility",
      "Problem-Solving",
      "Creativity",
      "Critical Thinking",
      "Communication Skills",
      "Attention to Detail",
      "Time Management",
      "Empathy",
      "Patience",
      "Accountability",
      "Collaboration",
      "Curiosity",
      "Self-Motivation",
      "Perseverance",
    ],
  }

  useEffect(() => {
    const options = {
      threshold: 0.5,
    }

    const callback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.remove("opacity")

          if (entry.target.classList.contains("left")) {
            entry.target.classList.add("scrolledFromLeft")
          } else if (entry.target.classList.contains("right")) {
            entry.target.classList.add("scrolledFromRight")
          }
        } else {
          entry.target.classList.add("opacity")
        }
      })
    }

    const observer = new IntersectionObserver(callback, options)

    const items = document.querySelectorAll(".left, .right")
    items.forEach((item) => observer.observe(item))

    return () => {
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
          CSS, JavaScript and React.js is solid, and I am continuously striving
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
            <span className='coloredItemSpan'>Economics (2014-2017)</span>
          </p>
          <p className='educationItem'>
            ASUE{" "}
            <span className='coloredItemSpan'>Finance Bechelor degree</span>
            <span className='coloredItemSpan'>(2017-2021)</span>
          </p>
        </div>
        <div className='infoLanguages right'>
          <h2 className='infoLanguagesTitle'>
            Languages <LuLanguages className='infoIcon' />
          </h2>
          <p className='languagesItem'>
            <AM
              className='flag'
              atl='Armenian flag'
            />
            Armenian <span className='languagesItemColored'>(Native)</span>
          </p>
          <p className='languagesItem'>
            <US
              className='flag'
              alt='USA flag'
            />
            English <span className='languagesItemColored'>(Advanced)</span>
          </p>
          <p className='languagesItem'>
            <RU
              className='flag'
              alt='Russian flag'
            />
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
            {skills.hardSkills.map((skill, index) => (
              <li
                key={index}
                className='aboutContentHardItem left'
              >
                {skill}
              </li>
            ))}
          </ul>
        </div>
        <div className='aboutContentSoft'>
          <h2 className='aboutContentSoftTitle right'>Soft Skills</h2>
          <ul className='aboutContentSoftList'>
            {skills.softSkills.map((skill, index) => (
              <li
                key={index}
                className='aboutContentSoftItem right'
              >
                {skill}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
export default About
