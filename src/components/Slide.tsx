import React from "react";
import { View, StyleSheet, Dimensions, Image } from "react-native";

import { Text } from "../theme";

const { width, height } = Dimensions.get("window");
interface SlideProps {
  title: string;
  right?: boolean;
  picture: number;
}

export const SLIDE_HEIGHT = 0.61 * height;

const Slider = ({ title, right, picture }: SlideProps) => {
  const transform = [
    {
      translateY: (SLIDE_HEIGHT - 100) / 2,
    },
    {
      translateX: right ? width / 2 - 50 : -width / 2 + 50,
    },
    { rotate: right ? "90deg" : "-90deg" },
  ];
  return (
    <View style={[styles.container, { width }]}>
      <View style={[{ ...StyleSheet.absoluteFillObject }, styles.underLay]}>
        <Image source={picture} style={styles.picture} />
      </View>
      <View style={[styles.titleContainer, { transform }]}>
        <Text variant="hero">{title}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    overflow: "hidden",
  },
  titleContainer: {
    height: 100,
    justifyContent: "center",
  },
  underLay: {},
  picture: {},
});

export default Slider;
