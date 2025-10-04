import {
  act,
  cleanup,
  render,
  renderHook,
  screen,
  waitFor,
} from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { afterEach, describe, expect, it, vi } from "vitest";

import App from "../App";
import CartPage from "../pages/Cart";
import { useCartStore } from "../store/useCartStore";
import { CartUtils } from "../utils/CartUtils";
import { ProductFactory, Wrapper } from "./testUtilities";

const cartUtils = new CartUtils();
const productFactory = new ProductFactory();
const mocketCart = productFactory.createCartList();
const mocketList = productFactory.createProductsList();

describe("Cart", () => {
  describe("Cart Utils", () => {
    it("getTotalPrice", () => {
      expect(cartUtils.getTotalPrice(mocketCart)).toStrictEqual(600);
    });
  });

  describe("useCartStore", () => {
    it("Init Store - Empty cart", () => {
      const { result } = renderHook(() => useCartStore(), { wrapper: Wrapper });
      expect(result.current.orders).toHaveLength(0);
      expect(result.current.setOrder).toBeTypeOf("function");
      expect(result.current.removeOrder).toBeTypeOf("function");
      expect(result.current.removeAllOrders).toBeTypeOf("function");
    });

    it("Placing new order", () => {
      const { result } = renderHook(() => useCartStore(), { wrapper: Wrapper });
      expect(result.current.orders).toHaveLength(0);
      act(() => {
        result.current.setOrder(productFactory.createProduct(1, "Product", "category"));
        result.current.setOrder(productFactory.createProduct(2, "Product 2", "category"));
        result.current.setOrder(productFactory.createProduct(3, "Product 3", "category"));
      });
      expect(result.current.orders).toHaveLength(3);
    });

    it("Removing certain order by ID", () => {
      const { result } = renderHook(() => useCartStore(), { wrapper: Wrapper });
      expect(result.current.orders).toHaveLength(3);
      act(() => {
        result.current.removeOrder(2);
      });
      expect(result.current.orders).toHaveLength(2);
    });

    it("Removing all orders", () => {
      const { result } = renderHook(() => useCartStore(), { wrapper: Wrapper });
      expect(result.current.orders).toHaveLength(2);
      act(() => {
        result.current.removeAllOrders();
      });
      expect(result.current.orders).toHaveLength(0);
    });
  });

  describe("Integration tests", () => {
    afterEach(() => {
      vi.clearAllMocks();
      cleanup();
    });

    it("Cart is empty", () => {
      render(
        <Wrapper>
          <CartPage />
        </Wrapper>
      );
      expect(screen.getByText("Your cart is empty yet.")).toBeDefined();
    });

    it("Placing order to cart", async () => {
      globalThis.fetch = vi.fn().mockImplementation(async () => ({
        json: async () => mocketList,
      }));
      render(
        <Wrapper>
          <App />
        </Wrapper>
      );
      await waitFor(() => {
        expect(screen.getByRole("button", { name: "buy-Shirt" })).toBeDefined();
      });
      await userEvent.click(screen.getByRole("button", { name: "buy-Shirt" }));
      expect(screen.getByRole("alert", { name: "Cart's count" })).toBeDefined();
      expect(screen.getByRole("alert", { name: "Cart's count" }).innerHTML).toBe("1");
    });

    it("Removing Cart", async () => {
      render(
        <Wrapper>
          <CartPage />
        </Wrapper>
      );
      const resetCart = screen.getByRole("button", { name: "Remove All Products" });
      expect(screen.getByText(/Total price:/i)).toBeDefined();
      expect(resetCart).toBeDefined();
      await userEvent.click(resetCart);
      expect(screen.getByText("Your cart is empty yet.")).toBeDefined();
    });
  });
});
