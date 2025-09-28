import type { JSX } from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";

function App(): JSX.Element {
  return (
    <div className="container m-auto px-4 py-4">
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
