import React, { useRef } from "react";
import * as Yup from "yup";

import { Box, Text } from "../theme";

import Container from "./Container";
import Footer from "./Footer";
import TextInput from "./Forms/TextInput";
import Form from "./Forms/Form";
import SubmitButton from "./Forms/SubmitButton";
import { StackNavigationProps, Routes } from "./AppRoutes";

interface SignUpProps {}

const SignUpSchema = Yup.object().shape({
  password: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password"), undefined])
    .required("Password confirm is required"),
  email: Yup.string()
    .email("Invalid email")
    .min(2, "Too Short!")
    .required("Required"),
});

const SignUp = ({ navigation }: StackNavigationProps<Routes, "SignUp">) => {
  const passwordRef = useRef<typeof TextInput>(null);
  const confirmPasswordRef = useRef<typeof TextInput>(null);
  return (
    <Container
      leftRadius
      footer={
        <Footer
          onPress={() => navigation.navigate("Login")}
          text="Already have an account?"
          subText="Login here"
        />
      }
    >
      <Box padding="xl">
        <Text variant="title1" textAlign="center">
          Create Account
        </Text>
        <Text textAlign="center" paddingBottom="l" color="body">
          Let’s us know what your name, email, and your password
        </Text>
        <Form
          initialValues={{ email: "", password: "", confirmPassword: "" }}
          onSubmit={(values) => console.log(values)}
          validationSchema={SignUpSchema}
        >
          <Box marginVertical="m">
            <TextInput
              icon="mail"
              name="email"
              placeholder="Enter your email"
              returnKeyLabel="next"
              returnKeyType="next"
              onSubmitEditing={() => passwordRef.current?.focus()}
            />
          </Box>
          <Box marginVertical="m">
            <TextInput
              icon="lock"
              name="password"
              placeholder="Enter your password"
              secureTextEntry
              returnKeyLabel="next"
              returnKeyType="next"
              ref={passwordRef}
              onSubmitEditing={() => confirmPasswordRef.current?.focus()}
            />
          </Box>
          <Box marginVertical="m">
            <TextInput
              icon="lock"
              name="confirmPassword"
              placeholder="Confirm  password"
              secureTextEntry
              ref={confirmPasswordRef}
            />
          </Box>
          <Box justifyContent="center" alignItems="center" marginVertical="xl">
            <SubmitButton variant="primary" label="Create Account" />
          </Box>
        </Form>
      </Box>
    </Container>
  );
};

export default SignUp;
