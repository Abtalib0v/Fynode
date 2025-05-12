import React, { useEffect, useState } from "react";
import { PiArrowRight } from "react-icons/pi";
import { VscStarFull } from "react-icons/vsc";

const Products = () => {
  const [data, setData] = useState([]);

  const apiFetchData = async () => {
    fetch("http://localhost:3002/products")
      .then((res) => res.json())
      .then((data) => setData(data));
  };
  useEffect(() => {
    apiFetchData();
  }, []);
  const products = data.slice(3, 7);

  return (
    <div className="container mx-auto px-11 font-[inter] pt-[100px]">
      <div className="grid sm:grid-cols-1 2xl:grid-cols-4 justify-between gap-[20px]">
        {products.map((products) => (
          <div className="bg-[#f4f4f5] rounded-2xl" key={products.id}>
            <div className="title py-[26px] px-[30px]">
              <h1 className="text-2xl font-semibold leading-[1.2] mb-1">{products.title}</h1>
              <p className="text-[#71717a] text-[13px]">{products.desc}</p>
            </div>
            <div className="image py-5 px-[50px]">
              <img className="w-full" src={products.image} alt="" />
            </div>
            <div className="bottom px-[30px] pb-[26px]"> <button className=" bg-white rounded-[50px] px-[22px] text-[13px] h-11 font-semibold">
                View Products
                </button></div>
           
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
