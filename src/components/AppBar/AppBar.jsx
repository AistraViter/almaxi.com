import Navigation from "../Navigation/Navigation";
import css from "../AppBar/AppBar.module.css";

function AppBar() {
  return (
    <header className={css.header}>
        <Navigation />
    </header>
  );
}

export default AppBar;
