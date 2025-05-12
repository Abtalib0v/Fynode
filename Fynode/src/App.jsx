import React from "react";
import Layout from "./components/Layout";
import Card from "./components/sections/Card";
import Details from "./components/sections/Details";
import BigTitle from "./components/sections/BigTitle";
import VideoProduct from "./components/sections/video-product";
import MostSold from "./components/sections/MostSold";
import Headphones from "./components/sections/Headphones";
import AutoPlayMethods from "./components/sections/Textslider";
import Products from "./components/sections/products";
import About from "./components/sections/About";

const App = () => {
  return (
    <Layout>
      <Card />
      <Details />
      <BigTitle/>
      <VideoProduct/>
      <MostSold/>
      <Headphones/>
      <AutoPlayMethods/>
      <Products/>
      <About/>
    </Layout>
  );
};

export default App;
