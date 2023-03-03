import React from "react";

function CartHeader() {

  return (
      <div className="flex justify-end">
        <p className="grid content-center">Cart&nbsp;&nbsp;</p>
        <span className="text-white rounded-full bg-red-700 animate-pulse">
          &nbsp;&nbsp; 0 &nbsp;&nbsp;
        </span>
      </div>
  );
}

export default CartHeader;
