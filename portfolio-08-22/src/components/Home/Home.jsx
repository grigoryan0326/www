import { TypeAnimation } from "react-type-animation"
import { useEffect, useState } from "react"
import s from "./Home.module.scss"
import bgImage from "../../assets/img/home-bg.webp"
import HireMe from "../../UI/HireMeBtn/HireMe"
import PageBackgroundManager from "../../utils/PageBackgroundManager"
import Preload from "../../UI/Preload/Preload"
import Works from "../../utils/WorksSlideData"

const Home = () => {
  const [isLoaded, setIsLoaded] = useState(false)
  const [showPreloader, setShowPreloader] = useState(true)

  useEffect(() => {
    const preloadVideos = () => {
      console.log("called")

      Works.forEach((slide) => {
        const video = document.createElement("video")
        video.src = slide.src
        video.preload = "auto"
      })
    }

    preloadVideos()
  }, [])

  useEffect(() => {
    const hasLoaded = sessionStorage.getItem("homeLoaded")
    if (!hasLoaded) {
      setShowPreloader(true)
      sessionStorage.setItem("homeLoaded", "true")
    }

    const preloadImage = new Image()
    preloadImage.src = bgImage

    preloadImage.onload = () => {
      setIsLoaded(true)
      setTimeout(() => {
        setShowPreloader(false)
      }, 2000)
    }
  }, [isLoaded])

  return (
    <>
      {showPreloader && <Preload />}
      {!showPreloader && isLoaded && (
        <main className={s.homeWrapper}>
          <div className={s.leftContent}>
            <div className={s.leftContentMain}>
              <h1 className={s.contentTitle}>Jr. Frontend Developer</h1>
              <div className={s.contentText}>
                <span className={s.hiText}>Hi,</span> my name is{" "}
                <span className={s.hiTextName}>Karen Grigoryan.</span>
                <TypeAnimation
                  sequence={[
                    " I'm a junior frontend developer.",
                    2000,
                    " I'm continuously learning and improving my skills.",
                    2000,
                    " While my current knowledge isn't at the expert level, I'm highly motivated to grow and excel in this field.",
                    10000,
                    " If you're still here, let me tell you that you are wonderful !)",
                    3000,
                  ]}
                  wrapper='span'
                  speed={50}
                  deletionSpeed={70}
                  repeat={Infinity}
                />
              </div>
            </div>
            <div className={s.hireMeWrapper}>
              <p className={s.hireMeText}>Based in Yerevan, Armenia</p>
              <HireMe />
            </div>
          </div>
          <div className={s.rightContent}>
            <img
              src={bgImage}
              alt='Karen Grigoryan'
            />
          </div>
        </main>
      )}
      <PageBackgroundManager page='home' />
      {/* <StarField /> */}
    </>
  )
}
export default Home
