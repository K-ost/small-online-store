import { useEffect, useState, type JSX } from "react";
import { API_URL } from "../constants";
import useGetData from "../hooks/useGetData";
import Title from "../ui/Title";
import type { Product } from "../types";
import Item from "../components/Item";
import List from "../components/List";
import useFilter from "../hooks/useFilter";
import AlertError from "../ui/AlertError";
import Filter from "../components/Filter";
import Layout from "../components/Layout";

function Home(): JSX.Element {
  const [products, setProducts] = useState<Product[]>([]);
  const { data, isLoading, isSuccess, isError } = useGetData<Product[]>({
    keys: ["products"],
    url: API_URL,
  });

  useEffect(() => {
    if (!isSuccess) return;
    setProducts(data);
  }, [isSuccess, data]);

  const { searchHandler, selectHandler } = useFilter({
    setProducts,
    data: data ?? null,
  });

  if (isError) return <AlertError title="Server error" />;

  return (
    <Layout>
      <Title>Product Catalog</Title>

      {isSuccess && (
        <Filter data={data} searchHandler={searchHandler} selectHandler={selectHandler} />
      )}

      <List
        isLoading={isLoading}
        renderList={products.map((product) => (
          <Item key={product.id} item={product} />
        ))}
      />
    </Layout>
  );
}

export default Home;
