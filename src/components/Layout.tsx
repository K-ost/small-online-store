import { Suspense, type JSX } from "react";
import { Outlet } from "react-router-dom";
import Navmenu from "./Navmenu";

const Layout = (): JSX.Element => {
  return (
    <div className="container m-auto px-4 py-4">
      <Navmenu />
      <Suspense fallback={<div>Loading page...</div>}>
        <Outlet />
      </Suspense>
    </div>
  );
};

export default Layout;
