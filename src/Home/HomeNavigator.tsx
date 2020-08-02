import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";

import { HomeRoutes } from "../components/Navigation";

import OutfitIdeas from "./OutfitIdeas";
import Drawer, { DRAWER_WIDTH } from "./Drawer";

const HomeDrawer = createDrawerNavigator<HomeRoutes>();

const HomeDrawerNavigator = () => {
  return (
    <HomeDrawer.Navigator
      drawerContent={Drawer}
      drawerStyle={{ width: DRAWER_WIDTH }}
    >
      <HomeDrawer.Screen name="OutfitIdeas" component={OutfitIdeas} />
    </HomeDrawer.Navigator>
  );
};

export default HomeDrawerNavigator;
