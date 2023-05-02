import "./About.css";
import AboutCard from "./Cards/AboutCard";
import {GetAboutData} from "./Utils/Utils";


const About = () =>{
  const AboutData = GetAboutData();
  return(
    <div className={"AboutContainer"}>
      <h1 className={"AboutTitle"}>About us</h1>
      <p className={"AboutDesc"}>Order now and appreciate the beauty of nature</p>
      <div className={"AboutContent"}>
        {AboutData.map((item) => (
          <AboutCard
            img={item.img}
            title={item.title}
            desc={item.desc}
            key={item.id}
          />
        ))}
      </div>

    </div>
  )
};export default About;