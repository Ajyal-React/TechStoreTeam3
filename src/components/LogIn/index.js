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
  CustomizeForm,
  InputContainer,
  Icon,
} from "./index.style";

import { HiMail } from "react-icons/hi";
import { FaLock } from "react-icons/fa";
import { Fragment, useState } from "react";
import { Link } from "react-router-dom";
import { ErrorMessage, useFormik } from "formik";

const LogIn = () => {
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  /*   const [fieldValue, setFieldValue] = useState("");
   */ const [message, setMessage] = useState(false);
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
            <form
              style={{
                width: "100%",
                display: "flex",
                flexDirection: "column",
                justifyContent: "start",
                alignItems: "start",
              }}
              onSubmit={formik.handleSubmit}
            >
              <CustomizeForm>
                <InputContainer>
                  {/*  <Icon>
                    <HiMail style={{ color: "#B9B9B9" }} />
                  </Icon> */}

                  <input
                    style={{
                      width: "100%",
                      boxShadow: "0px 12px 20px #E0E0E0",
                      height: "100%",
                      paddingLeft: "30px",
                      marginBottom: "20px",
                      border: "none",
                      marginTop: "20px",
                      outline: "none",
                      "&:hover": {
                        borderLeft: "4px solid #ff0",
                      },
                    }}
                    id="email"
                    name="email"
                    type="email"
                    onChange={formik.handleChange}
                    onBlur={({ target: { values } }) => {
                      if (!formik.values.email) {
                        setMessage(true);
                        ErrorMessage.email = "Email address is required!";
                      } else if (
                        !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(
                          formik.values.email
                        )
                      ) {
                        setMessage(true);
                        ErrorMessage.email = "Invalid email address";
                      } else {
                        setMessage(false);
                      }
                    }}
                    value={formik.values.email}
                    placeholder="Email Address"
                    required
                  />
                </InputContainer>
                {message ? (
                  <span
                    style={{
                      color: "red",
                      fontSize: "14px",
                      marginRight: "250px",
                      marginTop: "5px",
                    }}
                  >
                    {ErrorMessage.email}
                  </span>
                ) : null}
                <InputContainer>
                  <Icon>
                    <FaLock style={{ color: "#B9B9B9" }} />
                  </Icon>
                  <input
                    style={{
                      width: "100%",
                      boxShadow: "0px 12px 20px #E0E0E0",
                      width: "100%",
                      height: "100%",
                      paddingLeft: "30px",
                      border: "none",
                      marginTop: "20px",
                      outline: "none",
                      "&:hover": {
                        borderLeft: "4px solid #eeeeee",
                      },
                    }}
                    id="password"
                    name="password"
                    type="password"
                    onChange={formik.handleChange}
                    value={formik.values.password}
                    placeholder="Password"
                    required
                  />
                </InputContainer>
                <LoginButton>
                  <button
                    style={{ border: "none", cursor: "pointer" }}
                    type="submit"
                  >
                    login <LoginIcon src="images/arrow.svg" />
                  </button>
                </LoginButton>
              </CustomizeForm>
            </form>
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
