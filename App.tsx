import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { ThemeProvider } from "@shopify/restyle";
import { SafeAreaProvider } from "react-native-safe-area-context";

import { AppRoutes } from "./src/components/Navigation";
import theme from "./src/theme";
import LoadAssets from "./src/components/LoadAssets";
import AuthenticationNavigator from "./src/Authentication/AuthNAvigator";
import HomeDrawerNavigator from "./src/Home/HomeNavigator";

const fonts = {
  "SFProText-Bold": require("./assets/fonts/SF-Pro-Text-Bold.otf"),
  "SFProText-Semibold": require("./assets/fonts/SF-Pro-Text-Semibold.otf"),
  "SFProText-Regular": require("./assets/fonts/SF-Pro-Text-Regular.otf"),
};

const AppStack = createStackNavigator<AppRoutes>();

const AppNavigator = () => {
  return (
    <AppStack.Navigator headerMode="none">
      <AppStack.Screen
        name="Authentication"
        component={AuthenticationNavigator}
      />
      <AppStack.Screen name="Home" component={HomeDrawerNavigator} />
    </AppStack.Navigator>
  );
};

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <LoadAssets {...{ fonts }}>
        <SafeAreaProvider>
          <AppNavigator />
        </SafeAreaProvider>
      </LoadAssets>
    </ThemeProvider>
  );
}
