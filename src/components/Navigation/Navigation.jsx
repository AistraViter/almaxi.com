import { NavLink } from 'react-router-dom';
import clsx from 'clsx';
// import styles from "../PgContainer/PgContainer.module.css";
import css from './Navigation.module.css';
const navItem = ({ isActive }) => {
  return clsx(css.link, isActive && css.active);
};

function Navigation() {
  return (
    <div className={css.barContainer}>

    <nav className={css.navigation}>
      <div>
        <NavLink to="/" className={css.logo}>
          Almaxi<span>Consulting</span>
        </NavLink>
      </div>

      <div className={css.navigationBar}>
        <NavLink to="/services" className={navItem}>
          Services
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
    </div>

  );
}

export default Navigation;
