import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";

import App from "../App";
import { ProductFactory, Wrapper } from "./testUtilities";

const productFactory = new ProductFactory();
const mockedList = productFactory.createProductsList();

describe("App", () => {
  beforeEach(() => {
    globalThis.fetch = vi.fn().mockImplementation(() =>
      Promise.resolve({
        json: async () => mockedList,
      })
    );
    render(
      <Wrapper>
        <App />
      </Wrapper>
    );
  });

  afterEach(() => {
    vi.resetAllMocks();
  });

  it("App renders", async () => {
    expect(screen.getAllByText("Product Catalog")).toBeDefined();
  });

  it("Moving to bookmarks page when it's empty", async () => {
    const navLinks = screen.getAllByRole("link", { name: "Bookmarks" });
    await userEvent.click(navLinks[1]);
    await waitFor(() => {
      expect(
        screen.getByText("Your haven't added anything to your bookmarks list yet.")
      ).toBeDefined();
    });
  });

  it("Adding bookmark", async () => {
    const navLinks = screen.getAllByRole("button", { name: "Add to bookamrks" });
    await userEvent.click(navLinks[0]);
    const counts = screen.getAllByRole("alert", { name: "Bookmarks count" });
    expect(counts[0].innerHTML).toStrictEqual("1");
  });

  it("Going to detail page", async () => {
    const links = screen.getAllByRole("link", { name: "Product link" });
    await userEvent.click(links[0]);
    await waitFor(() => {
      expect(screen.getByRole("heading", { name: "Product title" })).toBeDefined();
      expect(screen.getByText(/Category/i)).toBeDefined();
    });
  });
});
