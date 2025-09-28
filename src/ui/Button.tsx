import type { HTMLAttributes, JSX } from "react";

type ButtonProps = HTMLAttributes<HTMLButtonElement> & {
  fullwidth?: "true" | "false";
  variant?: "filled" | "outlined";
};

const Button = (props: ButtonProps): JSX.Element => {
  const { fullwidth = "false", variant = "filled" } = props;

  const classVariant =
    variant === "outlined"
      ? `bg-white border border-gray-300 text-black hover:bg-gray-200 `
      : `border bg-blue-600 text-white hover:bg-blue-700 `;

  const width = fullwidth === "true" ? "grow" : "";

  return (
    <button
      className={
        "block m-0 py-2 px-4 rounded-lg outline-0 cursor-pointer transition-all " +
        classVariant +
        width
      }
      {...props}
    />
  );
};

export default Button;
