import React from "react";
import { Feather as Icon } from "@expo/vector-icons";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";
import { useField } from "formik";

import { Box, Text } from "../../../theme";

interface CheckboxProps {
  label: string;
  name: string;
}

const Checkbox = ({ label, name }: CheckboxProps) => {
  const [{ value: checked }, , { setValue }] = useField(name);
  const color = checked ? "primary" : "transparent";
  const border = checked ? "primary" : "darkGray";
  return (
    <TouchableWithoutFeedback onPress={() => setValue(!checked)}>
      <Box flexDirection="row" alignItems="center">
        <Box
          backgroundColor={color}
          borderColor={border}
          borderWidth={1}
          width={20}
          height={20}
          justifyContent="center"
          alignItems="center"
          borderRadius="sx"
          marginRight="s"
        >
          <Icon name="check" size={14} color="white" />
        </Box>
        <Text>{label}</Text>
      </Box>
    </TouchableWithoutFeedback>
  );
};

export default Checkbox;
