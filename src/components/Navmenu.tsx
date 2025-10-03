import type { JSX } from "react";
import { NavLink } from "react-router-dom";
import Badge from "../ui/Badge";
import { useBookmarksStore } from "../store/useBookmarksStore";
import { useCartStore } from "../store/useCartStore";

type NavmenuLinkProps = {
  link: string;
  name: string;
  badge?: React.ReactNode;
};

const NavmenuLink = (props: NavmenuLinkProps): JSX.Element => {
  const { link, name, badge } = props;
  return (
    <li className="text-lg mr-4">
      <NavLink
        to={link}
        className={({ isActive }) => {
          return `relative text-${isActive ? "blue" : "gray"}-500`;
        }}
      >
        {name}
        {badge}
      </NavLink>
    </li>
  );
};

const Navmenu = (): JSX.Element => {
  const bookmarksLength = useBookmarksStore((state) => state.bookmarks.length);
  const cartLength = useCartStore((state) =>
    state.orders.reduce((acc, el) => (acc += el.count), 0)
  );

  return (
    <div className="mb-6">
      <ul className="flex">
        <NavmenuLink link="/" name="Home" />
        <NavmenuLink
          link="/bookmarks"
          name="Bookmarks"
          badge={
            <Badge number={bookmarksLength} role="alert" aria-label="Bookmarks count" />
          }
        />
        <NavmenuLink
          link="/cart"
          name="Cart"
          badge={<Badge number={cartLength} role="alert" aria-label="Cart's count" />}
        />
      </ul>
    </div>
  );
};

export default Navmenu;
