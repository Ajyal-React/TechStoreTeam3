import { Fragment } from "react";
import {
  LeftSection,
  Container,
  Image,
  WelcomeText,
  DescText,
  ItalicText,
  LaptopImage,
  FormSection,
  LoginForm,
  LoginText,
  LoginButton,
  LoginIcon,
  Question,
  BoldBlack,
  QuestionSection,
} from "../LogIn/index.style";
import "./index.style";
import { Link } from "react-router-dom";

const SignUp = () => {
  return (
    <Fragment>
      {/*Login container starts here*/}
      <Container>
        {/*Left section starts here*/}
        <LeftSection>
          <Image src="images/logo.PNG"></Image>
          <WelcomeText>Get Started</WelcomeText>
          <DescText>
            Create a new account and start shopping NOW!
            <ItalicText>NOW</ItalicText>!
          </DescText>
          <LaptopImage source="images/LaptopLogin.svg"></LaptopImage>
        </LeftSection>
        {/*Left section ends here*/}

        {/*Form section starts here*/}
        <FormSection>
          <LoginForm>
            <LoginText>Sign Up</LoginText>

            <span
              style={{
                fontSize: "14px",
                textDecoration: "none",
                marginTop: "-40px",
                marginLeft: "425px",
                zIndex: "2",
              }}
            ></span>
            <LoginButton>
              Sign Up <LoginIcon src="images/arrow.svg" />
            </LoginButton>
          </LoginForm>
          <QuestionSection>
            <Question>
              Already member?
              <BoldBlack href="#">
                <Link
                  to="/login"
                  style={{
                    textDecoration: "none",
                    color: "#3b3b3b",
                    fontWeight: "bold",
                  }}
                >
                  Login
                </Link>
              </BoldBlack>
            </Question>
          </QuestionSection>
        </FormSection>

        {/*Form section starts here*/}
      </Container>
      {/*Login container ends here*/}
    </Fragment>
  );
};

export default SignUp;
