import { HomeContainer } from "./Home.styled";
import Featuredproducts from "../../components/FeaturedProducts";
import OfferSection from "../../components/OfferSection";
import TrendingCards from "../../components/Trending/TrendingCards";
import Hero from "../../components/Hero/Hero";
import Footer from "../../components/Footer/Footer";
import Categories from "../../components/FeaturedCategories/Categories";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../../redux/actions/productsActions";
import { getCategories } from "../../redux/actions/categoriesActions";

const Home = () => {
  const [featuredProducts, setFeaturedProducts] = useState([]);
  const [featuredCategories, setFeaturedCategories] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");
  const dispatch = useDispatch();
  const categories = useSelector((state) => state.categoriesReducer);
  const products = useSelector((state) => state.productsReducer);

  const getFeaturedCategories = async () => {
    // eslint-disable-next-line no-undef
    const res = await homeServices.getFeaturedCategories();
    if (res?.isSuccess) {
      setFeaturedCategories(res.data);
    } else if (res?.isError) {
      setErrorMessage(res.errorMessage);
    }
  };

  useEffect(() => {
    dispatch(getProducts());
    dispatch(getCategories());
  }, []);

  useEffect(() => {
    if (products.isSuccuss) {
      setFeaturedProducts(products.data);
    }
    if (categories.isSuccuss) {
      setFeaturedCategories(categories.data);
    }
  }, [
    categories.data,
    categories.isSuccuss,
    categories.error,
    products.data,
    products.isSuccuss,
    products.error,
  ]);

  return (
    <HomeContainer>
      <Hero />
      {/* {featuredProducts.length > 0 && (
        <Categories featuredCategories={featuredCategories} />
      )}
      <OfferSection />
      {featuredProducts.length > 0 && (
        <Featuredproducts featuredProducts={featuredProducts} />
      )} */}
      <TrendingCards />
      <Footer />
    </HomeContainer>
  );
};

export default Home;
