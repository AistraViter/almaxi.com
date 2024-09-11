import css from "./BenefitsItem.module.css";

const BenefitsItem = ({ benefit }) => {
  const { image = "", title = "Title", description = "Description" } = benefit;
  return (
    <div className={css.benefitsItem}>
      <img src={image} alt={title} width="48" height="48" />
      <h3 >{title}</h3>
      <p>{description}</p>
    </div>
  );
};
export default BenefitsItem;
