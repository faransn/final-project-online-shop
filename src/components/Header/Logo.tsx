import React from "react";
import logo from "../../assets/logo.png";

function Logo() {
  return (
    <div className="flex justify-center">
      <img src={logo} alt="Shop Logo" className="object-contain h-16 w-32"/>
    </div>
  );
}

export default Logo;
