import css from "./PgTitle.module.css";

export const BenefitsTitle = () => {
  return (
    <h2 className={css.pgTitle}>
      <span>Benefits</span> of
      <br />
      working with
      <br />
      us
    </h2>
  );
};

export const FaqTitle = () => {
  return (
    <h2 className={css.pgTitle}>
      Frequently <br />
      Asked <span>Questions</span>
    </h2>
  );
};
