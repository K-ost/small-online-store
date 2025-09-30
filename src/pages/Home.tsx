import { useEffect, useState, type JSX } from "react";
import { API_URL } from "../constants";
import useGetData from "../hooks/useGetData";
import Title from "../ui/Title";
import type { Product } from "../types";
import Item from "../components/Item";
import List from "../components/List";
import Select from "../ui/Select";
import TextInput from "../ui/TextInput";
import useFilter from "../hooks/useFilter";
import { FilterController } from "../utils/FilterController";
import AlertError from "../ui/AlertError";

const filterController = new FilterController();

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
    <div>
      <Title>Product Catalog</Title>

      {isSuccess && (
        <div className="flex mb-6">
          <TextInput onChange={searchHandler} />
          <div className="ml-4">
            <Select list={filterController.getOptions(data)} onChange={selectHandler} />
          </div>
        </div>
      )}

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
