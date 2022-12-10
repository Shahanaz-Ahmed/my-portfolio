import React from "react";
import banner from "../../../assets/banner.png";
import linkedIn from "../../../assets/linkedin.png";
import facebook from "../../../assets/facebook_1.png";
import gitHub from "../../../assets/github.png";
import { Typewriter } from "react-simple-typewriter";

const Banner = () => {
  return (
    <div>
      <div className="bg-black text-white">
        <div className="hero  bg-black">
          <div className="hero-content flex-col lg:flex-row-reverse">
            <img
              src={banner}
              className="max-w-sm rounded-lg shadow-2xl lg:pl-16"
              alt=""
            />
            <div className="w-full">
              <h1 className="text-4xl font-serif font-bold">Hey</h1>
              <h2 className="text-4xl font-serif font-bold">
                This is Shahanaz Ahmed Nishi
              </h2>
              {/*  */}
              <span
                style={{
                  color: "#62B6B7",
                  fontWeight: "bold",
                  fontSize: "24px",
                }}
              >
                <Typewriter
                  words={["I am a Front-End Developer"]}
                  loop={10}
                  cursor
                  cursorStyle="_"
                  typeSpeed={80}
                />
              </span>
              {/*  */}
              <br />
              <div className="flex gap-4 mt-5">
                {" "}
                <a
                  rel="noopener noreferrer"
                  target="_blank"
                  href="https://www.linkedin.com/in/shahanaz-ahmed-nishi-323a7b20b/"
                >
                  <img
                    style={{ height: "30px", width: "30px" }}
                    className=""
                    src={linkedIn}
                    alt=""
                  />
                </a>
                <a
                  rel="noopener noreferrer"
                  target="_blank"
                  href="https://github.com/Shahanaz-Ahmed"
                >
                  <img
                    style={{ height: "30px", width: "30px" }}
                    src={gitHub}
                    alt=""
                  />
                </a>
                <a
                  rel="noopener noreferrer"
                  target="_blank"
                  href="https://www.facebook.com/stunning.shahnaj"
                >
                  <img
                    style={{ height: "30px", width: "30px", color: "white" }}
                    src={facebook}
                    alt=""
                  />
                </a>
              </div>
              <br /> <br />
              <a href="resume.pdf" download="resume.pdf">
                <button className="btn glass">Download Resume</button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
