import type { JSX } from "react";

type AlertErrorProps = {
  title: string;
};

const AlertError = (props: AlertErrorProps): JSX.Element => {
  const { title } = props;
  return <div className="bg-red-100 border border-red-700 rounded-md p-4">{title}</div>;
};

export default AlertError;
