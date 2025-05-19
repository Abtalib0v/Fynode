import React from "react";
import { RiHeart3Line, RiSearchLine, RiShoppingCartLine } from "react-icons/ri";
import { VscAccount, VscArrowSwap, VscChevronDown } from "react-icons/vsc";
import { MdAccountCircle, MdOutlineAccountCircle } from "react-icons/md";

import Basket from "../../shared/basket";
import { Link } from "react-router-dom";


const Header = () => {
  return (
    <div className="bg-black">
      <div className=" bg-white rounded-t-[56px] relative">
        <div>
          
        </div>
        <div className="container mx-auto px-11 font-[inter]">
          <div className="navbar flex justify-between">
            <div className="navbar_left h-[106px] flex items-center gap-[40px]">
              <div className="logo ">
                <img
                  src="./src/assets/logo-black.webp "
                  className="w-[149px]"
                />
              </div>
              <ul className="gap-[28px] sm:hidden 2xl:flex">
            
                    <li className="text-[18px] font-medium  flex items-center gap-0.5 h-[106px] cursor-pointer relative group">
                  Home <VscChevronDown />
                  <ul className="absolute left-[-35px] top-[100px] opacity-0 group-hover:opacity-100  transition-all duration-300 w-[200px] shadow-2xl pt-[36px] pb-[36px] rounded-b-2xl cursor-default z-10 bg-white">
                    <li className="pl-[36px] w-max"><a href="">Home 1</a></li>
                    <li className="pl-[36px] w-max"><a href="">Home 2</a></li>
                    <li className="pl-[36px] w-max"><a href="">Home 3</a></li>
                    <li className="pl-[36px] w-max"><a href="">Home 4</a></li>
                    <li className="pl-[36px] w-max"><a href="">Home 5</a></li>
                    <li className="pl-[36px] w-max"><a href="">Home 6</a></li>
                  </ul>
                </li>
                 
                
                <li className="text-[18px] font-medium  flex items-center gap-0.5 h-[106px]">
                <a href="#"></a>  Shop <VscChevronDown />
                </li>
                <li className="text-[18px] font-medium  flex items-center gap-0.5 h-[106px]">
                 <a href="#">Headphones</a> {" "}
                </li>
                <li className="text-[18px] font-medium  flex items-center gap-0.5 h-[106px]">
                 <a href="#">Accessories</a> {" "}
                </li>
                <li className="text-[18px] font-medium  flex items-center gap-0.5 h-[106px]">
                 <a href="#">Blog</a> {" "}
                </li>
                <li className="text-[18px] font-medium  flex items-center gap-0.5 h-[106px]">
                 <a href="#">Contact</a> {" "}
                </li>
                
              </ul>
            </div>
            <div className="navbar_right h-[106px] flex items-center ">
              <ul className="flex items-center gap-[14px]">
                <li className="font-medium  flex items-center gap-0.5 h-[106px] text-[28px]"><RiSearchLine /></li>
                <li className="flex items-center gap-[8px] text-[27px]"><MdOutlineAccountCircle/> <a href="/Register" className="text-[15px]">Register</a></li>
                <li className="flex items-center gap-[8px] text-[27px]"><MdAccountCircle /> <a href="/login" className="text-[15px]">Account</a></li>
                <li className="text-[29px]"> <RiHeart3Line /></li>
                <li className="text-[29px]"><VscArrowSwap /></li>
                <li className="text-[29px]"><button onClick={Basket}><RiShoppingCartLine /></button></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
