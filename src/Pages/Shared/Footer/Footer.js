import React from "react";
import linkedIn from "../../../assets/linkedin.png";
import facebook from "../../../assets/facebook_1.png";
import gitHub from "../../../assets/github.png";

const Footer = () => {
  return (
    <div className="bg-gray-900 text-white py-24">
      <h1 className="text-2xl text-center italic font-serif font-semibold">
        Shahanaz Ahmed Nishi
      </h1>
      <p className="text-center">
        Thank you for visiting my website.You can connect with me through the
        following social media websites.
      </p>
      <div className="flex gap-4 justify-center mt-5">
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
          <img style={{ height: "30px", width: "30px" }} src={gitHub} alt="" />
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
    </div>
  );
};

export default Footer;
