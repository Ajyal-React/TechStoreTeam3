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
  Input,
  Icon,
  Msg,
  MsgText,
} from "./index.style";

import { HiMail } from "react-icons/hi";
import { FaLock } from "react-icons/fa";
import { Fragment, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import React from "react";
import { Formik, Form, useFormik } from "formik";
import * as yup from "yup";
import axios from "axios";
import AuthServices from "../../api/AuthServices";
import { useDispatch } from "react-redux";
import { UserLoginAction } from "../../redux/UserAuthRedux/ActionForUser";

const validate = yup.object().shape({
  email: yup
    .string()
    .email("The email is incorrect")
    .required("Please enter your email"),

  password: yup
    .string()
    .min(8, "please enter password loner than or equal 8 letters!")
    .required("Please enter your password"),
});

const LogIn = () => {
  const dispatch = useDispatch();
  /* const [formValues, setFormValues] = useState(); */

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
            {/*Formik starts here*/}
            <Formik
              initialValues={{
                email: "a@gmail.com",
                password: "a@gmail.com",
              }}
              validationSchema={validate}
              onSubmit={({ email, password }) => {
                dispatch(UserLoginAction({ email, password }));
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
                    <Form name="contact" method="post" onSubmit={handleSubmit}>
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

                      <LoginButton
                        type="submit"
                        disabled={!isValid || isSubmitting}
                      >
                        Login
                        {/*  {isSubmitting ? `...` : `login`} */}
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
