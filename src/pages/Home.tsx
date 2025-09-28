import { type JSX } from "react";
import { API_URL } from "../constants";
import useGetData from "../hooks/useGetData";
import Title from "../ui/Title";
import type { Product } from "../types";
import Item from "../components/Item";
import List from "../components/List";

function Home(): JSX.Element {
  const { data, isLoading, isSuccess } = useGetData<Product[]>({
    keys: ["products"],
    url: API_URL,
  });

  return (
    <div>
      <Title>Product Catalog</Title>
      <List
        isLoading={isLoading}
        renderList={
          isSuccess && data.map((product) => <Item key={product.id} item={product} />)
        }
      />
    </div>
  );
}

export default Home;
