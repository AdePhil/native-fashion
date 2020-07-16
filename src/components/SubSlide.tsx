import React from "react";
import { View, StyleSheet, Text } from "react-native";

import Button from "./Button";

interface SubSlideProps {
  subTitle: string;
  description: string;
  last: boolean;
  onPress: () => void;
}

const SubSlide = ({ subTitle, description, last, onPress }: SubSlideProps) => {
  return (
    <View style={styles.container}>
      <Text style={styles.subTitle}>{subTitle}</Text>
      <Text style={styles.description}>{description}</Text>
      <Button
        label={last ? "Let's get started" : "Next"}
        variant={last ? "primary" : "default"}
        onPress={onPress}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
    padding: 18,
    paddingTop: 0,
  },
  subTitle: {
    fontFamily: "SFProText-Semibold",
    fontSize: 24,
    color: "#0c0d34",
  },
  description: {
    fontSize: 16,
    fontFamily: "SFProText-Regular",
    lineHeight: 24,
    textAlign: "center",
    marginVertical: 15,
  },
});

export default SubSlide;
