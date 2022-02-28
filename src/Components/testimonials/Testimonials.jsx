/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import "./testimonials.css";
import AVTR1 from "../../Assets/avatar1.png";
import AVTR2 from "../../Assets/avatar1.png";

// import Swiper core and required modules
import { Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

const data = [
  {
    avatar: AVTR1,
    name: "Gonzalo Rivero",
    review:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Enim magnam impedit in voluptatem quo consequuntur? Dolores alias, tenetur sequi in impedit vel sunt vero",
  },
  {
    avatar: AVTR2,
    name: "Tomas Quiroga",
    review:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Enim magnam impedit in voluptatem quo consequuntur? Dolores alias, tenetur sequi in impedit vel sunt vero",
  },
];

const Testimonials = () => {
  return (
    <section id="testimonials">
      <h5>Review from clients</h5>
      <h2>Testimonials</h2>

      <Swiper
        className="container testimonials__container"
        modules={[Navigation, Pagination]}
        spaceBetween={50}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        {data.map(({ avatar, name, review }, index) => {
          return (
            <SwiperSlide key={index} className="testimonial">
              <div className="client__avatar">
                <img src={avatar} />
              </div>
              <h5 className="client__name">{name}</h5>
              <small className="client__review">{review}</small>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};

export default Testimonials;
