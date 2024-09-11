import { NavLink } from "react-router-dom";
import clsx from "clsx";
import css from "./Navigation.module.css";
const navItem = ({ isActive }) => {
  return clsx(css.link, isActive && css.active);
};

function Navigation() {
  return (
    <nav className={css.navigation}>
      <div>
        <NavLink to="/" className={css.logo}>
          Almaxi<span>Consulting</span>
        </NavLink>
      </div>

      <div className={css.navigationBar}>
        <NavLink to="/products" className={navItem}>
          Products
        </NavLink>
        <NavLink to="/team" className={navItem}>
          Team
        </NavLink>
        <NavLink to="/benefits" className={navItem}>
          Benefits
        </NavLink>
        <NavLink to="/faq" className={navItem}>
          FAQ
        </NavLink>
        <NavLink to="/reviews" className={navItem}>
          Reviews
        </NavLink>
        <NavLink to="/contacts" className={navItem}>
          Contacts
        </NavLink>
      </div>
    </nav>
  );
}

export default Navigation;
