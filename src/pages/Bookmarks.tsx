import { type JSX } from "react";

import Item from "../components/Item";
import Layout from "../components/Layout";
import List from "../components/List";
import { useBookmarksStore } from "../store/useBookmarksStore";
import Button from "../ui/Button";
import Title from "../ui/Title";

function Bookmarks(): JSX.Element {
  const bookmarks = useBookmarksStore((state) => state.bookmarks);
  const resetBookmarks = useBookmarksStore((state) => state.resetBookmarks);

  return (
    <Layout>
      <Title>Bookmarks</Title>
      {!bookmarks.length && (
        <div>Your haven't added anything to your bookmarks list yet.</div>
      )}

      {bookmarks.length > 0 && (
        <div className="mb-6">
          <Button variant="outlined" onClick={() => resetBookmarks()}>
            Remove All Bookmarks
          </Button>
        </div>
      )}

      <List
        isLoading={false}
        renderList={bookmarks.map((el) => (
          <Item key={el.id} item={el} />
        ))}
      />
    </Layout>
  );
}

export default Bookmarks;
