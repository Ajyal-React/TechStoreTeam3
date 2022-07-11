import {
  SliderSection,
  SliderTitle,
  SliderBigTitle,
  SliderContent,
  TopTitle,
} from "./index.style";
import SliderItem from "../SliderItem";
import Slider from "react-slick";
import Spinner from "../Spinner/Spinner";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProducts, rest } from "../../redux/actions/productsActions";
import "./style.css";
import "./arrow.css";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        width: "42px",
        height: "85px",
        background: "#FA7400",
        borderTopLeftRadius: "100px",
        borderBottomLeftRadius: "100px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
      onClick={onClick}
    >
      <img src="./images/arrow_slider.svg" alt="" />
    </div>
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        width: "42px",
        height: "85px",
        background: "#FA7400",
        borderTopRightRadius: "100px",
        borderBottomRightRadius: "100px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
      onClick={onClick}
    >
      <img src="./images/arrow_slider_left.svg" alt="" />
    </div>
  );
}

const Featuredproducts = () => {
  const [featuredProducts, setFeaturedProducts] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");
  const dispatch = useDispatch();
  const { data, isSuccuss, isLoading, error } = useSelector(
    (state) => state.productsReducer
  );

  useEffect(() => {
    dispatch(getProducts());
  }, []);

  useEffect(() => {
    if (isSuccuss) {
      setFeaturedProducts(data);
      dispatch(rest);
    }
  }, [data, isSuccuss, isLoading, error]);

  //Slick carousal settings starts here
  const settings = {
    dots: true,
    infinite: true,
    speed: 2000,
    slidesToShow: 4,
    slidesToScroll: 2,
    autoplay: true,
    dotsClass: "dots",
    arrows: true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <>
      {isLoading ? (
        <Spinner />
      ) : (
        featuredProducts?.length > 0 && (
          <SliderSection>
            <TopTitle>
              <SliderTitle>Devices</SliderTitle>
              <SliderBigTitle>Featured products</SliderBigTitle>
            </TopTitle>

            <SliderContent>
              <Slider {...settings}>
                {featuredProducts.map((el) => (
                  <SliderItem
                    key={el._id}
                    source={el.images}
                    title={el.name}
                    price={el.price}
                    id={el._id}
                  />
                ))}
              </Slider>
            </SliderContent>
          </SliderSection>
        )
      )}
    </>
  );
};

export default Featuredproducts;
