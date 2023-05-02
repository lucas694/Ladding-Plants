import "./AboutCard.css";

const AboutCard = (props) => {
  const{img, title, desc} = props;
  return(
    <div className={"AboutCardContainer"}>
      <img src={img} alt={title} className={"AboutCardImg"}/>
      <h1 className={"AboutCardTitle"}>{title}</h1>
      <p className={"AboutCardDesc"}>{desc}</p>

    </div>
  )
};export default AboutCard;