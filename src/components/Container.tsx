import React, { ReactNode } from "react";
import { Image, Dimensions, StatusBar } from "react-native";
import { useTheme } from "@shopify/restyle";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

import { Box } from "../theme";

const { width } = Dimensions.get("window");

interface ContainerProps {
  children: ReactNode;
  footer: ReactNode;
}

const assets = [require("../../assets/patterns/1.png")];

const Container = ({ children, footer }: ContainerProps) => {
  const insets = useSafeAreaInsets();
  const theme = useTheme();
  return (
    <Box flex={1} backgroundColor="dark">
      <StatusBar barStyle="light-content" />
      <Box backgroundColor="white">
        <Box borderBottomLeftRadius="xl">
          <Image
            source={assets[0]}
            style={{
              width,
              resizeMode: "cover",
              borderBottomLeftRadius: theme.borderRadii.xl,
            }}
          />
        </Box>
      </Box>
      <Box flex={1}>
        <Box position="absolute" top={0} right={0}>
          <Image
            source={assets[0]}
            style={{
              width,
              resizeMode: "cover",
            }}
          />
        </Box>
        <Box
          flex={1}
          backgroundColor="white"
          borderTopRightRadius="xl"
          borderBottomLeftRadius="xl"
          borderBottomRightRadius="xl"
        >
          <KeyboardAwareScrollView>{children}</KeyboardAwareScrollView>
        </Box>
      </Box>
      <Box backgroundColor="dark" paddingTop="m">
        {footer}
        <Box height={insets.bottom} />
      </Box>
    </Box>
  );
};

export default Container;
