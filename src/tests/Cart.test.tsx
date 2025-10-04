import { act, render, renderHook, screen } from "@testing-library/react";
import { afterEach, describe, expect, it, vi } from "vitest";

import CartPage from "../pages/Cart";
import { useCartStore } from "../store/useCartStore";
import { CartUtils } from "../utils/CartUtils";
import { ProductFactory, Wrapper } from "./testUtilities";

const cartUtils = new CartUtils();
const productFactory = new ProductFactory();
const mocketCart = productFactory.createCartList();

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
    });

    it("Cart is empty", () => {
      render(
        <Wrapper>
          <CartPage />
        </Wrapper>
      );
      expect(screen.getByText("Your cart is empty yet.")).toBeDefined();
    });
  });
});
