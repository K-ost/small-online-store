import { Suspense, type JSX } from "react";
import { Outlet } from "react-router-dom";

const SuspenseLayout = (): JSX.Element => {
  return (
    <Suspense fallback={<div>Loading page...</div>}>
      <Outlet />
    </Suspense>
  );
};

export default SuspenseLayout;
