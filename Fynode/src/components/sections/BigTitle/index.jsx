import React, { useEffect, useState } from "react";

const BigTitle = () => {
  const [data, setData] = useState([]);

  const apiFetchData = async () => {
    fetch("http://localhost:3002/total")
      .then((res) => res.json())
      .then((data) => setData(data));
  };
  useEffect(() => {
    apiFetchData();
  }, []);
  return (
    <div className="container mx-auto px-11 font-[inter]">
      <div className="big-title flex justify-center pt-[60px] items-center flex-col ">
        <h1 className='sm:text-[45px] 2xl:text-[96px] text-transparent leading-[1.375] tracking-[-0.025em] font-extrabold bg-clip-text mb-0.5 text-center bg-[url("./src/assets/download.png")] w-[80%] '>
          Unleash the Power of Perfect Sound
        </h1>
        <div>
          <p className="text-[22px] font-light text-center opacity-[.75] leading-[2.375] tracking-[-0.010em] mb-[16px]">
            Fynode: Where Modern Technology Meets Everyday Excellence
          </p>
        </div>
      </div>
      <div className="total grid sm:grid-cols-1 2xl:grid-cols-2 pt-[60px]">
        {data.map((total) => (
          <div
            className={`hi p-[10px] border-[#D4D4D8] sm:border-r-[0px] ${total.id == 1 ? "2xl:border-r-[1px]" : ""} `}
            key={total.id}
          >
            <div className="totals text-center px-[3.75rem] ">
              <h1 className=" sm:text-[28px] 2xl:text-[96px] leading-[1.1] font-bold tracking-[-0.025em] mb-0.5 text-[#212529]">
                {total.number}
              </h1>
              <h2 className=" sm:text-[14px] 2xl:text-[24px] text-[#212529] font-semibold mb-0.5 leading-[1.5] tracking-[-0.025em]">
                {total.title}
              </h2>
              <p className="text-[16px] opacity-[.75] font-light">
                {total.desc}
              </p>
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
export default BigTitle;
