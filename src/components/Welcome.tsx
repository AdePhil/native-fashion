import React from "react";
import { StyleSheet, Image } from "react-native";

import { Box, Text } from "../theme";

import Button from "./Button";
import { StackNavigationProps, Routes } from "./AppRoutes";

const Welcome = ({ navigation }: StackNavigationProps<Routes, "Welcome">) => {
  return (
    <Box flex={1} backgroundColor="white">
      <Box
        borderBottomRightRadius="xl"
        flex={1}
        backgroundColor="default"
        alignItems="center"
        justifyContent="flex-start"
        overflow="hidden"
      >
        <Image source={require("../../assets/5.png")} />
      </Box>
      <Box borderTopLeftRadius="xl" flex={1}>
        <Box
          backgroundColor="default"
          position="absolute"
          top={0}
          right={0}
          bottom={0}
          left={0}
        />
        <Box
          backgroundColor="white"
          flex={1}
          borderTopLeftRadius="xl"
          justifyContent="space-evenly"
          alignItems="center"
          padding="xl"
        >
          <Text variant="title2">Let's get started</Text>
          <Text variant="body" textAlign="center">
            Login to your account below or signup for an amazing experience{" "}
          </Text>
          <Button
            variant="primary"
            label="Have an account? Login"
            onPress={() => {
              navigation.push("Login");
            }}
          />
          <Button
            label="Join us it's free"
            onPress={() => {
              navigation.push("SignUp");
            }}
          />
          <Button
            variant="transparent"
            label="Forgot Password"
            onPress={() => {
              navigation.push("ForgotPassword");
            }}
          />
        </Box>
      </Box>
    </Box>
  );
};

export default Welcome;
