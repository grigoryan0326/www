import React, { useRef, useEffect, useState } from "react"
import styled from "styled-components"
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

const StyledSwiper = styled.div`
  .swiper-button-prev,
  .swiper-button-next {
    position: absolute;
    top: ${({ $navigationTopValue }) => $navigationTopValue}px;
    color: var(--text-color-secondary);
    width: fit-content;
    height: 50px;
    opacity: 0.7;
    transition: 0.3s;

    &:after {
      font-size: 30px;
    }

    &:hover {
      opacity: 1;
      transform: scale(1.5);
    }
  }

  .custom-pagination {
    position: absolute;
    top: ${({ $paginationTopValue }) => $paginationTopValue}px;
  }
`

export default function WorksSlider() {
  const elementRef = useRef(null)
  const [paginationTopValue, setPaginationTopValue] = useState(0)
  const [navigationTopValue, setNavigationTopValue] = useState(0)

  useEffect(() => {
    const updateTopPosition = () => {
      if (elementRef.current) {
        const elementHeight = elementRef.current.getBoundingClientRect().height
        setPaginationTopValue(elementHeight + 10)
        setNavigationTopValue((elementHeight - 10) / 2)
      }
    }

    updateTopPosition()

    const resizeObserver = new ResizeObserver(updateTopPosition)
    if (elementRef.current) {
      resizeObserver.observe(elementRef.current)
    }

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
    <StyledSwiper
      $paginationTopValue={paginationTopValue}
      $navigationTopValue={navigationTopValue}
    >
      <Swiper
        modules={[Pagination, Navigation, EffectFade, Autoplay, Mousewheel]}
        spaceBetween={30}
        slidesPerView={1}
        effect='fade'
        mousewheel
        loop
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
          style={{ top: `${paginationTopValue}px` }}
        ></div>
      </Swiper>
    </StyledSwiper>
  )
}
