import BenefitsList from "../../components/BenefitsList/BenefitsList";
import benefits from "../../db/benefits.json";

import css from "./BenefitsPage.module.css";

function BenefitsPage() {
  return (
    <div className={css.benefitsPage}>
      <h2>
        <span>Benefits</span> of
        <br />
        working with
        <br />
        us
      </h2>
      <BenefitsList benefits={benefits} />
    </div>
  );
}

export default BenefitsPage;
