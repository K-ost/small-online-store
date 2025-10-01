import { describe, expect, it } from "vitest";
import { FilterController } from "../utils/FilterController";
import { ProductFactory } from "./testUtilities";

const filterController = new FilterController();
const productFactory = new ProductFactory();
const mockedList = productFactory.createProductsList();

describe("Utils", () => {
  describe("Filter Controller", () => {
    it("Search", () => {
      const output = filterController.filterProducts(mockedList, "Shirt", "clothes");
      expect(output).toHaveLength(1);
    });
    it("Select", () => {
      const output = filterController.filterProducts(mockedList, "", "clothes");
      expect(output).toHaveLength(3);
    });
    it("Search & Select", () => {
      const output = filterController.filterProducts(mockedList, "Hat", "other");
      expect(output).toHaveLength(1);
    });
    it("Get Select Options", () => {
      const output = filterController.getOptions(mockedList);
      expect(output).toStrictEqual(["all", "clothes", "other"]);
      expect(output).toHaveLength(3);
    });
    it("Filter by default", () => {
      const output = filterController.filterProducts(mockedList, "", "all");
      expect(output).toHaveLength(5);
    });
  });
});
