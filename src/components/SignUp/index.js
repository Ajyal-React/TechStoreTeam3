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
} from "../LogIn/index.style";
import "./index.style";
import { Link } from "react-router-dom";
import React from "react";
import { Formik, Form, useFormik } from "formik";
import * as yup from "yup";
import AuthServices from "../../api/AuthServices";

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
  const [formValues, setFormValues] = useState();

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
      confirmPassword: "",
    },
    onSubmit: (values) => {
      signUpAuthentication();
      alert(JSON.stringify(values, null, 2));
      console.log("values are", values);
    },
    validationSchema: { validate },
  });

  const signUpAuthentication = async (user) => {
    const res = await AuthServices.authSignUpPage(user);
    if (res?.isSuccess) {
      console.log("resp", res.data);
    } else {
      if (res?.isError) {
        console.log(res.errorMessage);
      }
    }
  };

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
              onSubmit={(values, actions) => {
                console.log(values);
                setFormValues(values);

                const timeOut = setTimeout(() => {
                  actions.setSubmitting(false);

                  clearTimeout(timeOut);
                }, 1000);
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
                      <Input
                        Type="email"
                        Name="email"
                        autoComplete="email"
                        onBlur={handleBlur}
                        onChange={handleChange}
                        placeHolder="JohnDoe@xxx.xx"
                      />
                      {errors.email ? (
                        <Msg>
                          <MsgText>{errors.email}</MsgText>{" "}
                        </Msg>
                      ) : null}

                      <Input
                        Type="password"
                        Name="password"
                        placeHolder=".........."
                        onChange={handleChange}
                        onBlur={handleBlur}
                      />
                      {errors.password ? (
                        <Msg>
                          <MsgText>{errors.password}</MsgText>{" "}
                        </Msg>
                      ) : null}

                      <Input
                        Type="password"
                        Name="confirmPassword"
                        placeHolder=".........."
                        onChange={handleChange}
                        onBlur={handleBlur}
                      />
                      {errors.confirmPassword ? (
                        <Msg>
                          <MsgText>{errors.confirmPassword}</MsgText>
                        </Msg>
                      ) : null}

                      <LoginButton
                        type="submit"
                        disabled={!isValid || isSubmitting}
                      >
                        {isSubmitting ? `...` : `Sign Up`}
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
