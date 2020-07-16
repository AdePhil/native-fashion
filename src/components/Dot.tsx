import React from "react";
import { View, StyleSheet } from "react-native";
import Animated, { interpolate, Extrapolate } from "react-native-reanimated";

interface DotProps {
  index: number;
  currentIndex: Animated.Node<number>;
}
const Dot = ({ index, currentIndex }: DotProps) => {
  const opacity = interpolate(currentIndex, {
    inputRange: [index - 1, index, index + 1],
    outputRange: [0.5, 1, 0.5],
    extrapolate: Extrapolate.CLAMP,
  });
  const scale = interpolate(currentIndex, {
    inputRange: [index - 1, index, index + 1],
    outputRange: [1, 1.25, 1],
    extrapolate: Extrapolate.CLAMP,
  });
  return (
    <Animated.View
      style={[styles.container, { opacity, transform: [{ scale }] }]}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#2cb9b0",
    width: 10,
    height: 10,
    margin: 8,
    borderRadius: 5,
  },
});

export default Dot;
