import React from "react";
import { Feather as Icon } from "@expo/vector-icons";
import { RectButton } from "react-native-gesture-handler";

import { Box, Theme, Text } from "../theme";

interface RoundedIconProps {
  name: string;
  backgroundColor: keyof Theme["colors"];
  iconRatio?: number;
  color: keyof Theme["colors"];
  size: number;
  onPress?: () => void;
}

const RoundedIcon = ({
  name,
  backgroundColor,
  color,
  size,
  iconRatio = 0.7,
  onPress,
}: RoundedIconProps) => {
  const iconSize = size * iconRatio;

  return (
    <RectButton onPress={onPress}>
      <Box
        {...{ backgroundColor }}
        width={size}
        height={size}
        style={{ borderRadius: size / 2 }}
        justifyContent="center"
        alignItems="center"
      >
        <Text textAlign="center">
          <Icon name={name} color={color} size={iconSize} />
        </Text>
      </Box>
    </RectButton>
  );
};

export default RoundedIcon;
