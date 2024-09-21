import React, { useRef, useEffect, useState } from "react"

import { Swiper, SwiperSlide } from "swiper/react"
import {
  Pagination,
  Navigation,
  EffectFade,
  Autoplay,
  Mousewheel,
} from "swiper/modules"
import "swiper/scss"
import "swiper/scss/navigation"
import "swiper/scss/pagination"
import "swiper/scss/effect-fade"

import Works from "../../utils/WorksSlideData"
import "./WorksSlider.scss"

export default function WorksSlider() {
  const elementRef = useRef(null)
  const [topValue, setTopValue] = useState(0)

  useEffect(() => {
    const updateTopPosition = () => {
      const elementHeight = elementRef.current.getBoundingClientRect().height
      setTopValue(elementHeight + 10)
    }

    updateTopPosition()

    const resizeObserver = new ResizeObserver(() => {
      updateTopPosition()
    })

    if (elementRef.current) {
      resizeObserver.observe(elementRef.current)
    }

    const current = elementRef.current

    return () => {
      if (current) {
        resizeObserver.unobserve(current)
      }
    }
  }, [])

  return (
    <Swiper
      modules={[Pagination, Navigation, EffectFade, Autoplay, Mousewheel]}
      spaceBetween={30}
      slidesPerView={1}
      effect='fade'
      mousewheel
      loop
      lazy={{ loadPrevNext: true }}
      navigation
      pagination={{
        clickable: true,
        dynamicBullets: true,
        el: ".custom-pagination",
      }}
    >
      {Works.map((work) => {
        const [mainDescription, skills] = work.description.split("\n\n")

        return (
          <SwiperSlide key={work.id}>
            <video
              autoPlay
              muted
              loop
              playsInline
              alt={work.name}
              ref={elementRef}
              src={work.src}
              className='swiper-video'
            />
            <div className='swiper-slide-content'>
              <a
                href={work.link}
                target='_blank'
                rel='noreferrer'
                title='Source code'
                className='swiper-title'
              >
                {work.name}
              </a>
              <p className='swiper-desc'>{mainDescription}</p>
              {skills && <p className='swiper-skills'>{skills}</p>}
            </div>
          </SwiperSlide>
        )
      })}
      <div
        className='custom-pagination'
        style={{ top: `${topValue}px` }}
      ></div>
    </Swiper>
  )
}
