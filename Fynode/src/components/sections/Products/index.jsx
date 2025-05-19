import React, { useEffect, useState } from "react";
import { PiArrowRight } from "react-icons/pi";
import { VscStarFull } from "react-icons/vsc";
import ProductCard from "../../shared/ProductCard";

const Products = () => {
  const [data, setData] = useState([]);

  const apiFetchData = async () => {
    fetch("http://localhost:3002/products")
      .then((res) => res.json())
      .then((data) => setData(data));
  };
  useEffect(() => {
    apiFetchData();
  }, []);
  const products = data.slice(3, 7);

  return (
    <div className="container mx-auto px-11 font-[inter] pt-[100px]">
      <div className="grid sm:grid-cols-1 2xl:grid-cols-4 justify-between gap-[20px]">
        {products.map((product) => (
          <ProductCard key={product.id} product={product}/>
        ))}
      </div>
    </div>
  );
};

export default Products;
