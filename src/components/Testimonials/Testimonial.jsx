import React from "react";
import "./Testimonial.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Pagination, Navigation } from "swiper";
import "swiper/css/pagination";
import "swiper/css/navigation";
import profilePic1 from "../../img/profile1.jpg";
import profilePic2 from "../../img/amit.jpg";
import profilePic3 from "../../img/akshay.png";
import profilePic4 from "../../img/profile4.jpg";


const references = [
  // {
  //   img: profilePic1,
  //   name: "Sanjay Kulkarni (Team Lead, Senses Electronics)",
  //   review:
  //     "Vinayak demonstrated strong backend skills in Spring Boot and Java. His work on REST APIs improved module efficiency and his proactive attitude was valuable to our agile team.",
  // },

  {
    img: profilePic3,
    name: "Akshay Patil (Peer, PDEAS Collage of engineering)",
    review:
      "Vinayak has an excellent grasp of full stack concepts, and his project work showed both solid coding and problem-solving skills. A dependable and supportive teammate.",
  },
   {
    img: profilePic2,
    name: "Amit Patil (QA Engineer, Senses Electronics)",
    review:
      "Vinayak quickly resolves bugs and collaborates smoothly across teams. He is reliable, detail-oriented, and helped increase our sprint velocity.",
  },
  // {
  //   img: profilePic4,
  //   name: "Priya Deshmukh (Mentor, CDAC)",
  //   review:
  //     "Vinayak adapts quickly to new tech and brings a positive attitude to every challenge. His commitment to quality code and learning is impressive.",
  // },
];

const Testimonial = () => {
  return (
    <div className="t-wrapper" id="testimonial">
      <div className="t-heading" style={{ width: "100%", textAlign: "center" }}>
        <span>References &amp; Feedback</span>
        <div className="blur t-blur1" style={{ background: "var(--purple)" }}></div>
        <div className="blur t-blur2" style={{ background: "skyblue" }}></div>
      </div>
      <Swiper
        modules={[Pagination, Navigation]}
        slidesPerView={1}
        pagination={{ clickable: true }}
        navigation
      >
        {references.map((ref, index) => (
          <SwiperSlide key={index}>
            <div className="testimonial">
              <img src={ref.img} alt={ref.name} />
              <span style={{
                fontWeight: "bold",
                color: "#222",
                marginTop: "0.4rem",
                marginBottom: "0.3rem",
                fontSize: "1.05rem",
                textAlign: "center"
              }}>
                {ref.name}
              </span>
              <span style={{ textAlign: "center" }}>{ref.review}</span>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Testimonial;



