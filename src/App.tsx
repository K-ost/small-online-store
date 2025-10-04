import { lazy, type JSX } from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Layout from "./components/Layout";

const Bookmarks = lazy(() => import("./pages/Bookmarks"));
const ProductPage = lazy(() => import("./pages/Product"));
const CartPage = lazy(() => import("./pages/Cart"));

function App(): JSX.Element {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index path="/" element={<Home />} />
        <Route path="/bookmarks" element={<Bookmarks />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/:id" element={<ProductPage />} />
      </Route>
    </Routes>
  );
}

export default App;
