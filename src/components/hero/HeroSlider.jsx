import { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import './styles.css';

import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import HeroSlide from './HeroSlide';

export default function HeroSlider(props) {
  const {popular} = props
  const progressCircle = useRef(null);
  const progressContent = useRef(null);
  const onAutoplayTimeLeft = (s, time, progress) => {
    progressCircle.current.style.setProperty('--progress', 1 - progress);
    progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
  };
  return (
    <>
      <Swiper
        style={{"--swiper-theme-color": "#fff", "--swiper-navigation-size": "24", "--swiper-pagination-bullet-inactive-color": "#fff"}}
        spaceBetween={30}
        centeredSlides={true}
        loop
        autoplay={{
          delay: 10000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        onAutoplayTimeLeft={onAutoplayTimeLeft}
        className="mySwiper"
      >
        <SwiperSlide><HeroSlide data={popular[0]} /></SwiperSlide>
        <SwiperSlide><HeroSlide data={popular[1]} /></SwiperSlide>
        <SwiperSlide><HeroSlide data={popular[2]} /></SwiperSlide>
        <SwiperSlide><HeroSlide data={popular[3]} /></SwiperSlide>
        <SwiperSlide><HeroSlide data={popular[4]} /></SwiperSlide>
        <SwiperSlide><HeroSlide data={popular[5]} /></SwiperSlide>
        <SwiperSlide><HeroSlide data={popular[6]} /></SwiperSlide>
        <SwiperSlide><HeroSlide data={popular[7]} /></SwiperSlide>
        <div className="autoplay-progress" slot="container-end">
          <svg width={7} height={12} viewBox="0 0 48 48" ref={progressCircle}>
            <circle cx="24" cy="24" r="20">1hkd jyyre</circle>
          </svg>
          <span ref={progressContent}></span>
        </div>
      </Swiper>
    </>
  );
}
