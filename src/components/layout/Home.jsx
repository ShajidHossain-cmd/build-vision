import About from "../pages/About";
import HeroSection from "../pages/HeroSection";
import Navbar from "../shared/NavBar";
const Home = () => {
  return (
    <div className="bg-[#e3ebd2]">
      <Navbar />
      <HeroSection />
      <About />
    </div>
  );
};
export default Home;
