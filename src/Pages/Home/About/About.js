import React from "react";
import about from "../../../assets/about.jpg";

const About = () => {
  return (
    <div className="py-16 bg-slate-900 text-white">
      <div className="hero ">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left lg:w-1/2 lg:pl-12">
            <h1 className="text-4xl font-bold font-serif italic">About Me</h1>
            <p className="py-6 lg:w-3/4">
              hey there,I am a Front-End Developer with a Bachelor's degree in
              Computer Science and Engineering, possessing strong
              self-discipline and leadership traits. I am capable of adapting to
              any scenario and working efficiently in a high-pressure
              atmosphere.
            </p>
          </div>
          <div className="card flex-shrink-0 w-full max-w-md shadow-2xl bg-base-100">
            <div className="">
              <img src={about} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
