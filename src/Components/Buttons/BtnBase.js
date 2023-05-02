import "./BtnBase.css";

const BtnBase = (props) =>{
  const {className, onClick, BtnIcon} = props;
  return(
    <button className={`BtnBase ${className}`} onClick={onClick}>
      {props.children} {BtnIcon}
    </button>
  )
};export default BtnBase;