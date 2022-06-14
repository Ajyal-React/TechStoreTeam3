import { FlexContainer, Container, Title, Text } from "../../GlobalStyles";
import { FiLogIn } from "react-icons/fi";

import {
  ImageContainer,
  TextBorderLift,
  Input,
  SignInBtn,
} from "./Login.style";
const Login = () => {
  return (
    <FlexContainer h="100vh" w="100%">
      <FlexContainer
        w="35%"
        h="100vh"
        bg="#FA7400"
        direction="column"
        justify="center"
        align="center"
      >
        <FlexContainer direction="column" justify="space-between" h="20%">
          <img src="./images/logo.png" alt="" />
          <Title fontSize="23px" color="#fff">
            Get Started
          </Title>
          <Text color="#fff">
            Create a new account and start {<br />} shopping NOW!
          </Text>
        </FlexContainer>

        <ImageContainer src="./images/login_image.png" />
      </FlexContainer>
      <FlexContainer w="70%" h="100vh" justify="center" align="center">
        <FlexContainer direction="column" justify="center">
          <TextBorderLift>sign up</TextBorderLift>
          <Input placeholder="Email" />
          <Input placeholder="Password" />
          <Input placeholder="Confirm Password" />
          <SignInBtn>SignIn <FiLogIn /></SignInBtn>
        </FlexContainer>
      </FlexContainer>
    </FlexContainer>
  );
};

export default Login;
