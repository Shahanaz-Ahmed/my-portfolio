import React from "react";
import MyProjects from "../MyProjects/MyProjects";
import ConatctMe from "../ContactMe/ConatctMe";
import Banner from "../Banner/Banner";
import About from "../About/About";
import Blog from "../../Blog/Blog";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <MyProjects></MyProjects>
      <About></About>
      <ConatctMe></ConatctMe>
      <Blog></Blog>
    </div>
  );
};

export default Home;
