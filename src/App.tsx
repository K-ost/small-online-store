import { lazy, Suspense, type JSX } from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Navmenu from "./components/Navmenu";

const Bookmarks = lazy(() => import("./pages/Bookmarks"));
const ProductPage = lazy(() => import("./pages/Product"));

function App(): JSX.Element {
  return (
    <div className="container m-auto px-4 py-4">
      <Navmenu />
      <Suspense fallback={<div>Loading page...</div>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/bookmarks" element={<Bookmarks />} />
          <Route path="/:id" element={<ProductPage />} />
        </Routes>
      </Suspense>
    </div>
  );
}

export default App;
