import React, { useEffect, useState } from 'react'
import { PiArrowRight } from 'react-icons/pi';

const Headphones = () => {
  const [data, setData] = useState([]);

  const apiFetchData = async () => {
    fetch("http://localhost:3002/quality")
      .then((res) => res.json())
      .then((data) => setData(data));
  };

  useEffect(() => {
    apiFetchData();
  }, []);
  const headphone = data.find(item => item.id === 3);
  return (
    <div className="container mx-auto px-11 pt-[65px] font-[inter]">
      <div className="grid sm:grid-cols-1 2xl:grid-cols-1 justify-between">
        {headphone && (
          <div className="hi" key={headphone.id}>
            <div className="Cards" >
              <div className="image  rounded-[23px] overflow-hidden relative ">
                <img
                  src={headphone.image}
                  alt=""
                  className=" w-full "
                />
                <div
                  className="title absolute left-[80px] w-[540px] bottom-[16%]">
                  <h1
                    className="text-[18px] font-medium text-white mb-4">
                    {headphone.name}
                  </h1>
                  <h2
                    className="bg-gradient-to-r from-slate-50 to-neutral-500 bg-clip-text text-transparent text-[56px] font-bold tracking-tight leading-[1.375]"
                  >
                    {headphone.title}
                  </h2>
                  <p
                    className="text-[20px] opacity-[.75] font-light text-white"
                    
                  >
                    {headphone.desc}
                  </p>
                  <a
                    href="#"
                    className=" inline-flex cursor-pointer mt-[30px] text-black bg-white rounded-[50px] h-[54px] pl-[32px] pr-[32px]  items-center gap-1.5 text-[15px] font-semibold"
                  >
                    {headphone.button} <PiArrowRight />
                  </a>
                </div>
              </div>
            </div>
          </div>
        )}
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
export default Headphones