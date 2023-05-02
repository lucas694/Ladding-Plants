import "./Banner.css";
import {BsSearch} from "react-icons/bs";
import PlantBanner from "../assets/PlantBanner.png"
import VectorTop from "../assets/VectorBannerTop.png"
import VectorLeft from "../assets/VectorBannerLeft.png"

const Banner = () => {
  return(
    <div className={"BannerContainer"}>
      <div className={"BannerContent"}>
        <div className={"BannerLeft"}>
          <h1 className={"BannerTitle"}>Buy your dream plants</h1>
          <div className={"BannerInfContainer"}>
            <div className={"BannerInfSides"}>
              <h1>50+</h1>
              <p>Plant Species</p>
            </div>
            <div className={"BannerInfSides"}>
              <h1 className={"BannerInf"}>100+</h1>
              <p>Customers</p>
            </div>
          </div>
          <div className={"BannerInputContainer"}>
            <input type="text" placeholder={"What are you looking for?"} />
            <button>
              <BsSearch className={"SearchIcon"}/>
            </button>
          </div>
        </div>
        <div className={"BannerRight"}>
          <img src={VectorTop} alt="Vector Top" className={"VectorTop"}/>
          <img src={VectorLeft} alt="Vector Top" className={"VectorLeft"}/>

          <div className={"BannerRightMain"}>
            <img src={PlantBanner} alt="Plant Banner" className={"PlatBannerImg"}/>
          </div>
        </div>
      </div>
    </div>
  )
};export default Banner;