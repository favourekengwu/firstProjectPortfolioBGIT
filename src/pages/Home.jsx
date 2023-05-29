import React from "react";
import Herobox from "../components/Home/Herobox";
import Subscribe from "../components/Home/Subscribe";
import About from "../components/Home/About";
import Portfolio from "../components/Home/Portfolio";


const Home = () => {
  return (
    <main>
      <Herobox/>
      <About/>
      <Portfolio/>
      <Subscribe/>
    </main>
  );
}

export default Home;