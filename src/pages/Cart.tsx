import type { JSX } from "react";
import Title from "../ui/Title";
import { useCartStore } from "../store/useCartStore";
import Button from "../ui/Button";
import CartItem from "../components/CartItem";
import { CartUtils } from "../utils/CartUtils";
import Layout from "../components/Layout";

const cartUtils = new CartUtils();

function CartPage(): JSX.Element {
  const orders = useCartStore((state) => state.orders);
  const removeAllOrders = useCartStore((state) => state.removeAllOrders);

  return (
    <Layout>
      <Title>Cart</Title>
      {!orders.length && <div>Your cart is empty yet.</div>}

      {orders.length > 0 && (
        <div className="mb-6">
          <Button variant="outlined" onClick={() => removeAllOrders()}>
            Remove All Products
          </Button>
        </div>
      )}

      {orders.length > 0 && (
        <table className="border-collapse w-full">
          <thead>
            <tr>
              <td className="border border-gray-300 px-4 py-1">Name</td>
              <td className="border border-gray-300 px-4 py-1">Price</td>
              <td className="border border-gray-300 px-4 py-1">Count</td>
              <td className="border border-gray-300 px-4 py-1" colSpan={2}>
                Total
              </td>
            </tr>
          </thead>
          <tbody>
            {orders.map((el) => (
              <CartItem key={el.id} item={el} />
            ))}
          </tbody>
          <tfoot>
            <tr>
              <td className="p-4 font-medium text-3xl" colSpan={5}>
                Total price: ${cartUtils.getTotalPrice(orders)}
              </td>
            </tr>
          </tfoot>
        </table>
      )}
    </Layout>
  );
}

export default CartPage;
