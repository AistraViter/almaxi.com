import Navigation from "../Navigation/Navigation";
import css from "../AppBar/AppBar.module.css";

function AppBar() {
  return (
    <header className={css.header}>
      <div className={css.container}>
        <Navigation />
      </div>
    </header>
  );
}

export default AppBar;
