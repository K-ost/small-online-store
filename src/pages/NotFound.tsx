import type { JSX } from "react";
import { Link } from "react-router-dom";
import Title from "../ui/Title";
import Layout from "../components/Layout";

function NotFound(): JSX.Element {
  return (
    <Layout>
      <Title>404 - Not Found</Title>
      <Link to="/">Go back to the homepage</Link>
    </Layout>
  );
}

export default NotFound;
