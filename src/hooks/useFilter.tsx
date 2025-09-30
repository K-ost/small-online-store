import { useEffect, useState } from "react";
import type { Product } from "../types";
import { FilterController } from "../utils/FilterController";

type useFilterProps = {
  data: Product[] | null;
  setProducts: React.Dispatch<React.SetStateAction<Product[]>>;
};

type useFilterReturn = {
  searchHandler: (e: React.ChangeEvent<HTMLInputElement>) => void;
  selectHandler: (e: React.ChangeEvent<HTMLSelectElement>) => void;
};

const filterController = new FilterController();

const useFilter = (props: useFilterProps): useFilterReturn => {
  const { data, setProducts } = props;
  const [search, setSearch] = useState("");
  const [select, setSelect] = useState("all");

  useEffect(() => {
    if (!data) return;
    const found = filterController.filterProducts(data, search, select);
    setProducts(found);
    // eslint-disable-next-line
  }, [search, select, setProducts]);

  const searchHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  const selectHandler = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelect(e.target.value);
  };

  return {
    searchHandler,
    selectHandler,
  };
};

export default useFilter;
