

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
    speed: 2000,
    slidesToShow: 4,
    slidesToScroll: 2,
    autoplay: true,
  };
  //Slick carousal settings ends here

  //Products list array starts here 

  const [Product] = useState([
    {
      id: "1",
      image: "Images/wristwatch.PNG",
      title: "Smart Watch",
      price: "$20",
      moreInfo: "moreInfo",
      arrowIcon: <AiOutlineArrowRight />,
    },
    {
      id: "2",

      image: "Images/controller.PNG",
      title: "Games Arm",
      price: "$20",
      moreInfo: "moreInfo",
      arrowIcon: <AiOutlineArrowRight />,
    },
    {
      id: "3",

      image: "images/laptop.PNG",
      title: "Mac Laptop",
      price: "$20",
      moreInfo: "moreInfo",
      arrowIcon: <AiOutlineArrowRight />,
    },
    {
      id: "4",

      image: "Images/bag.PNG",
      title: "Back Bag",
      price: "$20",
      moreInfo: "moreInfo",
      arrowIcon: <AiOutlineArrowRight />,
    },
    {
      id: "5",
      image: "Images/wristwatch.PNG",
      title: "Smart Watch",
      price: "$20",
      moreInfo: "moreInfo",
      arrowIcon: <AiOutlineArrowRight />,
    },
    {
      id: "6",

      image: "Images/controller.PNG",
      title: "Games Arm",
      price: "$20",
      moreInfo: "moreInfo",
      arrowIcon: <AiOutlineArrowRight />,
    },
    {
      id: "7",

      image: "images/laptop.PNG",
      title: "Mac Laptop",
      price: "$20",
      moreInfo: "moreInfo",
      arrowIcon: <AiOutlineArrowRight />,
    },
    {
      id: "8",

      image: "Images/bag.PNG",
      title: "Back Bag",
      price: "$20",
      moreInfo: "moreInfo",
      arrowIcon: <AiOutlineArrowRight />,
    },
  ]);
  //Products list array ends here 

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
              key={el.id}
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
