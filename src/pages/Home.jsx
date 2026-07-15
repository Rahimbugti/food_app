import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import About from "../components/About";
import Qualities from "../components/Qualities";
import Menu from "../components/Menu";
import Team from "../components/Team";
import Reservation from "../components/Reservation";
import WhoAreWe from "../components/WhoAreWe";

const Home = () => {
  return (
    <>
      <Navbar />
      <HeroSection />
      <About />
      <Qualities />
      <Menu />
      <WhoAreWe />
      <Team />
      <Reservation />
    </>
  );
};

export default Home;