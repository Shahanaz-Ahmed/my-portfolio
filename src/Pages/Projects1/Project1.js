import React from "react";
import reshop from "../../assets/reshop1.PNG";
import reshop1 from "../../assets/Capture.PNG";
import reshop2 from "../../assets/reshop12.png";
import reshop3 from "../../assets/reshop13.png";
import reshop4 from "../../assets/reshop2.PNG";
import reshop5 from "../../assets/reshop4.PNG";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/effect-cube";
import "swiper/css/pagination";

// import "./styles.css";
import { EffectCube, EffectCoverflow, Pagination } from "swiper";

const Project1 = () => {
  return (
    <div className="bg-black text-white">
      <h2 className="text-center italic text-3xl font-serif font-bold">
        ReShop
      </h2>
      <h2 className="text-2xl italic text-center  mb-5">
        A Online based buy and selling website
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
              src={reshop1}
              alt=""
            />
          </SwiperSlide>

          <SwiperSlide>
            <img src={reshop2} alt="" />
          </SwiperSlide>

          <SwiperSlide>
            <img className="h-64" src={reshop5} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={reshop3} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img className="lg:h-64 md:h-64 sm:h-48" src={reshop4} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img className="lg:h-64 md:h-64 sm:h-[300px]" src={reshop} alt="" />
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
            <img className="h-64" src={reshop1} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img className="h-64" src={reshop5} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img className="h-64" src={reshop4} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img className="h-64" src={reshop3} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img className="h-64" src={reshop2} alt="" />
          </SwiperSlide>
        </Swiper>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-6 bg-white p-12">
          <div className="card shadow-xl bg-accent">
            <div className="card-body mt-4 mr-4 bg-black">
              <a href="https://reshop-569a0.web.app/">
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
              <a href=" https://github.com/Shahanaz-Ahmed/reshop-client-12">
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
              <a href=" https://github.com/Shahanaz-Ahmed/reshop-server-12">
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
            ● ReShop is a React-responsive web application where people can also
            sell their used books and buy.
            <br />● Firebase and MongoDB are employed to store data, and dynamic
            routing is established.
            <br />● Different authorization systems were implemented for the
            admin, seller, and buyer. Private Route were used to limit user
            access.
            <br />● Private Route has also been explored Via Admin, Buyer,
            Seller, and Private Route within the dashboard Admin can see All
            sellers & All Buyers. Admin can verify seller. Admin can delete
            buyers or Sellers. On the other hand, sellers can add products &
            Buyers can see their orders.
            <br />● Technology Used: HTML5, CSS,daisyUI, ReactJS, React Router,
            Node.js, Express.js, Firebase, MongoDB, Vercel.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Project1;
