import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { afterAll, beforeAll, describe, expect, it, vi } from "vitest";

import Home from "../pages/Home";
import { ProductFactory, Wrapper } from "./testUtilities";

const productFactory = new ProductFactory();
const mockedList = productFactory.createProductsList();

describe("Products List and Filter", () => {
  beforeAll(() => {
    globalThis.fetch = vi.fn().mockImplementation(() =>
      Promise.resolve({
        json: async () => mockedList,
      })
    );
    render(
      <Wrapper>
        <Home />
      </Wrapper>
    );
  });

  afterAll(() => {
    vi.resetAllMocks();
  });

  it("Loading Data", () => {
    expect(screen.getByText("Loading...")).toBeDefined();
  });

  it("Getting Data", async () => {
    await waitFor(() => {
      expect(screen.getAllByRole("button", { name: "Buy" })).toBeDefined();
    });
  });

  describe("Using Filter", () => {
    it("Using both search and select", async () => {
      const searchInput = screen.getByRole("textbox", { name: "Filter search" });
      const select = screen.getByRole("combobox", { name: "Filter select" });
      expect(screen.getAllByRole("button", { name: "Buy" })).toHaveLength(5);
      await userEvent.type(searchInput, "p");
      await userEvent.selectOptions(select, ["clothes"]);
      expect(screen.getAllByRole("button", { name: "Buy" })).toHaveLength(1);
      await userEvent.selectOptions(select, ["all"]);
      await userEvent.clear(searchInput);
      expect(screen.getAllByRole("button", { name: "Buy" })).toHaveLength(5);
    });
  });
});
