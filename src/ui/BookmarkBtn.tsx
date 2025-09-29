import type { HTMLAttributes, JSX } from "react";
import heart from "../assets/heart.svg";
import heartFilled from "../assets/heart-filled.svg";

type BookmarkBtnProps = HTMLAttributes<HTMLButtonElement> & {
  active: "true" | "false";
};

const BookmarkBtn = (props: BookmarkBtnProps): JSX.Element => {
  const { active } = props;
  return (
    <button
      className="flex justify-center items-center w-[34px] h-[34px] border-0 cursor-pointer bg-gray-100 rounded-md"
      {...props}
    >
      <img src={active === "true" ? heartFilled : heart} alt="" className="w-4" />
    </button>
  );
};

export default BookmarkBtn;
