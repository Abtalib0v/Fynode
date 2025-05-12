import React, { } from "react";
import Slider from "react-slick";

function AutoPlayMethods() {
  

  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000
  };
  return (
    <div className="container mx-auto px-11 font-[inter]">
         <div className="slider-container pt-[76px]">
      <Slider ref={slider => ( slider)} {...settings}>
        <div className=" text-center !flex flex-col items-center ">
            <h1 className="text-4xl max-w-[882px] font-medium leading-[1.5] mb-2 tracking-tight">"The design is spectacular, the fit is precise, the ANC is industry-leading, the battery life is fantastic, and the audio is clear and powerful."</h1>
            <p className="text-[14px] font-semibold opacity-[.5]">Jessica Lindström</p>
            <div className="image mt-[30px]">
                <img src="./src/assets/luxe-icon.png" alt="" />
            </div>
        </div>
         <div className=" text-center !flex flex-col items-center">
            <h1 className="text-4xl max-w-[882px] font-medium leading-[1.5] mb-2 tracking-tight">"The design is spectacular, the fit is precise, the ANC is industry-leading, the battery life is fantastic, and the audio is clear and powerful."</h1>
            <p>Jessica Lindström</p>
            <div className="image mt-[30px]">
                <img src="./src/assets/luxe-icon.png" alt="" />
            </div>
        </div>
         <div className="text-center !flex flex-col items-center">
            <h1 className="text-4xl max-w-[882px] font-medium leading-[1.5] mb-2 tracking-tight">"The design is spectacular, the fit is precise, the ANC is industry-leading, the battery life is fantastic, and the audio is clear and powerful."</h1>
            <p>Jessica Lindström</p>
            <div className="image mt-[30px]">
                <img src="./src/assets/luxe-icon.png" alt="" />
            </div>
        </div>
      </Slider>
    </div>
    </div>
   
  );
}
export default AutoPlayMethods;
