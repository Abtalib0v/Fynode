import React from "react";

const Footer = () => {
  return (
    <div className=" bg-black">
      <div className="container py-[86px] px-11 text-white mx-auto font-[inter]">
        <footer className="grid sm:grid-cols-1 2xl:grid-cols-4 justify-between">
          <div className="logo">
            <div className="image mb-4">
              <img
                className="w-[150px]"
                src="./src/assets/logo-light.webp"
                alt=""
              />
            </div>
            <ul className="text-[#a1a1aa] text-[14px]">
              <li className="flex mb-2 w-[85%]">
                <strong className=" contents">Address:</strong> 1234 Fashion
                Street, Suite 567, New York, NY
              </li>
              <li className="flex mb-2">
                <strong className=" contents">Phone:</strong> +123 456 7890
              </li>
              <li className="flex mb-2">
                <strong className=" contents">Email:</strong> info@example.com
              </li>
            </ul>
          </div>
          <div className="letsUp">
            <div className="title">
              <h1 className="mb-3.5 text-[18px] font-semibold">
                LetUs Help You
              </h1>
            </div>
            <ul className="text-[#a1a1aa] text-[14px] leading-[1.7]">
              <li>Accessibility Statement</li>
              <li>Your Orders</li>
              <li>Returns & Replacements</li>
              <li>Shipping Rates & Policies</li>
              <li>Refund and Returns Policy</li>
              <li>Privacy Policy</li>
              <li>Terms and Conditions</li>
              <li>Cookie Settings</li>
              <li>Help Center</li>
            </ul>
          </div>
          <div className="knowUs">
            <div className="title">
              <h1 className="mb-3.5 text-[18px] font-semibold">
                Get to Know Us
              </h1>
            </div>
            <ul className="text-[#a1a1aa] text-[14px] leading-[1.7]">
              <li>Careers for Fynode</li>
              <li>About Fynode</li>
              <li>Investor Relations</li>
              <li>Fynode Devices</li>
              <li>Customer Reviews</li>
              <li>Social Responsibility</li>
              <li>Store Locations</li>
            </ul>
          </div>
          <div className="singUp px-[18px]">
            <div className="title">
              <h1 className="mb-3.5 text-[18px] font-semibold">
                Sing Up for Email
              </h1>
            </div>
            <ul className="text-[#a1a1aa] text-[14px] leading-[1.7]">
              <li>
                Sign up to get first dibs on new arrivals, sales, exclusive
                content, events and more!
              </li>
              <div className="email flex justify-between rounded-2xl pl-4 pr-1.5 bg-[#27272a] text-[#a1a1aa] p-2 my-[13px]">
                <input className="outline-0 "
                  type="email"
                  name="Email"
                  id="email"
                  placeholder="Enter your email address"
                />
                <button className="bg-black text-white text-[13px] h-[36px] rounded-[12px] border-transparent px-4">SEND</button>
              </div>
              <p className="text-[12px] text-[#a1a1aa]">By subscribing you agree to our <a href="#" className="text-white text-[12px] underline">Terms & Conditions and Privacy & Cookies Policy.</a></p>
            </ul>
          </div>
        </footer>
      </div>
      <div className=" container px-[44px] mx-auto">
        <div className="container  py-[32px] text-white mx-auto font-[inter] border-t-[1px] border-t-[#27272a]">
<div className="info-bottom text-[14px] flex justify-between">
  <div className="info-left text-[#a1a1aa]">
    <h1>Copyright © 2025 <a className="text-white text-[14px] underline" href="#">Fynode.</a> All rights reserved.</h1>
  </div>
  <div className="info-right flex gap-2">
    <div className="image p-2 bg-white rounded-[4px]">
          <img src="./src/assets/payment.png" alt="" />
    </div>
    <div className="image p-2 bg-white rounded-[4px]">
          <img src="./src/assets/payment2.png" alt="" />
    </div>
    <div className="image p-2 bg-white rounded-[4px]">
          <img src="./src/assets/payment3.png" alt="" />
    </div>
    <div className="image p-2 bg-white rounded-[4px]">
          <img src="./src/assets/payment4.png" alt="" />
    </div>
    <div className="image p-2 bg-white rounded-[4px]">
          <img src="./src/assets/payment5.png" alt="" />
    </div>


  </div>
</div>
      </div>
      </div>
      
    </div>
  );
};

export default Footer;
