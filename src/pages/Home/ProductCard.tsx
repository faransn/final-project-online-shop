import React, { FC } from "react";
import { TProduct } from "../../types";

const ProductCard: FC<{ product: TProduct }> = ({ product }) => {
  const addToCartHandler = () => {};

  return (
    <div className=" shadow-xl flex flex-col justify-between p-2">
      <div className="flex justify-center h-2/6 ">
        <img
          src={product.image}
          alt="product"
          className="w-fit object-scale-down"
        />
      </div>
      <h5 className="h-1/6">{product.title}</h5>
      <h6 className="h-1/6">{product.category}</h6>
      <p className="h-2/6 overflow-auto text-justify">{product.description}</p>
      <div className="flex justify-between items-center">
        <div className="inline-block">price {product.price}$</div>
        <button
          onClick={addToCartHandler}
          className="inline-block bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded active:bg-blue-900 focus:outline-none focus:ring focus:ring-violet-300"
        >
          Add to cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
