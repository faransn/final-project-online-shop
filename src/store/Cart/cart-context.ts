import React from "react";
import { TProduct } from "../../types";
import { CartContextType } from "../../types/TCart";

const cartContext = React.createContext<CartContextType>({
  items: [],
  totalAmount: 0,
  addItem: (item: TProduct) => {
    // add item
  },
  subtractItem: (id: number) => {
    //subtract item
  },
  deleteItem: (id: number) => {
    //delete all items
  },
});

export default cartContext;
