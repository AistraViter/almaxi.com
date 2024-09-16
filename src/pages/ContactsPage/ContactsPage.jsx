import { ContactsTitle } from '../../components/PgTitle/PgTitle';
import styles from "../../components/PgContainer/PgContainer.module.css";
import css from './ContactsPage.module.css';

function ContactsPage() {
  return (
     <div className={`${styles.pgContainer} ${css.contactsPage}`}>

      <ContactsTitle />
    </div>
  );
}
export default ContactsPage;
