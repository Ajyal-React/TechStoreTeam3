import { useEffect, useState } from "react";
import TabCategory from ".";
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
import Spinner from "../Spinner/Spinner";
import { getCategories } from "../../redux/actions/categoriesActions";
import { useDispatch, useSelector } from "react-redux";

function Categories() {
  const [featuredCategories, setFeaturedCategories] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");
  const dispatch = useDispatch();

  const { data, isSuccuss, isLoading, error } = useSelector(
    (state) => state.categoriesReducer
  );

  useEffect(() => {
    if (isSuccuss) {
      setFeaturedCategories(data);
    }
  }, [data, isSuccuss, isLoading, error]);

  useEffect(() => {
    dispatch(getCategories());
  }, []);

  return (
    <MainContainer>
      {isLoading ? (
        <Spinner />
      ) : (
        featuredCategories.length > 0 && (
          <ContainerCard>
            <Container>
              <TabCategory />
              <FlexBox>
                <AllCard>
                  <Card img="phone4" />
                  <Card img="phone3" />
                  <Card img="phone3" />
                  <Card img="phone4" />
                </AllCard>
                {/* <SliderDiv> */}
                <SingleSlider dataItems={featuredCategories[0]} />
                {/* </SliderDiv> */}
              </FlexBox>
              <Center>
                <Button2 borderRadius="3px" bgColor="white" className="btn">
                  View More Laptops
                </Button2>
              </Center>
            </Container>
          </ContainerCard>
        )
      )}
    </MainContainer>
  );
}

export default Categories;
