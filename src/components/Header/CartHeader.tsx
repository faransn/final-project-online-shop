import React from "react";
import { useContext } from "react";
import cartContext from "../../store/Cart/cart-context";
import { Link } from "react-router-dom";

function CartHeader() {
  const cartCtx = useContext(cartContext);

  const numberOfCartItems = cartCtx.items.reduce((curNumber, item) => {
    return curNumber + item.quantity;
  }, 0);

  return (
    <Link to={"/cart"}>
      <div className="flex justify-end">
        <p className="grid content-center">Cart&nbsp;&nbsp;</p>
        <span className="text-white rounded-full bg-red-700 animate-pulse">
          &nbsp;&nbsp;{numberOfCartItems}&nbsp;&nbsp;
        </span>
      </div>
    </Link>
  );
}

export default CartHeader;
