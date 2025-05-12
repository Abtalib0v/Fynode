import React, { useEffect, useState } from 'react'

const About = () => {
    const [data, setData] = useState([]);
    
      const apiFetchData = async () => {
        fetch("http://localhost:3002/info")
          .then((res) => res.json())
          .then((data) => setData(data));
      };
      useEffect(() => {
        apiFetchData();
      }, []);
  return (
    <div className=' bg-black'> 
       <div className=' bg-white rounded-b-[56px]'>
      <div className="container  mx-auto px-11 pt-[65px] pb-[60px] font-[inter]">
          <div className="grid sm:grid-cols-1 2xl:grid-cols-4 justify-between">
            {data.map((info)=> (
              <div className="hi" key={info.id}>
                <div className="Cards flex gap-6  pt-[60px] border-t-[1px] border-t-[#dee2e6]"  >
                  <div className="image">
                    <img className='!min-w-[36px]' src={info.image} alt="" />
                  </div>
                  <div className="text">
                    <h1 className='text-[17px] font-semibold leading-[1.3] mb-1 tracking-tight'>{info.title}</h1>
                    <p className='text-[14px] font-normal leading-[1.6] text-[#71717a]'>{info.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
    </div>
    </div>
   
    
  )
}

export default About