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
      <ul className={css.benefitsBlock}>
        <li>
          <svg width="48" height="48">
            <use href="img/symbol-defs.svg#icon-men"></use>
          </svg>
          <h3>Expertise</h3>
          <p>
            We provide proven practices, effective accounting schemes, and
            continuous monitoring of legal changes.
          </p>
        </li>
        <li>
          <svg width="48" height="48">
            <use href="img/symbol-defs.svg#icon-mesage"></use>
          </svg>
          <h3>Communication</h3>
          <p>
            Your accountants are always available to you 
            <br className={css.textBreak}/>
            from Monday to Friday, 10:00 AM to 6:00 PM,
            <br className={css.textBreak}/> in your Telegram, Viber, or WhatsApp chat.
          </p>
        </li>
        <li>
          <svg width="48" height="48">
            <use href="img/symbol-defs.svg#icon-penzlik"></use>
          </svg>
          <h3>Responsibility</h3>
          <p>
            Our duties and responsibilities are clearly outlined in the
            Agreement, and your confidential information will remain secure.
          </p>
        </li>
        <li>
          <svg width="48" height="48">
            <use href="img/symbol-defs.svg#icon-sand-clock"></use>
          </svg>
          <h3>Comfort</h3>
          <p>
            By outsourcing routine paperwork to our accountants, you receive
            daily support and consultations on a wide range of taxation and
            business matters.
          </p>
        </li>
      </ul>
    </div>
  );
}

export default BenefitsPage;
