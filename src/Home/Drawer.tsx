import React from "react";
import { Dimensions, Image, StyleSheet } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

import theme, { Box, Theme, Text } from "../theme";
import RoundedIcon from "../components/RoundedIcon";

import DrawerItem from "./DrawerItem";

const { width } = Dimensions.get("window");

export const DRAWER_WIDTH = width * 0.8;
const aspectRatio = 750 / 1125;
const imageHeight = DRAWER_WIDTH * aspectRatio;

const items: {
  color: keyof Theme["colors"];
  icon: string;
  label: string;
  screen: string;
}[] = [
  {
    icon: "zap",
    label: "Outfit Ideas",
    screen: "OutfitIdeas",
    color: "primary",
  },
  {
    icon: "heart",
    label: "Favorite Outfits (26)",
    screen: "OutfitIdeas",
    color: "orange",
  },
  {
    icon: "user",
    label: "Edit Profile",
    screen: "OutfitIdeas",
    color: "yellow",
  },
  {
    icon: "clock",
    label: "Transaction History (8)",
    screen: "OutfitIdeas",
    color: "pink",
  },
  {
    icon: "settings",
    label: "Notifications Settings",
    screen: "OutfitIdeas",
    color: "purple",
  },
  {
    icon: "log-out",
    label: "Logout",
    screen: "OutfitIdeas",
    color: "black",
  },
];

const Drawer = () => {
  // const insets = useSafeAreaInsets();
  return (
    <Box flex={1}>
      <Box flex={0.2} backgroundColor="white">
        <Box
          position="absolute"
          top={0}
          bottom={0}
          left={0}
          right={0}
          borderBottomRightRadius="xl"
          backgroundColor="dark"
          flex={1}
          flexDirection="row"
          justifyContent="space-between"
          padding="m"
          style={{ paddingTop: 50 }}
        >
          <RoundedIcon
            size={24}
            name="x"
            color="white"
            backgroundColor="dark"
          />
          <Text color="white">My Profile</Text>
          <RoundedIcon
            size={24}
            name="shopping-bag"
            color="white"
            backgroundColor="dark"
          />
        </Box>
      </Box>
      <Box flex={0.8}>
        <Box backgroundColor="dark" flex={1} />
        <Box backgroundColor="primary" flex={1} />
        <Box
          position="absolute"
          top={0}
          bottom={0}
          left={0}
          right={0}
          borderTopLeftRadius="xl"
          borderBottomRightRadius="xl"
          backgroundColor="white"
        >
          <Box
            width={100}
            height={100}
            style={{
              borderRadius: 50,
              ...StyleSheet.absoluteFillObject,
              top: -50,
              left: DRAWER_WIDTH / 2 - 50,
            }}
            backgroundColor="primary"
            alignSelf="center"
          />
          <Box justifyContent="center" flex="1" padding="xl">
            <Box marginBottom="m">
              <Text variant="title1" textAlign="center">
                Mike Peter
              </Text>
              <Text variant="body" textAlign="center">
                mike@flexstudio.com
              </Text>
            </Box>
            {items.map((item) => (
              <DrawerItem key={item.color} iconRatio={0.4} {...item} />
            ))}
          </Box>
        </Box>
      </Box>
      <Box
        flex={0.2}
        backgroundColor="white"
        width={DRAWER_WIDTH}
        overflow="hidden"
        height={imageHeight * 0.6}
      >
        <Image
          source={require("../../assets/patterns/1.png")}
          style={{
            position: "absolute",
            left: 0,
            right: 0,
            top: -imageHeight * (1 - 0.61),
            height: imageHeight,
            borderTopLeftRadius: theme.borderRadii.xl,
          }}
        />
      </Box>
    </Box>
  );
};

export default Drawer;
