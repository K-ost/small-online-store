import type { JSX } from "react";

type ListProps = {
  isLoading: boolean;
  renderList: React.ReactNode;
};

const List = (props: ListProps): JSX.Element => {
  const { isLoading, renderList } = props;

  if (isLoading) return <div>Loading...</div>;

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
      {renderList}
    </div>
  );
};

export default List;
