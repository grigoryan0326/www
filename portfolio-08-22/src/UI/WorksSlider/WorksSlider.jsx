import { Navigation, Pagination, A11y, EffectCards } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"

import "swiper/scss"
import "swiper/scss/navigation"
import "swiper/scss/pagination"
import "./WorksSlider.scss"

import work1 from "../../assets/gif/2rism.webp"
import work2 from "../../assets/gif/brownian-motion.gif"
import work3 from "../../assets/gif/countdown-timer.gif"
import work4 from "../../assets/gif/cutspace.gif"
import work5 from "../../assets/gif/file-downloader.gif"
import work6 from "../../assets/gif/house-staff.gif"
import work7 from "../../assets/gif/piano-game.gif"
import work8 from "../../assets/gif/rock-paper-scissors.gif"
import work9 from "../../assets/gif/snake-game.gif"
import work10 from "../../assets/gif/todo-vanillaJs.gif"

const WorksSlider = () => {
  return (
    <Swiper
    modules={[Navigation, Pagination, A11y, EffectCards]}
    effect={'cards'}
    centerInsufficientSlides={true}
    centeredSlides={true}
    // // effect="cube"
    spaceBetween={50}
    // slidesPerView={3}
    navigation
    pagination={{ clickable: true }}
    // onSwiper={(swiper) => console.log(swiper)}
    // onSlideChange={() => console.log("slide change")}
    >
      <SwiperSlide>
        <img
          src={work1}
          alt='2rism'
        />
      </SwiperSlide>
      <SwiperSlide>
        <img
          src={work2}
          alt='2rism'
        />
      </SwiperSlide>
      <SwiperSlide>
        <img
          src={work3}
          alt='2rism'
        />
      </SwiperSlide>
      <SwiperSlide>
        <img
          src={work4}
          alt='2rism'
        />
      </SwiperSlide>
      <SwiperSlide>
        <img
          src={work5}
          alt='2rism'
        />
      </SwiperSlide>
      <SwiperSlide>
        <img
          src={work6}
          alt='2rism'
        />
      </SwiperSlide>
      <SwiperSlide>
        <img
          src={work7}
          alt='2rism'
        />
      </SwiperSlide>
      <SwiperSlide>
        <img
          src={work8}
          alt='2rism'
        />
      </SwiperSlide>
      <SwiperSlide>
        <img
          src={work9}
          alt='2rism'
        />
      </SwiperSlide>
      <SwiperSlide>
        <img
          src={work10}
          alt='2rism'
        />
      </SwiperSlide>
    </Swiper>
  )
}

export default WorksSlider
