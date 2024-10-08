import { lazy, Suspense, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import "normalize.css";
import Layout from "./Layout/Layout";
import { refreshUser } from "../redux/auth/operations";
import { selectIsRefreshing } from "../redux/auth/selectors";
import css from "./App.module.css";

const HomePage = lazy(() => import("../pages/HomePage/HomePage"));
const ServicesPage = lazy(() => import("../pages/ServicesPage/ServicesPage"));
const TeamPage = lazy(() => import("../pages/TeamPage/TeamPage"));
const BenefitsPage = lazy(() => import("../pages/BenefitsPage/BenefitsPage"));
const FaqPage = lazy(() => import("../pages/FaqPage/FaqPage"));
const ReviewsPage = lazy(() => import("../pages/ReviewsPage/ReviewsPage"));
const ContactsPage = lazy(() => import("../pages/ContactsPage/ContactsPage"));
const NotFoundPage = lazy(() => import("../pages/NotFoundPage/NotFoundPage"));

function App() {
  const dispatch = useDispatch();
  const isRefreshing = useSelector(selectIsRefreshing);

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return isRefreshing ? (
    <div className={css.apploading}>Refreshing...</div>
  ) : (
    <div>
      <Layout />
      <Suspense fallback={<div className={css.apploading}>Loading...</div>}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/team" element={<TeamPage />} />
          <Route path="/benefits" element={<BenefitsPage />} />
          <Route path="/faq" element={<FaqPage />} />
          <Route path="/reviews" element={<ReviewsPage />} />
          <Route path="/contacts" element={<ContactsPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Suspense>
    </div>
  );
}

export default App;
