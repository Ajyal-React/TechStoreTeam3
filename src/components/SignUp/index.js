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
  Input,
  LoginButton,
  LoginIcon,
  Question,
  BoldBlack,
  QuestionSection,
} from "../LogIn/index.style";
import "./index.style";
import { TextField } from "@mui/material";
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
            {/*  <Input
              label="Filled"
              variant="filled"
              placeHolder="Email"
              Name="email"
              Type="email"
            />
            <Input Name="email" Type="password" /> */}
            <TextField
              focused
              id="filled-basic"
              label="&#9993; Email"
              variant="filled"
              sx={{
                width: "70%",
                backgroundColor: "#FFFFFF",
                boxShadow: "10px 12px 20px #000000 0.8;",
                border: "none",
                marginBottom: "18px",
                "&:focus": {
                  outline: "none !important",
                  borderColor: "#719ECE",
                  boxShadow: "0 0 10px #719ECE",
                  borderLeft: "5px solid #ff0",
                },
              }}
              placeholder="&#9993; Email"
              type="email"
              //To direct the user start filling the fields without needing click on the field by mouse
              inputProps={{ autoFocus: true }}
            />
            <TextField
              id="filled-basic"
              label="&#9993; Password"
              variant="filled"
              sx={{
                marginBottom: "18px",
                width: "70%",
                backgroundColor: "#FFFFFF",
                boxShadow: "0 0 10px #719ECE 0.8;",
                border: "none",
                "&:focus ": {
                  outline: "none !important",
                  borderColor: "#719ECE",
                  borderLeft: "5px solid #F6921E",
                },
              }}
              placeholder="&#9993; Password"
              type="password"
            />
            <TextField
              id="filled-basic"
              label="&#9993; Confirm Password"
              variant="filled"
              sx={{
                width: "70%",
                backgroundColor: "#FFFFFF",
                boxShadow: "0 0 10px #719ECE 0.8;",
                border: "none",
                "&:focus ": {
                  outline: "none !important",
                  borderColor: "#719ECE",
                  borderLeft: "5px solid #F6921E",
                },
              }}
              placeholder="&#9993; Confirm Password"
              type="password"
            />
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
