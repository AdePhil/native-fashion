import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import { AuthNavigationRoutes } from "../components/Navigation";

import Onboarding from "./Onboarding/Onboarding";
import Welcome from "./Welcome/Welcome";
import Login from "./Login";
import SignUp from "./SignUp";
import ForgotPassword from "./ForgotPassword";
import ConfirmPassword from "./ConfirmPassword";

const AuthenticationStack = createStackNavigator<AuthNavigationRoutes>();
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

export default AuthenticationNavigator;
