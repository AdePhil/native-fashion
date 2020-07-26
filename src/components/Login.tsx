import React from "react";
import { Formik } from "formik";
import * as Yup from "yup";

import { Box, Text } from "../theme";

import Container from "./Container";
import SocialLogin from "./SocialLogin";
import Button from "./Button";
import TextInput from "./Forms/TextInput";
import CheckBox from "./Forms/Checkbox";

const LoginSchema = Yup.object().shape({
  password: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  email: Yup.string().email("Invalid email").required("Required"),
});

const Footer = () => (
  <>
    <SocialLogin />
    <Box alignItems="center">
      <Button onPress={() => {}} variant="transparent">
        <Box flexDirection="row" alignItems="center">
          <Text color="white" textAlign="center">
            Don’t have an account?
          </Text>
          <Text color="primary" textAlign="center">
            Sign Up here
          </Text>
        </Box>
      </Button>
    </Box>
  </>
);

const Login = () => {
  return (
    <Container footer={<Footer />}>
      <Box padding="xl">
        <Text textAlign="center" variant="title1" marginBottom="s">
          Welcome Back
        </Text>
        <Text variant="body" textAlign="center">
          Use your credentials below and login to your account
        </Text>

        <Formik
          initialValues={{ email: "", password: "", remember: false }}
          validationSchema={LoginSchema}
          onSubmit={(values) => console.log("here", values)}
        >
          {({
            handleChange,
            handleBlur,
            handleSubmit,
            setFieldValue,
            values,
            errors,
            touched,
          }) => (
            <>
              <Box marginVertical="m">
                <TextInput
                  icon="mail"
                  placeholder="Enter your email"
                  onChangeText={handleChange("email")}
                  onBlur={handleBlur("email")}
                  error={errors.email}
                  touched={touched.email}
                  value={values.email}
                />
              </Box>
              <Box marginVertical="m">
                <TextInput
                  icon="lock"
                  placeholder="Enter your password"
                  onChangeText={handleChange("password")}
                  onBlur={handleBlur("password")}
                  error={errors.password}
                  touched={touched.password}
                  value={values.password}
                  secureTextEntry
                />
              </Box>
              <Box
                flexDirection="row"
                alignItems="center"
                justifyContent="space-between"
              >
                <CheckBox
                  label="Remember me"
                  checked={values.remember}
                  onChange={() => setFieldValue("remember", !values.remember)}
                />

                <Text color="primary">Forgot Password</Text>
              </Box>
              <Box
                justifyContent="center"
                alignItems="center"
                marginVertical="xl"
              >
                <Button
                  variant="primary"
                  label="Log into your account"
                  onPress={handleSubmit}
                />
              </Box>
            </>
          )}
        </Formik>
      </Box>
    </Container>
  );
};

export default Login;
