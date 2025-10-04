import type { JSX } from "react";
import { Link } from "react-router-dom";

import Layout from "../components/Layout";
import Title from "../ui/Title";

function NotFound(): JSX.Element {
  return (
    <Layout>
      <Title>404 - Not Found</Title>
      <Link to="/">Go back to the homepage</Link>
    </Layout>
  );
}

export default NotFound;
