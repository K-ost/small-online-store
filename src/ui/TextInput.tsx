import type { HTMLAttributes, JSX } from "react";

const TextInput = (props: HTMLAttributes<HTMLInputElement>): JSX.Element => {
  return (
    <input
      type="text"
      className="bg-inherit border border-gray-300 rounded-md h-12 w-full text-black text-md outline-none px-4 focus:border-gray-700"
      placeholder="Search product..."
      {...props}
    />
  );
};

export default TextInput;
