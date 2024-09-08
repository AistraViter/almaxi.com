import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import "normalize.css";
import AppBar from "../AppBar/AppBar";
import css from "./Layout.module.css";

function Layout() {
  return (
    <div>
      <AppBar />
      <div className={css.container}>
        <Suspense fallback={null}>
          <Outlet />
        </Suspense>
      </div>
    </div>
  );
}

export default Layout;
