import { Container } from "../../GlobalStyles";
import SingleSliderItem from "../SingleSliderItem/SingleSliderItem.jsx";
import { SliderContainer } from "../SingleSlider/SingleSlider.js";
import Slider from "react-slick";
import "./dots.css";

var settings = {
  dots: true,
  infinite: true,
  fade: true,
  autoplay: true,
  autoplaySpeed: 5000,
  pauseOnHover: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  dotsClass: "button__bar",
};

const SingleSlider = () => {
  const data = [
    {
      id: 1,
      title: "Samsung Galaxy S10",
      image: "./images/phone5.png",
      discount: "SALE -50%",
      discountPrice: "139.00$",
      price: "$99",
      brand: "Samsung",
    },
    {
      id: 2,
      title: "Pixel 6 Pro",
      image: "./images/phone1.png",
      discount: "SALE -90%",
      discountPrice: "500.00$",
      price: "$499",
      brand: "Google",
    },
    {
      id: 3,
      title: "Samsung Galaxy S10",
      image: "./images/phone5.png",
      discount: "SALE -50%",
      discountPrice: "139.00$",
      price: "$99",
      brand: "Samsung",
    },
    {
      id: 4,
      title: "Pixel 6 Pro",
      image: "./images/phone1.png",
      discount: "SALE -90%",
      discountPrice: "500.00$",
      price: "$499",
      brand: "Google",
    },
  ];

  return (
    <SliderContainer>
      <Container bg="#F9F8F8" radius="5px">
        <Slider {...settings}>
          {data.map((item) => (
            <SingleSliderItem itemData={item} key={item.id}/>
          ))}
        </Slider>
      </Container>
    </SliderContainer>
  );
};

export default SingleSlider;
