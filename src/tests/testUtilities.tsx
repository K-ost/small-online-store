import { HashRouter } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import type { CartOrder, Product } from "../types";

const mockQueryClient = new QueryClient();
export const Wrapper = ({ children }: { children: React.ReactNode }) => {
  return (
    <HashRouter>
      <QueryClientProvider client={mockQueryClient}>{children}</QueryClientProvider>
    </HashRouter>
  );
};

export class ProductFactory {
  #categories: string[] = ["clothes", "other"];
  #names: string[] = ["Shirt", "Pants", "Jacket", "Socks", "Hat"];
  createProduct(id: number, title: string, category: string): Product {
    return {
      category,
      description: "",
      id,
      image: "mock.image",
      price: 100 + id * 10,
      rating: {
        count: 1,
        rate: 5,
      },
      title,
    };
  }
  createProductsList(): Product[] {
    return Array.from({ length: 5 }, (__, k) => {
      const cat = k < 3 ? this.#categories[0] : this.#categories[1];
      return this.createProduct(k, this.#names[k], cat);
    });
  }
  createCartList(): CartOrder[] {
    return this.createProductsList().map((el) => ({ ...el, count: 1 }));
  }
}
