import { memo, type JSX } from "react";
import type { Product } from "../types";
import Button from "../ui/Button";
import { useBookmarksStore } from "../store/useBookmarksStore";
import BookmarkBtn from "../ui/BookmarkBtn";
import { Link } from "react-router-dom";

type ItemProps = {
  item: Product;
};

const Item = (props: ItemProps): JSX.Element => {
  const { item } = props;
  const setBookmark = useBookmarksStore((state) => state.setBookmark);
  const isBookmarked = useBookmarksStore((state) =>
    state.bookmarks.some((el) => el.id === item.id)
  );

  console.log("Item renders");

  return (
    <div className="flex flex-col border border-gray-300 rounded-xl p-4 relative">
      <div className="grow">
        <div className="flex align-middle justify-center h-[140px] mb-4">
          <Link to={`/${item.id}`} className="flex">
            <img src={item.image} alt="" />
          </Link>
        </div>
        <div className="text-lg font-semibold mb-4 line-clamp-2">
          <Link to={`/${item.id}`}>{item.title}</Link>
        </div>
      </div>
      <div className="text-base text-gray-500">{item.category}</div>
      <div className="text-2xl font-semibold text-blue-800">${item.price}</div>
      <div className="flex mt-2">
        <Button fullwidth="true">Buy</Button>
      </div>
      <div className="absolute right-2 top-2">
        <BookmarkBtn
          active={isBookmarked ? "true" : "false"}
          onClick={() => setBookmark(item)}
        />
      </div>
    </div>
  );
};

export default memo(Item);
