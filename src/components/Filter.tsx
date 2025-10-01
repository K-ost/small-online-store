import type { JSX } from "react";
import TextInput from "../ui/TextInput";
import Select from "../ui/Select";
import { FilterController } from "../utils/FilterController";
import type { Product } from "../types";

const filterController = new FilterController();

type FilterProps = {
  data: Product[];
  searchHandler: (e: React.ChangeEvent<HTMLInputElement>) => void;
  selectHandler: (e: React.ChangeEvent<HTMLSelectElement>) => void;
};

const Filter = (props: FilterProps): JSX.Element => {
  const { data, searchHandler, selectHandler } = props;
  return (
    <div className="flex mb-6">
      <TextInput onChange={searchHandler} aria-label="Filter search" />
      <div className="ml-4">
        <Select
          list={filterController.getOptions(data)}
          onChange={selectHandler}
          aria-label="Filter select"
        />
      </div>
    </div>
  );
};

export default Filter;
