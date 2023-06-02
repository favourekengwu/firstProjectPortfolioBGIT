import React from "react";
import Herobox from "../components/Home/Herobox";
import Subscribe from "../components/Home/Subscribe";
import AboutHome from "../components/Home/AboutHome";
import PortfolioHome from "../components/Home/PortfolioHome";


const Home = () => {
  return (
    <main>
      <Herobox/>
      <AboutHome/>
      <PortfolioHome/>
      <Subscribe/>
    </main>
  );
}

export default Home;