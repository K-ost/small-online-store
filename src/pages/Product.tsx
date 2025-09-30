import type { JSX } from "react";
import { useParams } from "react-router-dom";
import Title from "../ui/Title";
import useGetData from "../hooks/useGetData";
import type { Product } from "../types";
import { API_URL } from "../constants";

function Product(): JSX.Element {
  const { id } = useParams();

  const { data } = useGetData<Product>({
    keys: ["details"],
    url: API_URL + "/" + id,
  });

  return (
    <div>
      <Title>Product</Title>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
}

export default Product;
