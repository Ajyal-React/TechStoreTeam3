import { HomeContainer } from "./Home.styled";
import { SingleSlider } from "../../components";
import Featuredproducts from "../../components/FeaturedProducts";
import OfferSection from "../../components/OfferSection";
// import Navbar from "../../components/Navbar/Navbar";
import Hero from '../../components/Hero/Hero'
const Home = () => {
  return (
    <HomeContainer>
      <Hero/>
      <SingleSlider />
      <OfferSection />
      <Featuredproducts />
    </HomeContainer>
  );
};

export default Home;
