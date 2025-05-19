import React from "react";
import { BrowserRouter,Routes,Route} from "react-router-dom"
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
import CustomDialog from "./components/shared/Modal";
import Homepage from "./components/pages/Home";
import Detailpage from "./components/pages/Detail";
import Login from "./components/pages/Login";
import Register from "./components/pages/Register";


const App = () => {
  return (

    <Layout>
      
<BrowserRouter>
<Routes>
  <Route path="/" element={<div>
    <Card />
      <Details />
      <BigTitle/>
      <VideoProduct/>
      <MostSold/>
      <Headphones/>
      <AutoPlayMethods/>
      <Products/>
      <About/>
      <CustomDialog/></div>}/>
    <Route path="/detail" element={<div>Detail</div>}/>

  <Route path="/blog" element={<div>Blog</div>}/>
   <Route path="/Register" element={<div><Register/></div>}/>
 
    <Route path="/login" element={<div><Login/></div>}/>
    


  </Routes>
</BrowserRouter>
      
  
    </Layout>
 
  );
};

export default App;
