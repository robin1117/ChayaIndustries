import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/bundle";
import Hero from "./Hero";

const Swipers = () => {
  return (
    <div className="bg-cyan-500 relative" id="home">
      <Hero />
      <Swiper
        modules={[Pagination, Autoplay]}
        spaceBetween={0}
        slidesPerView={1}
        loop={true} // 🔁 keep looping
        speed={2000} // transition speed
        autoplay={{
          delay: 1000, // ⚡ move immediately, no pause
          disableOnInteraction: false, // keep autoplay even after user touch
          reverseDirection: false, // always go forward
        }}
        pagination={{
          clickable: true,
          bulletClass: "my-bullet",
          bulletActiveClass: "my-bullet-active",
        }}
        allowTouchMove={true} // ❌ disable manual sliding
        grabCursor={false}
        className=" bg-amber-300 h-[calc(100vh-80px)]"
      >
        {/* Slides */}
        <SwiperSlide>
          <img
            src="./image1.png"
            alt="slide1"
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              objectPosition: "left",
            }}
          />
        </SwiperSlide>

        <SwiperSlide>
          <img
            src="image2.png"
            alt="slide2"
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              objectPosition: "bottom",
            }}
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="image3.png"
            alt="slide2"
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              objectPosition: "bottom",
            }}
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Swipers;
