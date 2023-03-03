import Header from "../Header";
import React from "react";

type Props = { children: Array<React.ReactElement> | React.ReactElement };

const Layout: React.FC<Props> = (props): React.ReactElement => {
  return (
    <div>
      <Header />
      {props.children}
    </div>
  );
};
export default Layout;
