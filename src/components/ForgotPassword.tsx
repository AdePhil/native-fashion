import React from "react";
import * as Yup from "yup";

import { Box, Text } from "../theme";

import Container from "./Container";
import Footer from "./Footer";
import TextInput from "./Forms/TextInput";
import Form from "./Forms/Form";
import { StackNavigationProps, Routes } from "./AppRoutes";
import SubmitButton from "./Forms/SubmitButton";

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
