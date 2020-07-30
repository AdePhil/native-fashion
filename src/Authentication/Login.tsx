import React, { useRef } from "react";
import * as Yup from "yup";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";

import { Box, Text } from "../theme";
import { StackNavigationProps, Routes } from "../components/AuthRoutes";

import Footer from "./components/Footer";
import TextInput from "./components/Forms/TextInput";
import CheckBox from "./components/Forms/Checkbox";
import Form from "./components/Forms/Form";
import SubmitButton from "./components/Forms/SubmitButton";
import Container from "./components/Container";

const LoginSchema = Yup.object().shape({
  password: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  email: Yup.string()
    .email("Invalid email")
    .min(2, "Too Short!")
    .required("Required"),
});

const Login = ({ navigation }: StackNavigationProps<Routes, "Login">) => {
  const passwordRef = useRef<typeof TextInput>(null);
  return (
    <Container
      pattern={0}
      rightRadius
      footer={
        <Footer
          onPress={() => navigation.push("SignUp")}
          text="Don’t have an account?"
          subText="Sign Up here"
        />
      }
    >
      <Box padding="xl">
        <Text textAlign="center" variant="title1" marginBottom="s">
          Welcome Back
        </Text>
        <Text textAlign="center" paddingBottom="m" color="body">
          Use your credentials below and login to your account
        </Text>

        <Form
          initialValues={{ email: "", password: "", remember: false }}
          validationSchema={LoginSchema}
          onSubmit={(values: object) => console.log("here", values)}
        >
          <Box marginVertical="m">
            <TextInput
              icon="mail"
              placeholder="Enter your email"
              name="email"
              autoCompleteType="email"
              returnKeyLabel="next"
              returnKeyType="next"
              onSubmitEditing={() => passwordRef.current?.focus()}
            />
          </Box>
          <Box marginVertical="m">
            <TextInput
              ref={passwordRef}
              icon="lock"
              placeholder="Enter your password"
              name="password"
              secureTextEntry
              autoCompleteType="password"
              returnKeyLabel="go"
              returnKeyType="go"
            />
          </Box>
          <Box
            flexDirection="row"
            alignItems="center"
            justifyContent="space-between"
            marginVertical="s"
          >
            <CheckBox label="Remember me" name="remember" />

            <TouchableWithoutFeedback
              onPress={() => navigation.push("ForgotPassword")}
            >
              <Text color="primary">Forgot Password</Text>
            </TouchableWithoutFeedback>
          </Box>
          <Box justifyContent="center" alignItems="center" marginVertical="xl">
            <SubmitButton variant="primary" label="Log into your account" />
          </Box>
        </Form>
      </Box>
    </Container>
  );
};

export default Login;
