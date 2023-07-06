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
    title: "Software Engineer",
    review:
      "I have known Santiago for about a year and a half and I was his reference in terms of programming from the moment we met, therefore I can give faith of your knowledge and desire to learn is a person with a high level of problem solving and highly predisposed to learn.",
  },
  {
    avatar: AVTR2,
    name: "Tomas Quiroga",
    title: "Fellow Developer",
    review:
      "He is a true professional dedicated body and soul to improving the world as a programmer. I like that he continues to be a restless person, with the ability to improve himself and continue advancing as a programmer and as a person.",
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
        {data.map(({ avatar, name, review, title }, index) => {
          return (
            <SwiperSlide key={index} className="testimonial">
              <h3 className="client__name">{name}</h3>
              <div className="client__avatar">
                <img src={avatar} alt="AvatarImg" />
              </div>
              <h5 className="client__name">{title}</h5>
              <small className="client__review">{review}</small>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};

export default Testimonials;
