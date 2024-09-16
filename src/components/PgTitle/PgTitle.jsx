import css from './PgTitle.module.css';

export const ServicesTitle = () => {
  return (
    <h2 className={css.pgTitle}>
      Our <span>services</span>
    </h2>
  );
};

export const TeamTitle = () => {
  return (
    <h2 className={css.pgTitle}>
      Our <span>team</span>
    </h2>
  );
};

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

export const ReviewsTitle = () => {
  return (
    <h2 className={css.pgTitle}>
      Reviews
    </h2>
  );
};

export const ContactsTitle = () => {
  return (
    <h2 className={css.pgTitle}>
      Let`s <span>work</span>
      <br />
      <span>together</span>
    </h2>
  );
};
