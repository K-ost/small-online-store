import type { JSX } from "react";
import { NavLink } from "react-router-dom";
import Badge from "../ui/Badge";
import { useBookmarksStore } from "../store/useBookmarksStore";

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

  return (
    <div className="mb-6">
      <ul className="flex">
        <NavmenuLink link="/" name="Home" />
        <NavmenuLink
          link="/bookmarks"
          name="Bookmarks"
          badge={<Badge number={bookmarksLength} />}
        />
      </ul>
    </div>
  );
};

export default Navmenu;
