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
      {Featuredproducts.length > 0 && (
        // eslint-disable-next-line no-undef
        <Categories featuredCategories={featuredCategories} />
      )}
      <OfferSection />
      {Featuredproducts.length > 0 && (
        <Featuredproducts featuredProducts={Featuredproducts} />
      )}
      <TrendingCards />
      <Footer />
    </HomeContainer>
  );
};

export default Home;
