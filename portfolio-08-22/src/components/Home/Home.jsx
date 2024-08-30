import { TypeAnimation } from "react-type-animation"
import s from "./Home.module.scss"
// import StarField from "../StarField/StarField"
import bgImage from "../../assets/img/homeBg.jpg"
import HireMe from "../../UI/HireMeBtn/HireMe"
import PageBackgroundManager from "../../utils/PageBackgroundManager"

const Home = () => {
  return (
    <>
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
            alt='Karen'
          />
        </div>
      </main>
      <PageBackgroundManager page='home' />
      {/* <StarField /> */}
    </>
  )
}
export default Home
