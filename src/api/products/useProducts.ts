import { useEffect, useState } from "react";
import fetchData from "../fetchData";
import { TProduct } from "../../types";

export const useProducts = () => {
  const [products, setProducts] = useState<TProduct[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const jsonProduct = await fetchData(
          "https://fakestoreapi.com/products"
        );
        setProducts(jsonProduct);
        setLoading(false);
      } catch (error) {
        setLoading(false);
      }
    };
    fetchProducts();
  }, []);

  return { products, loading };
};
