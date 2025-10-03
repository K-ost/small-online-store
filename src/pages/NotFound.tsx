import type { JSX } from "react";
import { Link } from "react-router-dom";
import Title from "../ui/Title";

function NotFound(): JSX.Element {
  return (
    <div>
      <Title>404 - Not Found</Title>
      <Link to="/">Go back to the homepage</Link>
    </div>
  );
}

export default NotFound;
