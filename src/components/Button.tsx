import React, { ReactNode, Children } from "react";
import { StyleSheet, Text } from "react-native";
import { RectButton } from "react-native-gesture-handler";
import useTheme from "@shopify/restyle/dist/hooks/useTheme";

export interface ButtonProps {
  label?: string;
  variant?: "default" | "primary" | "transparent";
  onPress: () => void;
  children?: ReactNode;
}

const Button = ({ label, variant, onPress, children }: ButtonProps) => {
  const { colors } = useTheme();
  const backgroundColor =
    variant === "primary"
      ? colors.primary
      : variant === "transparent"
      ? "transparent"
      : colors.default;
  const color = variant === "primary" ? colors.white : colors.button;
  return (
    <RectButton
      style={[styles.container, { backgroundColor }]}
      onPress={onPress}
    >
      {children ? (
        children
      ) : (
        <Text style={[styles.label, { color }]}>{label}</Text>
      )}
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
