import React, { useEffect, useState } from "react";
import { PiArrowRight } from "react-icons/pi";

const Card = () => {
  const [data, setData] = useState([]);

  const apiFetchData = async () => {
    fetch("http://localhost:3002/quality")
      .then((res) => res.json())
      .then((data) => setData(data));
  };

  useEffect(() => {
    apiFetchData();
  }, []);
    const quality = data.slice(0,2);

  return (
    <div className="container mx-auto px-11 font-[inter]">
      <div className="grid sm:grid-cols-1 2xl:grid-cols-2 justify-between gap-[35px]">
        {quality.map((quality) => (
          <div className="hi" key={quality.id}>
            <div className="Cards" >
              <div className="image bg-black rounded-[23px] overflow-hidden relative ">
                <img
                  src={quality.image}
                  alt=""
                  className=" w-full opacity-[0.9]"
                />
                <div
                  className={`title absolute left-[50px] w-[510px] ${
                    quality.id == 1 ? "top-[50px]" : "bottom-[50px]"
                  }`}
                >
                  <h1
                    className={`text-[18px] font-medium ${
                      quality.id == 1 ? "" : "text-white"
                    }`}
                  >
                    {quality.name}
                  </h1>
                  <h2
                    className={`bg-gradient-to-r from-neutral-800 to-stone-500 bg-clip-text text-transparent text-[42px] font-bold tracking-tight leading-[1.375] ${
                      quality.id == 1 ? "" : "text-white"
                    }`}
                  >
                    {quality.title}
                  </h2>
                  <p
                    className={`text-[18px] mb-1 font-light text-[#000] ${
                      quality.id == 1 ? "" : "text-white"
                    }`}
                  >
                    {quality.desc}
                  </p>
                  <a
                    href="#"
                    className=" inline-flex cursor-pointer mt-[30px] text-black bg-white rounded-[50px] h-[44px] pl-[22px] pr-[22px]  items-center gap-1.5 text-[13px] font-semibold"
                  >
                    {quality.button} <PiArrowRight />
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )

  //     <div className="Card">{data.map((user) => (
  // <div key={user.id}>
  //   <p>{user.name}</p>
  // </div>
  //     ))}
  //     </div>
  //   );
};

export default Card;
