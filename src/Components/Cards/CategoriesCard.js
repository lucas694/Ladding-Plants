import "./CategoriesCard.css";

const CategoriesCard = (props) => {
  const {name, img} = props;
  return(
    <div className={"CategoriesCardContainer"}>
      <img src={img} alt={"CategoriesCard"} className={"CategoriesCardImg"}/>
      <div className={"CategoriesCardText"}>
        <h1 className={"CategoriesCardText"}>{name}</h1>
      </div>

    </div>
  )
};export default CategoriesCard;