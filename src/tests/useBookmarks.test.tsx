import { describe, expect, it } from "vitest";
import { useBookmarksStore } from "../store/useBookmarksStore";
import { act, renderHook } from "@testing-library/react";
import { ProductFactory } from "./testUtilities";

const productFactory = new ProductFactory();
const mockedProduct = productFactory.createProduct(1, "Product 1", "Category");
const mockedProduct2 = productFactory.createProduct(2, "Product 2", "Category 2");
const mockedProduct3 = productFactory.createProduct(3, "Product 3", "Category");

describe("useBookmarks Store", () => {
  it("Init bookmark store", () => {
    const { result } = renderHook(() => useBookmarksStore());
    expect(result.current.bookmarks).toHaveLength(0);
    expect(result.current.setBookmark).toBeTypeOf("function");
    expect(result.current.resetBookmarks).toBeTypeOf("function");
  });

  it("Adding Bookmark", () => {
    const { result } = renderHook(() => useBookmarksStore());
    act(() => {
      result.current.setBookmark(mockedProduct);
      result.current.setBookmark(mockedProduct2);
      result.current.setBookmark(mockedProduct3);
    });
    expect(result.current.bookmarks).toHaveLength(3);
    expect(result.current.bookmarks[0].title).toStrictEqual("Product 3");
  });

  it("Removing previously added bookmark", () => {
    const { result } = renderHook(() => useBookmarksStore());
    expect(result.current.bookmarks).toHaveLength(3);
    act(() => {
      result.current.setBookmark(mockedProduct);
    });
    expect(result.current.bookmarks).toHaveLength(2);
  });

  it("Removing all added bookmarks", () => {
    const { result } = renderHook(() => useBookmarksStore());
    expect(result.current.bookmarks).toHaveLength(2);
    act(() => {
      result.current.resetBookmarks();
    });
    expect(result.current.bookmarks).toHaveLength(0);
  });
});
