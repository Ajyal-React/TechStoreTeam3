import {
  SliderSection,
  SliderTitle,
  SliderBigTitle,
  SliderContent,
  TopTitle,
} from "./index.style";
import SliderItem from "../SliderItem";
import Slider from "react-slick";
import { AiOutlineArrowRight } from "react-icons/ai";
import { useState } from "react";

const Featuredproducts = (props) => {
  //Slick carousal settings starts here
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
  };
  //Slick carousal settings ends here

  //Products list array starts here starts here

  const [Product] = useState([
    {
      image: "Images/wristwatch.PNG",
      title: "Smart Watch",
      price: "$20",
      moreInfo: "moreInfo",
      arrowIcon: <AiOutlineArrowRight />,
    },
    {
      image: "Images/controller.PNG",
      title: "Games Arm",
      price: "$20",
      moreInfo: "moreInfo",
      arrowIcon: <AiOutlineArrowRight />,
    },
    {
      image: "images/laptop.PNG",
      title: "Mac Laptop",
      price: "$20",
      moreInfo: "moreInfo",
      arrowIcon: <AiOutlineArrowRight />,
    },
    {
      image: "Images/bag.PNG",
      title: "Back Bag",
      price: "$20",
      moreInfo: "moreInfo",
      arrowIcon: <AiOutlineArrowRight />,
    },
  ]);
  //Products list array ends here starts here

  return (
    <SliderSection>
      <TopTitle>
        <SliderTitle>Devices</SliderTitle>
        <SliderBigTitle>Featured products</SliderBigTitle>
      </TopTitle>

      <SliderContent>
        <Slider {...settings}>
          {Product.map((el) => (
            <SliderItem
              source={el.image}
              title={el.title}
              price={el.price}
              moreInfo={el.moreInfo}
              arrowIcon={el.arrowIcon}
            />
          ))}
        </Slider>
      </SliderContent>
    </SliderSection>
  );
};

export default Featuredproducts;
