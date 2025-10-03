import type { JSX } from "react";
import type { CartOrder } from "../types";
import { useCartStore } from "../store/useCartStore";
import Button from "../ui/Button";

type CartItemProps = {
  item: CartOrder;
};

const CartItem = (props: CartItemProps): JSX.Element => {
  const { item } = props;
  const removeOrder = useCartStore((state) => state.removeOrder);
  const tdClass = "border border-gray-300 px-4 py-1";
  return (
    <tr>
      <td className={tdClass}>{item.title}</td>
      <td className={tdClass}>${item.price}</td>
      <td className={tdClass}>{item.count}</td>
      <td className={tdClass}>${item.price * item.count}</td>
      <td className={tdClass}>
        <Button onClick={() => removeOrder(item.id)}>X</Button>
      </td>
    </tr>
  );
};

export default CartItem;
