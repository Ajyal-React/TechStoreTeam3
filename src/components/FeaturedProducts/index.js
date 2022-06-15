import SliderItem from "../SliderItem";
import {
  SliderSection,
  SliderTitle,
  SliderBigTitle,
  Slider,
  TopTitle,
} from "./index.style";
import { AiOutlineArrowRight } from "react-icons/ai";
import { useState } from "react";

const Featuredproducts = (props) => {
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
  return (
    <SliderSection>
      <TopTitle>
        <SliderTitle>Devices</SliderTitle>
        <SliderBigTitle>Featured products</SliderBigTitle>
      </TopTitle>

      <Slider>
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
    </SliderSection>
  );
};

export default Featuredproducts;
