import React from "react";
import { Feather as Icon } from "@expo/vector-icons";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";

import { Box, Text } from "../theme";
interface CloseButtonProps {
  onPress?: () => void;
}
const SIZE = 60;
const CloseButton = ({ onPress }: CloseButtonProps) => {
  return (
    <TouchableWithoutFeedback {...{ onPress }}>
      <Box
        width={SIZE}
        height={SIZE}
        justifyContent="center"
        alignItems="center"
        backgroundColor="white"
        style={{ borderRadius: SIZE / 2 }}
      >
        <Text color="dark" textAlign="center">
          <Icon name="x" size={40} />
        </Text>
      </Box>
    </TouchableWithoutFeedback>
  );
};

export default CloseButton;
