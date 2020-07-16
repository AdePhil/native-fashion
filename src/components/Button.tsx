import React from "react";
import { StyleSheet, Text } from "react-native";
import { RectButton } from "react-native-gesture-handler";
import useTheme from "@shopify/restyle/dist/hooks/useTheme";

interface ButtonProps {
  label: string;
  variant?: "default" | "primary";
  onPress: () => void;
}

const Button = ({ label, variant, onPress }: ButtonProps) => {
  const { colors } = useTheme();
  const backgroundColor =
    variant === "primary" ? colors.primary : colors.default;
  const color = variant === "primary" ? colors.white : colors.dark;
  return (
    <RectButton
      style={[styles.container, { backgroundColor }]}
      onPress={onPress}
    >
      <Text style={[styles.label, { color }]}>{label}</Text>
    </RectButton>
  );
};

Button.defaultProps = {
  variant: "default",
};
const styles = StyleSheet.create({
  container: {
    borderRadius: 25,
    height: 50,
    paddingHorizontal: 20,
    width: 245,
    justifyContent: "center",
    alignItems: "center",
  },
  label: {
    fontSize: 15,
    fontFamily: "SFProText-Regular",
    textAlign: "center",
  },
});

export default Button;
