import { TeamTitle } from "../../components/PgTitle/PgTitle";
import styles from "../../components/PgContainer/PgContainer.module.css";
import css from "./TeamPage.module.css";

function TeamPage() {
  return (
    <div className={`${styles.pgContainer} ${css.teamPage}`}>
      <TeamTitle />
    </div>
  );
}
export default TeamPage;
