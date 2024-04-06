import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

import "../../styles/swiper.css";

// import required modules
import { FreeMode, Autoplay } from "swiper/modules";
import { Link } from "react-router-dom";

const WorkCarousel = () => {
  return (
    <>
      {/* desktop */}
      <div className="desktop min-[290px]:hidden md:block">
        <Swiper
          slidesPerView={3}
          spaceBetween={30}
          freeMode={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          loop={true}
          modules={[Autoplay, FreeMode]}
          className="mySwiper"
        >
          <SwiperSlide>
            <Link to={`/work/1`}>
              <img src="/book1.png" alt="book" loading="lazy" />
            </Link>
          </SwiperSlide>
          <SwiperSlide>
            <Link to={`/work/2`}>
              <img src="/book1.png" alt="book" loading="lazy" />
            </Link>
          </SwiperSlide>
          <SwiperSlide>
            <Link to={`/work/3`}>
              <img src="/book1.png" alt="book" loading="lazy" />
            </Link>
          </SwiperSlide>
          <SwiperSlide>
            <Link to={`/work/4`}>
              <img src="/book1.png" alt="book" loading="lazy" />
            </Link>
          </SwiperSlide>
          <SwiperSlide>
            <Link to={`/work/5`}>
              <img src="/book1.png" alt="book" loading="lazy" />
            </Link>
          </SwiperSlide>
        </Swiper>
      </div>
      {/* mobile */}
      <div className="mobile min-[290px]:block md:hidden">
        <Swiper
          slidesPerView={1}
          spaceBetween={30}
          freeMode={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          loop={true}
          modules={[Autoplay, FreeMode]}
          className="mySwiper"
        >
          <SwiperSlide>
            <Link to={`/work/1`}>
              <img src="/book1.png" alt="book" loading="lazy" />
            </Link>
          </SwiperSlide>
          <SwiperSlide>
            <Link to={`/work/2`}>
              <img src="/book1.png" alt="book" loading="lazy" />
            </Link>
          </SwiperSlide>
          <SwiperSlide>
            <Link to={`/work/3`}>
              <img src="/book1.png" alt="book" loading="lazy" />
            </Link>
          </SwiperSlide>
          <SwiperSlide>
            <Link to={`/work/4`}>
              <img src="/book1.png" alt="book" loading="lazy" />
            </Link>
          </SwiperSlide>
          <SwiperSlide>
            <Link to={`/work/5`}>
              <img src="/book1.png" alt="book" loading="lazy" />
            </Link>
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
};

export default WorkCarousel;
