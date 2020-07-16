import React from "react";
import { View, StyleSheet, Text, Dimensions, Image } from "react-native";

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
        <Text style={styles.title}>{title}</Text>
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
  title: {
    fontSize: 80,
    lineHeight: 80,
    fontFamily: "SFProText-Bold",
    color: "white",
    textAlign: "center",
  },
  underLay: {
    // justifyContent: "flex-end",
  },
  picture: {
    // width: width * 0.5,
    // height: height * 0.5,
  },
});

export default Slider;
