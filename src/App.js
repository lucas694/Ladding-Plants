import './App.css';
import Header from "./Components/Header";
import Banner from "./Components/Banner";
import BestSelling from "./Components/BestSelling";
import About from "./Components/About";
import Testimonial from "./Components/Testimonial";
import Footer from "./Components/Footer";
import Categories from "./Components/Categories";

function App() {
  return (
    <div className="App">
      <Header />
      <Banner />
      <BestSelling />
      <About />
      <Categories />
      <Testimonial />
      <Footer />
    </div>
  );
}

export default App;
