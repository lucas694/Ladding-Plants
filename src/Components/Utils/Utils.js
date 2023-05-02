/*CardImg*/
/*Best Selling*/
import NaturalPlants from "../../assets/Cards/BestSell1.png";
import ArtificialPlants from "../../assets/Cards/BestSell2.png";
import ArtificialPlants2 from "../../assets/Cards/BestSell3.png";
/*About*/
import AboutImg1 from "../../assets/Cards/AboutCard1.png";
import AboutImg2 from "../../assets/Cards/AboutCard2.png";
import AboutImg3 from "../../assets/Cards/AboutCard3.png";
/*Testimonial*/
import Testimonial1 from "../../assets/Cards/Testimonial1.png";
import Testimonial2 from "../../assets/Cards/Testimonial2.png";
/*Categories*/
import CategoriesImg1 from "../../assets/Cards/CategoriesCard1.png";
import CategoriesImg2 from "../../assets/Cards/CategoriesCard2.png";
import CategoriesImg3 from "../../assets/Cards/CategoriesCard3.png";


const BestSellingCardData= [
  {id:1, name:"Natural Plants" , price:"₱ 1,400.00", img:NaturalPlants},
  {id:2, name:"Artificial Plants" , price:"₱ 900.00", img:ArtificialPlants},
  {id:3, name:"Artificial Plants" , price:"₱ 3,500.00", img:ArtificialPlants2},
]
export function GetBestSellingData(){
  return BestSellingCardData;
}

const AboutCardData= [
  {id:1, title:"Large Assortment", desc:"we offer many different types of products with fewer variations in each category.", img:AboutImg1,},
  {id:2, title:"Fast & Free Shipping", desc:"4-day or less delivery time, free shipping and an expedited delivery option.", img:AboutImg2,},
  {id:3, title:"24/7 Support", desc:"answers to any business related inquiry 24/7 and in real-time.", img:AboutImg3,},
]
export function GetAboutData(){
  return AboutCardData;
}

const TestimonialCardData= [
  {id:1, name:"John Doe",job:"Youtuber",desc:"Jorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",img:Testimonial1},
  {id:2, name:"John Doe",job:"Youtuber",desc:"Jorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",img:Testimonial2}
]
export function GetTestimonialData(){
  return TestimonialCardData;
}

const CategoriesCardData= [
  {id:1, name:"Natural Plants", img:CategoriesImg1},
  {id:2, name:"Plants Accessories", img:CategoriesImg2},
  {id:3, name:"Artificial Plants", img:CategoriesImg3},
]
export function GetCategoriesData(){
  return CategoriesCardData;
}
