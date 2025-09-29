import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";
import type { Product } from "../types";

type BookmarksState = {
  bookmarks: Product[];
  setBookmark: (product: Product) => void;
  resetBookmarks: () => void;
};

export const useBookmarksStore = create<BookmarksState>()(
  devtools(
    persist(
      (set) => ({
        bookmarks: [],

        setBookmark: (product) =>
          set((state) => {
            const existed = state.bookmarks.some((el) => el.id === product.id);
            if (existed)
              return { bookmarks: state.bookmarks.filter((el) => el.id !== product.id) };
            return {
              bookmarks: [product, ...state.bookmarks],
            };
          }),

        resetBookmarks: () => set(() => ({ bookmarks: [] })),
      }),
      {
        name: "Bookmarks",
      }
    )
  )
);
