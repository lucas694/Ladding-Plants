import "./Categories.css";
import BtnBase from "./Buttons/BtnBase";
import {BsArrowRight} from "react-icons/bs";
import CategoriesCard from "./Cards/CategoriesCard";
import {GetCategoriesData} from "./Utils/Utils";

const Categories = () =>{
  const CategoriesData = GetCategoriesData();
  return(
    <div className={"CategoriesContainer"}>
      <h1 className={"CategoriesTitle"}>Categories</h1>
      <p className={"CategoriesDesc"}>Find what you are looking for</p>
      <div className={"CategoriesContent"}>
        <div className={"CategoriesCardsContent"}>
          {CategoriesData.map((item) => (
            <CategoriesCard key={item.id} name={item.name} img={item.img}/>
          ))}
        </div>
        <div className={"w-full md:w-auto mt-6"}>
          <BtnBase className={"BtnWhite"}
                   children={"Explore"}
                   BtnIcon={<BsArrowRight className={"ArrowIconBtn"}/>}
          />
        </div>

      </div>

    </div>
  )
};export default Categories;