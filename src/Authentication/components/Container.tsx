import React, { ReactNode } from "react";
import { Image, Dimensions, Platform, StyleSheet } from "react-native";
import { useTheme } from "@shopify/restyle";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import Constants from "expo-constants";

import { Box } from "../../theme";

const { width, height } = Dimensions.get("window");
const aspectRatio = 750 / 1125;
const imageHeight = width * aspectRatio;

interface ContainerProps {
  children: ReactNode;
  footer: ReactNode;
  rightRadius?: boolean;
  leftRadius?: boolean;
  pattern: 0 | 1 | 2 | 3;
}

const assets = [
  require("../../../assets/patterns/0.png"),
  require("../../../assets/patterns/1.png"),
  require("../../../assets/patterns/2.png"),
  require("../../../assets/patterns/3.png"),
];

const Container = ({
  children,
  footer,
  rightRadius,
  leftRadius,
  pattern,
}: ContainerProps) => {
  const insets = useSafeAreaInsets();
  const theme = useTheme();
  const asset = assets[pattern];
  return (
    <KeyboardAwareScrollView>
      <Box
        height={
          height + (Platform.OS === "android" ? Constants.statusBarHeight : 0)
        }
        backgroundColor="dark"
      >
        <Box backgroundColor="white">
          <Box
            borderBottomLeftRadius={rightRadius ? "xl" : "none"}
            borderBottomRightRadius={leftRadius ? "xl" : "none"}
            height={imageHeight * 0.61}
            overflow="hidden"
          >
            <Image
              source={asset}
              style={{
                width,
                height: imageHeight,
                resizeMode: "cover",
                borderBottomLeftRadius: rightRadius
                  ? theme.borderRadii.xl
                  : theme.borderRadii.none,
                borderBottomRightRadius: leftRadius
                  ? theme.borderRadii.xl
                  : theme.borderRadii.none,
              }}
            />
          </Box>
        </Box>
        <Box flex={1} backgroundColor="dark" overflow="hidden">
          <Image
            source={asset}
            style={{
              ...StyleSheet.absoluteFillObject,
              width,
              height: imageHeight,
              top: -0.61 * imageHeight,
            }}
          />
          <Box
            flex={1}
            backgroundColor="white"
            borderTopRightRadius={rightRadius ? "xl" : "none"}
            borderTopLeftRadius={leftRadius ? "xl" : "none"}
            borderBottomLeftRadius="xl"
            borderBottomRightRadius="xl"
          >
            {children}
          </Box>
        </Box>
        <Box backgroundColor="dark" paddingTop="m">
          {footer}
          <Box height={insets.bottom} />
        </Box>
      </Box>
    </KeyboardAwareScrollView>
  );
};

export default Container;
