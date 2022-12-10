import React from "react";
import reshop1 from "../../../assets/reshop1.PNG";
import photoholic1 from "../../../assets/photoholic3.PNG";
import self1 from "../../../assets/self2.PNG";

const MyProjects = () => {
  return (
    <div id="my_project" className="bg-gray-900 pb-10">
      {/* start */}
      <h2 className="pt-5 text-center italic text-4xl font-serif font-bold text-white">
        My Project
      </h2>
      <div className="">
        {/* <!-- Container --> */}
        <div className="container mt-12 mx-auto p-4 md:p-5 bg-accent">
          {/* <!-- Card wrapper --> */}
          <div className="shadow-lg flex flex-wrap w-full lg:w-4/5 mx-auto">
            {/* <!-- Card image --> */}
            <div
              className="bg-cover bg-bottom border w-full md:w-1/3 h-64 md:h-auto relative"
              style={{
                backgroundImage: `url(${reshop1})`,
              }}
            >
              <div className="absolute text-xl">
                <i className="fa fa-heart text-white hover:text-red-light ml-4 mt-4 cursor-pointer"></i>
              </div>
            </div>
            {/* <!-- ./Card image --> */}

            {/* <!-- Card body --> */}
            <div className="bg-white w-full md:w-2/3">
              {/* <!-- Card body - outer wrapper --> */}
              <div className="h-full mx-auto px-6 md:px-0 md:pt-6 md:-ml-6 relative">
                {/* <!-- Card body - inner wrapper --> */}
                <div className="bg-black text-white lg:h-full p-6 -mt-6 md:mt-0 relative mb-4 md:mb-0 flex flex-wrap md:flex-wrap items-center">
                  {/* <!-- Card title and subtitle --> */}
                  <div className="w-full lg:w-1/5 lg:border-right lg:border-solid text-center md:text-left">
                    <h3 className="text-xl font-bold italic font-serif">
                      ReShop
                    </h3>
                    <p className="mb-0 mt-3 text-grey-dark text-sm italic">
                      Online Buy & Sell
                    </p>
                    <hr className="w-1/4 md:ml-0 mt-4  border lg:hidden" />
                  </div>
                  {/* <!-- ./Card title and subtitle --> */}

                  {/* <!-- Card description --> */}
                  <div className="w-full lg:w-3/5 lg:px-3">
                    <p className="text-md mt-4 lg:mt-0 text-justify md:text-left text-sm">
                      ● ReShop is a React-responsive web application where
                      people can also sell their used books and buy.
                      <br />● Different authorization systems were implemented
                      for the admin, seller, and buyer. Private Route were used
                      to limit user access.
                      <br />● Private Route has also been explored Via Admin,
                      Buyer, Seller, and Private Route within the dashboard
                      Admin can see All sellers & All Buyers. Admin can verify
                      seller. Admin can delete buyers or Sellers. On the other
                      hand, sellers can add products & Buyers can see their
                      orders.
                      <br />● Technology Used: HTML5, CSS,daisyUI, ReactJS,
                      React Router, Node.js, Express.js, Firebase, MongoDB,
                      Vercel.
                    </p>
                  </div>
                  {/* <!-- ./Card description --> */}

                  {/* <!-- Call to action button --> */}
                  <div className="w-full lg:w-1/5 mt-6 lg:mt-0 lg:px-4 text-center md:text-left">
                    <a
                      rel="noopener noreferrer"
                      target="_blank"
                      href="https://reshop-569a0.web.app/"
                    >
                      <button className="glass hover:bg-grey-darker hover:text-white border border-solid border-grey w-1/3 lg:w-full py-2">
                        Live Link
                      </button>
                    </a>
                  </div>
                  {/* <!-- ./Call to action button --> */}
                </div>
                {/* <!-- ./Card body - inner wrapper --> */}
              </div>
              {/* <!-- ./Card body - outer wrapper --> */}
            </div>
            {/* <!-- ./Card body --> */}
          </div>
          {/* <!-- ./Card wrapper --> */}
        </div>
        {/* <!-- ./Container --> */}
      </div>
      {/* end */}
      <div className="">
        {/* <!-- Container --> */}
        <div className="container mt-12 mx-auto p-4 md:p-5 bg-accent">
          {/* <!-- Card wrapper --> */}
          <div className="shadow-lg flex flex-wrap w-full lg:w-4/5 mx-auto">
            {/* <!-- Card image --> */}
            <div
              className="bg-cover bg-bottom border w-full md:w-1/3 h-64 md:h-auto relative"
              style={{
                backgroundImage: `url(${photoholic1})`,
              }}
            >
              <div className="absolute text-xl">
                <i className="fa fa-heart text-white hover:text-red-light ml-4 mt-4 cursor-pointer"></i>
              </div>
            </div>
            {/* <!-- ./Card image --> */}

            {/* <!-- Card body --> */}
            <div className="bg-white w-full md:w-2/3">
              {/* <!-- Card body - outer wrapper --> */}
              <div className="h-full mx-auto px-6 md:px-0 md:pt-6 md:-ml-6 relative">
                {/* <!-- Card body - inner wrapper --> */}
                <div className="bg-black text-white lg:h-full p-6 -mt-6 md:mt-0 relative mb-4 md:mb-0 flex flex-wrap md:flex-wrap items-center">
                  {/* <!-- Card title and subtitle --> */}
                  <div className="w-full lg:w-1/5 lg:border-right lg:border-solid text-center md:text-left">
                    <h3 className="text-xl font-bold italic font-serif">
                      PhotoHolic
                    </h3>
                    <p className="mb-0 mt-3 text-grey-dark text-sm italic">
                      Personal Photography Website
                    </p>
                    <hr className="w-1/4 md:ml-0 mt-4  border lg:hidden" />
                  </div>
                  {/* <!-- ./Card title and subtitle --> */}

                  {/* <!-- Card description --> */}
                  <div className="w-full lg:w-3/5 lg:px-3">
                    <p className="text-md mt-4 lg:mt-0 text-justify md:text-left text-sm">
                      ● PhotoHolic is a simple React-responsive web application
                      with the goal of providing photography services of various
                      types.
                      <br />● Authentication, MongoDB crud operations,
                      conditional rendering, dynamic routing, and Private Route
                      have all been implemented. Unregistered users cannot add
                      reviews to this project; however, authenticated users can
                      add reviews
                      <br />● Technology Used: HTML, CSS, tailwind, daisyUI,
                      ReactJs, Node.js, MongoDB, Firebase, GitHub, Vercel.
                    </p>
                  </div>
                  {/* <!-- ./Card description --> */}

                  {/* <!-- Call to action button --> */}
                  <div className="w-full lg:w-1/5 mt-6 lg:mt-0 lg:px-4 text-center md:text-left">
                    <a
                      rel="noopener noreferrer"
                      target="_blank"
                      href="https://photoholic-client.web.app/"
                    >
                      <button className="glass hover:bg-grey-darker hover:text-white border border-solid border-grey w-1/3 lg:w-full py-2">
                        Live Link
                      </button>
                    </a>
                  </div>
                  {/* <!-- ./Call to action button --> */}
                </div>
                {/* <!-- ./Card body - inner wrapper --> */}
              </div>
              {/* <!-- ./Card body - outer wrapper --> */}
            </div>
            {/* <!-- ./Card body --> */}
          </div>
          {/* <!-- ./Card wrapper --> */}
        </div>
        {/* <!-- ./Container --> */}
      </div>
      {/* end */}

      <div className="">
        {/* <!-- Container --> */}
        <div className="container mt-12 mx-auto p-4 md:p-5 bg-accent">
          {/* <!-- Card wrapper --> */}
          <div className="shadow-lg flex flex-wrap w-full lg:w-4/5 mx-auto">
            {/* <!-- Card image --> */}
            <div
              className="bg-cover bg-bottom border w-full md:w-1/3 h-64 md:h-auto relative"
              style={{
                backgroundImage: `url(${self1})`,
              }}
            >
              <div className="absolute text-xl">
                <i className="fa fa-heart text-white hover:text-red-light ml-4 mt-4 cursor-pointer"></i>
              </div>
            </div>
            {/* <!-- ./Card image --> */}

            {/* <!-- Card body --> */}
            <div className="bg-white w-full md:w-2/3">
              {/* <!-- Card body - outer wrapper --> */}
              <div className="h-full mx-auto px-6 md:px-0 md:pt-6 md:-ml-6 relative">
                {/* <!-- Card body - inner wrapper --> */}
                <div className="bg-black text-white lg:h-full p-6 -mt-6 md:mt-0 relative mb-4 md:mb-0 flex flex-wrap md:flex-wrap items-center">
                  {/* <!-- Card title and subtitle --> */}
                  <div className="w-full lg:w-1/5 lg:border-right lg:border-solid text-center md:text-left">
                    <h3 className="text-xl font-bold italic font-serif">
                      Self Learning
                    </h3>
                    <p className="mb-0 mt-3 text-grey-dark text-sm italic">
                      Online Educational Website
                    </p>
                    <hr className="w-1/4 md:ml-0 mt-4  border lg:hidden" />
                  </div>
                  {/* <!-- ./Card title and subtitle --> */}

                  {/* <!-- Card description --> */}
                  <div className="w-full lg:w-3/5 lg:px-3">
                    <p className="text-md mt-4 lg:mt-0 text-justify md:text-left text-sm">
                      ● Self-learning is a straightforward React web application
                      for a learning platform that offers six different courses
                      for enrollment.
                      <br />● Course Categories pages are routed dynamically,
                      pdf downloading feature is added & To obtain premium
                      access, Private Route is used.
                      <br />● Technology Used: HTML, CSS, Bootstrap, ReactJs,
                      Node.js, Firebase, GitHub, Vercel.
                    </p>
                  </div>
                  {/* <!-- ./Card description --> */}

                  {/* <!-- Call to action button --> */}
                  <div className="w-full lg:w-1/5 mt-6 lg:mt-0 lg:px-4 text-center md:text-left">
                    <a
                      rel="noopener noreferrer"
                      target="_blank"
                      href="https://edutech-849e4.web.app/"
                    >
                      <button className="glass hover:bg-grey-darker hover:text-white border border-solid border-grey w-1/3 lg:w-full py-2">
                        Live Link
                      </button>
                    </a>
                  </div>
                  {/* <!-- ./Call to action button --> */}
                </div>
                {/* <!-- ./Card body - inner wrapper --> */}
              </div>
              {/* <!-- ./Card body - outer wrapper --> */}
            </div>
            {/* <!-- ./Card body --> */}
          </div>
          {/* <!-- ./Card wrapper --> */}
        </div>
        {/* <!-- ./Container --> */}
      </div>
    </div>
  );
};

export default MyProjects;
