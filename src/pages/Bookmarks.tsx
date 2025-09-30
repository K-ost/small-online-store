import { type JSX } from "react";
import Title from "../ui/Title";
import { useBookmarksStore } from "../store/useBookmarksStore";
import List from "../components/List";
import Item from "../components/Item";
import Button from "../ui/Button";

function Bookmarks(): JSX.Element {
  const bookmarks = useBookmarksStore((state) => state.bookmarks);
  const resetBookmarks = useBookmarksStore((state) => state.resetBookmarks);

  return (
    <div>
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
    </div>
  );
}

export default Bookmarks;
