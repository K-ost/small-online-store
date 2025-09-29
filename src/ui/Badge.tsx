import type { JSX } from "react";

type BadgeProps = {
  number: number;
};

const Badge = (props: BadgeProps): JSX.Element | null => {
  const { number } = props;
  if (number === 0) return null;
  return (
    <span className="flex absolute -right-4 -top-2 bg-red-500 text-white rounded-3xl min-w-5 h-5 align-middle justify-center text-sm px-1">
      {number}
    </span>
  );
};

export default Badge;
