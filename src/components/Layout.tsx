import { type JSX } from "react";

import Navmenu from "./Navmenu";

const Layout = ({ children }: { children: React.ReactNode }): JSX.Element => {
  return (
    <div className="container m-auto px-4 py-4">
      <Navmenu />
      {children}
    </div>
  );
};

export default Layout;
