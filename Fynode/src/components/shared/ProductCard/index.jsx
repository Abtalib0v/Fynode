import React from "react";

const ProductCard = ({ product }) => {
  return (
    <div className="bg-[#f4f4f5] rounded-2xl">
      <div className="title py-[26px] px-[30px]">
        <h1 className="text-2xl font-semibold leading-[1.2] mb-1">
          {product.title}
        </h1>
        <p className="text-[#71717a] text-[13px]">{product.desc}</p>
      </div>
      <div className="image py-5 px-[50px]">
        <img className="w-full" src={product.image} alt={product.title} />
      </div>
      <div className="bottom px-[30px] pb-[26px]">
        <button className="bg-white rounded-[50px] px-[22px] text-[13px] h-11 font-semibold">
          View Products
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
