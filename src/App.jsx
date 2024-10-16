import "./App.css";
import Header from "./components/Header/Header";
import HeroSection from "./components/Home/HeroSection";

function App() {
  return (
    <div className="">
      <div className="fixed top-0 left-0 w-full z-50">
        <Header />
      </div>
      <HeroSection />
    </div>
  );
}

export default App;
