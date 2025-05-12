import React, { useEffect, useState } from "react";
import { PiArrowRight } from "react-icons/pi";
import { VscStarFull } from "react-icons/vsc";

const MostSold = () => {
  const [data, setData] = useState([]);

  const apiFetchData = async () => {
    fetch("http://localhost:3002/products")
      .then((res) => res.json())
      .then((data) => setData(data));
  };
  useEffect(() => {
    apiFetchData();
  }, []);
  const products = data.slice(0,3);

  return (
    <div className="container mx-auto px-11 font-[inter]">
        <div className="top-title py-[35px] pt-[60px] flex items-center gap-[42px]">
        <h1 className="text-[40px] font-medium leading-[1.5] tracking-[-0.4px]">
          Most sold this week
        </h1>
      </div>
      <div className="grid sm:grid-cols-1 2xl:grid-cols-3 justify-between gap-[35px]">
        {products.map((products) => (
          <div key={products.id}>
            <div className="pro-cards rounded-xl overflow-hidden bg-[#f4f4f5] pb-[28px] relative">
              <div className="image">
                <img
                  className="w-full object-contain"
                  src={products.image}
                  alt=""
                />
              </div>
              <div className="hov-image"></div>
              <div className="title pt-[32px] px-[38px] pb-[28px]">
                <h1 className="text-[13px] text-[#71717a]">{products.name}</h1>
                <h2 className="text-[18px] font-semibold leading-[1.55] tracking-[-0.02rem] mb-1.5 min-h-[57px]">
                  {products.title}
                </h2>
                <div className="price flex gap-2.5">
                  <p className="text-[15px] tracking-[-0.02rem]">
                    ${products.price}
                  </p>
                  <span className="text-[#a1a1aa] text-[15px] tracking-[-0.02rem] line-through">
                    ${products.lineprice}
                  </span>
                </div>
              </div>

              <div className="stars absolute flex text-[12px] top-[24px] right-[24px] bg-[#fff] px-2.5 py-1.5 rounded-full pr-3 text-[#52525b] font-bold">
                <span className="text-[#facc15] text-[16px]">
                  <VscStarFull />
                </span>
                {products.stars}
              </div>
              <div className="stars absolute flex h-[26px] items-center px-[12px] py-[0.35em] text-[14px] top-[24px] left-[24px] bg-[#000] rounded-full pr-3 text-[#ffffff] font-bold">
                {products.discount}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MostSold;
