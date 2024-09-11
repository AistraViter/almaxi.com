import css from "./BenefitsList.module.css";
import BenefitsItem from "../BenefitsItem/BenefitsItem";

const BenefitsList = ({ benefits }) => {
  return (
    <ul className={css.benefitsList}>
      {benefits.map((benefit) => (
        <li key={benefit.id}>
          <BenefitsItem benefit={benefit} />
        </li>
      ))}
    </ul>
  );
};

export default BenefitsList;
