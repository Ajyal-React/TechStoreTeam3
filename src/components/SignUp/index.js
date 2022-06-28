import { Fragment, useEffect, useState } from "react";
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
  Input,
  Msg,
  MsgText,
  SuccessMsg,
  Icon,
  InputContainer,
} from "../LogIn/index.style";
import "./index.style";
import { Link } from "react-router-dom";
import React from "react";
import { Formik, Form, useFormik } from "formik";
import * as yup from "yup";
import { UserSignUpAction } from "../../redux/UserAuthRedux/ActionForUser";
import { useDispatch } from "react-redux";
import { HiMail } from "react-icons/hi";
import { FaLock } from "react-icons/fa";

const validate = yup.object().shape({
  email: yup
    .string()
    .email("The email is incorrect")
    .required("Please enter your email"),

  password: yup
    .string()
    .min(8, "please enter password loner than or equal 8 letters!")
    .required("Please enter your password"),

  confirmPassword: yup
    .string()
    .min(8, "please enter password loner than or equal 8 letters!")
    .required("Please enter your password")
    .oneOf([yup.ref("password")], "Your passwords do not match."),
});

const SignUp = () => {
  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
      confirmPassword: "",
    },
    onSubmit: (email, password, confirmPassword) => {
      dispatch(UserSignUpAction({ email, password, confirmPassword }));
    },
    validationSchema: { validate },
  });

  return (
    <Fragment>
      {/*Signup container starts here*/}
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
            <LoginText>Sign up</LoginText>
            {/*Formik starts here*/}
            <Formik
              initialValues={{
                email: "",
                password: "",
              }}
              validationSchema={validate}
              onSubmit={({ email, password, confirmPassword }, actions) => {
                dispatch(
                  UserSignUpAction({ email, password, confirmPassword })
                );
              }}
            >
              {({
                values,
                errors,
                touched,
                handleSubmit,
                isSubmitting,
                isValidating,
                handleBlur,
                isValid,
                handleChange,
              }) => {
                return (
                  <>
                    <Form onSubmit={handleSubmit}>
                      <InputContainer>
                        <Icon>
                          <HiMail />
                        </Icon>
                        <Input
                          Type="email"
                          Name="email"
                          autoComplete="email"
                          onBlur={handleBlur}
                          onChange={handleChange}
                          placeHolder="Email"
                          required
                        />

                        {errors.email ? (
                          <Msg>
                            <MsgText>{errors.email}</MsgText>
                          </Msg>
                        ) : null}
                      </InputContainer>

                     

                      <InputContainer>
                        <Icon>
                          <FaLock />
                        </Icon>
                        <Input
                          Type="password"
                          Name="password"
                          placeHolder="Password"
                          onChange={handleChange}
                          onBlur={handleBlur}
                          required
                        />

                        {errors.password ? (
                          <Msg>
                            <MsgText>{errors.password}</MsgText>{" "}
                          </Msg>
                        ) : null}
                      </InputContainer>


                      <InputContainer>
                        <Icon>
                          <FaLock />
                        </Icon>
                        <Input
                          Type="password"
                          Name="confirmPassword"
                          placeHolder="confirmPassword"
                          onChange={handleChange}
                          onBlur={handleBlur}
                          required
                        />

                        {errors.confirmPassword ? (
                          <Msg>
                            <MsgText>{errors.confirmPassword}</MsgText>{" "}
                          </Msg>
                        ) : null}
                      </InputContainer>
                    

                      <LoginButton
                        type="submit"
                        disabled={!isValid || isSubmitting}
                      > sign Up
                        {/* {isSubmitting ? `...` : `Sign Up`} */}
                        <LoginIcon src="images/arrow.svg" />
                      </LoginButton>
                    </Form>
                  </>
                );
              }}
            </Formik>
            {/*Formik ends here*/}
          </LoginForm>
          <QuestionSection>
            <Question>
              Already have an account?
              <BoldBlack href="#">
                <Link
                  to="/LogIn"
                  style={{
                    textDecoration: "none",
                    color: "#3b3b3b",
                    fontWeight: "bold",
                  }}
                >
                  Log In
                </Link>
              </BoldBlack>
            </Question>
          </QuestionSection>
        </FormSection>
        {/*Form section starts here*/}
        {/*Form section starts here*/}
      </Container>
      {/*Signup container ends here*/}
    </Fragment>
  );
};

export default SignUp;
