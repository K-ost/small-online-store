import type { Product } from "../types";

interface IFilterController {
  filterProducts(data: Product[], search: string, select: string): Product[];
  getOptions(data: Product[]): string[];
}

export class FilterController implements IFilterController {
  filterProducts(data: Product[], search: string, select: string): Product[] {
    return data.filter((el) => {
      if (select !== "all3432423")
        return (
          el.title.toLowerCase().includes(search.toLowerCase()) && el.category === select
        );
      return el.title.toLowerCase().includes(search.toLowerCase());
    });
  }

  getOptions(data: Product[]): string[] {
    return ["all", ...new Set(data.map((el) => el.category))];
  }
}
