import React from "react";
import User from "./User";
import CartHeader from "./CartHeader";
import Logo from "./Logo";

function Header() {
  return (
    <div className="header_container">
      <User />
      <Logo />
      <CartHeader />
    </div>
  );
}

export default Header;
