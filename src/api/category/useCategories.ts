import { useEffect, useState } from "react";
import fetchData from "../fetchData";

export const useCategories = () => {
  const [categories, setCategories] = useState<string[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const jsonProduct = await fetchData(
          "https://fakestoreapi.com/products/categories"
        );
        setCategories(jsonProduct);
        setLoading(false);
      } catch (error) {
        setLoading(false);
      }
    };
    fetchCategories();
  }, []);

  return { categories, loading };
};
