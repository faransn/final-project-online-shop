import React from "react";
import { useState, useEffect } from "react";
import ProductCard from "./ProductCard";
import Loading from "./Loading";
import { TProduct } from "../../types";
import { useCategories } from "../../api/category/useCategories";
import { useProducts } from "../../api/products/useProducts";

const Product = () => {
  const { categories } = useCategories();
  const { products, loading } = useProducts();

  const [category, setCategory] = useState<string>("ALL");
  const [inputValue, setInputValue] = useState<string>("");

  const [resultProduct, setResultProduct] = useState<TProduct[]>([]);

  useEffect(() => {
    setResultProduct(products);
  }, [products]);

  // When dependencies changed, search method will run.
  useEffect(() => {
    search();
  }, [inputValue, category]);

  const search = () => {
    const res = products.filter(
      (item) =>
        (item.title.toLowerCase()?.indexOf(inputValue.toLowerCase()) > -1 ||
          item.description.toLowerCase()?.indexOf(inputValue.toLowerCase()) >
            -1) &&
        (category === "ALL" ? true : item.category === category)
    );
    setResultProduct([...res]);
  };

  return (
    <div>
      {loading ? (
        <Loading />
      ) : (
        <>
          <form>
            <div className="products_container">
              <div>
                <label className="relative block">
                  <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                    <svg
                      className="h-5 w-5 fill-black"
                      xmlns="http://www.w3.org/2000/svg"
                      x="0px"
                      y="0px"
                      width="30"
                      height="30"
                      viewBox="0 0 30 30"
                    >
                      <path d="M 13 3 C 7.4889971 3 3 7.4889971 3 13 C 3 18.511003 7.4889971 23 13 23 C 15.396508 23 17.597385 22.148986 19.322266 20.736328 L 25.292969 26.707031 A 1.0001 1.0001 0 1 0 26.707031 25.292969 L 20.736328 19.322266 C 22.148986 17.597385 23 15.396508 23 13 C 23 7.4889971 18.511003 3 13 3 z M 13 5 C 17.430123 5 21 8.5698774 21 13 C 21 17.430123 17.430123 21 13 21 C 8.5698774 21 5 17.430123 5 13 C 5 8.5698774 8.5698774 5 13 5 z"></path>
                    </svg>
                  </span>
                  <input
                    className="w-full bg-white placeholder:font-italitc border border-slate-300 rounded-full py-2 pl-10 pr-4 focus:outline-double"
                    type="text"
                    value={inputValue}
                    onChange={(e) => {
                      setInputValue(e.target.value);
                    }}
                  />
                </label>
              </div>
              <div>
                <div className="inline-block w-full pt-3 border border-b-black border-x-white border-t-white">
                  <select
                    className="outline-2 w-full"
                    value={category}
                    onChange={(e) => {
                      setCategory(e.target.value);
                    }}
                  >
                    <option value="ALL" disabled>
                      Category
                    </option>
                    {categories.map((category) => {
                      return (
                        <option key={`product-id ${category}`} value={category}>
                          {category}
                        </option>
                      );
                    })}
                  </select>
                </div>
              </div>
            </div>
          </form>
          {/* All Producsts justify-items-center */}
          <div className="products_container">
            {resultProduct.map((product) => {
              return (
                <ProductCard
                  product={product}
                  key={`product-id ${product.id}`}
                />
              );
            })}
          </div>
        </>
      )}
    </div>
  );
};
export default Product;
