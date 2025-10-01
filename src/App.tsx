import type { JSX } from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Navmenu from "./components/Navmenu";
import Bookmarks from "./pages/Bookmarks";
import ProductPage from "./pages/Product";

function App(): JSX.Element {
  return (
    <div className="container m-auto px-4 py-4">
      <Navmenu />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/bookmarks" element={<Bookmarks />} />
        <Route path="/:id" element={<ProductPage />} />
      </Routes>
    </div>
  );
}

export default App;
