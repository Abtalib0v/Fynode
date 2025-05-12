import React, { useEffect, useState } from "react";
import { PiArrowRight } from "react-icons/pi";
import { VscStarFull } from "react-icons/vsc";

const VideoProduct = () => {
  const [data, setData] = useState([]);
  
    const apiFetchData = async () => {
      fetch("http://localhost:3002/one-product")
        .then((res) => res.json())
        .then((data) => setData(data));
    };
    useEffect(() => {
      apiFetchData();
    }, []);
  return (
    <div className=" container mx-auto px-11 pt-[60px] font-[inter]">
      <div>
        <div className=" flex justify-center ">{data.map((product)=>(
          <div className="video bg-black rounded-[20px] overflow-hidden w-full relative " key={product.id}>
            <video
              className=" h-full 2xl:w-full lg:max-w-none sm:max-w-none opacity-[0.8]"
              src="./src/assets/video-07.mp4"
              autoPlay
              muted
              loop
              playsInline
            ></video>
            <div className="pro-cards absolute w-[380px] top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 md:left-auto md:right-[56px] md:translate-x-0 rounded-xl overflow-hidden bg-[#f4f4f5] pb-[28px]">
              <div className="image">
                <img
                  className="w-[380px] object-contain"
                  src={product.image}
                  alt=""
                />
              </div>
              <div className="hov-image"></div>
              <div className="title pt-[32px] px-[38px] pb-[28px]">
                <h1 className="text-[13px] text-[#71717a]">{product.name}</h1>
                <h2 className="text-[18px] font-semibold leading-[1.55] tracking-[-0.02rem] mb-1.5">
                  {product.title}
                </h2>
                <p className="text-[15px] tracking-[-0.02rem]">${product.price}</p>
              </div>
              
              <div className="stars absolute flex text-[12px] top-[24px] right-[24px] bg-[#fff] px-2.5 py-1.5 rounded-full pr-3 text-[#52525b] font-bold">
                <span className="text-[#facc15] text-[16px]">
                  <VscStarFull />
                </span>
                {product.stars}
              </div>
            </div>
            <div className="left-title text-white  w-[50%] absolute bottom-[-56px] -translate-x-1/2 right-1/2 -translate-y-1/2 md:right-auto md:left-[56px] md:translate-x-0">
                <h1 className="text-[56px] leading-[1.375] font-medium tracking-tight mb-2">Relish the Resonance of Refined Headphone</h1>
                <p className="text-[18px] opacity-[.75] mb-4">Experience unmatched audio clarity with crafted headphones.</p>
                <a
                  href="#"
                  className=" inline-flex cursor-pointer mt-4 bg-transparent rounded-[50px] pr-[22px]  items-center gap-1.5 text-[15px] font-semibold"
                >
                  Shop Now <PiArrowRight />
                </a>
              </div>
          </div>
        ))}
          
        </div>
      </div>
    </div>
  );
};

export default VideoProduct;
