import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";
import type { CartOrder, Product } from "../types";

interface CartStore {
  orders: CartOrder[];
  setOrder: (order: Product) => void;
  removeOrder: (id: number) => void;
  removeAllOrders: () => void;
}

export const useCartStore = create<CartStore>()(
  devtools(
    persist(
      (set) => ({
        orders: [],
        setOrder: (order) =>
          set((state) => {
            const existed = state.orders.find((el) => el.id === order.id);
            if (existed) {
              existed.count += 1;
              return { orders: state.orders };
            }
            const newOrder: CartOrder = { ...order, count: 1 };
            return { orders: [newOrder, ...state.orders] };
          }),
        removeOrder: (id) =>
          set((state) => ({ orders: state.orders.filter((el) => el.id !== id) })),
        removeAllOrders: () => set(() => ({ orders: [] })),
      }),
      {
        name: "Cart",
      }
    )
  )
);
