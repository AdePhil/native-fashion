import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { ThemeProvider } from "@shopify/restyle";

import { Routes } from "./src/components/AppRoutes";
import theme from "./src/theme";
import Onboarding from "./src/components/Onboarding";
import Welcome from "./src/components/Welcome";
import LoadAssets from "./src/components/LoadAssets";

const fonts = {
  "SFProText-Bold": require("./assets/fonts/SF-Pro-Text-Bold.otf"),
  "SFProText-Semibold": require("./assets/fonts/SF-Pro-Text-Semibold.otf"),
  "SFProText-Regular": require("./assets/fonts/SF-Pro-Text-Regular.otf"),
};

const AuthenticationStack = createStackNavigator<Routes>();
const AuthenticationNavigator = () => {
  return (
    <AuthenticationStack.Navigator
      headerMode="none"
      initialRouteName="Onboarding"
    >
      <AuthenticationStack.Screen name="Onboarding" component={Onboarding} />
      <AuthenticationStack.Screen name="Welcome" component={Welcome} />
    </AuthenticationStack.Navigator>
  );
};
export default function App() {
  return (
    <LoadAssets {...{ fonts }}>
      <ThemeProvider theme={theme}>
        <AuthenticationNavigator />
      </ThemeProvider>
    </LoadAssets>
  );
}
