import React from "react";
import photoholic from "../../assets/photoholic11.png";
import photoholic1 from "../../assets/photoholic12.png";
import photoholic2 from "../../assets/photoholic13.png";
import photoholic3 from "../../assets/photoholic3.PNG";
import photoholic4 from "../../assets/photoholic.PNG";
import photoholic5 from "../../assets/photoholic2.PNG";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/effect-cube";
import "swiper/css/pagination";

// import "./styles.css";
import { EffectCube, EffectCoverflow, Pagination } from "swiper";
const Project2 = () => {
  return (
    <div className="bg-black text-white">
      <h2 className="text-center italic text-3xl font-serif font-bold">
        Photoholic
      </h2>
      <h2 className="text-2xl italic text-center  mb-5">
        Personal Photography Website
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
              className="lg:h-64 md:h-64 sm:h-[300px]"
              src={photoholic}
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide>
            <img src={photoholic2} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img
              className="lg:h-64 md:h-64 sm:hidden lg:block md:block"
              src={photoholic1}
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide>
            <img className="lg:h-64 md:h-64 sm:h-48" src={photoholic4} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img className="h-64" src={photoholic5} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={photoholic3} alt="" />
          </SwiperSlide>
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
            <img className="h-64" src={photoholic1} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img className="h-64" src={photoholic5} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img className="h-64" src={photoholic4} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img className="h-64" src={photoholic3} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img className="h-64" src={photoholic2} alt="" />
          </SwiperSlide>
        </Swiper>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-6 bg-white p-12">
          <div className="card shadow-xl bg-accent">
            <div className="card-body mt-4 mr-4 bg-black">
              <a href="https://photoholic-client.web.app/">
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
              <a href="https://github.com/Shahanaz-Ahmed/photoholic-client-11">
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
              <a href="https://github.com/Shahanaz-Ahmed/photoholic-server-11">
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
            ● PhotoHolic is a simple React-responsive web application with the
            goal of providing photography services of various types.
            <br />● Authentication, MongoDB crud operations, conditional
            rendering, dynamic routing all been implemented.
            <br />● Private Route is used to prevent unauthorized users from
            gaining access.
            <br />
            ● Unregistered users cannot add reviews to this project; however,
            authenticated users can add reviews
            <br />● Technology Used: HTML, CSS, tailwind, daisyUI, ReactJs,
            Node.js, MongoDB, Firebase, GitHub, Vercel.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Project2;
