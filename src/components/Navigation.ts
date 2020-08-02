import { RouteProp, CompositeNavigationProp } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { DrawerNavigationProp } from "@react-navigation/drawer";

// export interface StackNavigationProps<
//   ParamList extends ParamListBase,
//   RouteName extends keyof ParamList = string
// > {
//   navigation: StackNavigationProp<ParamList, RouteName>;
//   route: RouteProp<ParamList, RouteName>;
// }

export interface AuthNavigationProps<
  RouteName extends keyof AuthNavigationRoutes
> {
  navigation: CompositeNavigationProp<
    StackNavigationProp<AuthNavigationRoutes, RouteName>,
    DrawerNavigationProp<AppRoutes, "Home">
  >;
  route: RouteProp<AuthNavigationRoutes, RouteName>;
}

export type AuthNavigationRoutes = {
  Onboarding: undefined;
  Welcome: undefined;
  Login: undefined;
  SignUp: undefined;
  ForgotPassword: undefined;
  ConfirmPassword: undefined;
};

export type AppRoutes = {
  Home: undefined;
  Authentication: undefined;
};

export type HomeRoutes = {
  OutfitIdeas: undefined;
};
