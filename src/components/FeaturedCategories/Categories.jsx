import React, { useState } from "react";
import { Link } from "react-router-dom";
import Card from "../Card";
import SingleSlider from "../SingleSlider/SingleSlider";
import {
  AllCard,
  Button2,
  Center,
  Container,
  ContainerCard,
  FlexBox,
  MainContainer,
  SliderDiv,
} from "./Categories.style";

function Categories({ featuredCategories }) {
  const [data, setData] = useState(
    featuredCategories.filter((item, index) => index !== 0)
  );
  return (
    <MainContainer>
      <ContainerCard>
        <Container>
          <TabCategory />
          <FlexBox>
            <AllCard>
              {data.map((item) => (
                <Card item={item} />
              ))}
            </AllCard>
            {/* <SliderDiv> */}
            <SingleSlider dataItems={featuredCategories[0]} />
            {/* </SliderDiv> */}
          </FlexBox>
          <Center>
          <Link to="/Category">
            <Button2 borderRadius="3px" bgColor="white" className="btn">
              View More Laptops
            </Button2>
            </Link>
          </Center>
        </Container>
      </ContainerCard>
    </MainContainer>
  );
}

export default Categories;
