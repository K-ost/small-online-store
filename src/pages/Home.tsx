import { useEffect, useState, type JSX } from "react";
import { API_URL } from "../constants";
import useGetData from "../hooks/useGetData";
import Title from "../ui/Title";
import type { Product } from "../types";
import Item from "../components/Item";
import List from "../components/List";
import Search from "../components/Search";
import useSearch from "../hooks/useSearch";

function Home(): JSX.Element {
  const [products, setProducts] = useState<Product[]>([]);
  const { data, isLoading, isSuccess } = useGetData<Product[]>({
    keys: ["products"],
    url: API_URL + "?limit=6",
  });

  useEffect(() => {
    if (!isSuccess) return;
    setProducts(data);
  }, [isSuccess, data]);

  const { setSearchValue } = useSearch({
    data: data ?? [],
    isSuccess,
    setProducts,
  });

  return (
    <div>
      <Title>Product Catalog</Title>

      <Search
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setSearchValue(e.target.value)
        }
      />

      <List
        isLoading={isLoading}
        renderList={products.map((product) => (
          <Item key={product.id} item={product} />
        ))}
      />
    </div>
  );
}

export default Home;
