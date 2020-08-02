import React from "react";
import { RectButton } from "react-native-gesture-handler";
import { useTheme } from "@shopify/restyle";

import { Theme, Box, Text } from "../theme";
import RoundedIcon from "../components/RoundedIcon";

interface DrawerItemProps {
  icon: string;
  color: keyof Theme["colors"];
  screen: string;
  label: string;
  iconRatio: number;
}

const DrawerItem = ({
  icon,
  label,
  screen,
  color,
  iconRatio,
}: DrawerItemProps) => {
  const theme = useTheme();
  return (
    <RectButton style={{ borderRadius: theme.borderRadii.m }}>
      <Box flexDirection="row" alignItems="center" padding="m">
        <RoundedIcon
          name={icon}
          backgroundColor={color}
          size={30}
          color="white"
          iconRatio={iconRatio}
        />
        <Text marginLeft="s">{label}</Text>
      </Box>
    </RectButton>
  );
};

export default DrawerItem;
