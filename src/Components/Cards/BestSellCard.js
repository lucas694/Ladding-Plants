import "./BestSellCard.css";

const BestSellCard = (props) =>{
  const{CardImg, CardName,CardPrice} = props;
  return(
    <div className={"BestSelLCardContainer"}>
      <img src={CardImg} alt={"CardImg"}/>
      <div className={"BestSellCardDesc"}>
        <h3 className={"BestSellCardName"}>{CardName}</h3>
        <p className={"BestSellCardPrice"}>{CardPrice}</p>
      </div>
    </div>
  )
};export default BestSellCard;