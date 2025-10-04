import { render, screen } from "@testing-library/react";
import { MemoryRouter, Route, Routes } from "react-router-dom";
import { expect, it } from "vitest";

import Home from "../pages/Home";
import NotFound from "../pages/NotFound";

it("Not Found page", () => {
  render(
    <MemoryRouter initialEntries={["/wrong-route"]}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </MemoryRouter>
  );
  expect(screen.getByText("404 - Not Found")).toBeDefined();
});
