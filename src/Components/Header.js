import "./Header.css";
import HeaderIcon from "../assets/HeaderIcon.png";
import {BsCart} from "react-icons/bs";
import {BiUser,BiMenuAltRight} from "react-icons/bi";

const Header = () => {
  return(
    <div className={"HeaderContainer"}>
      <div className={"HeaderContent"}>
        <div className={"HeaderLeft"}>
          <img src={HeaderIcon} alt={"HeaderIcon"}  className={"HeaderLogo"}/>
          <ul className={"HeaderList"}>
            <li className={"HeaderLi"}>Home</li>
            <li className={"HeaderLi"}>Products</li>
            <li className={"HeaderLi"}>Contacts</li>
          </ul>

        </div>
        <div className={"HeaderRight"}>
          <button>
            <BsCart className={"HeaderIcon"}/>
          </button>
          <button>
            <BiUser className={"HeaderIcon"}/>
          </button>
          <button>
            <BiMenuAltRight className={"HeaderIcon"}/>
          </button>
        </div>
      </div>

    </div>
  )
};export default Header;