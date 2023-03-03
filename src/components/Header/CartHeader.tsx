import React from "react";
import { useContext } from "react";
import cartContext from "../../store/Cart/cart-context";

function CartHeader() {
  const cartCtx = useContext(cartContext);

  const numberOfCartItems = cartCtx.items.reduce((curNumber, item) => {
    return curNumber + item.quantity;
  }, 0);

  return (
      <div className="flex justify-end">
        <p className="grid content-center">Cart&nbsp;&nbsp;</p>
        <span className="text-white rounded-full bg-red-700 animate-pulse">
          &nbsp;&nbsp;{numberOfCartItems}&nbsp;&nbsp;
        </span>
      </div>
  );
}

export default CartHeader;
