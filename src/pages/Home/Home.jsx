import { HomeContainer } from "./Home.styled";
import Featuredproducts from "../../components/FeaturedProducts";
import OfferSection from "../../components/OfferSection";
import TrendingCards from "../../components/Trending/TrendingCards";
import Hero from "../../components/Hero/Hero";
import Footer from "../../components/Footer/Footer";
import Categories from "../../components/FeaturedCategories/Categories";

const Home = () => {
  return (
    <HomeContainer>
      <Hero />
      <Categories />
      <OfferSection />
      <Featuredproducts />
      <TrendingCards />
      <Footer />
    </HomeContainer>
  );
};

export default Home;
