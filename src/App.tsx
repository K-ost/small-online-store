import { type JSX, lazy } from "react";
import { Route, Routes } from "react-router-dom";

import SuspenseLayout from "./components/SuspenseLayout";
import Home from "./pages/Home";

const Bookmarks = lazy(() => import("./pages/Bookmarks"));
const ProductPage = lazy(() => import("./pages/Product"));
const CartPage = lazy(() => import("./pages/Cart"));
const NotFound = lazy(() => import("./pages/NotFound"));

function App(): JSX.Element {
  return (
    <Routes>
      <Route index path="/" element={<Home />} />
      <Route element={<SuspenseLayout />}>
        <Route path="/bookmarks" element={<Bookmarks />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/products/:id" element={<ProductPage />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}

export default App;
