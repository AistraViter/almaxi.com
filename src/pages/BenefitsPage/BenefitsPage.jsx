import BenefitsList from '../../components/BenefitsList/BenefitsList';
import { BenefitsTitle } from '../../components/PgTitle/PgTitle';
import benefits from '../../db/benefits.json';
import styles from "../../components/PgContainer/PgContainer.module.css";
import css from './BenefitsPage.module.css';

function BenefitsPage() {
  return (
    <div className={`${styles.pgContainer} ${css.benefitsPage}`}>
      <BenefitsTitle />
      <BenefitsList benefits={benefits} />
    </div>
  );
}
export default BenefitsPage;
