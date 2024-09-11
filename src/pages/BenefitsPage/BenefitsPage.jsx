import BenefitsList from "../../components/BenefitsList/BenefitsList";
import { BenefitsTitle } from "../../components/PgTitle/PgTitle";
import benefits from "../../db/benefits.json";

import css from "./BenefitsPage.module.css";

function BenefitsPage() {
  return (
    <div className={css.benefitsPage}>
      <BenefitsTitle />
      <BenefitsList benefits={benefits} />
    </div>
  );
}
export default BenefitsPage;
