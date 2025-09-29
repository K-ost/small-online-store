import { useCallback, useEffect, useState } from "react";
import type { Product } from "../types";

type useSearchProps = {
  isSuccess: boolean;
  data: Product[];
  setProducts: React.Dispatch<React.SetStateAction<Product[]>>;
};

type useSearchReturn = {
  setSearchValue: React.Dispatch<React.SetStateAction<string>>;
};

const useSearch = (props: useSearchProps): useSearchReturn => {
  const { data, isSuccess, setProducts } = props;
  const [searchValue, setSearchValue] = useState("");

  const searchHandler = useCallback(() => {
    if (!isSuccess) return;
    const foundList = data.filter((el) =>
      el.title.toLowerCase().includes(searchValue.toLowerCase())
    );
    setProducts(foundList);
  }, [data, isSuccess, searchValue, setProducts]);

  useEffect(() => {
    searchHandler();
  }, [searchHandler]);

  return {
    setSearchValue,
  };
};

export default useSearch;
