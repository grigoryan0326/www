import { Swiper, SwiperSlide } from "swiper/react";
import {
  Pagination,
  Navigation,
  EffectFade,
  Autoplay,
  Mousewheel,
} from "swiper/modules";
import "swiper/scss";
import "swiper/scss/navigation";
import "swiper/scss/pagination";
import "swiper/scss/effect-fade";

import Works from "../../utils/WorksSlideData";
import "./WorksSlider.scss";

export default function WorksSlider() {
  return (
    <Swiper
      modules={[Pagination, Navigation, EffectFade, Autoplay, Mousewheel]}
      spaceBetween={30}
      slidesPerView={1}
      effect="fade"
      mousewheel
      loop
      pagination={{ clickable: true, dynamicBullets: true }}
    >
      {Works.map((work) => (
        <SwiperSlide key={work.id}>
          <img className="swiper-img" src={work.src} alt={work.name} />
          <div className="swiper-slide-content">
            <h3 className="swiper-title">{work.name}</h3>
            <p className="swiper-desc">{work.description}</p>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
