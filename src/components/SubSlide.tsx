import React from "react";
import { View, StyleSheet } from "react-native";

import { Text } from "../theme";

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
      <Text variant="title2">{subTitle}</Text>
      <Text variant="body" style={styles.description}>
        {description}
      </Text>
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
  description: {
    textAlign: "center",
    marginVertical: 15,
  },
});

export default SubSlide;
