import { HomeContainer } from "./Home.styled";
import { SingleSlider } from "../../components";
import Featuredproducts from "../../components/FeaturedProducts";
import OfferSection from "../../components/OfferSection";
// import Navbar from "../../components/Navbar/Navbar";
import Hero from '../../components/Hero/Hero'
import Navbar from "../../components/Navbar/Navbar";
const Home = () => {
  return (
    <HomeContainer>
      <Navbar/>
      <Hero/>
      <SingleSlider />
      <OfferSection />
      <Featuredproducts />
    </HomeContainer>
  );
};

export default Home;
