import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { ThemeProvider } from "@shopify/restyle";
import { SafeAreaProvider } from "react-native-safe-area-context";

import { Routes } from "./src/components/AppRoutes";
import theme from "./src/theme";
import Onboarding from "./src/components/Onboarding";
import Welcome from "./src/components/Welcome";
import LoadAssets from "./src/components/LoadAssets";
import Login from "./src/components/Login";
import SignUp from "./src/components/SignUp";
import ForgotPassword from "./src/components/ForgotPassword";
import ConfirmPassword from "./src/components/ConfirmPassword";

const fonts = {
  "SFProText-Bold": require("./assets/fonts/SF-Pro-Text-Bold.otf"),
  "SFProText-Semibold": require("./assets/fonts/SF-Pro-Text-Semibold.otf"),
  "SFProText-Regular": require("./assets/fonts/SF-Pro-Text-Regular.otf"),
};

const AuthenticationStack = createStackNavigator<Routes>();
const AuthenticationNavigator = () => {
  return (
    <AuthenticationStack.Navigator headerMode="none" initialRouteName="SignUp">
      <AuthenticationStack.Screen name="Onboarding" component={Onboarding} />
      <AuthenticationStack.Screen name="Welcome" component={Welcome} />
      <AuthenticationStack.Screen name="Login" component={Login} />
      <AuthenticationStack.Screen name="SignUp" component={SignUp} />
      <AuthenticationStack.Screen
        name="ForgotPassword"
        component={ForgotPassword}
      />
      <AuthenticationStack.Screen
        name="ConfirmPassword"
        component={ConfirmPassword}
      />
    </AuthenticationStack.Navigator>
  );
};
export default function App() {
  return (
    <LoadAssets {...{ fonts }}>
      <ThemeProvider theme={theme}>
        <SafeAreaProvider>
          <AuthenticationNavigator />
        </SafeAreaProvider>
      </ThemeProvider>
    </LoadAssets>
  );
}
