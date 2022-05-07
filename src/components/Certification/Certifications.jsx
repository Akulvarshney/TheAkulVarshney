import React, { useState } from "react";
import "./certi.css";
import CertiItem from "./CertiItem";
import Certi from "./certi";
import { Navigation, Pagination } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const Certifications = () => {
  return (
    <section className="container" id="cert" data-aos="zoom-in">
      <h1>Certificates</h1>
      <div className="certs">
        <Swiper
          modules={[Navigation, Pagination]}
          spaceBetween={50}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          onSwiper={(swiper) => console.log(swiper)}
          onSlideChange={() => console.log("slide change")}
        >
          <SwiperSlide>
            <CertiItem
              name={Certi[0].name}
              company={Certi[0].company}
              logo={Certi[0].logo}
              url={Certi[0].url}
            />
          </SwiperSlide>
          <SwiperSlide>
            <CertiItem
              name={Certi[1].name}
              company={Certi[1].company}
              logo={Certi[1].logo}
              url={Certi[1].url}
            />
          </SwiperSlide>
          <SwiperSlide>
            <CertiItem
              name={Certi[2].name}
              company={Certi[2].company}
              logo={Certi[2].logo}
              url={Certi[2].url}
            />
          </SwiperSlide>
          <SwiperSlide>
            <CertiItem
              name={Certi[3].name}
              company={Certi[3].company}
              logo={Certi[3].logo}
              url={Certi[3].url}
            />
          </SwiperSlide>
          <SwiperSlide>
            <CertiItem
              name={Certi[4].name}
              company={Certi[4].company}
              logo={Certi[4].logo}
              url={Certi[4].url}
            />
          </SwiperSlide>
          <SwiperSlide>
            <CertiItem
              name={Certi[5].name}
              company={Certi[5].company}
              logo={Certi[5].logo}
              url={Certi[5].url}
            />
          </SwiperSlide>
          <SwiperSlide>
            <CertiItem
              name={Certi[6].name}
              company={Certi[6].company}
              logo={Certi[6].logo}
              url={Certi[6].url}
            />
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
};

export default Certifications;
