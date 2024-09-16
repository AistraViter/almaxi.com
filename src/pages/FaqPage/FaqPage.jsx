import { FaqTitle } from "../../components/PgTitle/PgTitle";

import styles from "../../components/PgContainer/PgContainer.module.css";
import css from "./FaqPage.module.css";


function FaqPage() {
  return (
    <div className={`${styles.pgContainer} ${css.faqPage}`}>
      <FaqTitle />
    </div>
  );
}
export default FaqPage;
