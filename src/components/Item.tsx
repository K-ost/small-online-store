import type { JSX } from "react";
import type { Product } from "../types";
import Button from "../ui/Button";

type ItemProps = {
  item: Product;
};

const Item = (props: ItemProps): JSX.Element => {
  const { item } = props;
  return (
    <div className="flex flex-col border border-gray-300 rounded-xl p-4">
      <div className="grow">
        <div className="flex align-middle justify-center h-[140px] mb-4">
          <img src={item.image} alt="" />
        </div>
        <div className="text-lg font-semibold mb-4 line-clamp-2">{item.title}</div>
      </div>
      <div className="text-base text-gray-500">{item.category}</div>
      <div className="text-2xl font-semibold text-blue-800">${item.price}</div>
      <div className="grid grid-cols-2 gap-2 mt-2">
        <Button fullwidth="true">Buy</Button>
        <Button fullwidth="true" variant="outlined">
          Favorites
        </Button>
      </div>
    </div>
  );
};

export default Item;
