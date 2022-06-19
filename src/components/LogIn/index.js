import "./index.style";
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
} from "./index.style";

/* import { HiMail } from "react-icons/hi"; */
import { Fragment } from "react";
import { Link } from "react-router-dom";

const LogIn = () => {
  return (
    <Fragment>
      {/*Login container starts here*/}
      <Container>
        {/*Left section starts here*/}
        <LeftSection>
          <Image src="images/logo.PNG"></Image>
          <WelcomeText>Welcome Back!</WelcomeText>
          <DescText>
            Login to your account and start your shopping
            <ItalicText>NOW</ItalicText>!
          </DescText>
          <LaptopImage source="images/LaptopLogin.svg"></LaptopImage>
        </LeftSection>
        {/*Left section ends here*/}

        {/*Form section starts here*/}
        <FormSection>
          <LoginForm>
            <LoginText>login</LoginText>

            <span
              style={{
                fontSize: "14px",
                textDecoration: "none",
                marginTop: "-40px",
                marginLeft: "425px",
                zIndex: "2",
              }}
            >
              <a
                style={{
                  color: "#22B9FF",
                  textDecoration: "none",
                  backgroundColor: "trasnparent",
                  fontWeight: "bold",
                  fontSize: "12px",
                }}
                href="\#"
              >
                FORGET?
              </a>
            </span>
            <LoginButton>
              login <LoginIcon src="images/arrow.svg" />
            </LoginButton>
          </LoginForm>
          <QuestionSection>
            <Question>
              Don't have account?
              <BoldBlack href="#">
                <Link
                  to="/signup"
                  style={{
                    textDecoration: "none",
                    color: "#3b3b3b",
                    fontWeight: "bold",
                  }}
                >
                  Sgin up
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

export default LogIn;
