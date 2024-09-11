import BenefitsList from "../../components/BenefitsList/BenefitsList";
import {PgTitle} from "../../components/PgTitle/PgTitle";
import benefits from "../../db/benefits.json";

import css from "./BenefitsPage.module.css";

function BenefitsPage() {
  return (
    <div className={css.benefitsPage}>
      <PgTitle />
      <BenefitsList benefits={benefits} />
    </div>
  );
}

export default BenefitsPage;
