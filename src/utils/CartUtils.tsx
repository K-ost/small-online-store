import type { CartOrder } from "../types";

export class CartUtils {
  getTotalPrice(orders: CartOrder[]): number {
    return orders.reduce((acc, el) => (acc += el.price * el.count), 0);
  }
}
