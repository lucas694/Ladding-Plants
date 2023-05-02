import "./Testimonial.css";
import TestimonialCard from "./Cards/TestimonialCard";
import {GetTestimonialData} from "../Components/Utils/Utils";

const Testimonial = () => {
  const TestimonialData = GetTestimonialData();
  return(
    <div className={"TestimonialContainer"}>
      <div className={"TestimonialContent"}>
        <h1 className={"TestimonialTitle"}>What customers say about GREEMIND?</h1>
        <div className={"TestimonialCardsContent"}>
          {TestimonialData.map((item) => {
            return(
              <TestimonialCard
                key={item.id}
                name={item.name}
                job={item.job}
                desc={item.desc}
                img={item.img}
              />
            )})}
        </div>
      </div>
    </div>
  )
};export default Testimonial;