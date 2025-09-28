import type { HTMLAttributes, JSX } from "react";

type TitleProps = HTMLAttributes<HTMLHeadingElement> & {
  size?: "h1" | "h2" | "h3";
};

const Title = (props: TitleProps): JSX.Element => {
  const { size = "h1" } = props;
  const classes = "text-4xl font-medium text-blue-900 mb-4";
  if (size === "h2") return <h2 className={classes} {...props} />;
  if (size === "h3") return <h3 className={classes} {...props} />;
  return <h1 className={classes} {...props} />;
};

export default Title;
