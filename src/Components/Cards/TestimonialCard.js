import"./TestimonialCard.css";
import stars from "../../assets/Cards/stars.png"

const TestimonialCard = (props) => {
  const{name, job, desc, img} = props;
  return(
    <div className={"TestimonialCardContainer"}>
      <p className={"TestimonialCardDesc"}>{desc}</p>
      <div className={"TestimonialCardInfs"}>
        <div className={"TestimonialCardInfLeft"}>
          <img src={img} alt={"Testimonial1"} className={"TestimonialCardImg"}/>
          <div className={"TestimonialCardName"}>
            <h1 className={"TestimonialCardNameTitle"}>{name}</h1>
            <p className={"TestimonialCardNameDesc"}>{job}</p>
          </div>
        </div>
          <img src={stars} alt={"stars"} className={"TestimonialCardStars"}/>
      </div>
    </div>
  )
};export default TestimonialCard;