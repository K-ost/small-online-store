import type { HTMLAttributes, JSX } from "react";

const Search = (props: HTMLAttributes<HTMLInputElement>): JSX.Element => {
  return (
    <div className="mb-6 flex border border-gray-300 rounded-md">
      <div className="bg-gray-100 rounded-s-md flex items-center px-4 border-r border-gray-300">
        Search
      </div>
      <input
        type="text"
        className="border-0 bg-inherit h-12 w-full text-black text-md outline-none px-4"
        placeholder="Search product..."
        {...props}
      />
    </div>
  );
};

export default Search;
