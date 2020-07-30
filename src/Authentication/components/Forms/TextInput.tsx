import React, { forwardRef, MutableRefObject } from "react";
import {
  StyleSheet,
  TextInput as Input,
  TextInputProps as InputProps,
} from "react-native";
import { Feather as Icon } from "@expo/vector-icons";
import useTheme from "@shopify/restyle/dist/hooks/useTheme";
import { useField } from "formik";

import { Box } from "../../../theme";
import colors from "../../../colors";

interface TextInputProps extends InputProps {
  icon: string;
  placeholder?: string;
  name: string;
  ref:
    | ((instance: Input | null) => void)
    | MutableRefObject<Input | null>
    | null;
}

const TextInput = forwardRef(
  ({ icon, name, ...props }: TextInputProps, ref) => {
    const theme = useTheme();
    const SIZE = theme.borderRadii.m * 2;
    const [field, meta] = useField(name);

    const { touched, error } = meta;
    const { onBlur, onChange, value } = field;

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
            ref={ref}
            underlineColorAndroid="transparent"
            placeholderTextColor={colors[color]}
            autoCapitalize="none"
            {...props}
            onChangeText={onChange(name)}
            onBlur={onBlur(name)}
            value={value}
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
  }
);

export default TextInput;
