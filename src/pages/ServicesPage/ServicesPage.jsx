import { ServicesTitle } from "../../components/PgTitle/PgTitle";
import styles from "../../components/PgContainer/PgContainer.module.css";
import css from "./ServicesPage.module.css";

function ServicesPage() {
  return (
    <div className={`${styles.pgContainer} ${css.servicesPage}`}>
      <ServicesTitle />
    </div>
  );
}
export default ServicesPage;
