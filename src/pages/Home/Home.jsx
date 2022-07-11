import { HomeContainer } from "./Home.styled";
import Featuredproducts from "../../components/FeaturedProducts";
import OfferSection from "../../components/OfferSection";
import Hero from "../../components/Hero/Hero";
import Navbar from "../../components/Navbar/Navbar";
// import Footer from "../../components/Footer";
// import SingleSlider from "../../components/SingleSlider";
// import TrendingCards from "../../components/TrendingCards";

const Home = () => {
  return (
    <HomeContainer>
      <Navbar />
      <Hero />
      {/* <SingleSlider /> */}
      <OfferSection />
      <Featuredproducts />
      {/* <TrendingCards /> */}
      {/* <Footer /> */}
    </HomeContainer>
  );
};

export default Home;
