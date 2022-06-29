import {
  ProductDetailsContainer,
  ImageDisplay,
  DetailsContent,
  DetailsColumn,
  RowGap,
  SmImageDisplay,
  SmImageBox,
  ProductTitle,
  SmText,
  Span,
  Select,
  Button,
} from "./ProductDetails.styled";
import { Navbar, RadioColor } from "../../components";
import { Divider } from "../../GlobalStyles";
import Footer from "../../components/Footer/Footer";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProductById, rest } from "../../redux/actions/productsActions";
import Spinner from "../../components/Spinner/Spinner";

const ProductDetails = () => {
  const [product, setProduct] = useState(null);
  const [imageIndex, setImageIndex] = useState(0);
  const [errorMessage, setErrorMessage] = useState("");
  const params = useParams();
  const dispatch = useDispatch();

  const { data, isSuccuss, isLoading, error } = useSelector(
    (state) => state.productsReducer
  );

  useEffect(() => {
    dispatch(getProductById(params.productId));
  }, []);

  useEffect(() => {
    if (data && isSuccuss) {
      setProduct(data);
      dispatch(rest);
    }
    if (!isSuccuss && error) {
      setErrorMessage(error);
      dispatch(rest);
    }
  }, [data, isSuccuss, isLoading, error]);

  const handleImageIndex = (index) => {
    setImageIndex(index);
  };

  return (
    <>
      {isLoading ? (
        <Spinner fill />
      ) : product !== null ? (
        <ProductDetailsContainer>
          <Navbar />
          <DetailsContent>
            <DetailsColumn>
              <ImageDisplay src={product?.images[imageIndex]} />
              <RowGap gap="13px">
                {product?.images?.map((item, index) => (
                  <SmImageBox
                    key={item}
                    onClick={() => handleImageIndex(index)}
                  >
                    <SmImageDisplay src={item} />
                  </SmImageBox>
                ))}
              </RowGap>
            </DetailsColumn>

            <DetailsColumn>
              <ProductTitle>{product?.name}</ProductTitle>
              <SmText color="#9B9A9A">{product?.description}</SmText>
              <SmText color="#707070" fz="20px" mt="10px">
                Availability in stock:{" "}
                {product?.countInStock > 0 ? (
                  <Span>Available</Span>
                ) : (
                  <Span red>Out of Stock</Span>
                )}
              </SmText>
              <Divider />
              <SmText fw="600" mt="25px">
                Choose your combination
              </SmText>
              <RowGap gap="40px">
                {product?.colors?.map((item) => (
                  <RadioColor key={item} id={item} c1={item[0]} c2={item[1]} />
                ))}
              </RowGap>
              <GetSelectOption
                title="Size and Weight"
                options={product?.size}
              />
              <GetSelectOption title="Chip" options={product?.chip} />
              <GetSelectOption title="Storage" options={product?.storage} />
              <GetSelectOption title="Memory" options={product?.memory} />
              <Button>Add To Cart</Button>
            </DetailsColumn>
          </DetailsContent>
          <Footer />
        </ProductDetailsContainer>
      ) : (
        <div>some thing bad happened {errorMessage}</div>
      )}
    </>
  );
};

export default ProductDetails;

const GetSelectOption = ({ title, options }) =>
  options &&
  options?.length !== 0 && (
    <>
      <SmText fw="600" mt="25px">
        {title}
      </SmText>
      <Select>
        {options.map((item) => (
          <option key={item} value={item}>
            {item}
          </option>
        ))}
      </Select>
    </>
  );
