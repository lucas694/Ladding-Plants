import "./BestSelling.css";
import BestSellCard from "./Cards/BestSellCard";
import {GetBestSellingData} from "./Utils/Utils";
import BtnBase from "./Buttons/BtnBase";
import {BsArrowRight} from "react-icons/bs";

const BestSelling = () => {
  const BestSellingData = GetBestSellingData();

  return(
    <div className={"BestSellingContainer"}>
      <div className={"BestSellingContent"}>
        <div className={"BestSellingMainCard"}>
          <h1 className={"BestSellingMainCardTitle"}>Best Selling Plants</h1>
          <p className={"BestSellingMainCardDesc"}>Easiest way to healthy life by buying your favorite plants </p>
          <div className={"w-full mt-4"}>
            <BtnBase className={"BestSellCardBlue"}
                     children={"See More"}
                     BtnIcon={<BsArrowRight className={"ArrowIconBtn"}/>}
            />
          </div>
        </div>
        {BestSellingData.map((item) => {
          return(
            <BestSellCard CardImg={item.img}
                          CardName={item.name}
                          CardPrice={item.price}
                          key={item.id}
            />
          )
        })}
      </div>

    </div>
  )
};export default BestSelling;