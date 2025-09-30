import type { HTMLAttributes, JSX } from "react";

type SelectProps = HTMLAttributes<HTMLSelectElement> & {
  list: string[];
};

const Select = (props: SelectProps): JSX.Element => {
  const { list } = props;
  return (
    <select
      className="bg-inherit border border-gray-300 rounded-md h-12 w-full text-black text-md outline-none pl-4 pr-8 cursor-pointer"
      {...props}
    >
      {list.map((option) => (
        <option key={option} value={option}>
          {option}
        </option>
      ))}
    </select>
  );
};

export default Select;
