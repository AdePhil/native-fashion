import React from "react";
import * as Yup from "yup";

import { Box, Text } from "../theme";
import { StackNavigationProps, Routes } from "../components/AuthRoutes";

import Footer from "./components/Footer";
import TextInput from "./components/Forms/TextInput";
import Form from "./components/Forms/Form";
import SubmitButton from "./components/Forms/SubmitButton";
import Container from "./components/Container";

const ForgotPasswordSchema = Yup.object().shape({
  email: Yup.string()
    .email("Invalid email")
    .min(2, "Too Short!")
    .required("Required"),
});

const ForgotPassword = ({
  navigation,
}: StackNavigationProps<Routes, "ForgotPassword">) => {
  return (
    <Container
      pattern={2}
      rightRadius
      leftRadius
      footer={
        <Footer
          onPress={() => navigation.push("SignUp")}
          text="Forgot password?"
          subText="Reset password"
        />
      }
    >
      <Box padding="xl" justifyContent="center" flex={1} alignItems="center">
        <Box>
          <Text textAlign="center" variant="title1" marginBottom="s">
            Forgot password?
          </Text>
          <Text textAlign="center" paddingBottom="m" color="body">
            Enter the email address associated with your account
          </Text>

          <Form
            initialValues={{ email: "" }}
            validationSchema={ForgotPasswordSchema}
            onSubmit={(values: object) => {
              console.log("here", values);
              navigation.push("ConfirmPassword");
            }}
          >
            <Box marginVertical="m">
              <TextInput
                icon="mail"
                placeholder="Enter your email"
                name="email"
                autoCompleteType="email"
              />
            </Box>
            <Box
              justifyContent="center"
              alignItems="center"
              marginVertical="xl"
            >
              <SubmitButton variant="primary" label="Log into your account" />
            </Box>
          </Form>
        </Box>
      </Box>
    </Container>
  );
};

export default ForgotPassword;
