import React from "react";
import self from "../../assets/self11.png";
import self1 from "../../assets/self12.png";
import self2 from "../../assets/self13.PNG";
import self3 from "../../assets/self2.PNG";
import self4 from "../../assets/self1.PNG";
import self5 from "../../assets/self2.PNG";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/effect-cube";
import "swiper/css/pagination";

// import "./styles.css";
import { EffectCube, EffectCoverflow, Pagination } from "swiper";
const Project3 = () => {
  return (
    <div className="bg-black text-white">
      <h2 className="text-center italic text-3xl font-serif font-bold">
        Self Learning
      </h2>
      <h2 className="text-2xl italic text-center  mb-5">
        Online based Educational Website
      </h2>
      <div className="">
        <Swiper
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={4}
          coverflowEffect={{
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
          }}
          pagination={true}
          modules={[EffectCoverflow, Pagination]}
          className="mySwiper h-[300px] hidden lg:flex"
        >
          <SwiperSlide>
            <img
              className="lg:h-64 md:h-64 sm:hidden lg:block md:block"
              src={self1}
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide>
            <img className="lg:h-64 md:h-64 sm:h-[300px]" src={self} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={self3} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={self2} alt="" />
          </SwiperSlide>

          <SwiperSlide>
            <img className="lg:h-64 md:h-64 sm:h-48" src={self4} alt="" />
          </SwiperSlide>
          {/* <SwiperSlide>
            <img className="h-64" src={self5} alt="" />
          </SwiperSlide> */}
        </Swiper>
        {/* //small device */}
        <Swiper
          effect={"cube"}
          grabCursor={true}
          // slidesPerView={4}
          cubeEffect={{
            shadow: true,
            slideShadows: true,
            shadowOffset: 20,
            shadowScale: 0.94,
          }}
          pagination={true}
          modules={[EffectCube, Pagination]}
          className="mySwiper w-96 lg:hidden mb-5"
        >
          <SwiperSlide>
            <img className="h-64" src={self1} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img className="h-64" src={self5} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img className="h-64" src={self4} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img className="h-64" src={self3} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img className="h-64" src={self2} alt="" />
          </SwiperSlide>
        </Swiper>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-6 bg-white p-12">
          <div className="card shadow-xl bg-accent">
            <div className="card-body mt-4 mr-4 bg-black">
              <a href="https://edutech-849e4.web.app/">
                {" "}
                <h2 className=" text-3xl font-bold italic font-serif text-center mb-2 text-accent hover:text-blue-600">
                  Website Live link
                </h2>
              </a>
              <p className="text-center text-2xl ">Check out my website</p>
            </div>
          </div>
          <div className="card shadow-xl bg-accent">
            <div className="card-body mt-4 mr-4 bg-black">
              <a href="https://github.com/Shahanaz-Ahmed/self-learning-client-10">
                {" "}
                <h2 className=" text-3xl font-bold italic font-serif text-center mb-2 text-accent hover:text-blue-600">
                  GitHub Client link
                </h2>
              </a>
              <p className="text-center text-2xl ">
                Check out github client link
              </p>
            </div>
          </div>
          <div className="card shadow-xl bg-accent">
            <div className="card-body mt-4 mr-4 bg-black">
              <a href="https://github.com/Shahanaz-Ahmed/self-learning-server-10">
                {" "}
                <h2 className=" text-3xl font-bold italic font-serif text-center mb-2 text-accent hover:text-blue-600">
                  Github Server Link
                </h2>
              </a>
              <p className="text-center text-2xl ">
                Check out Github server link
              </p>
              <div className="card-actions justify-center"></div>
            </div>
          </div>
        </div>
        <div className="flex justify-center items-center bg-accent text-black pl-8">
          <p className="text-2xl mt-4 lg:mt-0 text-justify md:text-left text-sm">
            <h2 className=" text-3xl font-bold italic font-serif text-center mb-5 text-black">
              Website Details
            </h2>
            ● Self-learning is a straightforward React web application for a
            learning platform that offers six different courses for enrollment.
            <br />● Course Categories pages are routed dynamically, pdf
            downloading feature is added, Context API is used
            <br />
            ● Used server side and authenticate user using firebase.
            <br />● Private Route is used to prevent unauthorized users from
            gaining access.
            <br />
            To obtain premium access user need to access first.
            <br />● Technology Used: HTML, CSS, Bootstrap, ReactJs, Node.js,
            Firebase, GitHub, Vercel.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Project3;
