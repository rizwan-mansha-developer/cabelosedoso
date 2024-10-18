import "./App.css";
import Gallery from "./components/Gallery/Gallery";
import Header from "./components/Header/Header";
import About from "./components/Home/About/About";
import HeroSection from "./components/Home/HeroSection";
import OurServices from "./components/Home/OurServices/OurServices";
import Testimonials from "./components/Testimonials/Testimonials";

function App() {
  return (
    <div className="">
      <div className="fixed top-0 left-0 w-full z-50">
        <Header />
      </div>
      <HeroSection />
      <About />
      <OurServices />
      <Gallery />
      <Testimonials />
    </div>
  );
}

export default App;
