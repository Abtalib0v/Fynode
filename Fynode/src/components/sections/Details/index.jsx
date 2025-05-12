import React, { useEffect, useState } from "react";
import { PiArrowRight } from "react-icons/pi";

const Details = () => {
  const [data, setData] = useState([]);

  const apiFetchData = async () => {
    fetch("http://localhost:3002/detail")
      .then((res) => res.json())
      .then((data) => setData(data));
  };
  useEffect(() => {
    apiFetchData();
  }, []);
  return (
    <div className="container mx-auto px-11 font-[inter]">
      <div className="top-title py-[35px] flex items-center gap-[42px]">
        <h1 className="text-[40px] font-medium leading-[1.5] tracking-[-0.4px]">
          Capture Every Detail
        </h1>
        <p className="text-[18px] opacity-[0.75]">
          Capture every nuance of your voice with this high-performance
          microphone.
        </p>
      </div>
      <div className="grid sm:grid-cols-1 2xl:grid-cols-3 justify-between gap-[35px]">
        {data.map((detail) => (
          <div className="hi" key={detail.id}>
            <div className="Cards">
              <div className="image relative ">
                <img
                  src={detail.image}
                  alt=""
                  className="rounded-[23px] w-full"
                />
                <div
                  className={`title absolute left-[50px] w-[310px] ${
                    detail.id == 0 ? "" : "bottom-[50px]"
                  }`}
                >
                  <h1
                    className={`text-[18px] font-medium ${
                      detail.id == 1 ? "" : "text-white"
                    }`}
                  >
                    {detail.name}
                  </h1>
                  <h2
                    className={`text-[white] text-[34px] font-extrabold tracking-[-1.4px] leading-[1.375] ${
                      detail.id == 1 ? [] : "text-white"
                    }`}
                  >
                    {detail.title}
                  </h2>
                  <p
                    className={`text-[15px] mb-1 font-light text-[#000] ${
                      detail.id == 0 ? "" : "text-white"
                    }`}
                  >
                    {detail.desc}
                  </p>
                  <a
                    href="#"
                    className=" hidden hover:inline-flex cursor-pointer mt-[30px] text-black bg-white rounded-[50px] h-[44px] pl-[22px] pr-[22px]  items-center gap-1.5 text-[13px] font-semibold"
                  >
                    {detail.button} <PiArrowRight />
                  </a>
                </div>
              </div>
            </div>
            {/* <div className="Cards"key={user.id}>
            
              <div className="image relative ">
              <img
                src={user.image}
                alt=""
                className="rounded-[23px] brightness-[80%] w-full"
              />
              <div className="title absolute bottom-[50px] left-[50px] w-[510px]">
                <h1 className="text-[18px] text-white font-medium">
                  {user.name}
                </h1>
                <h2 className=" text-white text-[42px] font-bold tracking-[-1.5px] leading-[1.375]">
                  {user.title}
                </h2>
                <p className="text-[18px] mb-1 font-light text-white">
                  {user.desc}
                </p>
                <a
                  href="#"
                  className=" inline-flex cursor-pointer mt-[30px] text-black bg-white rounded-[50px] h-[44px] pl-[22px] pr-[22px]  items-center gap-1.5 text-[13px] font-semibold"
                >
                  {user.button} <PiArrowRight />
                </a>
              </div>
            
            </div>
          
            
          </div>
             */}
          </div>
        ))}
      </div>
      
    </div>
  );
};

export default Details;
