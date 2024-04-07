import { NavLink } from "react-router-dom";
import { DrawerDemo } from "../animations/DrawerDemo";

const Header = () => {
  const activeLink = "text-indigo-900 text-xl font-bold";
  const normalLink =
    "text-slate-500 text-xl font-bold hover:text-indigo-900 transition";
  return (
    <header className="flex items-center justify-between p-6">
      <div className="left">
        <p className="text-xl font-bold">Hello.</p>
      </div>
      {/* Desktop */}
      <div className="right min-[290px]:hidden md:block">
        <nav className="flex items-center justify-center gap-2">
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? activeLink : normalLink)}
            title="Home"
            aria-label="Home"
          >
            Home
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) => (isActive ? activeLink : normalLink)}
            title="About"
            aria-label="About"
          >
            About
          </NavLink>
          <NavLink
            to="/work"
            className={({ isActive }) => (isActive ? activeLink : normalLink)}
            title="Work"
            aria-label="Work"
          >
            Work
          </NavLink>
          <NavLink
            to="/contact"
            className={({ isActive }) => (isActive ? activeLink : normalLink)}
            title="Contact"
            aria-label="Contact"
          >
            Contact
          </NavLink>
        </nav>
      </div>
      {/* Mobile */}
      <div className="right min-[290px]:block md:hidden">
        <DrawerDemo />
      </div>
    </header>
  );
};

export default Header;
