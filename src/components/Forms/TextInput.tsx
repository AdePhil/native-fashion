import React, { useState } from "react";
import {
  StyleSheet,
  TextInput as Input,
  TextInputProps as InputProps,
} from "react-native";
import { Feather as Icon } from "@expo/vector-icons";
import useTheme from "@shopify/restyle/dist/hooks/useTheme";

import { Box } from "../../theme";
import colors from "../../colors";

interface TextInputProps extends InputProps {
  icon: string;
  placeholder?: string;
  error?: string;
  touched?: boolean;
}

const TextInput = ({ icon, touched, error, ...props }: TextInputProps) => {
  const theme = useTheme();
  const SIZE = theme.borderRadii.m * 2;
  const color = !touched ? "darkGray" : !error ? "primary" : "danger";

  return (
    <Box
      flexDirection="row"
      alignItems="center"
      height={48}
      borderWidth={StyleSheet.hairlineWidth}
      borderColor={color}
      padding="m"
      borderRadius="s"
    >
      <Icon name={icon} size={16} color={colors[color]} />
      <Box flex={1} marginHorizontal="s">
        <Input
          underlineColorAndroid="transparent"
          placeholderTextColor={colors[color]}
          {...props}
        />
      </Box>
      {touched && (
        <Box
          borderRadius="m"
          height={SIZE}
          width={SIZE}
          backgroundColor={color}
          justifyContent="center"
          alignItems="center"
        >
          <Icon name={!error ? "check" : "x"} size={11} color="#fff" />
        </Box>
      )}
    </Box>
  );
};

export default TextInput;
