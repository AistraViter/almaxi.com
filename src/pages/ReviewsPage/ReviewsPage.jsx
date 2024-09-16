import { ReviewsTitle } from '../../components/PgTitle/PgTitle';
import styles from "../../components/PgContainer/PgContainer.module.css";
import css from './ReviewsPage.module.css';

function ReviewsPage() {
  return (
     <div className={`${styles.pgContainer} ${css.reviewssPage}`}>

      <ReviewsTitle />
    </div>
  );
}
export default ReviewsPage;
